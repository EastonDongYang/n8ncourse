import { 
  ArrowDownTrayIcon, 
  HeartIcon, 
  EyeIcon,
  ClockIcon,
  TagIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  StarIcon,
  UserGroupIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../components/Layout'

const useCases = [
  {
    title: 'Social Media Automation',
    description: 'Auto-post content, monitor mentions, reply to comments, data analysis - Complete social media workflow automation',
    category: 'Social Media',
    difficulty: 'Beginner to Intermediate',
    duration: '45 minutes',
    students: '2.8k',
    rating: 4.9,
    emoji: '📱',
    tags: ['Twitter', 'Telegram', 'Discord', 'Auto-posting', 'Monitoring'],
    tutorialLink: '/tutorial/social-media-automation',
    examples: ['X/Twitter Auto-posting', 'Telegram Bots', 'Discord Message Management'],
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-800'
  },
  {
    title: 'Data Collection & Scraping',
    description: 'Website monitoring, price tracking, news aggregation, market research - Master automated data collection techniques',
    category: 'Data Processing',
    difficulty: 'Intermediate to Advanced',
    duration: '60 minutes',
    students: '1.9k',
    rating: 4.8,
    emoji: '🔍',
    tags: ['Web Scraping', 'API Integration', 'Data Processing', 'Monitoring'],
    tutorialLink: '/tutorial/data-collection-scraping',
    examples: ['Price Monitoring Alerts', 'Website Content Scraping', 'API Data Collection'],
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-800'
  },
  {
    title: 'AI-Powered Email Writers',
    description: 'Intelligently generate email content, auto-reply, personalized marketing - Harness AI for professional email automation',
    category: 'AI Automation',
    difficulty: 'Intermediate to Advanced',
    duration: '50 minutes',
    students: '1.5k',
    rating: 4.9,
    emoji: '🤖',
    tags: ['OpenAI', 'Email Marketing', 'Auto-reply', 'Personalization'],
    tutorialLink: '/tutorial/ai-powered-email-writers',
    examples: ['Customer Service Auto-reply', 'Marketing Email Generation', 'Content Summary Emails'],
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-800'
  },
  {
    title: 'Custom API Integrations',
    description: 'Connect different systems, data synchronization, business process automation - Master advanced API integration techniques',
    category: 'API Integration',
    difficulty: 'Intermediate to Advanced',
    duration: '75 minutes',
    students: '2.1k',
    rating: 4.8,
    emoji: '🔗',
    tags: ['API Integration', 'Data Sync', 'Business Automation', 'System Integration'],
    tutorialLink: '/tutorial/custom-api-integrations',
    examples: ['CRM System Integration', 'E-commerce Platform Sync', 'Payment Processing Automation'],
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-800'
  },
  {
    title: 'Internal Tools Development',
    description: 'Dashboards, report generation, logging, team collaboration - Build powerful internal tools and automation systems',
    category: 'Internal Tools',
    difficulty: 'Intermediate to Advanced',
    duration: '90 minutes',
    students: '1.7k',
    rating: 4.9,
    emoji: '⚙️',
    tags: ['Dashboards', 'Reports', 'Team Tools', 'Automation'],
    tutorialLink: '/tutorial/internal-tools-development',
    examples: ['Performance Dashboards', 'Daily Report Auto-generation', 'Team Notification Systems'],
    color: 'bg-indigo-50 border-indigo-200',
    textColor: 'text-indigo-800'
  },
  {
    title: 'E-commerce Automation',
    description: 'Order processing, inventory management, customer communications, sales analytics - Complete e-commerce workflow automation',
    category: 'E-commerce',
    difficulty: 'Advanced',
    duration: '85 minutes',
    students: '1.3k',
    rating: 4.7,
    emoji: '🛒',
    tags: ['E-commerce', 'Order Processing', 'Inventory', 'Customer Service'],
    tutorialLink: '#',
    examples: ['Order Processing Automation', 'Inventory Sync', 'Customer Communication'],
    color: 'bg-pink-50 border-pink-200',
    textColor: 'text-pink-800'
  },
  {
    title: 'Marketing Automation',
    description: 'Lead generation, email campaigns, social media marketing, analytics tracking - Comprehensive marketing workflow automation',
    category: 'Marketing',
    difficulty: 'Intermediate',
    duration: '65 minutes',
    students: '2.4k',
    rating: 4.8,
    emoji: '📧',
    tags: ['Email Marketing', 'Lead Generation', 'Social Media', 'Analytics'],
    tutorialLink: '#',
    examples: ['Email Campaign Automation', 'Lead Scoring', 'Social Media Scheduling'],
    color: 'bg-cyan-50 border-cyan-200',
    textColor: 'text-cyan-800'
  },
  {
    title: 'DevOps & Monitoring',
    description: 'Server monitoring, deployment automation, alert systems, performance tracking - Essential DevOps workflow automation',
    category: 'DevOps',
    difficulty: 'Advanced',
    duration: '95 minutes',
    students: '1.1k',
    rating: 4.6,
    emoji: '🔧',
    tags: ['DevOps', 'Monitoring', 'Deployment', 'Alerts'],
    tutorialLink: '#',
    examples: ['Server Monitoring', 'Automated Deployments', 'Alert Management'],
    color: 'bg-gray-50 border-gray-200',
    textColor: 'text-gray-800'
  }
]

const categories = [
  'All Categories',
  'Social Media',
  'Data Processing', 
  'AI Automation',
  'API Integration',
  'Internal Tools',
  'E-commerce',
  'Marketing',
  'DevOps'
]

const difficulties = [
  'All Levels',
  'Beginner',
  'Intermediate', 
  'Advanced'
]

export default function UseCasesPage() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-n8n-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All Use Cases & Tutorials
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of n8n automation use cases. From beginner-friendly workflows to advanced enterprise solutions.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary-600">{useCases.length}</div>
                <div className="text-sm text-gray-600">Use Cases</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary-600">12k+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary-600">4.8</div>
                <div className="text-sm text-gray-600">Avg Rating</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search use cases..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <FunnelIcon className="h-5 w-5 text-gray-400" />
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            {/* Difficulty Filter */}
            <select className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              {difficulties.map((difficulty) => (
                <option key={difficulty} value={difficulty}>{difficulty}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 ${useCase.color} hover:shadow-xl transition-all duration-300 overflow-hidden`}>
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{useCase.emoji}</div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{useCase.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${useCase.textColor} bg-opacity-20`}>
                    {useCase.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                    {useCase.difficulty}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {useCase.description}
                </p>
                
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-3 w-3" />
                    <span>{useCase.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="h-3 w-3" />
                    <span>{useCase.students}</span>
                  </div>
                </div>
                
                {/* Examples */}
                <div className="space-y-2 mb-4">
                  <div className={`text-xs font-medium ${useCase.textColor} mb-2`}>
                    Common Applications:
                  </div>
                  {useCase.examples.slice(0, 3).map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-xs text-gray-600">
                      <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {useCase.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      {tag}
                    </span>
                  ))}
                  {useCase.tags.length > 3 && (
                    <span className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      +{useCase.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Card Footer */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                {useCase.tutorialLink !== '#' ? (
                  <Link 
                    href={useCase.tutorialLink}
                    className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-center block"
                  >
                    View Tutorial →
                  </Link>
                ) : (
                  <button className="w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-lg font-semibold cursor-not-allowed text-center">
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Use Cases Coming Soon!</h3>
            <p className="text-gray-600 mb-6">
              We're constantly adding new use cases and tutorials. Subscribe to our newsletter to get notified when new content is available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Subscribe for Updates
              </button>
              <button className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                Request a Use Case
              </button>
            </div>
          </div>
        </div>

        {/* Featured Success Stories */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-gray-600">See how our community is using these automation workflows</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">TM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Tech Startup</div>
                    <div className="text-sm text-gray-500">Social Media Team</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-3">
                  "Social media automation saved us 15 hours per week and increased our engagement by 40%."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">EC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">E-commerce Store</div>
                    <div className="text-sm text-gray-500">Operations Manager</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-3">
                  "Data collection automation helped us track competitor prices and optimize our pricing strategy."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">CS</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">SaaS Company</div>
                    <div className="text-sm text-gray-500">Customer Success</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm italic mb-3">
                  "AI-powered email automation reduced our response time by 80% while maintaining quality."
                </p>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 