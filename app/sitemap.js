import { services } from "@/content/services";
import { projects } from "@/content/projects";
import { news } from "@/content/news";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.aboadiruralagriculturaltechnologycentre.com";

const baseUrl = siteUrl.replace(/\/$/, "");
const lastModified = new Date("2026-06-27");

const staticRoutes = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "weekly", priority: 0.8 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.8 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.6 },
  { path: "/leadership", changeFrequency: "monthly", priority: 0.7 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.7 },
  { path: "/news", changeFrequency: "weekly", priority: 0.8 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

function toUrl(path) {
  return `${baseUrl}${path}`;
}

function toLastModified(value) {
  if (!value) {
    return lastModified;
  }

  const date = new Date(value);
  return Number.isNaN(date.valueOf()) ? lastModified : date;
}

export default function sitemap() {
  const routes = staticRoutes.map((route) => ({
    url: toUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const serviceRoutes = services
    .filter(service => service.status === "published")
    .map((service) => ({
      url: toUrl(`/services/${service.slug}`),
      lastModified: toLastModified(service.updatedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const projectRoutes = projects
    .filter(project => project.publicationStatus === "published")
    .map((project) => ({
      url: toUrl(`/projects/${project.slug}`),
      lastModified: toLastModified(project.updatedAt || project.endDate),
      changeFrequency: "monthly",
      priority: 0.7,
    }));

  const newsRoutes = news
    .filter(item => item.status === "published")
    .map((item) => ({
      url: toUrl(`/news/${item.slug}`),
      lastModified: toLastModified(item.updatedAt || item.date),
      changeFrequency: "yearly",
      priority: 0.6,
    }));

  return [...routes, ...serviceRoutes, ...projectRoutes, ...newsRoutes];
}
