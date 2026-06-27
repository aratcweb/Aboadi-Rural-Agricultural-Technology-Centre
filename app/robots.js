const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.aboadiruralagriculturaltechnologycentre.com";

const baseUrl = siteUrl.replace(/\/$/, "");

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
