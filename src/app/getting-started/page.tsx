import { 
  CheckCircleIcon, 
  PlayCircleIcon, 
  DocumentTextIcon, 
  CogIcon,
  RocketLaunchIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const learningSteps = [
  {
    id: 1,
    title: "n8n Installation",
    duration: "15 minutes",
    difficulty: "Easy",
    description: "Download and install n8n on your local machine or use the cloud version",
    content: [
      {
        type: "section",
        title: "Option 1: Desktop Installation",
        items: [
          "Download n8n Desktop from the official website",
          "Run the installer and follow the setup wizard",
          "Launch n8n Desktop and create your account",
          "Your n8n instance will be available at localhost:5678"
        ]
      },
      {
        type: "section", 
        title: "Option 2: Cloud Version",
        items: [
          "Visit n8n.cloud and sign up for a free account",
          "Verify your email address",
          "Access your cloud instance immediately",
          "No installation required - works in any browser"
        ]
      },
      {
        type: "section",
        title: "Option 3: Self-hosted (Advanced)",
        items: [
          "Install Node.js (version 16 or later)",
          "Run: npm install n8n -g",
          "Start n8n with: npx n8n",
          "Access at http://localhost:5678"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Interface Overview", 
    duration: "20 minutes",
    difficulty: "Easy",
    description: "Learn the n8n interface and understand how workflows are built",
    content: [
      {
        type: "section",
        title: "Main Interface Components",
        items: [
          "Workflow Canvas - where you build your automation",
          "Node Panel - drag and drop nodes to create workflows", 
          "Settings Panel - configure node parameters and credentials",
          "Execution Panel - view workflow runs and debug issues"
        ]
      },
      {
        type: "section",
        title: "Key Concepts",
        items: [
          "Nodes - individual steps in your workflow",
          "Connections - data flow between nodes",
          "Triggers - what starts your workflow",
          "Actions - what your workflow does"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "First Workflow",
    duration: "25 minutes", 
    difficulty: "Easy",
    description: "Create your first automation workflow from scratch",
    content: [
      {
        type: "section",
        title: "Building Your First Workflow",
        items: [
          "Click 'Add first step' to add a trigger node",
          "Choose 'Manual Trigger' for testing purposes",
          "Add an 'HTTP Request' node to fetch data",
          "Configure the HTTP Request to call a public API",
          "Connect the Manual Trigger to HTTP Request",
          "Test your workflow by clicking 'Execute Workflow'"
        ]
      },
      {
        type: "section",
        title: "Example: Weather Workflow",
        items: [
          "Use Manual Trigger as starting point",
          "Add HTTP Request node pointing to weather API",
          "Set method to GET and URL to weather service",
          "Add another node to process the weather data",
          "Save your workflow with a descriptive name"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Basic Nodes",
    duration: "20 minutes",
    difficulty: "Easy", 
    description: "Understand the most commonly used nodes in n8n",
    content: [
      {
        type: "section",
        title: "Trigger Nodes",
        items: [
          "Manual Trigger - start workflows manually",
          "Webhook - trigger via HTTP requests",
          "Schedule Trigger - run workflows on schedule",
          "Email Trigger - start when emails are received"
        ]
      },
      {
        type: "section",
        title: "Action Nodes",
        items: [
          "HTTP Request - call APIs and web services",
          "Set - transform and manipulate data",
          "IF - add conditional logic to workflows",
          "Code - write custom JavaScript functions"
        ]
      },
      {
        type: "section",
        title: "Integration Nodes", 
        items: [
          "Google Sheets - read/write spreadsheet data",
          "Gmail - send and receive emails",
          "Slack - post messages and notifications",
          "Discord - interact with Discord servers"
        ]
      }
    ]
  }
]

export default function GettingStartedPage() {
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
      <div className="bg-gradient-to-br from-primary-50 via-white to-green-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-2xl mb-6">
            <RocketLaunchIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Getting Started with n8n</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Install, configure, and run your first workflow. This beginner-friendly guide will get you up and running in 1-2 hours.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <CheckCircleIcon className="h-4 w-4 mr-1 text-green-500" />
              Beginner Level
            </span>
            <span>•</span>
            <span>1-2 hours total</span>
            <span>•</span>
            <span>4 learning steps</span>
          </div>
        </div>
      </div>

      {/* Learning Steps */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {learningSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-primary-50 to-green-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full font-bold">
                      {step.id}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        step.difficulty === 'Easy' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
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
                        <DocumentTextIcon className="h-5 w-5 mr-2 text-primary-600" />
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
                  <button className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    <PlayCircleIcon className="h-5 w-5 mr-2" />
                    Complete Step {step.id}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">🎉 Congratulations!</h2>
          <p className="text-lg mb-6 opacity-90">
            You've completed the Getting Started guide. You're now ready to build more complex workflows!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#templates" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Templates
            </Link>
            <Link href="/#use-cases" className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors border border-primary-500">
              View Use Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 