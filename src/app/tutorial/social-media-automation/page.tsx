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
  ShareIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const tutorialInfo = {
  title: 'Social Media Automation',
  description: 'Auto-post content, monitor mentions, reply to comments, data analysis - Complete guide to automating your social media presence',
  category: 'Social Media',
  difficulty: 'Beginner to Intermediate',
  duration: '45 minutes',
  students: '2.8k',
  rating: 4.9,
  tags: ['Twitter', 'Telegram', 'Discord', 'Auto-posting', 'Monitoring'],
  author: 'n8n Academy',
  lastUpdated: '2 days ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Introduction to Social Media Automation',
    description: 'Understanding the fundamentals and benefits',
    duration: '8 minutes',
    lessons: [
      'What is social media automation and why it matters',
      'Common use cases and business benefits',
      'Overview of n8n social media integrations',
      'Setting up your automation strategy'
    ]
  },
  {
    id: 2,
    title: 'X/Twitter Auto-posting Setup',
    description: 'Automate your Twitter content publishing',
    duration: '15 minutes',
    lessons: [
      'Creating Twitter API credentials',
      'Setting up automated tweet scheduling',
      'Content formatting and media handling',
      'Hashtag and mention automation',
      'Thread creation and management',
      'Testing and troubleshooting'
    ]
  },
  {
    id: 3,
    title: 'Telegram Bot Development',
    description: 'Build intelligent Telegram bots',
    duration: '12 minutes',
    lessons: [
      'Creating and configuring Telegram bots',
      'Setting up webhook listeners',
      'Message processing and responses',
      'Channel and group management',
      'File and media handling',
      'Bot command implementation'
    ]
  },
  {
    id: 4,
    title: 'Discord Message Management',
    description: 'Automate Discord server interactions',
    duration: '10 minutes',
    lessons: [
      'Discord bot setup and permissions',
      'Channel monitoring and moderation',
      'Automated welcome messages',
      'Role assignment automation',
      'Message filtering and responses',
      'Integration with other platforms'
    ]
  }
]

const requirements = [
  'Social media platform accounts (Twitter, Telegram, Discord)',
  'API access and developer accounts',
  'n8n instance (cloud or self-hosted)',
  'Basic understanding of APIs and webhooks',
  'Content strategy and posting schedule'
]

const features = [
  'Multi-platform content distribution',
  'Automated posting schedules',
  'Real-time mention monitoring',
  'Intelligent comment responses',
  'Cross-platform content syndication',
  'Analytics and performance tracking',
  'Content moderation and filtering',
  'Audience engagement automation',
  'Brand monitoring and alerts',
  'Social listening capabilities'
]

const applications = [
  { 
    title: 'X/Twitter Auto-posting',
    description: 'Schedule and publish tweets automatically',
    icon: '🐦',
    complexity: 'Beginner'
  },
  { 
    title: 'Telegram Bots',
    description: 'Create interactive bots for channels and groups',
    icon: '💬',
    complexity: 'Intermediate'
  },
  { 
    title: 'Discord Message Management',
    description: 'Automate server moderation and engagement',
    icon: '🎮',
    complexity: 'Intermediate'
  },
  { 
    title: 'Social Media Monitoring',
    description: 'Track mentions and brand sentiment',
    icon: '👁️',
    complexity: 'Advanced'
  },
  { 
    title: 'Content Syndication',
    description: 'Distribute content across multiple platforms',
    icon: '📡',
    complexity: 'Intermediate'
  },
  { 
    title: 'Engagement Analytics',
    description: 'Track and analyze social media performance',
    icon: '📊',
    complexity: 'Advanced'
  }
]

export default function SocialMediaAutomationTutorial() {
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
                    {tutorialInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
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
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
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
            <ShareIcon className="h-6 w-6 mr-3 text-blue-600" />
            Common Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
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

        {/* Requirements */}
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Twitter Auto-posting Workflow</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Trigger</h3>
                <p className="text-sm text-gray-600">RSS feed or scheduled trigger activates the workflow</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Processing</h3>
                <p className="text-sm text-gray-600">Format content, add hashtags, and optimize for Twitter</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Auto-posting</h3>
                <p className="text-sm text-gray-600">Publish tweet and track engagement metrics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Ready to Automate Your Social Media?</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and master social media automation with n8n!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Tutorial Now
            </button>
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border border-blue-500 inline-flex items-center">
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