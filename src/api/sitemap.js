export default function handler(req, res) {
  // Set headers to prevent all caching and conditional requests
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate, proxy-revalidate, max-age=0');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Content-Type', 'application/xml');

  // Remove headers that could cause conditional requests
  res.removeHeader('ETag');
  res.removeHeader('Last-Modified');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
      <loc>https://typing-test-one-orpin.vercel.app/</loc>
    </url>

    <url>
      <loc>https://typing-test-one-orpin.vercel.app/typing-test</loc>
    </url>

    <url>
      <loc>https://typing-test-one-orpin.vercel.app/typing-practice</loc>
    </url>

    <url>
      <loc>https://typing-test-one-orpin.vercel.app/learn-typing</loc>
    </url>

    <url>
      <loc>https://typing-test-one-orpin.vercel.app/improve-typing-speed</loc>
    </url>

    <url>
      <loc>https://typing-test-one-orpin.vercel.app/wpm-calculator</loc>
    </url>

  </urlset>`;

  res.status(200).send(sitemap);
}