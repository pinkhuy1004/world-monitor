/**
 * ListClimateNews RPC -- reads seeded climate news data from Railway seed cache.
 * If Redis is empty (e.g. local dev), falls back to live RSS fetching.
 */

import type {
  ClimateServiceHandler,
  ServerContext,
  ListClimateNewsRequest,
  ListClimateNewsResponse,
  ClimateNewsItem,
} from '../../../../src/generated/server/worldmonitor/climate/v1/service_server';

import { getCachedJson } from '../../../_shared/redis';
import { CLIMATE_NEWS_KEY } from '../../../_shared/cache-keys';
import { CHROME_UA } from '../../../_shared/constants';

const FEEDS = [
  { sourceName: 'Carbon Brief', url: 'https://www.carbonbrief.org/feed' },
  { sourceName: 'The Guardian Environment', url: 'https://www.theguardian.com/environment/climate-crisis/rss' },
  { sourceName: 'NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/feeds/earth-observatory.rss' },
  { sourceName: 'UNEP', url: 'https://www.unep.org/rss.xml' },
  { sourceName: 'Phys.org Earth Science', url: 'https://phys.org/rss-feed/earth-news/earth-sciences/' },
  { sourceName: 'Copernicus Climate', url: 'https://climate.copernicus.eu/rss.xml' },
  { sourceName: 'Inside Climate News', url: 'https://insideclimatenews.org/feed/' },
  { sourceName: 'Climate Central', url: 'https://www.climatecentral.org/rss' },
];

export const listClimateNews: ClimateServiceHandler['listClimateNews'] = async (
  _ctx: ServerContext,
  _req: ListClimateNewsRequest,
): Promise<ListClimateNewsResponse> => {
  try {
    const cached = await getCachedJson(CLIMATE_NEWS_KEY, true) as ListClimateNewsResponse | null;
    if (cached?.items && cached.items.length > 0) {
      return cached;
    }

    // Fallback: Live fetch if Redis is empty
    console.info('[Climate] Redis cache empty, performing live fallback fetch');
    const items = await fetchLiveClimateNews();
    return {
      items,
      fetchedAt: Date.now(),
    };
  } catch (err) {
    console.error('[Climate] Error in listClimateNews:', err);
    return { items: [], fetchedAt: 0 };
  }
};

async function fetchLiveClimateNews(): Promise<ClimateNewsItem[]> {
  const settled = await Promise.allSettled(
    FEEDS.map(async (feed) => {
      const resp = await fetch(feed.url, {
        headers: { 'User-Agent': CHROME_UA },
        signal: AbortSignal.timeout(5000),
      });
      if (!resp.ok) return [];
      const text = await resp.text();
      return parseRss(text, feed.sourceName);
    })
  );

  const allItems: ClimateNewsItem[] = [];
  for (const res of settled) {
    if (res.status === 'fulfilled') {
      allItems.push(...res.value);
    }
  }

  // Sort by date descending
  return allItems
    .sort((a, b) => b.publishedAt - a.publishedAt)
    .slice(0, 50);
}

function parseRss(xml: string, sourceName: string): ClimateNewsItem[] {
  const items: ClimateNewsItem[] = [];
  const itemRe = /<item\b[^>]*>([\s\S]*?)<\/item>/gi;
  const entryRe = /<entry\b[^>]*>([\s\S]*?)<\/entry>/gi;

  let match;
  let isAtom = false;
  
  match = itemRe.exec(xml);
  if (!match) {
    match = entryRe.exec(xml);
    isAtom = true;
  }
  
  // Reset regex
  itemRe.lastIndex = 0;
  entryRe.lastIndex = 0;

  const regex = isAtom ? entryRe : itemRe;
  let count = 0;
  while ((match = regex.exec(xml)) !== null && count < 10) {
    const block = match[1]!;
    const title = extractTag(block, 'title');
    const link = isAtom ? extractAtomLink(block) : extractTag(block, 'link');
    const pubDate = extractTag(block, isAtom ? 'updated' : 'pubDate');
    const description = extractTag(block, isAtom ? 'summary' : 'description');

    if (title && link) {
      const date = new Date(pubDate);
      items.push({
        id: title.slice(0, 20) + Date.now(),
        title: decodeEntities(title),
        url: link,
        sourceName,
        publishedAt: isNaN(date.getTime()) ? Date.now() : date.getTime(),
        summary: cleanSummary(description),
      });
      count++;
    }
  }
  return items;
}

function extractTag(xml: string, tag: string): string {
  const re = new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, 'i');
  return (xml.match(re) || [])[1]?.trim() || '';
}

function extractAtomLink(xml: string): string {
  const match = xml.match(/<link[^>]+href=["']([^"']+)["']/i);
  return match ? match[1]! : '';
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function cleanSummary(s: string): string {
  return decodeEntities(s)
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 200);
}
