/**
 * Google Search Console + Indexing API — Re-authorize & Submit
 * 
 * This script:
 * 1. Re-authorizes with BOTH webmasters + indexing scopes
 * 2. Submits the sitemap to GSC
 * 3. Pushes priority URLs via Indexing API
 * 
 * Prerequisites:
 * 1. Google Cloud Console → APIs & Services → Credentials
 *    → OAuth 2.0 Client → Add http://localhost:3000/callback to redirect URIs
 * 2. Google Cloud Console → APIs & Services → Enabled APIs
 *    → Enable "Google Search Console API" AND "Indexing API"
 * 3. Google Search Console → Add your email as owner/editor
 * 
 * Usage: node scripts/resubmit-sitemap.mjs
 */

import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import { randomBytes } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'sc_domain:convunit.net';
const SITEMAP_URL = 'https://convunit.net/sitemap.xml';
const CREDENTIALS_PATH = join(__dirname, '..', 'credentials.json');
const TOKEN_PATH = join(__dirname, '..', 'token.json');
const REDIRECT_PORT = 3000;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}/callback`;

// Top converter pages (highest impressions in GSC).
// IMPORTANT: these must match real unit IDs — see packages/converter-core/src/data/units.ts.
// `length` uses id `foot` (not `ft`) and `speed` uses id `kmh` (not `km`),
// so the URL slugs are `m-to-foot` and `kmh-to-mph`. Pushing non-existent URLs
// to the Indexing API reports soft 404s to Google, which harms the whole site.
const PRIORITY_URLS = [
  // Language homepages (`/` is omitted: it 301-redirects to `/en/`, and the
  // verification step only accepts a final 200.)
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
  // Top converter pages (highest impressions in GSC)
  'https://convunit.net/en/weight/kg-to-lb/',
  'https://convunit.net/en/length/cm-to-inch/',
  'https://convunit.net/en/temperature/c-to-f/',
  'https://convunit.net/en/speed/kmh-to-mph/',
  'https://convunit.net/en/data/mb-to-gb/',
  'https://convunit.net/en/area/sqm-to-sqft/',
  // Top performing pages (from GSC analytics)
  'https://convunit.net/es/energy/kcal-to-cal/',
  'https://convunit.net/de/power/w-to-ps/',
];

if (!existsSync(CREDENTIALS_PATH)) {
  console.error('❌ credentials.json not found.');
  process.exit(1);
}

const creds = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const { client_id, client_secret } = creds.web || creds.installed;

console.log('\n╔══════════════════════════════════════════════════╗');
console.log('║  ConvUnit — GSC + Indexing API Re-authorization  ║');
console.log('╚══════════════════════════════════════════════════╝\n');
console.log('Prerequisites (check before proceeding):');
console.log('  1. OAuth consent screen → your email as Test User');
console.log(`  2. OAuth client → http://localhost:${REDIRECT_PORT}/callback as redirect URI`);
console.log('  3. Indexing API enabled in Google Cloud Console');
console.log('  4. Search Console API enabled in Google Cloud Console');
console.log('\nThis will request BOTH webmasters + indexing scopes.');
console.log('Opening browser for authorization...\n');

const server = createServer();
const state = randomBytes(16).toString('hex');

// Request BOTH scopes in one authorization
const SCOPES = [
  'https://www.googleapis.com/auth/webmasters',
  'https://www.googleapis.com/auth/indexing',
].join(' ');

const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
  client_id,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: SCOPES,
  access_type: 'offline',
  state,
  prompt: 'consent',
});

console.log('🔑 Open this URL in your browser:\n');
console.log(authUrl);
console.log('\n');

const token = await new Promise((resolve, reject) => {
  server.listen(REDIRECT_PORT);
  server.on('request', async (req, res) => {
    const url = new URL(req.url, REDIRECT_URI);
    if (url.pathname !== '/callback' || url.searchParams.get('state') !== state) {
      res.writeHead(404).end('nope');
      return;
    }
    const code = url.searchParams.get('code');
    if (!code) {
      const error = url.searchParams.get('error') || 'unknown';
      res.writeHead(400).end(`Auth failed: ${error}`);
      reject(new Error(`OAuth error: ${error}`));
      return;
    }
    
    console.log('✅ Authorization code received, exchanging for token...');
    
    const tokenResp = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id,
        client_secret,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });
    const data = await tokenResp.json();
    if (!data.access_token) {
      res.writeHead(400).end(`Token exchange failed: ${JSON.stringify(data)}`);
      reject(new Error(JSON.stringify(data)));
      return;
    }
    data.expiry_date = Date.now() + (data.expires_in || 3600) * 1000;
    writeFileSync(TOKEN_PATH, JSON.stringify(data, null, 2));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' }).end(
      '<h1>✅ Authorization successful!</h1><p>You can close this tab and return to the terminal.</p>'
    );
    resolve(data.access_token);
  });
});

