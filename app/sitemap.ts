import type { MetadataRoute } from "next";

const baseUrl = "https://careofcanada.ca";

const routes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/first-30-days", changeFrequency: "monthly", priority: 0.9 },
  { path: "/community", changeFrequency: "daily", priority: 0.9 },
  { path: "/community-partners", changeFrequency: "weekly", priority: 0.8 },
  { path: "/talent-hub", changeFrequency: "weekly", priority: 0.8 },
  { path: "/resources/resume-template", changeFrequency: "monthly", priority: 0.7 },
  {
    path: "/resources/interview-questions",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  { path: "/resources/newcomer-links", changeFrequency: "monthly", priority: 0.7 },
  { path: "/resources/money-basics", changeFrequency: "monthly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
