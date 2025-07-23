import { 
  CheckCircleIcon, 
  CloudArrowDownIcon,
  DocumentDuplicateIcon,
  CogIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const learningSteps = [
  {
    id: 1,
    title: "Template Library",
    description: "Browse and discover ready-to-use workflow templates",
    icon: DocumentDuplicateIcon,
    items: [
      "Browse 500+ curated workflow templates",
      "Filter by category, difficulty, and popularity",
      "Preview template functionality and nodes",
      "Read community reviews and ratings",
      "Access template documentation and guides"
    ]
  },
  {
    id: 2,
    title: "JSON Import",
    description: "Learn how to import and set up templates in your n8n instance",
    icon: CloudArrowDownIcon,
    items: [
      "Download template JSON files instantly",
      "Import templates into your n8n workspace",
      "Configure credentials and API connections",
      "Test template functionality after import",
      "Troubleshoot common import issues"
    ]
  }
]

export default function DownloadTemplatesPage() {
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
      <div className="bg-gradient-to-br from-indigo-50 via-white to-cyan-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl mb-6">
            <CloudArrowDownIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">n8n Template Library</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Copy and import JSON files, ready to use instantly. Browse 500+ community-contributed workflows for every use case.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <CheckCircleIcon className="h-4 w-4 mr-1 text-indigo-500" />
              All Levels
            </span>
            <span>•</span>
            <span>Instant Access</span>
            <span>•</span>
            <span>500+ Templates</span>
          </div>
        </div>
      </div>

      {/* Learning Steps */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {learningSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="flex items-start gap-6">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-indigo-600 text-white rounded-full font-bold text-sm">
                      {step.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🚀 Ready to Get Started?</h2>
          <p className="text-lg mb-6 opacity-90">
            Browse our template library and find the perfect workflow for your needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#templates" className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse All Templates
            </Link>
            <button className="bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-800 transition-colors border border-indigo-500">
              Submit Your Template
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 