server.close();

const savedToken = JSON.parse(readFileSync(TOKEN_PATH, 'utf-8'));
console.log(`\n✅ Token saved. Scopes: ${savedToken.scope || SCOPES}`);

// Step 1: Submit sitemap
console.log('\n📋 Step 1: Submitting sitemap to GSC...');
const WEBMASTERS_API = 'https://www.googleapis.com/webmasters/v3';
const sitemapResp = await fetch(
  `${WEBMASTERS_API}/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`,
  { method: 'PUT', headers: { Authorization: `Bearer ${token}`, 'Content-Length': '0' } }
);

if (sitemapResp.status === 204 || sitemapResp.ok) {
  console.log('✅ Sitemap submitted successfully!');
} else {
  const err = await sitemapResp.json().catch(() => sitemapResp.statusText);
  console.error(`❌ Sitemap submission failed (HTTP ${sitemapResp.status}):`, JSON.stringify(err));
  if (sitemapResp.status === 403) console.log('   → Check: Search Console API enabled? Test user added?');
  if (sitemapResp.status === 404) console.log('   → Check: site URL format (sc_domain: vs sc-domain:)');
}

// Step 2: Verify every priority URL resolves before pushing to Google.
// Submitting URLs that 301/404 reports soft-404 signals that hurt the whole site.
console.log(`\n🔎 Step 2a: Verifying ${PRIORITY_URLS.length} URLs resolve with 200...`);
const verifiedUrls = [];
for (const url of PRIORITY_URLS) {
  try {
    const head = await fetch(url, { method: 'GET', redirect: 'manual' });
    if (head.status === 200) {
      verifiedUrls.push(url);
      console.log(`  ✅ ${url}`);
    } else {
      console.log(`  ⏭  ${url} — HTTP ${head.status} (skipped)`);
    }
  } catch (err) {
    console.log(`  ⏭  ${url} — ${err.message} (skipped)`);
  }
  await new Promise(r => setTimeout(r, 150));
}
if (verifiedUrls.length === 0) {
  console.error('❌ No URL passed verification. Refusing to submit to the Indexing API.');
  process.exit(1);
}

// Step 2: Push verified URLs via Indexing API
console.log(`\n🚀 Step 2b: Pushing ${verifiedUrls.length} verified URLs via Indexing API...`);

const INDEXING_API = 'https://indexing.googleapis.com/v3/urlNotifications:publish';
let successCount = 0;
let failCount = 0;

for (const url of verifiedUrls) {
  try {
    const resp = await fetch(INDEXING_API, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, type: 'URL_UPDATED' }),
    });

    if (resp.ok) {
      const data = await resp.json();
      console.log(`  ✅ ${url}`);
      successCount++;
    } else if (resp.status === 429) {
      console.log(`  ⏳ Rate limited. Waiting 10s before continuing...`);
      await new Promise(r => setTimeout(r, 10000));
      // Retry once
      const retryResp = await fetch(INDEXING_API, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url, type: 'URL_UPDATED' }),
      });
      if (retryResp.ok) {
        console.log(`  ✅ ${url} (retry)`);
        successCount++;
      } else {
        console.log(`  ❌ ${url} (retry failed)`);
        failCount++;
      }
    } else {
      const err = await resp.json().catch(() => resp.statusText);
      console.error(`  ❌ ${url} — ${resp.status}: ${err.error?.message || JSON.stringify(err)}`);
      failCount++;
    }
  } catch (err) {
    console.error(`  ❌ ${url} — Network error: ${err.message}`);
    failCount++;
  }

  // Rate limit: max ~10 requests/second
  await new Promise(r => setTimeout(r, 150));
}

console.log(`\n📊 Summary:`);
console.log(`   Sitemap: ${sitemapResp.ok ? '✅ submitted' : '❌ failed'}`);
console.log(`   URL verification: ${verifiedUrls.length}/${PRIORITY_URLS.length} returned 200`);
console.log(`   Indexing API: ${successCount}/${verifiedUrls.length} URLs pushed, ${failCount} failed`);

if (failCount > 0) {
  console.log('\n⚠️  Some URLs failed. Common reasons:');
  console.log('   - Token lacks indexing scope (re-authorize with this script)');
  console.log('   - Rate limiting (quota: ~200 requests/day)');
  console.log('   - URL not in verified site');
}

console.log('\n✅ Done! Check GSC in 1-2 days for indexing progress.');