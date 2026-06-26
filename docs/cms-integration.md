# CMS Integration Direction

The current ARATC website is built on Next.js 15.3 and uses a structured local content layer located in the `/content` directory (`services.js`, `projects.js`, `news.js`, etc.). This approach is fast, secure, and requires no database or external dependencies for the initial launch.

However, as the organization grows, you may want to connect a Headless CMS (like Sanity, Strapi, Contentful, or Payload CMS) so non-technical staff can update content without touching the code.

## How to migrate to a Headless CMS

1. **Select a CMS:** Choose a headless CMS that fits your team's budget and technical comfort (e.g., Sanity is highly recommended for Next.js).
2. **Replicate Content Models:** Create schemas in your chosen CMS that match the existing JavaScript objects in the `/content` directory. For example, your Service schema should have fields for `title`, `slug`, `summary`, `description`, `learningOutcomes` (array of strings), `targetGroups`, etc.
3. **Fetch Data from the CMS:**
   Replace the local imports in your Next.js pages:
   
   *Before:*
   ```javascript
   import { getServiceBySlug } from "@/content/services";
   ```
   
   *After:*
   ```javascript
   import { client } from "@/lib/cms";
   
   export async function getServiceBySlug(slug) {
     return await client.fetch(`*[_type == "service" && slug.current == $slug][0]`, { slug });
   }
   ```
4. **Environment Variables:** Add the CMS API keys and endpoint URLs to your `.env` file (and Vercel environment variables).
5. **Update Build Process:** If using static generation (`generateStaticParams`), ensure your CMS client can fetch all available slugs at build time.

## Benefits of the current architecture
Because the site is already separated into data files and UI components, switching to an external CMS later will only require changing the data-fetching functions. The UI components will not need to be rebuilt.
