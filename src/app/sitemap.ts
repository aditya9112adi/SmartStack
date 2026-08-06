import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smart-stack-3gik.vercel.app';
  
  // We can dynamically generate this list in the future based on CMS data
  const routes = [
    '',
    '/about',
    '/services',
    '/portfolio',
    '/solutions',
    '/blog',
    '/careers',
    '/contact',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
