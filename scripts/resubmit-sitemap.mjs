/**
 * Google Search Console — Sitemap Resubmission Script
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

if (!existsSync(CREDENTIALS_PATH)) {
  console.error('credentials.json not found.');
  process.exit(1);
}

const creds = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const { client_id, client_secret } = creds.web || creds.installed;

console.log('\nMake sure:');
console.log('1. OAuth consent screen -> your email as Test User');
console.log(`2. OAuth client -> http://localhost:${REDIRECT_PORT}/callback as redirect URI`);
console.log('\nReady? Open the URL that appears below and log in.\n');

const server = createServer();
const state = randomBytes(16).toString('hex');
const authUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' + new URLSearchParams({
  client_id,
  redirect_uri: REDIRECT_URI,
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/webmasters',
  access_type: 'offline',
  state,
  prompt: 'consent',
});

console.log('URL: ' + authUrl + '\n');

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
      res.writeHead(400).end('Auth failed');
      reject(new Error(url.searchParams.get('error')));
      return;
    }
    const tokenResp = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ code, client_id, client_secret, redirect_uri: REDIRECT_URI, grant_type: 'authorization_code' }),
    });
    const data = await tokenResp.json();
    if (!data.access_token) {
      res.writeHead(400).end('Token exchange failed');
      reject(new Error(JSON.stringify(data)));
      return;
    }
    data.expiry_date = Date.now() + (data.expires_in || 3600) * 1000;
    writeFileSync(TOKEN_PATH, JSON.stringify(data));
    res.writeHead(200).end('OK');
    resolve(data.access_token);
  });
});

server.close();

console.log('Submitting sitemap...');
// Correct endpoint: webmasters v3 (not searchconsole v1)
const API = 'https://www.googleapis.com/webmasters/v3';
const resp = await fetch(
  `${API}/sites/${encodeURIComponent(SITE_URL)}/sitemaps/${encodeURIComponent(SITEMAP_URL)}`,
  { method: 'PUT', headers: { Authorization: `Bearer ${token}`, 'Content-Length': '0' } }
);

if (resp.status === 204) {
  console.log('DONE! Sitemap (48,925 URLs) submitted to Google Search Console.');
} else {
  const err = await resp.json().catch(() => resp.statusText);
  console.error(`FAILED (HTTP ${resp.status}):`, JSON.stringify(err));
  if (resp.status === 403) console.log('Check: Search Console API enabled? Test user added?');
  if (resp.status === 404) console.log('Check: site URL format (sc_domain: vs sc-domain:)');
}
