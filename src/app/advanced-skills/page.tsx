import { 
  CheckCircleIcon, 
  PlayCircleIcon, 
  ChartBarIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
  CpuChipIcon,
  CodeBracketIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const learningSteps = [
  {
    id: 1,
    title: "Flow Control",
    duration: "120 minutes",
    difficulty: "Advanced",
    description: "Master loops, conditions, and complex workflow logic in n8n",
    content: [
      {
        type: "section",
        title: "Conditional Logic with IF Nodes",
        items: [
          "Build complex conditional statements with multiple criteria",
          "Use JavaScript expressions for advanced conditions",
          "Implement nested IF statements and logic gates",
          "Handle boolean operations (AND, OR, NOT)",
          "Create dynamic routing based on data values"
        ]
      },
      {
        type: "section", 
        title: "Loops and Iterations",
        items: [
          "Process arrays and collections with SplitInBatches",
          "Create recursive workflows for complex data structures",
          "Implement counter-based loops and iterations",
          "Handle nested loops and multi-dimensional data",
          "Optimize loop performance for large datasets"
        ]
      },
      {
        type: "section",
        title: "Advanced Workflow Patterns",
        items: [
          "Build fan-out and fan-in patterns for parallel processing",
          "Implement workflow orchestration and coordination",
          "Create dynamic workflow generation based on input",
          "Use merge nodes for complex data aggregation",
          "Design state machines and workflow states"
        ]
      },
      {
        type: "section",
        title: "Switch and Router Nodes",
        items: [
          "Route data based on multiple conditions",
          "Create complex decision trees and routing logic",
          "Implement priority-based routing systems",
          "Handle default routes and fallback scenarios",
          "Build dynamic routing based on external data"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Error Handling", 
    duration: "90 minutes",
    difficulty: "Advanced",
    description: "Implement robust error handling and workflow resilience strategies",
    content: [
      {
        type: "section",
        title: "Try-Catch Error Handling",
        items: [
          "Implement try-catch patterns in n8n workflows",
          "Handle different types of errors (HTTP, API, validation)",
          "Create custom error messages and logging",
          "Build error recovery and retry mechanisms",
          "Design graceful degradation strategies"
        ]
      },
      {
        type: "section",
        title: "Retry and Backoff Strategies",
        items: [
          "Configure automatic retry policies for failed operations",
          "Implement exponential backoff for API rate limits",
          "Handle transient vs permanent failures",
          "Create retry queues and dead letter patterns",
          "Monitor and alert on repeated failures"
        ]
      },
      {
        type: "section",
        title: "Workflow Monitoring and Alerting",
        items: [
          "Set up workflow health checks and monitoring",
          "Create alerting systems for workflow failures",
          "Implement logging and audit trails",
          "Build dashboard for workflow status tracking",
          "Design incident response and escalation procedures"
        ]
      },
      {
        type: "section",
        title: "Data Validation and Sanitization",
        items: [
          "Validate input data and schema compliance",
          "Sanitize and clean data before processing",
          "Handle malformed or missing data gracefully",
          "Implement data quality checks and gates",
          "Create data validation rules and constraints"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Data Transformation",
    duration: "105 minutes", 
    difficulty: "Advanced",
    description: "Master complex data manipulation and transformation techniques",
    content: [
      {
        type: "section",
        title: "Advanced JavaScript in Code Nodes",
        items: [
          "Write complex JavaScript functions for data processing",
          "Use modern ES6+ features and async/await patterns",
          "Implement custom algorithms and business logic",
          "Handle promises and asynchronous operations",
          "Debug and optimize JavaScript code in n8n"
        ]
      },
      {
        type: "section",
        title: "JSON Path and Data Navigation",
        items: [
          "Master JSONPath expressions for complex data extraction",
          "Navigate nested and complex data structures",
          "Filter and transform arrays with advanced selectors",
          "Handle dynamic property names and structures",
          "Combine multiple data sources efficiently"
        ]
      },
      {
        type: "section",
        title: "Binary Data and File Processing",
        items: [
          "Process files, images, and binary data streams",
          "Convert between different file formats",
          "Handle large file uploads and downloads",
          "Implement file compression and encryption",
          "Create file processing pipelines"
        ]
      },
      {
        type: "section",
        title: "Advanced Set Node Techniques",
        items: [
          "Use expressions and functions for data transformation",
          "Implement complex mathematical calculations",
          "Create dynamic field mapping and transformation",
          "Handle date/time manipulation and formatting",
          "Build data enrichment and augmentation workflows"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Performance Optimization",
    duration: "75 minutes",
    difficulty: "Advanced", 
    description: "Optimize workflows for speed, efficiency, and scalability",
    content: [
      {
        type: "section",
        title: "Workflow Performance Analysis",
        items: [
          "Profile and analyze workflow execution times",
          "Identify performance bottlenecks and inefficiencies",
          "Monitor memory usage and resource consumption",
          "Use execution data to optimize workflow design",
          "Implement performance testing and benchmarking"
        ]
      },
      {
        type: "section",
        title: "Parallel Processing and Concurrency",
        items: [
          "Design workflows for parallel execution",
          "Use SplitInBatches for concurrent processing",
          "Implement worker pools and load balancing",
          "Handle race conditions and synchronization",
          "Optimize for multi-core and distributed systems"
        ]
      },
      {
        type: "section",
        title: "Memory and Resource Management",
        items: [
          "Optimize memory usage for large data processing",
          "Implement streaming for big data workflows",
          "Manage database connections and pooling",
          "Handle garbage collection and memory leaks",
          "Design resource-efficient workflow patterns"
        ]
      },
      {
        type: "section",
        title: "Caching and State Management",
        items: [
          "Implement caching strategies for frequently used data",
          "Use Redis and external caching systems",
          "Manage workflow state and session data",
          "Optimize API calls with intelligent caching",
          "Design stateless and scalable workflow architectures"
        ]
      }
    ]
  }
]

export default function AdvancedSkillsPage() {
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
      <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 text-orange-600 rounded-2xl mb-6">
            <ChartBarIcon className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Advanced n8n Skills</h1>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Master loops, conditions, error handling, and advanced features. Build enterprise-grade workflows with professional best practices.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <span className="inline-flex items-center">
              <CheckCircleIcon className="h-4 w-4 mr-1 text-orange-500" />
              Advanced Level
            </span>
            <span>•</span>
            <span>6-8 hours total</span>
            <span>•</span>
            <span>4 expert modules</span>
          </div>
        </div>
      </div>

      {/* Learning Steps */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-12">
          {learningSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Step Header */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold">
                      {step.id}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{step.title}</h2>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-800">
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
                        {step.id === 1 && <CodeBracketIcon className="h-5 w-5 mr-2 text-orange-600" />}
                        {step.id === 2 && <ExclamationTriangleIcon className="h-5 w-5 mr-2 text-orange-600" />}
                        {step.id === 3 && <ArrowPathIcon className="h-5 w-5 mr-2 text-orange-600" />}
                        {step.id === 4 && <CpuChipIcon className="h-5 w-5 mr-2 text-orange-600" />}
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
                  <button className="inline-flex items-center bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    <PlayCircleIcon className="h-5 w-5 mr-2" />
                    Complete Module {step.id}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Certification */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">🏆 Become an n8n Expert!</h2>
            <p className="text-lg opacity-90">
              You've mastered advanced n8n skills. You're now ready to build enterprise-grade automation solutions!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">🚀 Expert Workflows</h3>
              <p className="text-sm opacity-90">Build complex multi-step workflows with error handling, retries, and performance optimization.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">⚡ Enterprise Solutions</h3>
              <p className="text-sm opacity-90">Design scalable automation systems for large organizations with advanced patterns.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">🔧 Custom Integrations</h3>
              <p className="text-sm opacity-90">Create custom nodes and integrations using advanced JavaScript and API techniques.</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3">📊 Performance Monitoring</h3>
              <p className="text-sm opacity-90">Monitor and optimize workflow performance for maximum efficiency and reliability.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#templates" className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
              Download Advanced Templates
            </Link>
            <Link href="/#use-cases" className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border border-orange-500 text-center">
              Explore Enterprise Use Cases
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 