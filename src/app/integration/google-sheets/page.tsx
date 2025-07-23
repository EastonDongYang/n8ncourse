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
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const integrationInfo = {
  title: 'Google Sheets Integration',
  description: 'Reports, sync, and data export - Master Google Sheets automation for data processing and analysis',
  category: 'Data Processing',
  difficulty: 'Simple',
  duration: '30 minutes',
  users: '98% users use',
  rating: 4.9,
  tags: ['Google Sheets API', 'Data Analysis', 'Report Generation', 'Data Sync'],
  author: 'n8n Academy',
  lastUpdated: '1 day ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Google Sheets API Setup',
    description: 'Configure Google Sheets integration and authentication',
    duration: '8 minutes',
    lessons: [
      'Creating Google Cloud project and enabling Sheets API',
      'Setting up service account credentials',
      'Configuring OAuth 2.0 authentication',
      'Understanding Google Sheets API permissions',
      'Testing API connection with n8n'
    ]
  },
  {
    id: 2,
    title: 'Data Analysis Workflows',
    description: 'Automate data processing and analysis tasks',
    duration: '12 minutes',
    lessons: [
      'Automated data import from multiple sources',
      'Data cleaning and transformation workflows',
      'Formula automation and calculation updates',
      'Pivot table creation and management',
      'Data validation and quality checks',
      'Conditional formatting automation'
    ]
  },
  {
    id: 3,
    title: 'Report Generation',
    description: 'Create automated reporting and dashboard systems',
    duration: '10 minutes',
    lessons: [
      'Automated report template creation',
      'Dynamic chart and graph generation',
      'Scheduled report updates and distribution',
      'Multi-sheet workbook management',
      'Export automation (PDF, CSV, Excel)',
      'Email report delivery workflows'
    ]
  }
]

const requirements = [
  'Google account with Sheets access',
  'Google Cloud Platform project setup',
  'Google Sheets API credentials',
  'n8n instance (cloud or self-hosted)',
  'Basic understanding of spreadsheet concepts'
]

const features = [
  'Automated data import and export',
  'Real-time spreadsheet synchronization',
  'Formula and calculation automation',
  'Chart and visualization creation',
  'Multi-source data aggregation',
  'Scheduled report generation',
  'Data validation and cleaning',
  'Collaborative workflow management',
  'Custom formatting and styling',
  'Integration with external databases'
]

const useCases = [
  { 
    title: 'Data Analysis',
    description: 'Automated data processing, analysis, and visualization',
    icon: '📊',
    complexity: 'Simple'
  },
  { 
    title: 'Report Generation',
    description: 'Scheduled business reports and dashboard updates',
    icon: '📈',
    complexity: 'Simple'
  },
  { 
    title: 'Inventory Management',
    description: 'Real-time inventory tracking and stock management',
    icon: '📦',
    complexity: 'Medium'
  },
  { 
    title: 'Financial Tracking',
    description: 'Expense tracking, budgeting, and financial analysis',
    icon: '💰',
    complexity: 'Medium'
  },
  { 
    title: 'CRM Data Sync',
    description: 'Customer data synchronization and management',
    icon: '👥',
    complexity: 'Medium'
  },
  { 
    title: 'Survey Analysis',
    description: 'Automated survey data collection and analysis',
    icon: '📋',
    complexity: 'Simple'
  }
]

const sheetsOperations = [
  { 
    operation: 'Read Data',
    description: 'Retrieve data from specific ranges or entire sheets',
    method: 'GET',
    endpoint: '/spreadsheets/{spreadsheetId}/values/{range}'
  },
  { 
    operation: 'Write Data',
    description: 'Add or update data in spreadsheet cells',
    method: 'PUT',
    endpoint: '/spreadsheets/{spreadsheetId}/values/{range}'
  },
  { 
    operation: 'Append Data',
    description: 'Add new rows to the end of a sheet',
    method: 'POST',
    endpoint: '/spreadsheets/{spreadsheetId}/values/{range}:append'
  },
  { 
    operation: 'Batch Update',
    description: 'Perform multiple operations in a single request',
    method: 'POST',
    endpoint: '/spreadsheets/{spreadsheetId}:batchUpdate'
  }
]

export default function GoogleSheetsIntegrationTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📊</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
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
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-3">
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
            <TableCellsIcon className="h-6 w-6 mr-3 text-green-600" />
            Common Use Cases
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
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

        {/* Google Sheets API Operations */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3 text-green-600" />
            Google Sheets API Operations
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
                {sheetsOperations.map((operation, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{operation.operation}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{operation.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        operation.method === 'GET' ? 'bg-blue-100 text-blue-800' :
                        operation.method === 'POST' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
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
            <CogIcon className="h-6 w-6 mr-3 text-green-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-green-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Automated Sales Report</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Collection</h3>
                <p className="text-sm text-gray-600">Gather sales data from CRM and e-commerce platforms</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Processing</h3>
                <p className="text-sm text-gray-600">Clean, transform, and calculate sales metrics</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Sheet Update</h3>
                <p className="text-sm text-gray-600">Update Google Sheets with processed data and formulas</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Report Distribution</h3>
                <p className="text-sm text-gray-600">Generate and email reports to stakeholders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Code Example */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Google Sheets API Call</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`// Append data to Google Sheets
{
  "range": "Sheet1!A:D",
  "majorDimension": "ROWS",
  "values": [
    [
      "{{$json.date}}",
      "{{$json.product_name}}",
      "{{$json.quantity}}",
      "{{$json.revenue}}"
    ]
  ]
}`}
            </pre>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            This example shows how to append sales data to a Google Sheets spreadsheet.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Master Google Sheets Integration!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and automate your data processing with Google Sheets!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Integration Tutorial
            </button>
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors border border-green-500 inline-flex items-center">
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