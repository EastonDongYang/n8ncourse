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
  CodeBracketIcon,
  BugAntIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const integrationInfo = {
  title: 'Webhook.site Integration',
  description: 'Debug and test your API workflows - Master webhook testing and API development with real-time monitoring',
  category: 'Development Tools',
  difficulty: 'Medium',
  duration: '20 minutes',
  users: '85% users use',
  rating: 4.7,
  tags: ['Webhook Testing', 'API Debugging', 'Development', 'Flow Validation'],
  author: 'n8n Academy',
  lastUpdated: '3 hours ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Webhook.site Setup & Configuration',
    description: 'Set up webhook endpoints for testing and debugging',
    duration: '5 minutes',
    lessons: [
      'Creating unique webhook URLs on Webhook.site',
      'Understanding webhook request inspection',
      'Configuring custom response codes and headers',
      'Setting up webhook forwarding and proxying',
      'Managing webhook history and logs'
    ]
  },
  {
    id: 2,
    title: 'API Testing & Debugging',
    description: 'Test and validate API workflows effectively',
    duration: '10 minutes',
    lessons: [
      'Testing webhook payloads and data formats',
      'Debugging HTTP request and response cycles',
      'Validating JSON and XML data structures',
      'Testing authentication and security headers',
      'Simulating different response scenarios',
      'Performance testing and load validation'
    ]
  },
  {
    id: 3,
    title: 'Flow Validation & Monitoring',
    description: 'Validate and monitor n8n workflow execution',
    duration: '5 minutes',
    lessons: [
      'Real-time workflow execution monitoring',
      'Data transformation validation',
      'Error detection and troubleshooting',
      'Integration testing with external services',
      'Automated testing and quality assurance'
    ]
  }
]

const requirements = [
  'Access to Webhook.site platform',
  'n8n instance (cloud or self-hosted)',
  'Understanding of HTTP protocols',
  'Basic knowledge of API concepts',
  'Familiarity with JSON data formats'
]

const features = [
  'Real-time webhook request inspection',
  'Custom response configuration',
  'Request history and logging',
  'Data format validation',
  'HTTP header analysis',
  'Response time monitoring',
  'Error detection and debugging',
  'Integration testing capabilities',
  'Automated workflow validation',
  'Performance monitoring tools'
]

const useCases = [
  { 
    title: 'API Testing',
    description: 'Test API endpoints, payloads, and response handling',
    icon: '🧪',
    complexity: 'Medium'
  },
  { 
    title: 'Data Debugging',
    description: 'Debug data transformations and workflow logic',
    icon: '🐛',
    complexity: 'Medium'
  },
  { 
    title: 'Flow Validation',
    description: 'Validate workflow execution and data flow',
    icon: '✅',
    complexity: 'Medium'
  },
  { 
    title: 'Integration Testing',
    description: 'Test third-party service integrations',
    icon: '🔗',
    complexity: 'Advanced'
  },
  { 
    title: 'Performance Monitoring',
    description: 'Monitor API performance and response times',
    icon: '📊',
    complexity: 'Medium'
  },
  { 
    title: 'Error Tracking',
    description: 'Track and analyze workflow errors and failures',
    icon: '⚠️',
    complexity: 'Medium'
  }
]

const webhookFeatures = [
  { 
    feature: 'Request Inspection',
    description: 'View detailed HTTP request information',
    capability: 'Headers, Body, Query Parameters',
    useCase: 'Debugging API calls'
  },
  { 
    feature: 'Custom Responses',
    description: 'Configure custom HTTP responses',
    capability: 'Status Codes, Headers, Body',
    useCase: 'Testing error scenarios'
  },
  { 
    feature: 'Request History',
    description: 'Access historical webhook requests',
    capability: 'Timestamps, Full Request Data',
    useCase: 'Workflow analysis'
  },
  { 
    feature: 'Real-time Updates',
    description: 'Live monitoring of incoming requests',
    capability: 'WebSocket Updates, Notifications',
    useCase: 'Live debugging'
  }
]

export default function WebhookSiteIntegrationTutorial() {
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
                    {integrationInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                    {integrationInfo.difficulty}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {integrationInfo.users}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{integrationInfo.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{integrationInfo.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{integrationInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(integrationInfo.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span>({integrationInfo.rating})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>by {integrationInfo.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {integrationInfo.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors mb-3">
                  Start Integration
                </button>
                <div className="text-sm text-gray-500">Updated {integrationInfo.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tutorial Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Common Use Cases */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CodeBracketIcon className="h-6 w-6 mr-3 text-orange-600" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                <div className="text-2xl mb-2">{useCase.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  useCase.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  useCase.complexity === 'Advanced' ? 'bg-red-100 text-red-800' :
                  'bg-green-100 text-green-800'
                }`}>
                  {useCase.complexity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Webhook.site Features */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BugAntIcon className="h-6 w-6 mr-3 text-orange-600" />
            Webhook.site Features
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capability</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Use Case</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {webhookFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.feature}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{feature.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{feature.capability}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{feature.useCase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: API Workflow Testing</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Create Webhook URL</h3>
                <p className="text-sm text-gray-600">Generate a unique webhook URL on Webhook.site for testing</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Configure n8n Workflow</h3>
                <p className="text-sm text-gray-600">Set up n8n workflow to send data to the webhook URL</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Execute & Monitor</h3>
                <p className="text-sm text-gray-600">Run workflow and monitor requests in real-time</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-orange-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Debug & Optimize</h3>
                <p className="text-sm text-gray-600">Analyze request data and optimize workflow performance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Webhook Testing Guide */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Webhook Testing Best Practices</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Test Different HTTP Methods</h3>
              <p className="text-sm text-gray-600">Verify your workflow handles GET, POST, PUT, DELETE requests correctly.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Validate Data Formats</h3>
              <p className="text-sm text-gray-600">Ensure JSON, XML, and form data are processed as expected.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Test Error Scenarios</h3>
              <p className="text-sm text-gray-600">Configure custom error responses to test error handling.</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Monitor Performance</h3>
              <p className="text-sm text-gray-600">Track response times and identify performance bottlenecks.</p>
            </div>
          </div>
        </div>

        {/* Sample Webhook Configuration */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Webhook Configuration</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// n8n HTTP Request Node Configuration
{
  "method": "POST",
  "url": "https://webhook.site/your-unique-id",
  "headers": {
    "Content-Type": "application/json",
    "X-API-Key": "{{$json.api_key}}"
  },
  "body": {
    "timestamp": "{{$json.timestamp}}",
    "event_type": "{{$json.event}}",
    "data": {
      "user_id": "{{$json.user_id}}",
      "action": "{{$json.action}}",
      "metadata": "{{$json.metadata}}"
    }
  }
}`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This configuration sends structured data to Webhook.site for testing and validation.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Webhook Testing!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and become an expert at API testing and debugging!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Integration Tutorial
            </button>
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border border-orange-500 inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Testing Guide
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 