import { 
  ArrowDownTrayIcon, 
  HeartIcon, 
  EyeIcon,
  ClockIcon,
  TagIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
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
    slug: 'auto-post-tweets-telegram',
    rating: 4.8
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
    slug: 'sync-form-google-sheets',
    rating: 4.9
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
    slug: 'generate-summaries-openai-email',
    rating: 4.7
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
    slug: 'aggregate-rss-notion',
    rating: 4.6
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
    slug: 'ecommerce-order-processing',
    rating: 4.8
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
    slug: 'daily-report-generation',
    rating: 4.9
  }
]

const categories = [
  'All Categories',
  'Social Media',
  'Data Management', 
  'AI Automation',
  'Content Management',
  'E-commerce',
  'Team Collaboration'
]

const difficulties = [
  'All Levels',
  'Beginner',
  'Intermediate', 
  'Advanced'
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              n8n Automation Templates
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover our curated collection of ready-to-use automation workflows. 
              Copy, customize, and deploy in minutes to streamline your business processes.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>{templates.length} Templates Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>50k+ Total Downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>99% User Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="lg:w-40">
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                {difficulties.map((difficulty, index) => (
                  <option key={index} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>

            {/* Filter Button */}
            <button className="lg:w-auto px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center">
              <FunnelIcon className="h-5 w-5 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
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
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {template.description}
              </p>

              <div className="flex flex-wrap gap-1 mb-4">
                {template.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    <TagIcon className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(template.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">({template.rating})</span>
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
                <Link 
                  href={`/template/${template.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm inline-flex items-center"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white text-primary-600 border-2 border-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200">
            Load More Templates
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-primary-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Submit your own template or request a custom automation workflow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Submit Template
            </button>
            <button className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500">
              Request Custom Template
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 