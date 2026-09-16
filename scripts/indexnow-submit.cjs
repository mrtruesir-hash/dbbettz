// One-off IndexNow submission script. Run after the key file is live in production.
// Usage: node scripts/indexnow-submit.cjs

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'dbbettz.com';
const KEY = '1f7e82001b4ab429f8189ca1ab76a3a4';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

if (urls.length === 0) {
  console.error('No URLs found in sitemap.xml');
  process.exit(1);
}

console.log(`Submitting ${urls.length} URLs to IndexNow...`);

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls,
});

const req = https.request(
  {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(body),
    },
  },
  (res) => {
    let data = '';
    res.on('data', (chunk) => (data += chunk));
    res.on('end', () => {
      console.log(`Status: ${res.statusCode}`);
      if (data) console.log(`Body: ${data}`);
    });
  }
);

req.on('error', (err) => {
  console.error('Request failed:', err.message);
  process.exit(1);
});

req.write(body);
req.end();
