import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { news } from "@/content/news";

export default function sitemap() {
  const baseUrl = 'https://www.aboadiruralagriculturaltechnologycentre.com';

  // Base routes
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/gallery',
    '/leadership',
    '/partners',
    '/news',
    '/contact',
    '/privacy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic routes
  const serviceRoutes = services
    .filter(service => service.status === "published")
    .map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    ...(service.updatedAt && { lastModified: new Date(service.updatedAt) }),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const projectRoutes = projects
    .filter(project => project.publicationStatus === "published")
    .map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    ...(project.updatedAt && { lastModified: new Date(project.updatedAt) }),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const newsRoutes = news
    .filter(item => item.status === "published")
    .map((item) => ({
    url: `${baseUrl}/news/${item.slug}`,
    ...((item.updatedAt || item.date) && { lastModified: new Date(item.updatedAt || item.date) }),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...routes, ...serviceRoutes, ...projectRoutes, ...newsRoutes];
}
