import { 
  AcademicCapIcon, 
  PuzzlePieceIcon, 
  LightBulbIcon, 
  ChartBarIcon, 
  CloudArrowDownIcon 
} from '@heroicons/react/24/outline'

const learningPaths = [
  {
    icon: AcademicCapIcon,
    title: 'Getting Started',
    description: 'Install, configure, and run your first workflow',
    difficulty: 'Beginner',
    duration: '1-2 hours',
    color: 'bg-green-100 text-green-600',
    topics: ['n8n Installation', 'Interface Overview', 'First Workflow', 'Basic Nodes']
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Integrations',
    description: 'Connect n8n with Google, OpenAI, Notion, and more services',
    difficulty: 'Intermediate',
    duration: '3-5 hours',
    color: 'bg-blue-100 text-blue-600',
    topics: ['API Integration', 'OAuth Authentication', 'Data Passing', 'Common Nodes']
  },
  {
    icon: LightBulbIcon,
    title: 'Real-World Examples',
    description: 'Automate content creation, reporting, and data pipelines',
    difficulty: 'Intermediate',
    duration: '4-6 hours',
    color: 'bg-purple-100 text-purple-600',
    topics: ['Marketing Automation', 'Data Processing', 'Content Generation', 'Report Systems']
  },
  {
    icon: ChartBarIcon,
    title: 'Advanced Skills',
    description: 'Loops, conditions, error handling, and advanced features',
    difficulty: 'Advanced',
    duration: '6-8 hours',
    color: 'bg-orange-100 text-orange-600',
    topics: ['Flow Control', 'Error Handling', 'Data Transformation', 'Performance Optimization']
  },
  {
    icon: CloudArrowDownIcon,
    title: 'Download Templates',
    description: 'Copy and import JSON files, ready to use instantly',
    difficulty: 'All Levels',
    duration: 'Instant',
    color: 'bg-indigo-100 text-indigo-600',
    topics: ['Template Library', 'JSON Import', 'Custom Modifications', 'Share & Publish']
  }
]

export default function LearningPath() {
  return (
    <section id="tutorials" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Learn by Level or Goal
          </h2>
          <p className="section-subtitle">
            From beginner to expert level, systematically learn n8n workflow automation
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path, index) => {
            const IconComponent = path.icon
            return (
              <div key={index} className="card p-8 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className={`rounded-lg p-3 ${path.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800">
                      {path.difficulty}
                    </span>
                    <p className="text-sm text-gray-600 mt-1">{path.duration}</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {path.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {path.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {path.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                      {topic}
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  {index === 0 ? (
                    <a href="/getting-started" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Start Learning →
                    </a>
                  ) : index === 1 ? (
                    <a href="/integrations" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Start Learning →
                    </a>
                  ) : index === 2 ? (
                    <a href="/real-world-examples" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Start Learning →
                    </a>
                  ) : index === 3 ? (
                    <a href="/advanced-skills" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Start Learning →
                    </a>
                  ) : index === 4 ? (
                    <a href="/download-templates" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Start Learning →
                    </a>
                  ) : (
                    <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                      Start Learning →
                    </button>
                  )}
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* 学习进度跟踪提示 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Tip: Register an account to track your learning progress
          </div>
        </div>
      </div>
    </section>
  )
} 