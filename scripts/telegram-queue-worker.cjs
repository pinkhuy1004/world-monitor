'use strict';

/**
 * telegram-queue-worker.cjs
 * 
 * Phiên bản tối giản của notification-relay.cjs
 * CHỈ dùng Upstash Redis làm Message Queue, KHÔNG CẦN Convex.
 * Tất cả sự kiện sẽ được gửi thẳng tới 1 TELEGRAM_CHAT_ID duy nhất.
 */

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL ?? '';
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN ?? '';
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN ?? '';
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID ?? '';

if (!UPSTASH_URL || !UPSTASH_TOKEN) {
  console.error('❌ Thiếu UPSTASH_REDIS_REST_URL hoặc UPSTASH_REDIS_REST_TOKEN');
  process.exit(1);
}
if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
  console.error('❌ Thiếu TELEGRAM_BOT_TOKEN hoặc TELEGRAM_CHAT_ID');
  process.exit(1);
}

// ── Hàm giao tiếp Upstash ───────────────────────────────────────────────────

async function upstashRest(...args) {
  const res = await fetch(`${UPSTASH_URL}/${args.map(encodeURIComponent).join('/')}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${UPSTASH_TOKEN}`, 'User-Agent': 'worldmonitor-telegram/1.0' },
  });
  if (!res.ok) return null;
  const json = await res.json();
  return json.result;
}

// ── Hàm gửi Telegram ────────────────────────────────────────────────────────

async function sendTelegram(text) {
  const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [[
          { text: '🔍 View Details', url: 'https://world-monitor-inky-mu.vercel.app' }
        ]]
      }
    }),
  });
  if (!res.ok) {
    const errorBody = await res.text().catch(() => '');
    console.warn(`[telegram] Lỗi gửi tin HTTP ${res.status}: ${errorBody}`);
  } else {
    console.log(`[telegram] ✅ Đã gửi thành công!`);
  }
}

// ── Hàm Format tin nhắn ─────────────────────────────────────────────────────

function formatMessage(event) {
  const severityEmoji = event.severity === 'critical' ? '🔴 ' : event.severity === 'high' ? '🟠 ' : '🔹 ';
  const title = event.payload?.title ?? event.eventType;
  const parts = [`${severityEmoji}*[${(event.severity ?? 'high').toUpperCase()}]* *${title}*`];
  
  if (event.payload?.source) parts.push(`Nguồn: _${event.payload.source}_`);
  if (event.payload?.link) parts.push(`[🔗 Đọc bài gốc](${event.payload.link})`);
  
  return parts.join('\n');
}

// ── Vòng lặp chính canh Queue ───────────────────────────────────────────────

async function subscribe() {
  console.log(`[worker] Khởi động! Đang canh Upstash Queue... (Gửi tới chat_id=${TELEGRAM_CHAT_ID})`);
  
  while (true) {
    try {
      // Nhặt 1 tin nhắn cũ nhất từ đuôi hàng đợi
      const result = await upstashRest('RPOP', 'wm:events:queue');
      
      if (result) {
        console.log('[worker] 🚀 Có tin mới trong hàng đợi!');
        const event = JSON.parse(result);
        
        // Bỏ qua event nội bộ không cần gửi
        if (event.eventType === 'channel_welcome' || event.eventType === 'flush_quiet_held') {
          continue; 
        }

        const text = formatMessage(event);
        await sendTelegram(text);
      } else {
        // Không có tin mới, ngủ 2 giây rồi hỏi lại
        await new Promise(r => setTimeout(r, 2000));
      }
    } catch (err) {
      console.warn('[worker] Có lỗi xảy ra trong quá trình quét queue:', err.message);
      await new Promise(r => setTimeout(r, 5000));
    }
  }
}

subscribe().catch(err => {
  console.error('[worker] Lỗi nghiêm trọng:', err);
  process.exit(1);
});
