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
  SparklesIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const templateInfo = {
  title: 'Generate Summaries with OpenAI & Email',
  description: 'Use AI to automatically generate content summaries, format and send via email to stakeholders with custom branding',
  category: 'AI Automation',
  difficulty: 'Intermediate',
  duration: '30 minutes',
  downloads: '1.8k',
  likes: 134,
  rating: 4.7,
  tags: ['OpenAI', 'Email', 'Content Generation'],
  author: 'n8n Community',
  lastUpdated: '2 days ago'
}

const workflowSteps = [
  {
    id: 1,
    title: 'Content Source Setup',
    description: 'Configure content input sources and triggers',
    duration: '8 minutes',
    content: [
      'Set up trigger nodes for content sources (RSS, API, webhook)',
      'Configure content filtering and preprocessing',
      'Add content validation and formatting nodes',
      'Test content ingestion from various sources'
    ]
  },
  {
    id: 2,
    title: 'OpenAI Integration',
    description: 'Configure AI summarization with custom prompts',
    duration: '12 minutes',
    content: [
      'Set up OpenAI API credentials and configure node',
      'Create custom prompts for different content types',
      'Configure summarization parameters (length, tone, style)',
      'Add content analysis and keyword extraction',
      'Test AI summarization with sample content',
      'Set up fallback handling for API failures'
    ]
  },
  {
    id: 3,
    title: 'Email Formatting & Delivery',
    description: 'Format summaries and send via email',
    duration: '10 minutes',
    content: [
      'Design email templates with custom branding',
      'Configure email service provider (Gmail, Outlook, SMTP)',
      'Add recipient management and personalization',
      'Set up email scheduling and batch sending',
      'Test email delivery and formatting across clients'
    ]
  }
]

const requirements = [
  'OpenAI API Key with GPT access',
  'Email service account (Gmail, Outlook, or SMTP)',
  'n8n instance (cloud or self-hosted)',
  'Content sources (RSS, APIs, databases)',
  'Understanding of AI prompt engineering'
]

const features = [
  'Multi-source content ingestion',
  'AI-powered content summarization',
  'Custom prompt templates',
  'Email template customization',
  'Batch processing capabilities',
  'Scheduled summary delivery',
  'Recipient personalization',
  'Analytics and tracking',
  'Error handling and retries',
  'Content archiving'
]

const useCases = [
  { 
    title: 'News Digest', 
    description: 'Daily news summaries from multiple sources',
    icon: '📰'
  },
  { 
    title: 'Research Reports', 
    description: 'Academic paper and research summarization',
    icon: '🔬'
  },
  { 
    title: 'Market Analysis', 
    description: 'Financial and market trend summaries',
    icon: '📈'
  },
  { 
    title: 'Social Media Monitoring', 
    description: 'Brand mention and sentiment summaries',
    icon: '📱'
  },
  { 
    title: 'Content Curation', 
    description: 'Blog post and article summaries',
    icon: '📝'
  },
  { 
    title: 'Meeting Notes', 
    description: 'Automated meeting transcription summaries',
    icon: '🗣️'
  }
]

const aiModels = [
  { name: 'GPT-4', description: 'Best quality summaries, higher cost' },
  { name: 'GPT-3.5 Turbo', description: 'Good balance of quality and cost' },
  { name: 'GPT-4 Turbo', description: 'Optimized for longer content' }
]

export default function GenerateSummariesOpenAITemplate() {
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
      <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🤖</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
                    {templateInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
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
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-3">
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
        {/* Use Cases */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <SparklesIcon className="h-6 w-6 mr-3 text-purple-600" />
            Popular Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
                <div className="text-2xl mb-2">{useCase.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Models */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-purple-600" />
            Supported AI Models
          </h2>
          <div className="space-y-4">
            {aiModels.map((model, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">{model.name}</h3>
                  <p className="text-sm text-gray-600">{model.description}</p>
                </div>
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
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
            <CogIcon className="h-6 w-6 mr-3 text-purple-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-purple-600" />
            Implementation Steps
          </h2>
          
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold">
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

        {/* Sample Prompt */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample AI Prompt Template</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`Please provide a concise summary of the following content:

Content: {{$json.content}}

Instructions:
- Keep the summary between 150-300 words
- Focus on key insights and actionable items
- Use bullet points for main topics
- Include relevant statistics or data points
- Write in a professional, clear tone
- End with 2-3 key takeaways

Format the response as:
## Executive Summary
[Brief overview]

## Key Points
- [Point 1]
- [Point 2]
- [Point 3]

## Key Takeaways
1. [Takeaway 1]
2. [Takeaway 2]
3. [Takeaway 3]`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This template can be customized based on your specific content type and audience needs.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Start AI-Powered Content Summarization!</h2>
          <p className="text-lg mb-6 opacity-90">
            Download the template and begin automating your content summarization workflow today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download JSON Template
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border border-purple-500 inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Watch AI Setup Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 