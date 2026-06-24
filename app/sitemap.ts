import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://careofcanada.ca',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/about',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/resources',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/resources/resume-template',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/resources/interview-questions',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/resources/newcomer-links',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/resources/money-basics',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/videos',
      lastModified: new Date(),
    },
    {
      url: 'https://careofcanada.ca/talent-hub',
      lastModified: new Date(),
    },
  ]
}
