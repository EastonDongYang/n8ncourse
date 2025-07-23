import { 
  CheckCircleIcon, 
  ArrowDownTrayIcon,
  PlayCircleIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  HeartIcon,
  ArrowLeftIcon,
  DocumentTextIcon,
  CogIcon,
  ExclamationTriangleIcon,
  MagnifyingGlassIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const tutorialInfo = {
  title: 'Data Collection & Scraping',
  description: 'Website monitoring, price tracking, news aggregation, market research - Master automated data collection techniques',
  category: 'Data Collection',
  difficulty: 'Intermediate to Advanced',
  duration: '60 minutes',
  students: '1.9k',
  rating: 4.8,
  tags: ['Web Scraping', 'API Integration', 'Data Processing', 'Monitoring', 'Analytics'],
  author: 'n8n Academy',
  lastUpdated: '1 day ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Introduction to Data Collection',
    description: 'Understanding data sources and collection strategies',
    duration: '10 minutes',
    lessons: [
      'Types of data sources and collection methods',
      'Legal and ethical considerations for web scraping',
      'Overview of n8n data collection nodes',
      'Planning your data collection strategy',
      'Setting up data storage and processing pipelines'
    ]
  },
  {
    id: 2,
    title: 'Price Monitoring Alerts',
    description: 'Track product prices and get instant notifications',
    duration: '18 minutes',
    lessons: [
      'Setting up website monitoring workflows',
      'HTML parsing and data extraction techniques',
      'Price comparison and threshold alerts',
      'Handling dynamic content and JavaScript',
      'Creating price history tracking',
      'Multi-store price comparison automation'
    ]
  },
  {
    id: 3,
    title: 'Website Content Scraping',
    description: 'Extract and process website content automatically',
    duration: '20 minutes',
    lessons: [
      'Advanced CSS selector techniques',
      'Handling pagination and infinite scroll',
      'Image and file download automation',
      'Content cleaning and formatting',
      'Dealing with anti-scraping measures',
      'Rate limiting and respectful scraping',
      'Data validation and quality checks'
    ]
  },
  {
    id: 4,
    title: 'API Data Collection',
    description: 'Integrate with APIs for structured data access',
    duration: '12 minutes',
    lessons: [
      'REST API integration best practices',
      'Authentication and API key management',
      'Handling rate limits and pagination',
      'Data transformation and normalization',
      'Error handling and retry mechanisms',
      'Combining multiple API sources'
    ]
  }
]

const requirements = [
  'Understanding of HTML, CSS, and basic web technologies',
  'Familiarity with APIs and HTTP requests',
  'n8n instance (cloud or self-hosted)',
  'Target websites or APIs for data collection',
  'Data storage solution (database, spreadsheet, etc.)',
  'Basic knowledge of data processing concepts'
]

const features = [
  'Automated website monitoring',
  'Real-time price tracking',
  'Content extraction and processing',
  'API integration and data aggregation',
  'Data validation and cleaning',
  'Scheduled data collection',
  'Alert and notification systems',
  'Data export and storage',
  'Performance monitoring',
  'Error handling and recovery'
]

const applications = [
  { 
    title: 'Price Monitoring Alerts',
    description: 'Track product prices across multiple retailers',
    icon: '💰',
    complexity: 'Intermediate'
  },
  { 
    title: 'Website Content Scraping',
    description: 'Extract articles, reviews, and structured data',
    icon: '🕷️',
    complexity: 'Advanced'
  },
  { 
    title: 'API Data Collection',
    description: 'Aggregate data from multiple API sources',
    icon: '🔌',
    complexity: 'Intermediate'
  },
  { 
    title: 'News Aggregation',
    description: 'Collect and categorize news from various sources',
    icon: '📰',
    complexity: 'Intermediate'
  },
  { 
    title: 'Market Research',
    description: 'Gather competitor and market intelligence',
    icon: '📊',
    complexity: 'Advanced'
  },
  { 
    title: 'Social Media Monitoring',
    description: 'Track mentions and sentiment across platforms',
    icon: '👁️',
    complexity: 'Advanced'
  }
]

const dataSources = [
  { 
    category: 'E-commerce Platforms',
    sources: ['Amazon', 'eBay', 'Shopify stores', 'Product catalogs', 'Price comparison sites']
  },
  { 
    category: 'News & Media',
    sources: ['News websites', 'RSS feeds', 'Blog platforms', 'Press releases', 'Social media']
  },
  { 
    category: 'Financial Data',
    sources: ['Stock prices', 'Cryptocurrency exchanges', 'Financial news', 'Market data APIs']
  },
  { 
    category: 'Real Estate',
    sources: ['Property listings', 'Rental platforms', 'Market trends', 'Neighborhood data']
  },
  { 
    category: 'Job Markets',
    sources: ['Job boards', 'Company career pages', 'Salary data', 'Skills demand']
  }
]

export default function DataCollectionScrapingTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-green-50 via-white to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🔍</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {tutorialInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                    {tutorialInfo.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{tutorialInfo.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{tutorialInfo.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{tutorialInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="h-4 w-4" />
                    <span>{tutorialInfo.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(tutorialInfo.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>({tutorialInfo.rating})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>by {tutorialInfo.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {tutorialInfo.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-3">
                  Start Learning
                </button>
                <div className="text-sm text-gray-500">Updated {tutorialInfo.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Common Applications */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 mr-3 text-green-600" />
            Common Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                <div className="text-2xl mb-2">{app.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{app.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{app.description}</p>
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  app.complexity === 'Beginner' ? 'bg-green-100 text-green-800' :
                  app.complexity === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {app.complexity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3 text-green-600" />
            Popular Data Sources
          </h2>
          <div className="space-y-6">
            {dataSources.map((dataSource, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">{dataSource.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {dataSource.sources.map((source, sourceIndex) => (
                    <span key={sourceIndex} className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-800">
                      {source}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Prerequisites */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExclamationTriangleIcon className="h-6 w-6 mr-3 text-orange-600" />
            Prerequisites
          </h2>
          <div className="grid md:grid-cols-1 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{req}</span>
              </div>
            ))}
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-green-600" />
            What You'll Learn
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorial Sections */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-green-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-teal-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold">
                      {section.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{section.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-start">
                      <PlayCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Price Monitoring Workflow</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Schedule Trigger</h3>
                <p className="text-sm text-gray-600">Set up automated checks every hour or daily</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Web Scraping</h3>
                <p className="text-sm text-gray-600">Extract current price from target website</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Price Comparison</h3>
                <p className="text-sm text-gray-600">Compare with previous price and threshold</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Alert Notification</h3>
                <p className="text-sm text-gray-600">Send email or SMS when price drops below target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Ethical Scraping Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✅ Do's</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Respect robots.txt files</li>
                <li>• Use reasonable request intervals</li>
                <li>• Check website terms of service</li>
                <li>• Use APIs when available</li>
                <li>• Handle errors gracefully</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">❌ Don'ts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Overload servers with requests</li>
                <li>• Ignore rate limiting</li>
                <li>• Scrape personal data without consent</li>
                <li>• Violate copyright laws</li>
                <li>• Use scraped data commercially without permission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Data Collection & Scraping!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and become proficient in automated data collection!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Tutorial Now
            </button>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors border border-green-500 inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Resources
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 