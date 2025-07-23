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
  TableCellsIcon,
  FolderIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const integrationInfo = {
  title: 'Airtable Integration',
  description: 'Flexible database and project management - Master Airtable automation for data organization and collaboration',
  category: 'Database',
  difficulty: 'Medium',
  duration: '35 minutes',
  users: '82% users use',
  rating: 4.8,
  tags: ['Airtable API', 'Database Management', 'Project Tracking', 'Data Organization'],
  author: 'n8n Academy',
  lastUpdated: '8 hours ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Airtable API Setup & Authentication',
    description: 'Configure Airtable integration and API access',
    duration: '10 minutes',
    lessons: [
      'Creating Airtable API keys and personal access tokens',
      'Understanding base and table structure',
      'Configuring API permissions and access levels',
      'Setting up webhook endpoints for real-time updates',
      'Testing API connectivity and basic operations'
    ]
  },
  {
    id: 2,
    title: 'Customer Management Workflows',
    description: 'Automate customer data and relationship management',
    duration: '15 minutes',
    lessons: [
      'Customer data synchronization and updates',
      'Lead tracking and conversion workflows',
      'Contact management and segmentation',
      'Sales pipeline automation',
      'Customer communication history tracking',
      'Automated follow-up and reminder systems'
    ]
  },
  {
    id: 3,
    title: 'Project Tracking & Inventory Management',
    description: 'Build comprehensive project and inventory systems',
    duration: '10 minutes',
    lessons: [
      'Project milestone tracking and updates',
      'Task assignment and progress monitoring',
      'Inventory level monitoring and alerts',
      'Resource allocation and management',
      'Automated reporting and analytics',
      'Team collaboration and notification systems'
    ]
  }
]

const requirements = [
  'Airtable account with base access',
  'Airtable API key or personal access token',
  'n8n instance (cloud or self-hosted)',
  'Understanding of database concepts',
  'Basic knowledge of API integrations'
]

const features = [
  'Automated record creation and updates',
  'Real-time data synchronization',
  'Custom field mapping and transformation',
  'Batch operations and bulk updates',
  'Attachment and file management',
  'Formula field automation',
  'View filtering and sorting',
  'Collaboration workflow automation',
  'Integration with external services',
  'Advanced query and search capabilities'
]

const useCases = [
  { 
    title: 'Customer Management',
    description: 'CRM workflows, lead tracking, and customer data management',
    icon: '👥',
    complexity: 'Medium'
  },
  { 
    title: 'Project Tracking',
    description: 'Project management, task tracking, and team collaboration',
    icon: '📋',
    complexity: 'Medium'
  },
  { 
    title: 'Inventory Management',
    description: 'Stock tracking, supply chain, and resource management',
    icon: '📦',
    complexity: 'Medium'
  },
  { 
    title: 'Content Management',
    description: 'Content planning, editorial calendars, and publishing workflows',
    icon: '📝',
    complexity: 'Medium'
  },
  { 
    title: 'Event Management',
    description: 'Event planning, attendee tracking, and logistics coordination',
    icon: '🎉',
    complexity: 'Medium'
  },
  { 
    title: 'HR Management',
    description: 'Employee records, recruitment, and performance tracking',
    icon: '👔',
    complexity: 'Advanced'
  }
]

const airtableOperations = [
  { 
    operation: 'List Records',
    description: 'Retrieve records from a table with filtering and sorting',
    method: 'GET',
    endpoint: '/v0/{baseId}/{tableIdOrName}'
  },
  { 
    operation: 'Create Records',
    description: 'Add new records to a table',
    method: 'POST',
    endpoint: '/v0/{baseId}/{tableIdOrName}'
  },
  { 
    operation: 'Update Records',
    description: 'Modify existing records in a table',
    method: 'PATCH',
    endpoint: '/v0/{baseId}/{tableIdOrName}'
  },
  { 
    operation: 'Delete Records',
    description: 'Remove records from a table',
    method: 'DELETE',
    endpoint: '/v0/{baseId}/{tableIdOrName}'
  }
]

export default function AirtableIntegrationTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📊</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
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
                <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors mb-3">
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
            <TableCellsIcon className="h-6 w-6 mr-3 text-yellow-600" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-yellow-300 transition-colors">
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

        {/* Airtable API Operations */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <FolderIcon className="h-6 w-6 mr-3 text-yellow-600" />
            Airtable API Operations
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Operation</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endpoint</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {airtableOperations.map((operation, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{operation.operation}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{operation.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        operation.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                        operation.method === 'POST' ? 'bg-green-100 text-green-800' :
                        operation.method === 'PATCH' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {operation.method}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 font-mono bg-gray-50 rounded">{operation.endpoint}</td>
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
            <CogIcon className="h-6 w-6 mr-3 text-yellow-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-yellow-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-yellow-600 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Customer Management System</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Lead Capture</h3>
                <p className="text-sm text-gray-600">Automatically create new customer records from form submissions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Enrichment</h3>
                <p className="text-sm text-gray-600">Enhance customer profiles with additional data from external sources</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Status Updates</h3>
                <p className="text-sm text-gray-600">Track customer journey and update status based on interactions</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-yellow-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-yellow-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Automated Follow-up</h3>
                <p className="text-sm text-gray-600">Trigger follow-up actions and notifications based on customer data</p>
              </div>
            </div>
          </div>
        </div>

        {/* Airtable Base Structure Guide */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Airtable Base Structure Best Practices</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Plan Your Schema</h3>
              <p className="text-sm text-gray-600">Design your tables and relationships before creating the base.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Use Appropriate Field Types</h3>
              <p className="text-sm text-gray-600">Choose the right field types (Single line text, Number, Date, etc.) for your data.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Set Up Views</h3>
              <p className="text-sm text-gray-600">Create filtered and sorted views for different use cases and team members.</p>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Configure Permissions</h3>
              <p className="text-sm text-gray-600">Set appropriate access levels for different users and API integrations.</p>
            </div>
          </div>
        </div>

        {/* Integration Code Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Airtable API Integration</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Create new customer record in Airtable
{
  "records": [
    {
      "fields": {
        "Name": "{{$json.customer_name}}",
        "Email": "{{$json.email}}",
        "Phone": "{{$json.phone}}",
        "Company": "{{$json.company}}",
        "Status": "New Lead",
        "Source": "{{$json.lead_source}}",
        "Created Date": "{{$json.created_date}}",
        "Notes": "{{$json.initial_notes}}"
      }
    }
  ]
}`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This example shows how to create a new customer record with multiple field types.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Airtable Integration!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and build powerful database automation workflows!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Integration Tutorial
            </button>
            <button className="bg-yellow-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-800 transition-colors border border-yellow-500 inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download Base Templates
            </button>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  )
} 