import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://n8ncourse.org'
  
  // 静态页面
  const staticPages = [
    '',
    '/getting-started',
    '/integrations',
    '/use-cases',
    '/templates',
    '/real-world-examples',
    '/advanced-skills',
    '/blog',
    '/workflows',
    '/download-templates',
  ]

  // 集成页面
  const integrationPages = [
    '/integration/airtable',
    '/integration/google-sheets',
    '/integration/notion',
    '/integration/openai-claude',
    '/integration/telegram',
    '/integration/webhook-site',
  ]

  // 模板页面
  const templatePages = [
    '/template/aggregate-rss-notion',
    '/template/auto-post-tweets-telegram',
    '/template/daily-report-generation',
    '/template/ecommerce-order-processing',
    '/template/generate-summaries-openai-email',
    '/template/sync-form-google-sheets',
  ]

  // 教程页面
  const tutorialPages = [
    '/tutorial/ai-powered-email-writers',
    '/tutorial/custom-api-integrations',
    '/tutorial/data-collection-scraping',
    '/tutorial/internal-tools-development',
    '/tutorial/social-media-automation',
  ]

  // 合并所有页面
  const allPages = [
    ...staticPages,
    ...integrationPages,
    ...templatePages,
    ...tutorialPages,
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
} 