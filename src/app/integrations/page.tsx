import { 
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowLeftIcon,
  CheckCircleIcon,
  ClockIcon,
  UserGroupIcon,
  StarIcon,
  TagIcon,
  PlayCircleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../components/Layout'

interface Integration {
  name: string
  description: string
  category: string
  icon: string
  useCases: string[]
  difficulty: string
  popularity: number
  rating: number
  students: string
  duration: string
  status: string
  tutorialLink?: string
  featured: boolean
}

const allIntegrations: Integration[] = [
  // Featured Integrations (with tutorials)
  {
    name: 'Notion',
    description: 'Project dashboards and content sync',
    category: 'Document Collaboration',
    icon: '📝',
    useCases: ['Project Management', 'Knowledge Base', 'Content Creation'],
    difficulty: 'Simple',
    popularity: 95,
    rating: 4.9,
    students: '12.5k',
    duration: '35 min',
    status: 'available',
    tutorialLink: '/integration/notion',
    featured: true
  },
  {
    name: 'Google Sheets',
    description: 'Reports, sync, and data export',
    category: 'Data Processing',
    icon: '📊',
    useCases: ['Data Analysis', 'Report Generation', 'Inventory Management'],
    difficulty: 'Simple',
    popularity: 98,
    rating: 4.9,
    students: '15.2k',
    duration: '30 min',
    status: 'available',
    tutorialLink: '/integration/google-sheets',
    featured: true
  },
  {
    name: 'OpenAI / Claude',
    description: 'Content generation, chatbot integration',
    category: 'AI Services',
    icon: '🤖',
    useCases: ['Content Creation', 'Smart Q&A', 'Data Analysis'],
    difficulty: 'Medium',
    popularity: 92,
    rating: 4.9,
    students: '8.7k',
    duration: '45 min',
    status: 'available',
    tutorialLink: '/integration/openai-claude',
    featured: true
  },
  {
    name: 'Telegram',
    description: 'Real-time notifications, bot control',
    category: 'Communication Tools',
    icon: '📱',
    useCases: ['Message Notifications', 'Group Management', 'Auto-reply'],
    difficulty: 'Simple',
    popularity: 88,
    rating: 4.8,
    students: '6.3k',
    duration: '25 min',
    status: 'available',
    tutorialLink: '/integration/telegram',
    featured: true
  },
  {
    name: 'Webhook.site',
    description: 'Debug and test your API workflows',
    category: 'Development Tools',
    icon: '🔗',
    useCases: ['API Testing', 'Data Debugging', 'Flow Validation'],
    difficulty: 'Medium',
    popularity: 85,
    rating: 4.7,
    students: '4.1k',
    duration: '20 min',
    status: 'available',
    tutorialLink: '/integration/webhook-site',
    featured: true
  },
  {
    name: 'Airtable',
    description: 'Flexible database and project management',
    category: 'Database',
    icon: '📊',
    useCases: ['Customer Management', 'Project Tracking', 'Inventory Management'],
    difficulty: 'Medium',
    popularity: 82,
    rating: 4.8,
    students: '5.9k',
    duration: '35 min',
    status: 'available',
    tutorialLink: '/integration/airtable',
    featured: true
  },
  
  // Additional Integrations (coming soon)
  {
    name: 'Slack',
    description: 'Team communication and workflow automation',
    category: 'Communication Tools',
    icon: '💬',
    useCases: ['Team Notifications', 'Workflow Updates', 'Bot Integration'],
    difficulty: 'Simple',
    popularity: 89,
    rating: 4.8,
    students: '7.2k',
    duration: '30 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Discord',
    description: 'Community management and bot automation',
    category: 'Communication Tools',
    icon: '🎮',
    useCases: ['Community Management', 'Bot Commands', 'Event Notifications'],
    difficulty: 'Medium',
    popularity: 76,
    rating: 4.7,
    students: '3.8k',
    duration: '40 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Gmail',
    description: 'Email automation and processing',
    category: 'Email Services',
    icon: '📧',
    useCases: ['Email Automation', 'Lead Processing', 'Customer Support'],
    difficulty: 'Medium',
    popularity: 91,
    rating: 4.8,
    students: '9.1k',
    duration: '35 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Shopify',
    description: 'E-commerce automation and order processing',
    category: 'E-commerce',
    icon: '🛒',
    useCases: ['Order Processing', 'Inventory Sync', 'Customer Management'],
    difficulty: 'Advanced',
    popularity: 78,
    rating: 4.6,
    students: '4.5k',
    duration: '60 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Stripe',
    description: 'Payment processing and financial automation',
    category: 'Payment Processing',
    icon: '💳',
    useCases: ['Payment Automation', 'Invoice Processing', 'Financial Reports'],
    difficulty: 'Advanced',
    popularity: 84,
    rating: 4.7,
    students: '6.2k',
    duration: '50 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Trello',
    description: 'Project management and task automation',
    category: 'Project Management',
    icon: '📋',
    useCases: ['Task Management', 'Project Tracking', 'Team Collaboration'],
    difficulty: 'Simple',
    popularity: 73,
    rating: 4.5,
    students: '3.2k',
    duration: '25 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'HubSpot',
    description: 'CRM automation and lead management',
    category: 'CRM',
    icon: '🎯',
    useCases: ['Lead Management', 'Sales Automation', 'Customer Analytics'],
    difficulty: 'Advanced',
    popularity: 81,
    rating: 4.6,
    students: '5.7k',
    duration: '55 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Salesforce',
    description: 'Enterprise CRM and sales automation',
    category: 'CRM',
    icon: '☁️',
    useCases: ['Sales Automation', 'Lead Scoring', 'Customer Journey'],
    difficulty: 'Advanced',
    popularity: 79,
    rating: 4.5,
    students: '4.8k',
    duration: '70 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'WordPress',
    description: 'Content management and website automation',
    category: 'Content Management',
    icon: '📝',
    useCases: ['Content Publishing', 'SEO Automation', 'User Management'],
    difficulty: 'Medium',
    popularity: 77,
    rating: 4.4,
    students: '4.1k',
    duration: '40 min',
    status: 'coming-soon',
    featured: false
  },
  {
    name: 'Zapier',
    description: 'Cross-platform automation and integration',
    category: 'Automation Tools',
    icon: '⚡',
    useCases: ['Workflow Migration', 'Multi-platform Sync', 'Legacy Integration'],
    difficulty: 'Medium',
    popularity: 68,
    rating: 4.3,
    students: '2.9k',
    duration: '45 min',
    status: 'coming-soon',
    featured: false
  }
]

const categories = [
  'All Categories',
  'AI Services',
  'Communication Tools',
  'Data Processing',
  'Database',
  'Development Tools',
  'Document Collaboration',
  'E-commerce',
  'Email Services',
  'Payment Processing',
  'Project Management',
  'CRM',
  'Content Management',
  'Automation Tools'
]

const difficulties = ['All Levels', 'Simple', 'Medium', 'Advanced']

const integrationStats = [
  { count: '16', label: 'Total Integrations' },
  { count: '6', label: 'Available Now' },
  { count: '10', label: 'Coming Soon' },
  { count: '4.7', label: 'Avg Rating' }
]

export default function IntegrationsPage() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              All n8n Integrations
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover and learn how to integrate n8n with your favorite tools and services. 
              Build powerful automated workflows with our comprehensive integration tutorials.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {integrationStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.count}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search integrations..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-4">
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Integrations */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Featured Integrations</h2>
            <span className="text-sm text-gray-500">6 tutorials available</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIntegrations.filter(integration => integration.featured).map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{integration.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {integration.name}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{integration.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {integration.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{integration.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>{integration.students} students</span>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                    integration.difficulty === 'Simple' ? 'bg-green-100 text-green-800' :
                    integration.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    <span>{integration.difficulty}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-xs font-medium text-gray-700 mb-2">Common Uses:</div>
                  <div className="flex flex-wrap gap-1">
                    {integration.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                        {useCase}
                      </span>
                    ))}
                    {integration.useCases.length > 2 && (
                      <span className="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                        +{integration.useCases.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  {integration.tutorialLink ? (
                    <Link 
                      href={integration.tutorialLink} 
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                    >
                      <PlayCircleIcon className="h-4 w-4 mr-1" />
                      Start Tutorial
                    </Link>
                  ) : (
                    <span className="inline-flex items-center text-gray-400 font-semibold text-sm">
                      <PlayCircleIcon className="h-4 w-4 mr-1" />
                      Start Tutorial
                    </span>
                  )}
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-600 rounded-full transition-all duration-1000"
                        style={{ width: `${integration.popularity}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{integration.popularity}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coming Soon Integrations */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Coming Soon</h2>
            <span className="text-sm text-gray-500">10 integrations in development</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allIntegrations.filter(integration => !integration.featured).map((integration, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 opacity-75 relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    Coming Soon
                  </span>
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl opacity-60">{integration.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {integration.name}
                      </h3>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {integration.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  {integration.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{integration.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="h-4 w-4" />
                    <span>{integration.students} interested</span>
                  </div>
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${
                    integration.difficulty === 'Simple' ? 'bg-green-100 text-green-800' :
                    integration.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    <span>{integration.difficulty}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="text-xs font-medium text-gray-700 mb-2">Planned Features:</div>
                  <div className="flex flex-wrap gap-1">
                    {integration.useCases.slice(0, 2).map((useCase, useCaseIndex) => (
                      <span key={useCaseIndex} className="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                        {useCase}
                      </span>
                    ))}
                    {integration.useCases.length > 2 && (
                      <span className="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                        +{integration.useCases.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="inline-flex items-center text-gray-400 font-semibold text-sm cursor-not-allowed">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    In Development
                  </button>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-400 rounded-full transition-all duration-1000"
                        style={{ width: `${integration.popularity}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-400">{integration.popularity}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Stay Updated!</h2>
          <p className="text-lg mb-6 opacity-90">
            Get notified when new integration tutorials are released. Join 12,000+ automation enthusiasts!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 