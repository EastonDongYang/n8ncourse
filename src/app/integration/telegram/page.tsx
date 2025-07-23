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
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const integrationInfo = {
  title: 'Telegram Integration',
  description: 'Real-time notifications, bot control - Master Telegram automation for communication and messaging workflows',
  category: 'Communication Tools',
  difficulty: 'Simple',
  duration: '25 minutes',
  users: '88% users use',
  rating: 4.8,
  tags: ['Telegram Bot API', 'Notifications', 'Messaging', 'Bot Development'],
  author: 'n8n Academy',
  lastUpdated: '12 hours ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Telegram Bot Setup & Configuration',
    description: 'Create and configure Telegram bots for automation',
    duration: '8 minutes',
    lessons: [
      'Creating a new bot with BotFather',
      'Obtaining bot token and configuring permissions',
      'Setting up webhook endpoints for real-time updates',
      'Understanding Telegram Bot API capabilities',
      'Testing bot connectivity and basic commands'
    ]
  },
  {
    id: 2,
    title: 'Message Notifications',
    description: 'Automate alert and notification systems',
    duration: '10 minutes',
    lessons: [
      'Setting up automated alert workflows',
      'Custom message formatting and styling',
      'Media attachments and file sharing',
      'Group and channel message broadcasting',
      'Conditional notification triggers',
      'Message scheduling and delayed delivery'
    ]
  },
  {
    id: 3,
    title: 'Group Management & Auto-reply',
    description: 'Build intelligent group management systems',
    duration: '7 minutes',
    lessons: [
      'Automated group moderation and management',
      'Smart auto-reply systems and chatbots',
      'User interaction and command handling',
      'Group analytics and activity monitoring',
      'Integration with external data sources'
    ]
  }
]

const requirements = [
  'Telegram account for bot creation',
  'BotFather access for bot token generation',
  'n8n instance (cloud or self-hosted)',
  'Understanding of webhook concepts',
  'Basic knowledge of messaging workflows'
]

const features = [
  'Automated message sending and broadcasting',
  'Real-time notification systems',
  'Interactive bot command handling',
  'Group and channel management',
  'Media file sharing and attachments',
  'Custom keyboard and inline buttons',
  'User interaction tracking',
  'Message formatting and styling',
  'Webhook-based real-time updates',
  'Integration with external services'
]

const useCases = [
  { 
    title: 'Message Notifications',
    description: 'Automated alerts, system notifications, and status updates',
    icon: '🔔',
    complexity: 'Simple'
  },
  { 
    title: 'Group Management',
    description: 'Automated moderation, user management, and group analytics',
    icon: '👥',
    complexity: 'Medium'
  },
  { 
    title: 'Auto-reply',
    description: 'Intelligent chatbots and automated response systems',
    icon: '🤖',
    complexity: 'Medium'
  },
  { 
    title: 'News Broadcasting',
    description: 'Automated news distribution and content sharing',
    icon: '📰',
    complexity: 'Simple'
  },
  { 
    title: 'Customer Support',
    description: 'Support ticket creation and customer service automation',
    icon: '🎧',
    complexity: 'Medium'
  },
  { 
    title: 'Monitoring Alerts',
    description: 'System monitoring, error alerts, and status notifications',
    icon: '⚠️',
    complexity: 'Simple'
  }
]

const telegramFeatures = [
  { 
    feature: 'Send Message',
    description: 'Send text messages to users, groups, or channels',
    method: 'POST',
    endpoint: '/sendMessage'
  },
  { 
    feature: 'Send Photo',
    description: 'Send images and photos with optional captions',
    method: 'POST',
    endpoint: '/sendPhoto'
  },
  { 
    feature: 'Send Document',
    description: 'Send files and documents to recipients',
    method: 'POST',
    endpoint: '/sendDocument'
  },
  { 
    feature: 'Get Updates',
    description: 'Receive incoming messages and updates',
    method: 'GET',
    endpoint: '/getUpdates'
  }
]

export default function TelegramIntegrationTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📱</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {integrationInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
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
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
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
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 mr-3 text-blue-600" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                <div className="text-2xl mb-2">{useCase.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{useCase.description}</p>
                <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                  useCase.complexity === 'Simple' ? 'bg-green-100 text-green-800' :
                  useCase.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {useCase.complexity}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Telegram Bot API Features */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BellIcon className="h-6 w-6 mr-3 text-blue-600" />
            Telegram Bot API Features
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {telegramFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.feature}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{feature.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        feature.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {feature.method}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono bg-gray-50 rounded">{feature.endpoint}</td>
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
            <CogIcon className="h-6 w-6 mr-3 text-blue-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-blue-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: System Monitoring Alert Bot</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Monitor Trigger</h3>
                <p className="text-sm text-gray-600">System monitoring detects an issue or threshold breach</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Alert Processing</h3>
                <p className="text-sm text-gray-600">Format alert message with relevant details and severity</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Telegram Notification</h3>
                <p className="text-sm text-gray-600">Send formatted alert to designated Telegram channels</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Response Handling</h3>
                <p className="text-sm text-gray-600">Process team responses and update monitoring system</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bot Setup Guide */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Bot Setup Guide</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Create Bot with BotFather</h3>
              <p className="text-sm text-gray-600 mb-2">Start a chat with @BotFather on Telegram and use these commands:</p>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                /newbot<br/>
                YourBotName<br/>
                YourBotUsername_bot
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Get Bot Token</h3>
              <p className="text-sm text-gray-600">BotFather will provide a token like:</p>
              <div className="bg-gray-100 rounded p-3 font-mono text-sm">
                123456789:ABCdefGHIjklMNOpqrsTUVwxyz
              </div>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Configure in n8n</h3>
              <p className="text-sm text-gray-600">Add the token to your n8n Telegram node configuration.</p>
            </div>
          </div>
        </div>

        {/* Integration Code Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Telegram Message API Call</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Send message to Telegram
{
  "chat_id": "{{$json.chat_id}}",
  "text": "🚨 *Alert: {{$json.alert_type}}*\\n\\n" +
         "📊 *System:* {{$json.system_name}}\\n" +
         "⏰ *Time:* {{$json.timestamp}}\\n" +
         "📝 *Details:* {{$json.description}}\\n\\n" +
         "🔗 [View Dashboard]({{$json.dashboard_url}})",
  "parse_mode": "Markdown",
  "disable_web_page_preview": true
}`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This example shows how to send a formatted alert message with Markdown styling.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Telegram Integration!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and build powerful Telegram automation workflows!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Integration Tutorial
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500 inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Bot Templates
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 