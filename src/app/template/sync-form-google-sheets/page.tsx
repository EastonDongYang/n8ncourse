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
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const templateInfo = {
  title: 'Sync Form Responses to Google Sheets',
  description: 'Automatically collect website form data, sync to Google Sheets in real-time with data validation and formatting',
  category: 'Data Management',
  difficulty: 'Beginner',
  duration: '20 minutes',
  downloads: '4.1k',
  likes: 289,
  rating: 4.9,
  tags: ['Forms', 'Google Sheets', 'Data Sync'],
  author: 'n8n Community',
  lastUpdated: '1 day ago'
}

const workflowSteps = [
  {
    id: 1,
    title: 'Form Webhook Setup',
    description: 'Create webhook endpoint to receive form submissions',
    duration: '5 minutes',
    content: [
      'Set up Webhook trigger node in n8n to listen for form data',
      'Generate unique webhook URL for your forms',
      'Configure webhook to accept POST requests with form data',
      'Test webhook with sample form submission'
    ]
  },
  {
    id: 2,
    title: 'Data Processing & Validation',
    description: 'Clean and validate incoming form data',
    duration: '8 minutes',
    content: [
      'Add data transformation nodes to clean form inputs',
      'Validate required fields and data formats',
      'Filter out spam or invalid submissions',
      'Format data according to Google Sheets structure',
      'Add timestamp and unique ID to each submission'
    ]
  },
  {
    id: 3,
    title: 'Google Sheets Integration',
    description: 'Connect to Google Sheets and append data',
    duration: '7 minutes',
    content: [
      'Set up Google Sheets API credentials',
      'Configure Google Sheets node to append rows',
      'Map form fields to sheet columns',
      'Test data insertion and verify formatting',
      'Set up error handling for failed submissions'
    ]
  }
]

const requirements = [
  'Google Account with Sheets access',
  'Website with contact/lead forms',
  'n8n instance (cloud or self-hosted)',
  'Basic HTML form knowledge'
]

const features = [
  'Real-time form data sync',
  'Automatic data validation',
  'Spam filtering capabilities',
  'Custom field mapping',
  'Duplicate prevention',
  'Error handling and notifications',
  'Historical data backup',
  'Multi-form support'
]

const formIntegrations = [
  { name: 'Contact Forms', description: 'Website contact and inquiry forms' },
  { name: 'Lead Generation', description: 'Sales and marketing lead capture' },
  { name: 'Event Registration', description: 'Registration and signup forms' },
  { name: 'Survey Forms', description: 'Customer feedback and surveys' },
  { name: 'Newsletter Signup', description: 'Email subscription forms' },
  { name: 'Job Applications', description: 'Career and application forms' }
]

export default function SyncFormGoogleSheetsTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/#templates" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Templates
          </Link>
        </div>
      </div>

      {/* Template Header */}
      <div className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📊</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {templateInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
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
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-3">
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
        {/* Form Integrations */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-green-600" />
            Supported Form Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {formIntegrations.map((form, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{form.name}</h3>
                <p className="text-sm text-gray-600">{form.description}</p>
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
          <div className="grid md:grid-cols-2 gap-4">
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
            <CogIcon className="h-6 w-6 mr-3 text-green-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-green-600" />
            Implementation Steps
          </h2>
          
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold">
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

        {/* Code Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Form HTML</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`<form action="YOUR_WEBHOOK_URL" method="POST">
  <input type="text" name="name" placeholder="Full Name" required>
  <input type="email" name="email" placeholder="Email Address" required>
  <textarea name="message" placeholder="Your Message"></textarea>
  <button type="submit">Submit</button>
</form>`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Replace <code className="bg-gray-100 px-2 py-1 rounded">YOUR_WEBHOOK_URL</code> with the webhook URL generated by n8n.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">📈 Start Collecting Form Data Today!</h2>
          <p className="text-lg mb-6 opacity-90">
            Download the template and begin automating your form data collection in minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download JSON Template
            </button>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors border border-green-500 inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Watch Setup Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 