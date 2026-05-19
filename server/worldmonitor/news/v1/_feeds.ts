export interface ServerFeed {
  name: string;
  url: string;
  lang?: string;
}

const gn = (q: string) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(q)}&hl=en-US&gl=US&ceid=US:en`;

export const VARIANT_FEEDS: Record<string, Record<string, ServerFeed[]>> = {
  full: {
    politics: [
      { name: 'BBC World', url: gn('site:bbci.co.uk when:7d') },
      { name: 'Guardian World', url: gn('site:theguardian.com when:7d') },
      { name: 'AP News', url: gn('site:apnews.com') },
      { name: 'Reuters World', url: gn('site:reuters.com world') },
      { name: 'CNN World', url: gn('site:cnn.com world news when:1d') },
    ],
    us: [
      { name: 'Reuters US', url: gn('site:reuters.com US') },
      { name: 'NPR News', url: gn('site:npr.org when:7d') },
      { name: 'PBS NewsHour', url: gn('site:pbs.org when:7d') },
      { name: 'ABC News', url: gn('site:abcnews.com when:7d') },
      { name: 'CBS News', url: gn('site:cbsnews.com when:7d') },
      { name: 'NBC News', url: gn('site:nbcnews.com when:7d') },
      { name: 'Wall Street Journal', url: gn('site:content.dowjones.io when:7d') },
      { name: 'Politico', url: gn('site:politico.com when:7d') },
      { name: 'The Hill', url: gn('site:thehill.com when:7d') },
      { name: 'Axios', url: gn('site:api.axios.com when:7d') },
    ],
    europe: [
      { name: 'France 24', url: gn('site:france24.com when:7d') },
      { name: 'EuroNews', url: gn('site:euronews.com when:7d') },
      { name: 'Le Monde', url: gn('site:lemonde.fr when:7d') },
      { name: 'DW News', url: gn('site:dw.com when:7d') },
      { name: 'Tagesschau', url: gn('site:tagesschau.de when:7d'), lang: 'de' },
      { name: 'ANSA', url: gn('site:ansa.it when:7d'), lang: 'it' },
      { name: 'NOS Nieuws', url: gn('site:nos.nl when:7d'), lang: 'nl' },
      { name: 'SVT Nyheter', url: gn('site:svt.se when:7d'), lang: 'sv' },
    ],
    middleeast: [
      { name: 'BBC Middle East', url: gn('site:bbci.co.uk when:7d') },
      { name: 'Al Jazeera', url: gn('site:aljazeera.com when:7d') },
      { name: 'Guardian ME', url: gn('site:theguardian.com when:7d') },
      { name: 'Oman Observer', url: gn('site:omanobserver.om when:7d') },
      { name: 'BBC Persian', url: gn('site:bbci.co.uk when:7d'), lang: 'fa' },
      { name: 'The National', url: gn('site:thenationalnews.com when:7d') },
    ],
    tech: [
      { name: 'Hacker News', url: gn('site:hnrss.org when:7d') },
      { name: 'Ars Technica', url: gn('site:arstechnica.com when:7d') },
      { name: 'The Verge', url: gn('site:theverge.com when:7d') },
      { name: 'MIT Tech Review', url: gn('site:technologyreview.com when:7d') },
    ],
    ai: [
      { name: 'AI News', url: gn('(OpenAI OR Anthropic OR Google AI OR "large language model" OR ChatGPT) when:2d') },
      { name: 'VentureBeat AI', url: gn('site:venturebeat.com when:7d') },
      { name: 'The Verge AI', url: gn('site:theverge.com when:7d') },
      { name: 'MIT Tech Review', url: gn('site:technologyreview.com when:7d') },
      { name: 'ArXiv AI', url: gn('site:export.arxiv.org when:7d') },
    ],
    finance: [
      { name: 'CNBC', url: gn('site:cnbc.com when:7d') },
      { name: 'MarketWatch', url: gn('site:marketwatch.com markets when:1d') },
      { name: 'Yahoo Finance', url: gn('site:finance.yahoo.com when:7d') },
      { name: 'Financial Times', url: gn('site:ft.com when:7d') },
      { name: 'Reuters Business', url: gn('site:reuters.com business markets') },
    ],
    gov: [
      { name: 'White House', url: gn('site:whitehouse.gov') },
      { name: 'State Dept', url: gn('site:state.gov OR "State Department"') },
      { name: 'Pentagon', url: gn('site:defense.gov OR Pentagon') },
      { name: 'Federal Reserve', url: gn('site:federalreserve.gov when:7d') },
      { name: 'SEC', url: gn('site:sec.gov when:7d') },
      { name: 'UN News', url: gn('site:news.un.org when:7d') },
      { name: 'CISA', url: gn('site:cisa.gov when:7d') },
      { name: 'Treasury', url: gn('site:treasury.gov') },
      { name: 'DOJ', url: gn('site:justice.gov') },
    ],
    africa: [
      { name: 'BBC Africa', url: gn('site:bbci.co.uk when:7d') },
      { name: 'News24', url: gn('site:news24.com when:7d') },
      { name: 'Africanews', url: gn('site:africanews.com when:7d') },
      { name: 'Jeune Afrique', url: gn('site:jeuneafrique.com when:7d'), lang: 'fr' },
      { name: 'Premium Times', url: gn('site:premiumtimesng.com when:7d') },
    ],
    latam: [
      { name: 'BBC Latin America', url: gn('site:bbci.co.uk when:7d') },
      { name: 'Guardian Americas', url: gn('site:theguardian.com when:7d') },
      { name: 'Primicias', url: gn('site:primicias.ec when:7d'), lang: 'es' },
      { name: 'Infobae Americas', url: gn('site:infobae.com when:7d'), lang: 'es' },
      { name: 'El Universo', url: gn('site:eluniverso.com when:7d'), lang: 'es' },
      { name: 'Clarín', url: gn('site:clarin.com when:7d'), lang: 'es' },
      { name: 'InSight Crime', url: gn('site:insightcrime.org when:7d') },
    ],
    malaysia: [
      { name: 'The Star', url: gn('site:thestar.com.my when:2d') },
      { name: 'Malay Mail', url: gn('site:malaymail.com when:2d') },
      { name: 'Bernama', url: gn('site:bernama.com when:2d') },
      { name: 'FMT', url: gn('site:freemalaysiatoday.com when:2d') },
      { name: 'NST', url: gn('site:nst.com.my when:2d') },
    ],
    asia: [
      { name: 'BBC Asia', url: gn('site:bbci.co.uk when:7d') },
      { name: 'The Diplomat', url: gn('site:thediplomat.com when:7d') },
      { name: 'Nikkei Asia', url: gn('site:asia.nikkei.com when:3d') },
      { name: 'CNA', url: gn('site:channelnewsasia.com when:7d') },
      { name: 'NDTV', url: gn('site:feedburner.com when:7d') },
      { name: 'South China Morning Post', url: gn('site:scmp.com when:2d') },
      { name: 'The Hindu', url: gn('site:thehindu.com when:7d') },
      { name: 'Asia News', url: gn('site:asianews.it when:3d') },
    ],
    energy: [
      { name: 'Oil & Gas', url: gn('(oil price OR OPEC OR "natural gas" OR pipeline OR LNG) when:2d') },
      { name: 'Reuters Energy', url: gn('site:reuters.com energy when:2d') },
      { name: 'Nuclear Energy', url: gn('("nuclear energy" OR "nuclear power" OR "nuclear reactor") when:3d') },
    ],
    thinktanks: [
      { name: 'Foreign Policy', url: gn('site:foreignpolicy.com when:7d') },
      { name: 'Atlantic Council', url: gn('site:atlanticcouncil.org when:7d') },
      { name: 'Foreign Affairs', url: gn('site:foreignaffairs.com when:7d') },
      { name: 'War on the Rocks', url: gn('site:warontherocks.com when:7d') },
      { name: 'CSIS', url: gn('site:csis.org when:7d') },
    ],
    crisis: [
      { name: 'CrisisWatch', url: gn('site:crisisgroup.org when:7d') },
      { name: 'IAEA', url: gn('site:iaea.org when:7d') },
      { name: 'WHO', url: gn('site:who.int when:7d') },
    ],
    layoffs: [
      { name: 'Layoffs.fyi', url: gn('tech+company+layoffs+announced') },
      { name: 'TechCrunch Layoffs', url: gn('site:techcrunch.com when:7d') },
      { name: 'Layoffs News', url: gn('(layoffs OR "job cuts" OR "workforce reduction") when:3d') },
    ],
  },

  tech: {
    tech: [
      { name: 'TechCrunch', url: gn('site:techcrunch.com when:7d') },
      { name: 'The Verge', url: gn('site:theverge.com when:7d') },
      { name: 'Ars Technica', url: gn('site:arstechnica.com when:7d') },
      { name: 'Hacker News', url: gn('site:hnrss.org when:7d') },
    ],
    ai: [
      { name: 'AI News', url: gn('(OpenAI OR Anthropic OR Google AI OR "large language model" OR ChatGPT) when:2d') },
      { name: 'VentureBeat AI', url: gn('site:venturebeat.com when:7d') },
      { name: 'The Verge AI', url: gn('site:theverge.com when:7d') },
      { name: 'ArXiv AI', url: gn('site:export.arxiv.org when:7d') },
    ],
    startups: [
      { name: 'TechCrunch Startups', url: gn('site:techcrunch.com when:7d') },
      { name: 'VentureBeat', url: gn('site:venturebeat.com when:7d') },
      { name: 'Crunchbase News', url: gn('site:news.crunchbase.com when:7d') },
    ],
    vcblogs: [
      { name: 'Y Combinator Blog', url: gn('site:ycombinator.com when:7d') },
      { name: 'a16z Blog', url: gn('site:a16z.news when:7d') },
      { name: 'First Round Review', url: gn('site:review.firstround.com when:7d') },
      { name: 'Sequoia Blog', url: gn('site:sequoiacap.com when:7d') },
      { name: 'Stratechery', url: gn('site:stratechery.com when:7d') },
    ],
    regionalStartups: [
      { name: 'EU Startups', url: gn('site:eu-startups.com when:7d') },
      { name: 'Tech.eu', url: gn('site:tech.eu when:7d') },
      { name: 'Sifted (Europe)', url: gn('site:sifted.eu when:7d') },
      { name: 'Tech in Asia', url: gn('site:techinasia.com when:7d') },
      { name: 'TechCabal (Africa)', url: gn('site:techcabal.com when:7d') },
      { name: 'Inc42 (India)', url: gn('site:inc42.com when:7d') },
    ],
    unicorns: [
      { name: 'Unicorn News', url: gn('("unicorn startup" OR "unicorn valuation" OR "$1 billion valuation") when:7d') },
      { name: 'Decacorn News', url: gn('("decacorn" OR "$10 billion valuation") startup when:14d') },
    ],
    accelerators: [
      { name: 'YC News', url: gn('site:news.ycombinator.com when:7d') },
      { name: 'YC Blog', url: gn('site:ycombinator.com when:7d') },
      { name: 'Demo Day News', url: gn('("demo day" OR "YC batch" OR "accelerator batch") startup when:7d') },
    ],
    security: [
      { name: 'Krebs Security', url: gn('site:krebsonsecurity.com when:7d') },
      { name: 'Dark Reading', url: gn('site:darkreading.com when:7d') },
    ],
    policy: [
      { name: 'Politico Tech', url: gn('site:politico.com when:7d') },
      { name: 'AI Regulation', url: gn('AI regulation OR "artificial intelligence" law OR policy when:7d') },
      { name: 'Tech Antitrust', url: gn('tech antitrust OR FTC Google OR FTC Apple OR FTC Amazon when:7d') },
    ],
    github: [
      { name: 'GitHub Blog', url: gn('site:github.blog when:7d') },
    ],
    funding: [
      { name: 'VC News', url: gn('("Series A" OR "Series B" OR "Series C" OR "venture capital" OR "funding round") when:2d') },
    ],
    cloud: [
      { name: 'InfoQ', url: gn('site:feed.infoq.com when:7d') },
      { name: 'The New Stack', url: gn('site:thenewstack.io when:7d') },
    ],
    layoffs: [
      { name: 'Layoffs.fyi', url: gn('tech+layoffs+when:7d') },
      { name: 'TechCrunch Layoffs', url: gn('site:techcrunch.com when:7d') },
    ],
    finance: [
      { name: 'CNBC Tech', url: gn('site:cnbc.com when:7d') },
      { name: 'Yahoo Finance', url: gn('site:finance.yahoo.com when:7d') },
    ],
    dev: [
      { name: 'Dev.to', url: gn('site:dev.to when:7d') },
      { name: 'Lobsters', url: gn('site:lobste.rs when:7d') },
      { name: 'Changelog', url: gn('site:changelog.com when:7d') },
      { name: 'Show HN', url: gn('site:hnrss.org when:7d') },
    ],
    ipo: [
      { name: 'IPO News', url: gn('(IPO OR "initial public offering" OR SPAC) tech when:7d') },
      { name: 'Tech IPO News', url: gn('tech IPO OR "tech company" IPO when:7d') },
    ],
    producthunt: [
      { name: 'Product Hunt', url: gn('site:producthunt.com when:7d') },
    ],
    hardware: [
      { name: "Tom's Hardware", url: 'https://www.tomshardware.com/feeds/all' },
      { name: 'SemiAnalysis', url: gn('site:semianalysis.com when:7d') },
      { name: 'Semiconductor News', url: gn('semiconductor OR chip OR TSMC OR NVIDIA OR Intel when:3d') },
    ],
    outages: [
      { name: 'AWS Status', url: gn('AWS outage OR "Amazon Web Services" down when:1d') },
      { name: 'Cloud Outages', url: gn('(Azure outage OR "Google Cloud" outage OR Cloudflare outage OR Slack down OR GitHub down) when:1d') },
    ],
  },

  finance: {
    markets: [
      { name: 'CNBC', url: gn('site:cnbc.com when:7d') },
      { name: 'Yahoo Finance', url: gn('site:finance.yahoo.com when:7d') },
      { name: 'Seeking Alpha', url: gn('site:seekingalpha.com when:7d') },
    ],
    forex: [
      { name: 'Forex News', url: gn('(forex OR currency OR "exchange rate" OR FX OR "US dollar") when:2d') },
    ],
    bonds: [
      { name: 'Bond Market', url: gn('("bond market" OR "treasury yield" OR "bond yield" OR "fixed income") when:2d') },
    ],
    commodities: [
      { name: 'Oil & Gas', url: gn('(oil price OR OPEC OR "natural gas" OR pipeline OR LNG) when:2d') },
      { name: 'Gold & Metals', url: gn('("gold price" OR "silver price" OR "precious metals" OR "copper price") when:2d') },
    ],
    crypto: [
      { name: 'CoinDesk', url: gn('site:coindesk.com when:7d') },
      { name: 'Cointelegraph', url: gn('site:cointelegraph.com when:7d') },
      { name: 'The Block', url: 'https://news.google.com/rss/search?q=site:theblock.co+when:1d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'Decrypt', url: gn('site:decrypt.co when:7d') },
      { name: 'Blockworks', url: gn('site:blockworks.co when:7d') },
      { name: 'The Defiant', url: gn('site:thedefiant.io when:7d') },
      { name: 'Bitcoin Magazine', url: gn('site:bitcoinmagazine.com when:7d') },
      { name: 'DL News', url: 'https://news.google.com/rss/search?q=site:dlnews.com+when:3d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'CryptoSlate', url: gn('site:cryptoslate.com when:7d') },
      { name: 'Unchained', url: gn('site:unchainedcrypto.com when:7d') },
      { name: 'DeFi News', url: 'https://news.google.com/rss/search?q=(DeFi+OR+"decentralized+finance")+when:3d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'Bloomberg Crypto', url: 'https://news.google.com/rss/search?q=bloomberg+crypto+when:1d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'Reuters Crypto', url: 'https://news.google.com/rss/search?q=reuters+crypto+when:1d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'Wu Blockchain', url: 'https://news.google.com/rss/search?q=site:wublockchain.com+when:7d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'Messari', url: 'https://news.google.com/rss/search?q=site:messari.io+when:3d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'NFT News', url: 'https://news.google.com/rss/search?q=(NFT+OR+"non-fungible")+when:3d&hl=en-US&gl=US&ceid=US:en' },
      { name: 'Stablecoin Policy', url: 'https://news.google.com/rss/search?q=(stablecoin+regulation+OR+"stablecoin+bill")+when:7d&hl=en-US&gl=US&ceid=US:en' },
    ],
    centralbanks: [
      { name: 'Federal Reserve', url: gn('site:federalreserve.gov when:7d') },
    ],
    economic: [
      { name: 'Economic Data', url: gn('(CPI OR inflation OR GDP OR "economic data" OR "jobs report") when:2d') },
    ],
    ipo: [
      { name: 'IPO News', url: gn('(IPO OR "initial public offering" OR "stock market debut") when:2d') },
    ],
    derivatives: [
      { name: 'Options Market', url: gn('("options market" OR "options trading" OR "put call ratio" OR VIX) when:2d') },
      { name: 'Futures Trading', url: gn('("futures trading" OR "S&P 500 futures" OR "Nasdaq futures") when:1d') },
    ],
    fintech: [
      { name: 'Fintech News', url: gn('(fintech OR "payment technology" OR neobank OR "digital banking") when:3d') },
      { name: 'Trading Tech', url: gn('("algorithmic trading" OR "trading platform" OR "quantitative finance") when:7d') },
      { name: 'Blockchain Finance', url: gn('("blockchain finance" OR tokenization OR "digital securities" OR CBDC) when:7d') },
    ],
    regulation: [
      { name: 'SEC', url: gn('site:sec.gov when:7d') },
      { name: 'Financial Regulation', url: gn('(SEC OR CFTC OR FINRA OR FCA) regulation OR enforcement when:3d') },
      { name: 'Banking Rules', url: gn('(Basel OR "capital requirements" OR "banking regulation") when:7d') },
      { name: 'Crypto Regulation', url: gn('(crypto regulation OR "digital asset" regulation OR stablecoin regulation) when:7d') },
    ],
    institutional: [
      { name: 'Hedge Fund News', url: gn('("hedge fund" OR Bridgewater OR Citadel OR Renaissance) when:7d') },
      { name: 'Private Equity', url: gn('("private equity" OR Blackstone OR KKR OR Apollo OR Carlyle) when:3d') },
      { name: 'Sovereign Wealth', url: gn('("sovereign wealth fund" OR "pension fund" OR "institutional investor") when:7d') },
    ],
    analysis: [
      { name: 'Market Outlook', url: gn('("market outlook" OR "stock market forecast" OR "bull market" OR "bear market") when:3d') },
      { name: 'Risk & Volatility', url: gn('(VIX OR "market volatility" OR "risk off" OR "market correction") when:3d') },
      { name: 'Bank Research', url: gn('("Goldman Sachs" OR JPMorgan OR "Morgan Stanley") forecast OR outlook when:3d') },
    ],
    gccNews: [
      { name: 'Arabian Business', url: gn('site:arabianbusiness.com (Saudi Arabia OR UAE OR GCC) when:7d') },
      { name: 'The National', url: gn('site:thenationalnews.com (Abu Dhabi OR UAE OR Saudi) when:7d') },
      { name: 'Arab News', url: gn('site:arabnews.com (Saudi Arabia OR investment OR infrastructure) when:7d') },
      { name: 'Gulf FDI', url: gn('(PIF OR "DP World" OR Mubadala OR ADNOC OR Masdar OR "ACWA Power") infrastructure when:7d') },
      { name: 'Gulf Investments', url: gn('("Saudi Arabia" OR UAE OR "Abu Dhabi") investment infrastructure when:7d') },
      { name: 'Vision 2030', url: gn('"Vision 2030" (project OR investment OR announced) when:14d') },
    ],
  },

  // ── Commodity variant (Mining, Metals, Energy) ─────────────────────────────
  commodity: {
    'commodity-news': [
      { name: 'Kitco News', url: gn('site:kitco.com gold OR silver OR commodity OR metals when:1d') },
      { name: 'Mining.com', url: gn('site:mining.com when:7d') },
      { name: 'Bloomberg Commodities', url: gn('site:bloomberg.com commodities OR metals OR mining when:1d') },
      { name: 'Reuters Commodities', url: gn('site:reuters.com commodities OR metals OR mining when:1d') },
      { name: 'S&P Global Commodity', url: gn('site:spglobal.com commodities metals when:3d') },
      { name: 'Commodity Trade Mantra', url: gn('commodities trading metals energy gold silver when:1d') },
      { name: 'CNBC Commodities', url: gn('site:cnbc.com (commodities OR metals OR gold OR copper) when:1d') },
    ],
    'gold-silver': [
      { name: 'Kitco Gold', url: gn('site:kitco.com gold price OR "gold market" OR "silver price" when:2d') },
      { name: 'Gold Price News', url: gn('(gold price OR "gold market" OR bullion OR LBMA) when:1d') },
      { name: 'Silver Price News', url: gn('(silver price OR "silver market" OR "silver futures") when:2d') },
      { name: 'Precious Metals', url: gn('("precious metals" OR platinum OR palladium OR "gold ETF" OR GLD OR SLV) when:2d') },
      { name: 'World Gold Council', url: gn('"World Gold Council" OR "central bank gold" OR "gold reserves" when:7d') },
    ],
    energy: [
      { name: 'OilPrice.com', url: gn('site:oilprice.com when:7d') },
      { name: 'Rigzone', url: gn('site:rigzone.com when:7d') },
      { name: 'EIA Reports', url: gn('site:eia.gov energy oil gas when:14d') },
      { name: 'OPEC News', url: gn('(OPEC OR "oil price" OR "crude oil" OR WTI OR Brent OR "oil production") when:1d') },
      { name: 'Natural Gas News', url: gn('("natural gas" OR LNG OR "gas price" OR "Henry Hub") when:1d') },
      { name: 'Energy Intel', url: gn('(energy commodities OR "energy market" OR "energy prices") when:2d') },
      { name: 'Reuters Energy', url: gn('site:reuters.com (oil OR gas OR energy) when:1d') },
    ],
    'mining-news': [
      { name: 'Mining Journal', url: gn('site:mining-journal.com when:7d') },
      { name: 'Northern Miner', url: gn('site:northernminer.com when:7d') },
      { name: 'Mining Weekly', url: gn('site:miningweekly.com when:7d') },
      { name: 'Mining Technology', url: gn('site:mining-technology.com when:7d') },
      { name: 'Australian Mining', url: gn('site:australianmining.com.au when:7d') },
      { name: 'Mine Web (SNL)', url: gn('("mining company" OR "mine production" OR "mining operations") when:2d') },
      { name: 'Resource World', url: gn('("mining project" OR "mineral exploration" OR "mine development") when:3d') },
    ],
    'critical-minerals': [
      { name: 'Benchmark Mineral', url: gn('("critical minerals" OR "battery metals" OR lithium OR cobalt OR "rare earths") when:2d') },
      { name: 'Lithium Market', url: gn('(lithium price OR "lithium market" OR "lithium supply" OR spodumene OR LCE) when:2d') },
      { name: 'Cobalt Market', url: gn('(cobalt price OR "cobalt market" OR "DRC cobalt" OR "battery cobalt") when:3d') },
      { name: 'Rare Earths News', url: gn('("rare earth" OR "rare earths" OR REE OR neodymium OR praseodymium) when:3d') },
      { name: 'EV Battery Supply', url: gn('("EV battery" OR "battery supply chain" OR "battery materials") when:3d') },
      { name: 'IEA Critical Minerals', url: gn('site:iea.org (minerals OR critical OR battery) when:14d') },
      { name: 'Uranium Market', url: gn('(uranium price OR "uranium market" OR U3O8 OR nuclear fuel) when:3d') },
    ],
    'base-metals': [
      { name: 'LME Metals', url: gn('(LME OR "London Metal Exchange") copper OR aluminum OR zinc OR nickel when:2d') },
      { name: 'Copper Market', url: gn('(copper price OR "copper market" OR "copper supply" OR COMEX copper) when:2d') },
      { name: 'Nickel News', url: gn('(nickel price OR "nickel market" OR "nickel supply" OR Indonesia nickel) when:3d') },
      { name: 'Aluminum & Zinc', url: gn('(aluminum price OR aluminium OR zinc price OR "base metals") when:3d') },
      { name: 'Iron Ore Market', url: gn('("iron ore" price OR "iron ore market" OR "steel raw materials") when:2d') },
      { name: 'Metals Bulletin', url: gn('("metals market" OR "base metals" OR SHFE OR "Shanghai Futures") when:2d') },
    ],
    'mining-companies': [
      { name: 'BHP News', url: gn('BHP (mining OR production OR results OR copper OR "iron ore") when:7d') },
      { name: 'Rio Tinto News', url: gn('"Rio Tinto" (mining OR production OR results OR Pilbara) when:7d') },
      { name: 'Glencore & Vale', url: gn('(Glencore OR Vale) (mining OR production OR cobalt OR "iron ore") when:7d') },
      { name: 'Gold Majors', url: gn('(Newmont OR Barrick OR AngloGold OR Agnico) (gold mine OR production OR results) when:7d') },
      { name: 'Freeport & Copper Miners', url: gn('(Freeport McMoRan OR Southern Copper OR Teck OR Antofagasta) when:7d') },
      { name: 'Critical Mineral Companies', url: gn('(Albemarle OR SQM OR "MP Materials" OR Lynas OR Cameco) when:7d') },
    ],
    'supply-chain': [
      { name: 'Shipping & Freight', url: gn('("bulk carrier" OR "dry bulk" OR "commodity shipping" OR "Port Hedland" OR "Strait of Hormuz") when:3d') },
      { name: 'Trade Routes', url: gn('("trade route" OR "supply chain" OR "commodity export" OR "mineral export") when:3d') },
      { name: 'China Commodity Imports', url: gn('China imports copper OR "iron ore" OR lithium OR cobalt OR "rare earth" when:3d') },
      { name: 'Port & Logistics', url: gn('("iron ore port" OR "copper port" OR "commodity port" OR "mineral logistics") when:7d') },
    ],
    'commodity-regulation': [
      { name: 'Mining Regulation', url: gn('("mining regulation" OR "mining policy" OR "mining permit" OR "mining ban") when:7d') },
      { name: 'ESG in Mining', url: gn('("mining ESG" OR "responsible mining" OR "mine closure" OR tailings) when:7d') },
      { name: 'Trade & Tariffs', url: gn('("mineral tariff" OR "metals tariff" OR "critical mineral policy" OR "mining export ban") when:7d') },
      { name: 'Indonesia Nickel Policy', url: gn('(Indonesia nickel OR "nickel export" OR "nickel ban" OR "nickel processing") when:7d') },
      { name: 'China Mineral Policy', url: gn('China "rare earth" OR "mineral export" OR "critical mineral" policy OR restriction when:7d') },
    ],
    markets: [
      { name: 'Yahoo Finance Commodities', url: gn('site:finance.yahoo.com when:7d') },
      { name: 'CNBC Markets', url: gn('site:cnbc.com when:7d') },
      { name: 'Seeking Alpha Metals', url: gn('site:seekingalpha.com (gold OR silver OR copper OR mining) when:2d') },
      { name: 'Commodity Futures', url: gn('(COMEX OR NYMEX OR "commodity futures" OR CME commodities) when:2d') },
    ],
    finance: [
      { name: 'CNBC', url: gn('site:cnbc.com when:7d') },
      { name: 'MarketWatch', url: gn('site:marketwatch.com markets when:1d') },
      { name: 'Yahoo Finance', url: gn('site:finance.yahoo.com when:7d') },
      { name: 'Financial Times', url: gn('site:ft.com when:7d') },
      { name: 'Reuters Business', url: gn('site:reuters.com business markets') },
    ],
  },

  happy: {
    positive: [
      { name: 'Good News Network', url: gn('site:goodnewsnetwork.org when:7d') },
      { name: 'Positive.News', url: gn('site:positive.news when:7d') },
      { name: 'Reasons to be Cheerful', url: gn('site:reasonstobecheerful.world when:7d') },
      { name: 'Optimist Daily', url: gn('site:optimistdaily.com when:7d') },
    ],
    science: [
      { name: 'ScienceDaily', url: gn('site:sciencedaily.com when:7d') },
      { name: 'Nature News', url: gn('site:nature.com when:7d') },
      { name: 'Singularity Hub', url: gn('site:singularityhub.com when:7d') },
      { name: 'Human Progress', url: gn('site:humanprogress.org when:7d') },
    ],
    nature: [
      { name: 'Mongabay', url: gn('site:news.mongabay.com when:7d') },
      { name: 'Conservation Optimism', url: gn('site:conservationoptimism.org when:7d') },
    ],
    inspiring: [
      { name: 'GNN Heroes', url: gn('site:goodnewsnetwork.org when:7d') },
      { name: 'GNN Health', url: gn('site:goodnewsnetwork.org when:7d') },
    ],
    community: [
      { name: 'Yes! Magazine', url: gn('site:yesmagazine.org when:7d') },
      { name: 'Shareable', url: gn('site:shareable.net when:7d') },
    ],
  },
};

// Dynamically build the malaysia variant from full variant by replacing the URLs!
const malaysiaFeeds: Record<string, ServerFeed[]> = {};
for (const [category, feeds] of Object.entries(VARIANT_FEEDS.full || {})) {
  malaysiaFeeds[category] = feeds.map(feed => {
    if (feed.url.includes('news.google.com/rss/search?q=')) {
      return {
        ...feed,
        url: feed.url.replace('search?q=', `search?q=${encodeURIComponent('(Malaysia) AND ')}`),
      };
    }
    return feed;
  });
}
VARIANT_FEEDS.malaysia = malaysiaFeeds;

export const INTEL_SOURCES: ServerFeed[] = [
  { name: 'Defense One', url: gn('site:defenseone.com when:7d') },
  { name: 'The War Zone', url: gn('site:twz.com when:7d') },
  { name: 'Defense News', url: gn('site:defensenews.com when:7d') },
  { name: 'Military Times', url: gn('site:militarytimes.com when:7d') },
  { name: 'Task & Purpose', url: gn('site:taskandpurpose.com when:7d') },
  { name: 'USNI News', url: 'https://news.google.com/rss/search?q=site:news.usni.org+when:3d&hl=en-US&gl=US&ceid=US:en' },
  { name: 'gCaptain', url: gn('site:gcaptain.com when:7d') },
  { name: 'Oryx OSINT', url: gn('site:oryxspioenkop.com when:7d') },
  { name: 'Foreign Policy', url: gn('site:foreignpolicy.com when:7d') },
  { name: 'Foreign Affairs', url: gn('site:foreignaffairs.com when:7d') },
  { name: 'Atlantic Council', url: gn('site:atlanticcouncil.org when:7d') },
  { name: 'Bellingcat', url: gn('site:bellingcat.com') },
  { name: 'Krebs Security', url: gn('site:krebsonsecurity.com when:7d') },
  { name: 'Arms Control Assn', url: gn('site:armscontrol.org') },
  { name: 'Bulletin of Atomic Scientists', url: gn('site:thebulletin.org') },
  { name: 'FAO News', url: gn('site:fao.org when:7d') },
];
