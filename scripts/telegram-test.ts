/// <reference types="node" />
import axios from 'axios';

/**
 * WorldMonitor Telegram Notifier Template Test
 * 
 * Tests the premium formatting (emojis, bolding, buttons) for industry alerts.
 */

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

async function sendPhotoToTelegram(photoUrl: string, caption: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return;
  }
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`;
  try {
    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      photo: photoUrl,
      caption: caption,
      parse_mode: 'Markdown',
    });
    console.log('Welcome Message sent successfully:', response.data.result.message_id);
  } catch (error: any) {
    console.error('Failed to send photo:', error.response?.data || error.message);
  }
}

async function sendRichMessage(message: string) {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID');
    return;
  }
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  try {
    const response = await axios.post(url, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [[
          { text: '🔍 View Details', url: 'https://world-monitor-inky-mu.vercel.app' }
        ]]
      }
    });
    console.log('Rich message sent successfully:', response.data.result.message_id);
  } catch (error: any) {
    console.error('Failed to send rich message:', error.response?.data || error.message);
  }
}

// Test data: Gamo / Playgamo Updates (English)
const sampleNews = [
  { title: 'New Game Release: "Cyber Sprint" is now live on Playgamo!', source: 'Playgamo Dev', link: 'https://playgamo.com', severity: 'critical' },
  { title: 'Weekly Gold Fest Tournament: $5,000 Prize Pool announced', source: 'Gamo Events', link: 'https://playgamo.com', severity: 'high' },
  { title: 'Platform Upgrade: Seamless wallet integration now supported', source: 'Playgamo Core', link: 'https://playgamo.com', severity: 'info' },
];

async function runTest() {
  console.log('--- Playgamo.com Telegram Notifier Upgrade Test ---');
  
  // 1. Skip Welcome Confirmation (as requested)
  console.log('\nSkipping Welcome Message...');

  // 2. Test News Alerts
  console.log('\nTesting Gamo Update Alerts...');
  for (const item of sampleNews) {
    const emoji = item.severity === 'critical' ? '🔴 ' : item.severity === 'high' ? '🟠 ' : '🔹 ';
    const text = `${emoji}*[${item.severity.toUpperCase()}]* *${item.title}*\nSource: _${item.source}_\n[🔗 Play Now](${item.link})`;
    await sendRichMessage(text);
  }
}

runTest();
