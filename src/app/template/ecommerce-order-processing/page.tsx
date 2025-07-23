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
  ShoppingCartIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const templateInfo = {
  title: 'E-commerce Order Processing Automation',
  description: 'Automatically process order notifications, update inventory, send confirmation emails, sync to CRM system with advanced workflow management',
  category: 'E-commerce',
  difficulty: 'Advanced',
  duration: '45 minutes',
  downloads: '723',
  likes: 92,
  rating: 4.8,
  tags: ['E-commerce', 'CRM', 'Order Processing'],
  author: 'n8n Community',
  lastUpdated: '1 week ago'
}

const workflowSteps = [
  {
    id: 1,
    title: 'Order Webhook & Validation',
    description: 'Set up order intake and validation system',
    duration: '12 minutes',
    content: [
      'Configure webhook endpoints for e-commerce platforms',
      'Set up order data validation and sanitization',
      'Implement fraud detection and security checks',
      'Add order status tracking and logging',
      'Test webhook connectivity with sample orders'
    ]
  },
  {
    id: 2,
    title: 'Inventory Management Integration',
    description: 'Automate inventory updates and stock management',
    duration: '15 minutes',
    content: [
      'Connect to inventory management system APIs',
      'Implement real-time stock level updates',
      'Set up low stock alerts and notifications',
      'Configure multi-warehouse inventory tracking',
      'Add product availability validation',
      'Implement backorder and pre-order handling'
    ]
  },
  {
    id: 3,
    title: 'Customer Communication & CRM Sync',
    description: 'Automate customer notifications and CRM updates',
    duration: '18 minutes',
    content: [
      'Design order confirmation email templates',
      'Set up shipping notification workflows',
      'Configure customer service ticket creation',
      'Integrate with CRM systems (Salesforce, HubSpot)',
      'Add customer segmentation and tagging',
      'Implement loyalty program point updates',
      'Set up review request automation'
    ]
  }
]

const requirements = [
  'E-commerce platform with webhook support',
  'Inventory management system API access',
  'Email service provider (SendGrid, Mailgun)',
  'CRM system with API integration',
  'n8n instance (cloud or self-hosted)',
  'Understanding of e-commerce workflows',
  'Database for order tracking and logging'
]

const features = [
  'Multi-platform order processing',
  'Real-time inventory synchronization',
  'Automated customer communications',
  'CRM integration and data sync',
  'Fraud detection and validation',
  'Multi-warehouse support',
  'Order status tracking',
  'Customer segmentation',
  'Loyalty program integration',
  'Review request automation',
  'Advanced error handling',
  'Performance monitoring'
]

const integrations = [
  { 
    category: 'E-commerce Platforms',
    platforms: ['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Squarespace']
  },
  { 
    category: 'Inventory Systems',
    platforms: ['TradeGecko', 'Cin7', 'Zoho Inventory', 'inFlow', 'Fishbowl']
  },
  { 
    category: 'CRM Systems',
    platforms: ['Salesforce', 'HubSpot', 'Pipedrive', 'Zoho CRM', 'ActiveCampaign']
  },
  { 
    category: 'Email Services',
    platforms: ['SendGrid', 'Mailgun', 'Amazon SES', 'Mailchimp', 'Klaviyo']
  },
  { 
    category: 'Payment Processors',
    platforms: ['Stripe', 'PayPal', 'Square', 'Authorize.Net', 'Braintree']
  }
]

export default function EcommerceOrderProcessingTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Templates
          </Link>
        </div>
      </div>

      {/* Template Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🛒</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {templateInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
                    {templateInfo.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{templateInfo.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{templateInfo.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{templateInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    <span>{templateInfo.downloads} downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartIcon className="h-4 w-4" />
                    <span>{templateInfo.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="h-4 w-4" />
                    <span>by {templateInfo.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {templateInfo.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
                  Download Template
                </button>
                <div className="text-sm text-gray-500">Updated {templateInfo.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Platform Integrations */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ShoppingCartIcon className="h-6 w-6 mr-3 text-blue-600" />
            Supported Platform Integrations
          </h2>
          <div className="space-y-6">
            {integrations.map((integration, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">{integration.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {integration.platforms.map((platform, platformIndex) => (
                    <span key={platformIndex} className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-800">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExclamationTriangleIcon className="h-6 w-6 mr-3 text-orange-600" />
            Requirements
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

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-blue-600" />
            Key Features
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

        {/* Workflow Steps */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-blue-600" />
            Implementation Steps
          </h2>
          
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {step.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Order Processing Flow */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Processing Flow</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Order Received</h3>
                <p className="text-sm text-gray-600">Webhook triggers when new order is placed</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Validation & Fraud Check</h3>
                <p className="text-sm text-gray-600">Validate order data and run fraud detection</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Inventory Update</h3>
                <p className="text-sm text-gray-600">Update stock levels and check availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Customer Notification</h3>
                <p className="text-sm text-gray-600">Send order confirmation email to customer</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">5</div>
              <div>
                <h3 className="font-semibold text-gray-900">CRM Sync</h3>
                <p className="text-sm text-gray-600">Update customer record and order history in CRM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Streamline Your E-commerce Operations!</h2>
          <p className="text-lg mb-6 opacity-90">
            Download the template and automate your entire order processing workflow today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download JSON Template
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500 inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Watch Implementation Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 