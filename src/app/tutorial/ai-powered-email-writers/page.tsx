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
  SparklesIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const tutorialInfo = {
  title: 'AI-Powered Email Writers',
  description: 'Intelligently generate email content, auto-reply, personalized marketing - Harness AI for professional email automation',
  category: 'AI Email Automation',
  difficulty: 'Intermediate to Advanced',
  duration: '50 minutes',
  students: '1.5k',
  rating: 4.9,
  tags: ['OpenAI', 'Email Marketing', 'Auto-reply', 'Personalization', 'Content Generation'],
  author: 'n8n Academy',
  lastUpdated: '6 hours ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Introduction to AI Email Automation',
    description: 'Understanding AI capabilities and email automation basics',
    duration: '8 minutes',
    lessons: [
      'Overview of AI in email marketing and communication',
      'Understanding GPT models and their capabilities',
      'Setting up OpenAI API integration with n8n',
      'Email automation best practices and ethics',
      'Planning your AI email strategy'
    ]
  },
  {
    id: 2,
    title: 'Customer Service Auto-reply',
    description: 'Build intelligent customer support email responses',
    duration: '15 minutes',
    lessons: [
      'Setting up email monitoring and triggers',
      'Creating context-aware response templates',
      'Sentiment analysis and tone matching',
      'Escalation rules for complex queries',
      'Multi-language support and translation',
      'Testing and quality assurance for auto-replies'
    ]
  },
  {
    id: 3,
    title: 'Marketing Email Generation',
    description: 'Create personalized marketing campaigns with AI',
    duration: '18 minutes',
    lessons: [
      'Customer segmentation and personalization',
      'Dynamic content generation based on user data',
      'A/B testing different AI-generated variations',
      'Subject line optimization with AI',
      'Email template design and formatting',
      'Performance tracking and optimization',
      'Compliance with email marketing regulations'
    ]
  },
  {
    id: 4,
    title: 'Content Summary Emails',
    description: 'Automatically generate and distribute content summaries',
    duration: '9 minutes',
    lessons: [
      'Content aggregation from multiple sources',
      'AI-powered summarization techniques',
      'Newsletter template creation and customization',
      'Scheduled delivery and audience targeting',
      'Analytics and engagement tracking',
      'Content curation and quality control'
    ]
  }
]

const requirements = [
  'OpenAI API key with GPT access',
  'Email service provider (Gmail, Outlook, SendGrid)',
  'n8n instance (cloud or self-hosted)',
  'Understanding of email marketing principles',
  'Customer data and segmentation strategy',
  'Basic knowledge of AI prompt engineering'
]

const features = [
  'Intelligent email content generation',
  'Context-aware auto-replies',
  'Personalized marketing campaigns',
  'Multi-language email support',
  'Sentiment analysis and tone matching',
  'Dynamic content personalization',
  'A/B testing automation',
  'Performance analytics integration',
  'Compliance and safety checks',
  'Scalable email workflows'
]

const applications = [
  { 
    title: 'Customer Service Auto-reply',
    description: 'Intelligent responses to customer inquiries',
    icon: '🎧',
    complexity: 'Intermediate'
  },
  { 
    title: 'Marketing Email Generation',
    description: 'Personalized promotional and nurture campaigns',
    icon: '📧',
    complexity: 'Advanced'
  },
  { 
    title: 'Content Summary Emails',
    description: 'Automated newsletters and digest emails',
    icon: '📄',
    complexity: 'Intermediate'
  },
  { 
    title: 'Sales Follow-up',
    description: 'Personalized sales outreach and follow-ups',
    icon: '💼',
    complexity: 'Advanced'
  },
  { 
    title: 'Event Invitations',
    description: 'Dynamic event promotion and RSVP management',
    icon: '🎉',
    complexity: 'Intermediate'
  },
  { 
    title: 'Survey & Feedback',
    description: 'Intelligent survey distribution and responses',
    icon: '📊',
    complexity: 'Intermediate'
  }
]

const aiModels = [
  { 
    name: 'GPT-4',
    description: 'Best for complex, nuanced email content',
    useCase: 'High-value customer communications',
    cost: 'Higher'
  },
  { 
    name: 'GPT-3.5 Turbo',
    description: 'Great balance of quality and cost',
    useCase: 'General email automation',
    cost: 'Moderate'
  },
  { 
    name: 'GPT-4 Turbo',
    description: 'Optimized for longer content generation',
    useCase: 'Newsletter and summary emails',
    cost: 'Moderate-High'
  }
]

export default function AIPoweredEmailWritersTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🤖</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
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
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-3">
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
            <SparklesIcon className="h-6 w-6 mr-3 text-purple-600" />
            Common Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
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

        {/* AI Models Comparison */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-purple-600" />
            AI Models Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Use Case</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cost</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {aiModels.map((model, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{model.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{model.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{model.useCase}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.cost}</td>
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
            <CogIcon className="h-6 w-6 mr-3 text-purple-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-purple-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Customer Service Auto-reply</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Email Trigger</h3>
                <p className="text-sm text-gray-600">New customer email arrives in support inbox</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Analysis</h3>
                <p className="text-sm text-gray-600">AI analyzes email content, sentiment, and intent</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Response Generation</h3>
                <p className="text-sm text-gray-600">Generate personalized, context-aware response</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Quality Check & Send</h3>
                <p className="text-sm text-gray-600">Review response quality and send automated reply</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Prompt Template */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Email Generation Prompt</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`You are a professional customer service representative. 
Generate a helpful, empathetic email response based on:

Customer Email: {{$json.email_content}}
Customer Name: {{$json.customer_name}}
Previous Interactions: {{$json.history}}

Guidelines:
- Be professional yet friendly
- Address the specific concern raised
- Provide actionable solutions
- Include relevant resources if applicable
- Match the customer's tone and urgency level
- Keep response under 200 words

Response:`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This template can be customized for different email types and customer segments.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Transform Your Email Communication with AI!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and revolutionize your email automation with AI!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Tutorial Now
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border border-purple-500 inline-flex items-center">
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