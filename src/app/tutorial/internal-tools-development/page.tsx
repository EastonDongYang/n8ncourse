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
  WrenchScrewdriverIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../../components/Layout'

const tutorialInfo = {
  title: 'Internal Tools Development',
  description: 'Dashboards, report generation, logging, team collaboration - Build powerful internal tools and automation systems',
  category: 'Internal Tools',
  difficulty: 'Intermediate to Advanced',
  duration: '90 minutes',
  students: '1.7k',
  rating: 4.9,
  tags: ['Dashboards', 'Reports', 'Team Tools', 'Automation', 'Monitoring'],
  author: 'n8n Academy',
  lastUpdated: '3 hours ago'
}

const tutorialSections = [
  {
    id: 1,
    title: 'Internal Tools Architecture',
    description: 'Planning and designing internal automation systems',
    duration: '20 minutes',
    lessons: [
      'Understanding internal tool requirements',
      'System architecture and design patterns',
      'Database design for internal tools',
      'User authentication and access control',
      'Scalability and performance considerations',
      'Security best practices for internal systems'
    ]
  },
  {
    id: 2,
    title: 'Performance Dashboards',
    description: 'Create real-time monitoring and analytics dashboards',
    duration: '25 minutes',
    lessons: [
      'Data collection and aggregation strategies',
      'Real-time dashboard design principles',
      'KPI tracking and visualization',
      'Alert systems and notifications',
      'Custom chart and graph creation',
      'Mobile-responsive dashboard layouts',
      'Performance optimization techniques'
    ]
  },
  {
    id: 3,
    title: 'Daily Report Auto-generation',
    description: 'Automate report creation and distribution',
    duration: '25 minutes',
    lessons: [
      'Automated data collection workflows',
      'Report template design and customization',
      'Multi-format report generation (PDF, Excel, HTML)',
      'Scheduled report delivery systems',
      'Dynamic content and personalization',
      'Report archiving and version control',
      'Performance metrics and analytics tracking'
    ]
  },
  {
    id: 4,
    title: 'Team Notification Systems',
    description: 'Build intelligent team communication workflows',
    duration: '20 minutes',
    lessons: [
      'Multi-channel notification strategies',
      'Smart notification routing and escalation',
      'Integration with Slack, Teams, and email',
      'Custom notification templates',
      'Notification preferences and filtering',
      'Emergency alert systems',
      'Notification analytics and optimization'
    ]
  }
]

const requirements = [
  'Understanding of workflow automation concepts',
  'Basic knowledge of databases and data structures',
  'Familiarity with web technologies (HTML, CSS, JavaScript)',
  'n8n instance (cloud or self-hosted)',
  'Access to team communication tools (Slack, Teams)',
  'Database or data storage solution',
  'Understanding of API integrations'
]

const features = [
  'Custom dashboard creation',
  'Automated report generation',
  'Real-time data monitoring',
  'Team notification systems',
  'User access control',
  'Multi-format output support',
  'Scheduled automation workflows',
  'Performance analytics',
  'Mobile-responsive interfaces',
  'Integration with existing tools',
  'Custom business logic',
  'Scalable architecture design'
]

const applications = [
  { 
    title: 'Performance Dashboards',
    description: 'Real-time KPI monitoring and business intelligence',
    icon: '📊',
    complexity: 'Advanced'
  },
  { 
    title: 'Daily Report Auto-generation',
    description: 'Automated creation and distribution of business reports',
    icon: '📈',
    complexity: 'Intermediate'
  },
  { 
    title: 'Team Notification Systems',
    description: 'Smart alerts and communication workflows',
    icon: '🔔',
    complexity: 'Intermediate'
  },
  { 
    title: 'Employee Onboarding',
    description: 'Automated new hire processes and workflows',
    icon: '👋',
    complexity: 'Intermediate'
  },
  { 
    title: 'Asset Management',
    description: 'Track and manage company resources and equipment',
    icon: '🏢',
    complexity: 'Advanced'
  },
  { 
    title: 'Time Tracking Systems',
    description: 'Employee time management and productivity tools',
    icon: '⏰',
    complexity: 'Intermediate'
  }
]

