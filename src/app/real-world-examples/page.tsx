import { 
  CheckCircleIcon, 
  PlayCircleIcon, 
  DocumentTextIcon, 
  LightBulbIcon,
  MegaphoneIcon,
  CircleStackIcon,
  SparklesIcon,
  ChartBarIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const learningSteps = [
  {
    id: 1,
    title: "Marketing Automation",
    duration: "90 minutes",
    difficulty: "Intermediate",
    description: "Automate marketing campaigns, lead nurturing, and customer engagement workflows",
    content: [
      {
        type: "section",
        title: "Email Marketing Automation",
        items: [
          "Set up automated email sequences for new subscribers",
          "Create personalized email campaigns based on user behavior",
          "Build drip campaigns for lead nurturing",
          "Integrate with email service providers (Mailchimp, ConvertKit)",
          "Track email performance and engagement metrics"
        ]
      },
      {
        type: "section", 
        title: "Social Media Automation",
        items: [
          "Schedule and auto-publish content across platforms",
          "Monitor brand mentions and respond automatically",
          "Create automated social media contests and campaigns",
          "Cross-post content between different social networks",
          "Generate social media reports and analytics"
        ]
      },
      {
        type: "section",
        title: "Lead Generation & CRM Integration",
        items: [
          "Capture leads from website forms and landing pages",
          "Automatically qualify and score leads",
          "Sync new leads to CRM systems (Salesforce, HubSpot)",
          "Create follow-up tasks for sales teams",
          "Build customer journey tracking workflows"
        ]
      },
      {
        type: "section",
        title: "Customer Onboarding",
        items: [
          "Welcome new customers with automated sequences",
          "Provide product tutorials and resources",
          "Track customer activation and engagement",
          "Send targeted onboarding emails based on user actions",
          "Create feedback collection workflows"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Data Processing", 
    duration: "75 minutes",
    difficulty: "Intermediate",
    description: "Process, transform, and analyze data from multiple sources automatically",
    content: [
      {
        type: "section",
        title: "Data Collection & Aggregation",
        items: [
          "Collect data from APIs, databases, and web sources",
          "Aggregate data from multiple platforms (Analytics, CRM, Social)",
          "Schedule regular data extraction and updates",
          "Handle different data formats (JSON, CSV, XML)",
          "Implement data validation and quality checks"
        ]
      },
      {
        type: "section",
        title: "Data Transformation & Cleaning",
        items: [
          "Clean and standardize data formats",
          "Remove duplicates and handle missing values",
          "Transform data structures for different systems",
          "Apply business rules and calculations",
          "Create data enrichment workflows"
        ]
      },
      {
        type: "section",
        title: "Database Operations",
        items: [
          "Connect to SQL databases (MySQL, PostgreSQL)",
          "Perform CRUD operations on database records",
          "Create data synchronization between systems",
          "Implement backup and recovery workflows",
          "Build data archiving and retention processes"
        ]
      },
      {
        type: "section",
        title: "Real-time Data Processing",
        items: [
          "Process streaming data and webhooks",
          "Create real-time data pipelines",
          "Handle high-volume data processing",
          "Implement error handling and retry mechanisms",
          "Monitor data processing performance"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Content Generation",
    duration: "60 minutes", 
    difficulty: "Intermediate",
    description: "Automatically create and publish content using AI and automation",
    content: [
      {
        type: "section",
        title: "AI-Powered Content Creation",
        items: [
          "Generate blog posts and articles with OpenAI",
          "Create social media captions and hashtags",
          "Produce product descriptions for e-commerce",
          "Generate email newsletters and marketing copy",
          "Create personalized content based on user data"
        ]
      },
      {
        type: "section",
        title: "Content Curation & Aggregation",
        items: [
          "Monitor RSS feeds and news sources",
          "Curate relevant content for your audience",
          "Create weekly/monthly content roundups",
          "Automatically source and attribute content",
          "Build content recommendation engines"
        ]
      },
      {
        type: "section",
        title: "Multi-Platform Publishing",
        items: [
          "Publish content to multiple CMS platforms",
          "Schedule content across different time zones",
          "Optimize content format for each platform",
          "Create content distribution workflows",
          "Track content performance across channels"
        ]
      },
      {
        type: "section",
        title: "Content Optimization",
        items: [
          "Generate SEO-optimized titles and meta descriptions",
          "Create A/B testing workflows for content",
          "Analyze content performance and engagement",
          "Automatically update and refresh old content",
          "Build content calendar management systems"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Report Systems",
    duration: "75 minutes",
    difficulty: "Intermediate", 
    description: "Create automated reporting systems for business intelligence and analytics",
    content: [
      {
        type: "section",
        title: "Business Intelligence Reports",
        items: [
          "Create daily, weekly, and monthly business reports",
          "Generate KPI dashboards and metrics",
          "Build sales performance and revenue reports",
          "Create customer analytics and segmentation reports",
          "Develop operational efficiency reports"
        ]
      },
      {
        type: "section",
        title: "Marketing Analytics Reports",
        items: [
          "Track website traffic and conversion metrics",
          "Monitor social media performance and engagement",
          "Create email marketing campaign reports",
          "Generate paid advertising ROI reports",
          "Build customer acquisition cost (CAC) reports"
        ]
      },
      {
        type: "section",
        title: "Financial Reporting",
        items: [
          "Automate expense reporting and categorization",
          "Create profit and loss statements",
          "Generate invoice and payment tracking reports",
          "Build budget vs actual performance reports",
          "Create cash flow and forecasting reports"
        ]
      },
      {
        type: "section",
        title: "Custom Report Distribution",
        items: [
          "Automatically email reports to stakeholders",
          "Create interactive dashboards and visualizations",
          "Schedule report generation and delivery",
          "Build report subscription and notification systems",
          "Create mobile-friendly report formats"
        ]
      }
    ]
  }
]

export default function RealWorldExamplesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl mb-6">
            <LightBulbIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Real-World n8n Examples</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Automate content creation, reporting, and data pipelines. Learn from practical examples that solve real business problems.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <CheckCircleIcon className="h-4 w-4 mr-1 text-purple-500" />
              Intermediate Level
            </span>
            <span>•</span>
            <span>4-6 hours total</span>
            <span>•</span>
            <span>4 practical modules</span>
          </div>
        </div>
      </div>

      {/* Learning Steps */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {learningSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-purple-600 text-white rounded-full font-bold">
                      {step.id}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
                        {step.difficulty}
                      </span>
                    </div>
                    <div>{step.duration}</div>
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="px-8 py-6">
                <div className="space-y-8">
                  {step.content.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        {step.id === 1 && <MegaphoneIcon className="h-5 w-5 mr-2 text-purple-600" />}
                        {step.id === 2 && <CircleStackIcon className="h-5 w-5 mr-2 text-purple-600" />}
                        {step.id === 3 && <SparklesIcon className="h-5 w-5 mr-2 text-purple-600" />}
                        {step.id === 4 && <ChartBarIcon className="h-5 w-5 mr-2 text-purple-600" />}
                        {section.title}
                      </h3>
                      <ul className="space-y-3">
                        {section.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                    <PlayCircleIcon className="h-5 w-5 mr-2" />
                    Complete Module {step.id}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice Examples */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">💡 Ready to Practice?</h2>
            <p className="text-lg opacity-90">
              You've learned the concepts. Now build these real-world examples yourself!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">🤖 AI Content Pipeline</h3>
              <p className="text-sm opacity-90">Build an automated blog writing system that researches topics, generates content, and publishes to your CMS.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">📊 Business Dashboard</h3>
              <p className="text-sm opacity-90">Create a real-time dashboard that aggregates data from sales, marketing, and support systems.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">📧 Smart Email Campaigns</h3>
              <p className="text-sm opacity-90">Build intelligent email sequences that adapt based on customer behavior and engagement.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">🔄 Data Synchronization</h3>
              <p className="text-sm opacity-90">Sync customer data between your CRM, support system, and marketing tools in real-time.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#templates" className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Get Templates
            </Link>
            <Link href="/#use-cases" className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border border-purple-500 text-center">
              View More Use Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 