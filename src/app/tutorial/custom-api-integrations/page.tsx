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
  LinkIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const tutorialInfo = {
  title: 'Custom API Integrations',
  description: 'Connect different systems, data synchronization, business process automation - Master advanced API integration techniques',
  category: 'API Integration',
  difficulty: 'Intermediate to Advanced',
  duration: '75 minutes',
  students: '2.1k',
  rating: 4.8,
  tags: ['API Integration', 'Data Sync', 'Business Automation', 'System Integration', 'Webhooks'],
  author: 'n8n Academy',
  lastUpdated: '1 day ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'API Integration Fundamentals',
    description: 'Understanding APIs and integration patterns',
    duration: '15 minutes',
    lessons: [
      'REST API principles and best practices',
      'Authentication methods (API keys, OAuth, JWT)',
      'HTTP methods and status codes',
      'API documentation reading and analysis',
      'Rate limiting and error handling strategies',
      'Testing APIs with Postman and curl'
    ]
  },
  {
    id: 2,
    title: 'CRM System Integration',
    description: 'Connect and synchronize CRM platforms',
    duration: '25 minutes',
    lessons: [
      'Salesforce API integration setup',
      'HubSpot CRM data synchronization',
      'Lead scoring and qualification automation',
      'Contact management and deduplication',
      'Sales pipeline automation',
      'Custom field mapping and validation',
      'Real-time data sync workflows'
    ]
  },
  {
    id: 3,
    title: 'E-commerce Platform Sync',
    description: 'Automate e-commerce operations and data flow',
    duration: '20 minutes',
    lessons: [
      'Shopify API integration and webhooks',
      'WooCommerce data synchronization',
      'Inventory management automation',
      'Order processing workflows',
      'Customer data synchronization',
      'Product catalog management',
      'Multi-platform inventory sync'
    ]
  },
  {
    id: 4,
    title: 'Payment Processing Automation',
    description: 'Integrate payment systems and financial workflows',
    duration: '15 minutes',
    lessons: [
      'Stripe API integration and webhooks',
      'PayPal payment processing automation',
      'Invoice generation and management',
      'Subscription billing automation',
      'Financial reporting and analytics',
      'Fraud detection and prevention'
    ]
  }
]

const requirements = [
  'Understanding of REST APIs and HTTP protocols',
  'Basic knowledge of JSON and data formats',
  'API credentials for target systems',
  'n8n instance (cloud or self-hosted)',
  'Database or storage system for data sync',
  'Understanding of authentication methods',
  'Basic programming concepts'
]

const features = [
  'Multi-system data synchronization',
  'Real-time API integrations',
  'Custom authentication handling',
  'Error handling and retry mechanisms',
  'Data transformation and mapping',
  'Webhook processing and management',
  'Rate limiting and throttling',
  'API monitoring and logging',
  'Batch processing capabilities',
  'Custom business logic implementation'
]

const applications = [
  { 
    title: 'CRM System Integration',
    description: 'Sync customer data across sales and marketing platforms',
    icon: '👥',
    complexity: 'Advanced'
  },
  { 
    title: 'E-commerce Platform Sync',
    description: 'Automate inventory and order management',
    icon: '🛒',
    complexity: 'Intermediate'
  },
  { 
    title: 'Payment Processing Automation',
    description: 'Handle payments, invoicing, and financial workflows',
    icon: '💳',
    complexity: 'Advanced'
  },
  { 
    title: 'Marketing Automation',
    description: 'Connect email, social media, and analytics platforms',
    icon: '📧',
    complexity: 'Intermediate'
  },
  { 
    title: 'Data Warehouse Integration',
    description: 'ETL processes and business intelligence workflows',
    icon: '🏢',
    complexity: 'Advanced'
  },
  { 
    title: 'Third-party Service Integration',
    description: 'Connect external services and APIs',
    icon: '🔗',
    complexity: 'Intermediate'
  }
]

const integrationPatterns = [
  { 
    pattern: 'Real-time Sync',
    description: 'Immediate data synchronization using webhooks',
    useCase: 'Order processing, customer updates',
    complexity: 'High'
  },
  { 
    pattern: 'Batch Processing',
    description: 'Scheduled bulk data operations',
    useCase: 'Daily reports, inventory updates',
    complexity: 'Medium'
  },
  { 
    pattern: 'Event-driven',
    description: 'Trigger-based automation workflows',
    useCase: 'User actions, system events',
    complexity: 'Medium'
  },
  { 
    pattern: 'Polling',
    description: 'Regular API checks for new data',
    useCase: 'Status monitoring, data collection',
    complexity: 'Low'
  }
]

const apiPlatforms = [
  { 
    category: 'CRM Systems',
    platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'ActiveCampaign']
  },
  { 
    category: 'E-commerce',
    platforms: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Squarespace']
  },
  { 
    category: 'Payment Processing',
    platforms: ['Stripe', 'PayPal', 'Square', 'Authorize.Net', 'Braintree']
  },
  { 
    category: 'Marketing Tools',
    platforms: ['Mailchimp', 'SendGrid', 'Klaviyo', 'ConvertKit', 'Campaign Monitor']
  },
  { 
    category: 'Analytics',
    platforms: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Segment', 'Hotjar']
  }
]

export default function CustomAPIIntegrationsTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🔗</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                    {tutorialInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
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
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors mb-3">
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
            <LinkIcon className="h-6 w-6 mr-3 text-orange-600" />
            Common Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
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

        {/* Integration Patterns */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CodeBracketIcon className="h-6 w-6 mr-3 text-orange-600" />
            Integration Patterns
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pattern</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Use Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complexity</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {integrationPatterns.map((pattern, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{pattern.pattern}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{pattern.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{pattern.useCase}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        pattern.complexity === 'Low' ? 'bg-green-100 text-green-800' :
                        pattern.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {pattern.complexity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Popular API Platforms */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-orange-600" />
            Popular API Platforms
          </h2>
          <div className="space-y-6">
            {apiPlatforms.map((platform, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">{platform.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {platform.platforms.map((name, platformIndex) => (
                    <span key={platformIndex} className="inline-flex items-center rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-800">
                      {name}
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
            <CogIcon className="h-6 w-6 mr-3 text-orange-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-orange-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: CRM Integration Workflow</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">API Authentication</h3>
                <p className="text-sm text-gray-600">Set up OAuth or API key authentication with CRM system</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Mapping</h3>
                <p className="text-sm text-gray-600">Map fields between source system and CRM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Synchronization</h3>
                <p className="text-sm text-gray-600">Implement real-time or batch sync processes</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Error Handling</h3>
                <p className="text-sm text-gray-600">Add retry logic and error notifications</p>
              </div>
            </div>
          </div>
        </div>

        {/* API Best Practices */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">API Integration Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Use proper authentication and secure API keys</li>
                <li>• Implement rate limiting and throttling</li>
                <li>• Add comprehensive error handling</li>
                <li>• Use webhooks for real-time updates</li>
                <li>• Validate and sanitize all data</li>
                <li>• Monitor API usage and performance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">⚠️ Common Pitfalls</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ignoring API rate limits</li>
                <li>• Poor error handling and logging</li>
                <li>• Hardcoding API credentials</li>
                <li>• Not handling API version changes</li>
                <li>• Insufficient data validation</li>
                <li>• Lack of monitoring and alerting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Custom API Integrations!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and become an expert in API integration and system connectivity!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Tutorial Now
            </button>
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border border-orange-500 inline-flex items-center">
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