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
  BookOpenIcon,
  PuzzlePieceIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const integrationInfo = {
  title: 'Notion Integration',
  description: 'Project dashboards and content sync - Master Notion automation for document collaboration and project management',
  category: 'Document Collaboration',
  difficulty: 'Simple',
  duration: '35 minutes',
  users: '95% users use',
  rating: 4.9,
  tags: ['Notion API', 'Project Management', 'Content Sync', 'Database Management'],
  author: 'n8n Academy',
  lastUpdated: '2 days ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Notion API Setup & Authentication',
    description: 'Configure Notion integration and API access',
    duration: '10 minutes',
    lessons: [
      'Creating Notion integration in developer portal',
      'Setting up API tokens and permissions',
      'Understanding Notion database structure',
      'Configuring workspace access and sharing',
      'Testing API connection with n8n'
    ]
  },
  {
    id: 2,
    title: 'Project Management Workflows',
    description: 'Automate project tracking and task management',
    duration: '15 minutes',
    lessons: [
      'Creating automated project dashboards',
      'Task creation and assignment workflows',
      'Progress tracking and status updates',
      'Team notification and collaboration',
      'Deadline monitoring and alerts',
      'Project reporting and analytics'
    ]
  },
  {
    id: 3,
    title: 'Knowledge Base Automation',
    description: 'Build automated documentation and content systems',
    duration: '10 minutes',
    lessons: [
      'Automated content organization and tagging',
      'Document template creation and deployment',
      'Content approval and publishing workflows',
      'Search and discovery optimization',
      'Version control and change tracking'
    ]
  }
]

const requirements = [
  'Notion workspace with admin access',
  'Notion API integration setup',
  'n8n instance (cloud or self-hosted)',
  'Understanding of Notion database concepts',
  'Basic knowledge of project management workflows'
]

const features = [
  'Automated project dashboard creation',
  'Real-time task and status synchronization',
  'Content management and organization',
  'Team collaboration workflows',
  'Custom database schema design',
  'Template-based content creation',
  'Progress tracking and reporting',
  'Integration with external tools',
  'Automated notifications and alerts',
  'Knowledge base management'
]

const useCases = [
  { 
    title: 'Project Management',
    description: 'Automated project tracking, task assignment, and progress monitoring',
    icon: '📋',
    complexity: 'Simple'
  },
  { 
    title: 'Knowledge Base',
    description: 'Centralized documentation and content management system',
    icon: '📚',
    complexity: 'Simple'
  },
  { 
    title: 'Content Creation',
    description: 'Automated content workflows and publishing pipelines',
    icon: '✍️',
    complexity: 'Medium'
  },
  { 
    title: 'Team Collaboration',
    description: 'Enhanced team communication and project coordination',
    icon: '👥',
    complexity: 'Simple'
  },
  { 
    title: 'CRM Integration',
    description: 'Customer data management and relationship tracking',
    icon: '🤝',
    complexity: 'Medium'
  },
  { 
    title: 'Meeting Management',
    description: 'Automated meeting notes and action item tracking',
    icon: '🗓️',
    complexity: 'Simple'
  }
]

const notionFeatures = [
  { 
    feature: 'Database Operations',
    description: 'Create, read, update, and delete database entries',
    apiEndpoint: '/databases/{database_id}/query'
  },
  { 
    feature: 'Page Management',
    description: 'Create and modify Notion pages and content',
    apiEndpoint: '/pages'
  },
  { 
    feature: 'Block Operations',
    description: 'Manipulate page content blocks and structure',
    apiEndpoint: '/blocks/{block_id}'
  },
  { 
    feature: 'User Management',
    description: 'Access user information and workspace details',
    apiEndpoint: '/users'
  }
]

export default function NotionIntegrationTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📝</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800">
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
                <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 transition-colors mb-3">
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
            <BookOpenIcon className="h-6 w-6 mr-3 text-gray-600" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
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

        {/* Notion API Features */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <PuzzlePieceIcon className="h-6 w-6 mr-3 text-gray-600" />
            Notion API Features
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">API Endpoint</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {notionFeatures.map((feature, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature.feature}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{feature.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono bg-gray-50 rounded">{feature.apiEndpoint}</td>
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
            <CogIcon className="h-6 w-6 mr-3 text-gray-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-gray-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-gray-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Project Dashboard Automation</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Database Setup</h3>
                <p className="text-sm text-gray-600">Create project database with custom properties and templates</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Automation Trigger</h3>
                <p className="text-sm text-gray-600">Set up webhooks or scheduled triggers for project updates</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Processing</h3>
                <p className="text-sm text-gray-600">Transform and organize project data for dashboard display</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Dashboard Update</h3>
                <p className="text-sm text-gray-600">Automatically update Notion pages with latest project status</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Code Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Notion API Integration</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Create a new page in Notion database
{
  "parent": {
    "database_id": "{{$json.database_id}}"
  },
  "properties": {
    "Name": {
      "title": [
        {
          "text": {
            "content": "{{$json.project_name}}"
          }
        }
      ]
    },
    "Status": {
      "select": {
        "name": "{{$json.status}}"
      }
    },
    "Due Date": {
      "date": {
        "start": "{{$json.due_date}}"
      }
    }
  }
}`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This example shows how to create a new project entry in a Notion database using the API.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-slate-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Notion Integration!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and transform your Notion workspace with powerful automation!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Integration Tutorial
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors border border-gray-600 inline-flex items-center">
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