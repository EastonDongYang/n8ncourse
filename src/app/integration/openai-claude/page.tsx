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
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const integrationInfo = {
  title: 'OpenAI / Claude Integration',
  description: 'Content generation, chatbot integration - Master AI services automation for intelligent workflows',
  category: 'AI Services',
  difficulty: 'Medium',
  duration: '45 minutes',
  users: '92% users use',
  rating: 4.9,
  tags: ['OpenAI API', 'Claude API', 'Content Generation', 'AI Automation', 'Chatbots'],
  author: 'n8n Academy',
  lastUpdated: '6 hours ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'AI API Setup & Configuration',
    description: 'Configure OpenAI and Claude API integrations',
    duration: '12 minutes',
    lessons: [
      'Setting up OpenAI API keys and organization',
      'Configuring Claude API access and authentication',
      'Understanding API rate limits and pricing',
      'Model selection and capability comparison',
      'Testing API connections and responses',
      'Error handling and fallback strategies'
    ]
  },
  {
    id: 2,
    title: 'Content Creation Workflows',
    description: 'Automate content generation and processing',
    duration: '18 minutes',
    lessons: [
      'Blog post and article generation workflows',
      'Social media content creation automation',
      'Email template generation and personalization',
      'Product description and marketing copy',
      'Content translation and localization',
      'SEO optimization and keyword integration',
      'Content quality control and validation'
    ]
  },
  {
    id: 3,
    title: 'Smart Q&A Systems',
    description: 'Build intelligent question-answering workflows',
    duration: '15 minutes',
    lessons: [
      'Customer support chatbot development',
      'Knowledge base query automation',
      'FAQ generation and maintenance',
      'Context-aware response generation',
      'Multi-turn conversation handling',
      'Integration with existing support systems',
      'Performance monitoring and optimization'
    ]
  }
]

const requirements = [
  'OpenAI API key with appropriate credits',
  'Claude API access (Anthropic account)',
  'n8n instance (cloud or self-hosted)',
  'Understanding of AI prompt engineering',
  'Basic knowledge of API integrations',
  'Content strategy and use case planning'
]

const features = [
  'Multi-model AI integration (GPT-4, Claude, etc.)',
  'Intelligent content generation',
  'Context-aware chatbot responses',
  'Automated content optimization',
  'Multi-language support and translation',
  'Custom prompt template management',
  'Response quality validation',
  'Cost optimization and monitoring',
  'Fallback and error handling',
  'Integration with content management systems'
]

const useCases = [
  { 
    title: 'Content Creation',
    description: 'Automated blog posts, articles, and marketing content',
    icon: '✍️',
    complexity: 'Medium'
  },
  { 
    title: 'Smart Q&A',
    description: 'Intelligent customer support and FAQ systems',
    icon: '💬',
    complexity: 'Medium'
  },
  { 
    title: 'Data Analysis',
    description: 'AI-powered data insights and report generation',
    icon: '📊',
    complexity: 'Advanced'
  },
  { 
    title: 'Email Automation',
    description: 'Personalized email content and response generation',
    icon: '📧',
    complexity: 'Medium'
  },
  { 
    title: 'Code Generation',
    description: 'Automated code writing and documentation',
    icon: '💻',
    complexity: 'Advanced'
  },
  { 
    title: 'Translation Services',
    description: 'Multi-language content translation and localization',
    icon: '🌐',
    complexity: 'Medium'
  }
]

const aiModels = [
  { 
    provider: 'OpenAI',
    model: 'GPT-4',
    strengths: 'Complex reasoning, code generation, creative writing',
    pricing: 'Higher cost, high quality',
    bestFor: 'Complex tasks, creative content'
  },
  { 
    provider: 'OpenAI',
    model: 'GPT-3.5 Turbo',
    strengths: 'Fast responses, good general performance',
    pricing: 'Cost-effective, moderate quality',
    bestFor: 'General automation, high-volume tasks'
  },
  { 
    provider: 'Anthropic',
    model: 'Claude 3',
    strengths: 'Safety-focused, long context, analysis',
    pricing: 'Competitive, high quality',
    bestFor: 'Document analysis, safe content generation'
  },
  { 
    provider: 'OpenAI',
    model: 'GPT-4 Turbo',
    strengths: 'Latest features, improved efficiency',
    pricing: 'Moderate cost, excellent quality',
    bestFor: 'Production workflows, balanced performance'
  }
]

export default function OpenAIClaudeIntegrationTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">🤖</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2 py-1 text-xs font-medium text-purple-800">
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
                <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors mb-3">
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
            <SparklesIcon className="h-6 w-6 mr-3 text-purple-600" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
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

        {/* AI Models Comparison */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChatBubbleLeftRightIcon className="h-6 w-6 mr-3 text-purple-600" />
            AI Models Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Provider</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Model</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strengths</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pricing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {aiModels.map((model, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{model.provider}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{model.model}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{model.strengths}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{model.pricing}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{model.bestFor}</td>
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
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 px-8 py-6 border-b border-gray-200">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: AI Content Generation Workflow</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Brief Input</h3>
                <p className="text-sm text-gray-600">Receive content requirements and topic information</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">AI Processing</h3>
                <p className="text-sm text-gray-600">Generate content using OpenAI or Claude with custom prompts</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Quality Review</h3>
                <p className="text-sm text-gray-600">Validate content quality and apply formatting</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Delivery</h3>
                <p className="text-sm text-gray-600">Publish or deliver content to target platforms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Engineering Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample AI Prompt Template</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`You are a professional content writer. Create a blog post based on:

Topic: {{$json.topic}}
Target Audience: {{$json.audience}}
Tone: {{$json.tone}}
Word Count: {{$json.word_count}}

Requirements:
- Include relevant keywords: {{$json.keywords}}
- Structure with clear headings and subheadings
- Add actionable insights and examples
- Optimize for SEO and readability
- Include a compelling introduction and conclusion

Format the output as markdown with proper headings.`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This template can be customized for different content types and requirements.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master AI Integration!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and unlock the power of AI automation with OpenAI and Claude!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Integration Tutorial
            </button>
            <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border border-purple-500 inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Templates
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 