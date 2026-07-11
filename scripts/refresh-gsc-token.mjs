/**
 * Google Search Console — Token Refresh Script
 * Refreshes the access token using the refresh token from token.json
 * If no refresh token exists, guides user to re-authorize.
 * 
 * Usage: node scripts/refresh-gsc-token.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, '..', 'credentials.json');
const TOKEN_PATH = join(__dirname, '..', 'token.json');

const creds = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const { client_id, client_secret } = creds.web || creds.installed;
const tokenData = JSON.parse(readFileSync(TOKEN_PATH, 'utf-8'));

if (tokenData.refresh_token) {
  console.log('Found refresh token. Refreshing access token...');
  const resp = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id,
      client_secret,
      refresh_token: tokenData.refresh_token,
      grant_type: 'refresh_token',
    }),
  });
  const data = await resp.json();
  if (data.access_token) {
    data.refresh_token = data.refresh_token || tokenData.refresh_token;
    data.expiry_date = Date.now() + (data.expires_in || 3600) * 1000;
    writeFileSync(TOKEN_PATH, JSON.stringify(data, null, 2));
    console.log('✅ Token refreshed successfully!');
    console.log(`New expiry: ${new Date(data.expiry_date).toISOString()}`);
  } else {
    console.error('❌ Token refresh failed:', data);
    process.exit(1);
  }
} else {
  console.log('❌ No refresh token found in token.json.');
  console.log('');
  console.log('You need to re-authorize. Run:');
  console.log('  node scripts/resubmit-sitemap.mjs');
  console.log('');
  console.log('Or manually re-authorize in Google Cloud Console:');
  console.log('1. Go to https://console.cloud.google.com/apis/credentials');
  console.log('2. Find your OAuth 2.0 client');
  console.log('3. Add http://localhost:3000/callback to redirect URIs');
  console.log('4. Run: node scripts/resubmit-sitemap.mjs');
  console.log('');
  console.log('Alternative: Submit sitemap via GSC web interface:');
  console.log('1. Go to https://search.google.com/search-console');
  console.log('2. Select convunit.net property');
  console.log('3. Go to Sitemaps → Delete old sitemap → Submit https://convunit.net/sitemap.xml');
  process.exit(1);
}
