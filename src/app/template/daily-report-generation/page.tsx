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
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const templateInfo = {
  title: 'Daily Report Generation & Distribution',
  description: 'Automatically collect data from various platforms, generate daily reports, and schedule delivery to team members with customizable templates',
  category: 'Team Collaboration',
  difficulty: 'Advanced',
  duration: '40 minutes',
  downloads: '1.2k',
  likes: 167,
  rating: 4.9,
  tags: ['Reports', 'Team', 'Scheduled Tasks'],
  author: 'n8n Community',
  lastUpdated: '3 days ago'
}

const workflowSteps = [
  {
    id: 1,
    title: 'Data Source Integration',
    description: 'Connect to multiple data sources and APIs',
    duration: '15 minutes',
    content: [
      'Set up API connections to analytics platforms',
      'Configure database queries for internal metrics',
      'Connect to social media and marketing platforms',
      'Set up file system and cloud storage integrations',
      'Add data validation and error handling',
      'Test all data source connections'
    ]
  },
  {
    id: 2,
    title: 'Data Processing & Analysis',
    description: 'Process and analyze collected data',
    duration: '12 minutes',
    content: [
      'Implement data transformation and cleaning logic',
      'Calculate key performance indicators (KPIs)',
      'Generate trend analysis and comparisons',
      'Create data visualizations and charts',
      'Add statistical analysis and insights',
      'Format data for report templates'
    ]
  },
  {
    id: 3,
    title: 'Report Generation & Distribution',
    description: 'Create reports and distribute to stakeholders',
    duration: '13 minutes',
    content: [
      'Design customizable report templates',
      'Generate PDF and HTML report formats',
      'Set up email distribution lists and personalization',
      'Configure Slack and Teams notifications',
      'Implement scheduled delivery system',
      'Add report archiving and version control',
      'Set up delivery confirmation tracking'
    ]
  }
]

const requirements = [
  'Access to data sources (APIs, databases, files)',
  'Email service provider for distribution',
  'Team communication tools (Slack, Teams)',
  'n8n instance (cloud or self-hosted)',
  'Report template design skills',
  'Understanding of data analysis concepts',
  'Cloud storage for report archiving'
]

const features = [
  'Multi-source data aggregation',
  'Automated KPI calculations',
  'Customizable report templates',
  'Multiple output formats (PDF, HTML, Excel)',
  'Scheduled report delivery',
  'Team-specific personalization',
  'Interactive data visualizations',
  'Trend analysis and insights',
  'Report archiving system',
  'Delivery tracking and confirmations',
  'Error handling and notifications',
  'Performance monitoring'
]

const dataSources = [
  { 
    category: 'Analytics Platforms',
    sources: ['Google Analytics', 'Adobe Analytics', 'Mixpanel', 'Amplitude', 'Hotjar']
  },
  { 
    category: 'Marketing Tools',
    sources: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Mailchimp', 'HubSpot']
  },
  { 
    category: 'Sales & CRM',
    sources: ['Salesforce', 'Pipedrive', 'HubSpot CRM', 'Zoho CRM', 'Monday.com']
  },
  { 
    category: 'Social Media',
    sources: ['Twitter API', 'Facebook Insights', 'LinkedIn Analytics', 'Instagram API', 'YouTube Analytics']
  },
  { 
    category: 'Financial Data',
    sources: ['Stripe', 'PayPal', 'QuickBooks', 'Xero', 'FreshBooks']
  },
  { 
    category: 'Project Management',
    sources: ['Jira', 'Trello', 'Asana', 'Notion', 'ClickUp']
  }
]

const reportTypes = [
  { 
    name: 'Executive Dashboard', 
    description: 'High-level KPIs and business metrics',
    frequency: 'Daily/Weekly'
  },
  { 
    name: 'Marketing Performance', 
    description: 'Campaign metrics and ROI analysis',
    frequency: 'Daily'
  },
  { 
    name: 'Sales Report', 
    description: 'Revenue, leads, and conversion metrics',
    frequency: 'Daily/Weekly'
  },
  { 
    name: 'Website Analytics', 
    description: 'Traffic, engagement, and conversion data',
    frequency: 'Daily'
  },
  { 
    name: 'Social Media Summary', 
    description: 'Engagement, reach, and growth metrics',
    frequency: 'Daily/Weekly'
  },
  { 
    name: 'Project Status Report', 
    description: 'Task completion and team productivity',
    frequency: 'Daily/Weekly'
  }
]

export default function DailyReportGenerationTemplate() {
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
      <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📈</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800">
                    {templateInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
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
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-3">
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
        {/* Report Types */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Supported Report Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {reportTypes.map((report, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{report.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{report.description}</p>
                <div className="text-xs text-indigo-600 font-medium">
                  {report.frequency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Supported Data Sources
          </h2>
          <div className="space-y-6">
            {dataSources.map((dataSource, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">{dataSource.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {dataSource.sources.map((source, sourceIndex) => (
                    <span key={sourceIndex} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-800">
                      {source}
                    </span>
                  ))}
                </div>
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
            <CogIcon className="h-6 w-6 mr-3 text-indigo-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Implementation Steps
          </h2>
          
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full font-bold">
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

        {/* Report Delivery Schedule */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Delivery Schedule</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipients</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Executive Dashboard</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Daily</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8:00 AM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">C-Level, Directors</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Marketing Performance</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Daily</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">9:00 AM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Marketing Team</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sales Report</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Daily</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8:30 AM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Sales Team, Managers</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Website Analytics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Daily</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10:00 AM</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Digital Team</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">📊 Automate Your Team Reporting Today!</h2>
          <p className="text-lg mb-6 opacity-90">
            Download the template and start generating automated daily reports for your team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download JSON Template
            </button>
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border border-indigo-500 inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Watch Setup Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 