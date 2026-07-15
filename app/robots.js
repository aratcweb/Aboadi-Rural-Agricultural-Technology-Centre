import { siteUrl } from "@/content/site";

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