const toolCategories = [
  { 
    category: 'Dashboard Tools',
    tools: ['Grafana', 'Tableau', 'Power BI', 'Custom HTML/CSS', 'React Dashboards']
  },
  { 
    category: 'Communication',
    tools: ['Slack API', 'Microsoft Teams', 'Discord', 'Email Services', 'SMS Gateways']
  },
  { 
    category: 'Data Storage',
    tools: ['PostgreSQL', 'MySQL', 'MongoDB', 'Google Sheets', 'Airtable']
  },
  { 
    category: 'Report Generation',
    tools: ['PDF Libraries', 'Excel APIs', 'HTML Templates', 'Chart.js', 'D3.js']
  },
  { 
    category: 'Authentication',
    tools: ['OAuth 2.0', 'LDAP', 'Active Directory', 'JWT Tokens', 'SSO Solutions']
  }
]

const dashboardMetrics = [
  { 
    metric: 'Sales Performance',
    description: 'Revenue, conversion rates, pipeline metrics',
    updateFrequency: 'Real-time'
  },
  { 
    metric: 'Team Productivity',
    description: 'Task completion, time tracking, project status',
    updateFrequency: 'Hourly'
  },
  { 
    metric: 'System Health',
    description: 'Server uptime, error rates, performance metrics',
    updateFrequency: 'Real-time'
  },
  { 
    metric: 'Customer Support',
    description: 'Ticket volume, response times, satisfaction scores',
    updateFrequency: 'Real-time'
  },
  { 
    metric: 'Marketing Analytics',
    description: 'Campaign performance, lead generation, ROI',
    updateFrequency: 'Daily'
  }
]

export default function InternalToolsDevelopmentTutorial() {
  return (
    <Layout>
      <div className="bg-gray-50">
      {/* Tutorial Header */}
      <div className="bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">⚙️</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800">
                    {tutorialInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800">
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
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors mb-3">
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
            <WrenchScrewdriverIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Common Applications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-colors">
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

        {/* Dashboard Metrics */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChartBarIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Common Dashboard Metrics
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Metric Category</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update Frequency</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dashboardMetrics.map((metric, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{metric.metric}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{metric.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        metric.updateFrequency === 'Real-time' ? 'bg-green-100 text-green-800' :
                        metric.updateFrequency === 'Hourly' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {metric.updateFrequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tool Categories */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Technology Stack
          </h2>
          <div className="space-y-6">
            {toolCategories.map((category, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900 mb-3">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <span key={toolIndex} className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-800">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
            <CogIcon className="h-6 w-6 mr-3 text-indigo-600" />
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
            <DocumentTextIcon className="h-6 w-6 mr-3 text-indigo-600" />
            Tutorial Sections
          </h2>
          
          {tutorialSections.map((section, index) => (
            <div key={section.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-indigo-600 text-white rounded-full font-bold">
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
                      <PlayCircleIcon className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Practical Example: Performance Dashboard Workflow</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Collection</h3>
                <p className="text-sm text-gray-600">Gather metrics from various systems and APIs</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Data Processing</h3>
                <p className="text-sm text-gray-600">Transform and aggregate data for visualization</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Dashboard Creation</h3>
                <p className="text-sm text-gray-600">Build interactive charts and KPI displays</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
              <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Alert Configuration</h3>
                <p className="text-sm text-gray-600">Set up notifications for threshold breaches</p>
              </div>
            </div>
          </div>
        </div>

        {/* Development Best Practices */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Internal Tools Development Best Practices</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">✅ Best Practices</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Design with user experience in mind</li>
                <li>• Implement proper access control and security</li>
                <li>• Use responsive design for mobile access</li>
                <li>• Add comprehensive logging and monitoring</li>
                <li>• Plan for scalability from the start</li>
                <li>• Document workflows and processes</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">⚠️ Common Mistakes</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Overcomplicating simple workflows</li>
                <li>• Ignoring security and access controls</li>
                <li>• Poor error handling and user feedback</li>
                <li>• Not considering mobile users</li>
                <li>• Lack of proper testing and validation</li>
                <li>• Insufficient documentation and training</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Build Powerful Internal Tools!</h2>
          <p className="text-lg mb-6 opacity-90">
            Start this comprehensive tutorial and master internal tools development with n8n!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Start Tutorial Now
            </button>
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border border-indigo-500 inline-flex items-center">
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