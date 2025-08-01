import { ArrowDownTrayIcon, HeartIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const templates = [
  {
    title: 'Monitor Twitter and Save to Airtable',
    description: 'Search Twitter/X for specific keywords, automatically collect and organize tweets in Airtable database with deduplication',
    category: 'Social Media',
    difficulty: 'Beginner',
    downloads: '2.3k',
    likes: 156,
    emoji: '📊',
    tags: ['Twitter', 'Airtable', 'Data Collection'],
    estimatedTime: '15 minutes',
    slug: 'auto-post-tweets-telegram'
  },
  {
    title: 'Sync Form Responses to Google Sheets',
    description: 'Automatically collect website form data, sync to Google Sheets in real-time with data validation and notifications',
    category: 'Data Management',
    difficulty: 'Beginner',
    downloads: '4.1k',
    likes: 289,
    emoji: '📊',
    tags: ['Forms', 'Google Sheets', 'Data Sync'],
    estimatedTime: '20 minutes',
    slug: 'sync-form-google-sheets'
  },
  {
    title: 'Generate Summaries with OpenAI & Email',
    description: 'Use AI to automatically generate content summaries, format and send via email to specified recipients',
    category: 'AI Automation',
    difficulty: 'Intermediate',
    downloads: '1.8k',
    likes: 134,
    emoji: '🤖',
    tags: ['OpenAI', 'Email', 'Content Generation'],
    estimatedTime: '30 minutes',
    slug: 'generate-summaries-openai-email'
  },
  {
    title: 'Aggregate RSS Feeds to Notion Database',
    description: 'Automatically fetch multiple RSS sources, intelligently categorize and organize into Notion database',
    category: 'Content Management',
    difficulty: 'Intermediate',
    downloads: '956',
    likes: 78,
    emoji: '📰',
    tags: ['RSS', 'Notion', 'Content Aggregation'],
    estimatedTime: '25 minutes',
    slug: 'aggregate-rss-notion'
  },
  {
    title: 'E-commerce Order Processing Automation',
    description: 'Automatically process order notifications, update inventory, send confirmation emails, sync to CRM system',
    category: 'E-commerce',
    difficulty: 'Advanced',
    downloads: '723',
    likes: 92,
    emoji: '🛒',
    tags: ['E-commerce', 'CRM', 'Order Processing'],
    estimatedTime: '45 minutes',
    slug: 'ecommerce-order-processing'
  },
  {
    title: 'Daily Report Generation & Distribution',
    description: 'Automatically collect data from various platforms, generate daily reports, and schedule delivery to team members',
    category: 'Team Collaboration',
    difficulty: 'Advanced',
    downloads: '1.2k',
    likes: 167,
    emoji: '📈',
    tags: ['Reports', 'Team', 'Scheduled Tasks'],
    estimatedTime: '40 minutes',
    slug: 'daily-report-generation'
  }
]

export default function FeaturedTemplates() {
  return (
    <section id="templates" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Plug & Play Automation Templates
          </h2>
          <p className="section-subtitle">
            Curated practical workflow templates, one-click copy and import to quickly start your automation journey
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template, index) => (
            <div key={index} className="card p-6 group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{template.emoji}</div>
                  <div>
                    <span className="inline-flex items-center rounded-full bg-primary-100 px-2 py-1 text-xs font-medium text-primary-800">
                      {template.category}
                    </span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600">{template.difficulty}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-600">{template.estimatedTime}</span>
                    </div>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-gray-100 rounded">
                  <HeartIcon className="h-4 w-4 text-gray-400 hover:text-red-500" />
                </button>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {template.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    <span>{template.downloads}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartIcon className="h-4 w-4" />
                    <span>{template.likes}</span>
                  </div>
                </div>
                {template.slug ? (
                  <Link 
                    href={`/template/${template.slug}`}
                    className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                  >
                    View Details →
                  </Link>
                ) : (
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm">
                    View Details →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center items-center gap-4">
          <Link 
            href="/templates"
            className="bg-white text-primary-600 border-2 border-primary-600 px-4 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200 inline-flex items-center"
          >
            <EyeIcon className="h-5 w-5 mr-2" />
            Browse All Templates
          </Link>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200">
            Submit Your Template
          </button>
        </div>

        {/* 模板统计 */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">Available Templates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">50k+</div>
                <div className="text-sm text-gray-600 mt-1">Total Downloads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">20+</div>
                <div className="text-sm text-gray-600 mt-1">App Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">99%</div>
                <div className="text-sm text-gray-600 mt-1">User Satisfaction</div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
} 