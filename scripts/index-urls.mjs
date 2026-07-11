/**
 * Google Indexing API — Batch URL Indexing Script
 * 
 * Prerequisites:
 * 1. Run: node scripts/resubmit-sitemap.mjs (to get a new token with indexing scope)
 *    OR manually authorize with scope: https://www.googleapis.com/auth/indexing
 * 2. Make sure token.json has a valid access_token
 * 
 * Usage: node scripts/index-urls.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TOKEN_PATH = join(__dirname, '..', 'token.json');

if (!existsSync(TOKEN_PATH)) {
  console.error('❌ token.json not found. Run resubmit-sitemap.mjs first.');
  process.exit(1);
}

const tokenData = JSON.parse(readFileSync(TOKEN_PATH, 'utf-8'));
const accessToken = tokenData.access_token;

if (!accessToken) {
  console.error('❌ No access token found. Run resubmit-sitemap.mjs first.');
  process.exit(1);
}

// Priority URLs to index first
const PRIORITY_URLS = [
  // Language homepages
  'https://convunit.net/en/',
  'https://convunit.net/zh/',
  'https://convunit.net/es/',
  'https://convunit.net/fr/',
  'https://convunit.net/de/',
  'https://convunit.net/ja/',
  'https://convunit.net/pt/',
  'https://convunit.net/it/',
  'https://convunit.net/ko/',
  'https://convunit.net/ru/',
  'https://convunit.net/hi/',
  'https://convunit.net/tr/',
  // English category pages
  'https://convunit.net/en/length/',
  'https://convunit.net/en/weight/',
  'https://convunit.net/en/temperature/',
  'https://convunit.net/en/volume/',
  'https://convunit.net/en/speed/',
  'https://convunit.net/en/data/',
  'https://convunit.net/en/area/',
  'https://convunit.net/en/time/',
  'https://convunit.net/en/energy/',
  'https://convunit.net/en/power/',
  'https://convunit.net/en/pressure/',
  'https://convunit.net/en/frequency/',
  'https://convunit.net/en/force/',
  'https://convunit.net/en/torque/',
  'https://convunit.net/en/fuel/',
  'https://convunit.net/en/angle/',
  // Top converter pages
  'https://convunit.net/en/weight/kg-to-lb/',
  'https://convunit.net/en/length/cm-to-inch/',
  'https://convunit.net/en/temperature/c-to-f/',
  'https://convunit.net/en/speed/km-to-mph/',
  'https://convunit.net/en/data/mb-to-gb/',
  'https://convunit.net/en/area/sqm-to-sqft/',
];

const INDEXING_API = 'https://indexing.googleapis.com/v3/urlNotifications:publish';

async function indexUrl(url) {
  try {
    const resp = await fetch(INDEXING_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        type: 'URL_UPDATED',
      }),
    });

    const data = await resp.json();

    if (resp.ok) {
      console.log(`✅ ${url} — ${data.type || 'submitted'}`);
      return true;
    } else if (data.error?.code === 403) {
      console.error(`❌ ${url} — Permission denied. Need indexing scope.`);
      console.error('   Run: node scripts/resubmit-sitemap.mjs with scope https://www.googleapis.com/auth/indexing');
      return false;
    } else if (data.error?.code === 429) {
      console.warn(`⏳ ${url} — Rate limited. Waiting 10s...`);
      await new Promise(r => setTimeout(r, 10000));
      return false;
    } else {
      console.error(`❌ ${url} — ${data.error?.message || JSON.stringify(data)}`);
      return false;
    }
  } catch (err) {
    console.error(`❌ ${url} — Network error: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`\n🚀 Indexing ${PRIORITY_URLS.length} priority URLs via Google Indexing API...\n`);
  console.log(`Token scope: ${tokenData.scope || 'unknown'}`);
  console.log(`Token expiry: ${new Date(tokenData.expiry_date).toISOString()}\n`);

  let success = 0;
  let failed = 0;

  for (const url of PRIORITY_URLS) {
    const result = await indexUrl(url);
    if (result) {
      success++;
    } else {
      failed++;
    }
    // Rate limit: max 10 requests per second
    await new Promise(r => setTimeout(r, 150));
  }

  console.log(`\n📊 Results: ${success} submitted, ${failed} failed`);

  if (failed > 0) {
    console.log('\n⚠️  Some URLs failed. Common reasons:');
    console.log('   - Token needs indexing scope (re-authorize with wider scope)');
    console.log('   - Rate limiting (quota: 200 requests/day)');
    console.log('\n   To re-authorize with indexing scope:');
    console.log('   1. Go to Google Cloud Console → APIs & Services → Credentials');
    console.log('   2. Add http://localhost:3000/callback to redirect URIs');
    console.log('   3. Run: node scripts/resubmit-sitemap.mjs');
  }
}

main();
