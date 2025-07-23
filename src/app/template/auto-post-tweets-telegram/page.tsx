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
  title: 'Auto-post Tweets to Telegram',
  description: 'Monitor Twitter/X activity, automatically forward to Telegram channels with keyword filtering and formatting',
  category: 'Social Media',
  difficulty: 'Beginner',
  duration: '15 minutes',
  downloads: '2.3k',
  likes: 156,
  rating: 4.8,
  tags: ['Twitter', 'Telegram', 'Auto-posting'],
  author: 'n8n Community',
  lastUpdated: '3 days ago'
}

const workflowSteps = [
  {
    id: 1,
    title: 'Twitter Trigger Setup',
    description: 'Configure Twitter monitoring for specific accounts or keywords',
    duration: '5 minutes',
    content: [
      'Create Twitter API credentials and connect to n8n',
      'Set up Twitter trigger node to monitor tweets',
      'Configure filtering options (keywords, hashtags, users)',
      'Test the trigger to ensure tweets are captured correctly'
    ]
  },
  {
    id: 2,
    title: 'Content Processing',
    description: 'Filter and format tweet content for Telegram',
    duration: '5 minutes',
    content: [
      'Add IF node to filter tweets based on criteria',
      'Use Set node to format tweet content for Telegram',
      'Extract relevant information (text, images, links)',
      'Add timestamp and author information'
    ]
  },
  {
    id: 3,
    title: 'Telegram Integration',
    description: 'Send formatted content to Telegram channel',
    duration: '5 minutes',
    content: [
      'Set up Telegram Bot API credentials',
      'Configure Telegram node to send messages',
      'Format message with proper Telegram markdown',
      'Test the complete workflow end-to-end'
    ]
  }
]

const requirements = [
  'Twitter API Developer Account',
  'Telegram Bot Token',
  'n8n instance (cloud or self-hosted)',
  'Basic understanding of API credentials'
]

const features = [
  'Real-time tweet monitoring',
  'Keyword and hashtag filtering',
  'Automatic content formatting',
  'Image and media forwarding',
  'Rate limiting protection',
  'Error handling and retries'
]

export default function AutoPostTweetsTemplate() {
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
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🐦</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {templateInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
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
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-200">
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

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Ready to Build This Workflow?</h2>
          <p className="text-lg mb-6 opacity-90">
            Download the template and start automating your Twitter to Telegram workflow in minutes!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download JSON Template
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500 inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Watch Video Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 