import Link from 'next/link'

const tools = [
  {
    name: 'Notion',
    description: 'Project dashboards and content sync',
    category: 'Document Collaboration',
    icon: '📝',
    useCases: ['Project Management', 'Knowledge Base', 'Content Creation'],
    difficulty: 'Simple',
    popularity: 95,
    tutorialLink: '/integration/notion'
  },
  {
    name: 'Google Sheets',
    description: 'Reports, sync, and data export',
    category: 'Data Processing',
    icon: '📊',
    useCases: ['Data Analysis', 'Report Generation', 'Inventory Management'],
    difficulty: 'Simple',
    popularity: 98,
    tutorialLink: '/integration/google-sheets'
  },
  {
    name: 'OpenAI / Claude',
    description: 'Content generation, chatbot integration',
    category: 'AI Services',
    icon: '🤖',
    useCases: ['Content Creation', 'Smart Q&A', 'Data Analysis'],
    difficulty: 'Medium',
    popularity: 92,
    tutorialLink: '/integration/openai-claude'
  },
  {
    name: 'Telegram',
    description: 'Real-time notifications, bot control',
    category: 'Communication Tools',
    icon: '📱',
    useCases: ['Message Notifications', 'Group Management', 'Auto-reply'],
    difficulty: 'Simple',
    popularity: 88,
    tutorialLink: '/integration/telegram'
  },
  {
    name: 'Webhook.site',
    description: 'Debug and test your API workflows',
    category: 'Development Tools',
    icon: '🔧',
    useCases: ['API Testing', 'Data Debugging', 'Flow Validation'],
    difficulty: 'Medium',
    popularity: 85,
    tutorialLink: '/integration/webhook-site'
  },
  {
    name: 'Airtable',
    description: 'Flexible database and project management',
    category: 'Database',
    icon: '🗂️',
    useCases: ['Customer Management', 'Project Tracking', 'Inventory Management'],
    difficulty: 'Medium',
    popularity: 82,
    tutorialLink: '/integration/airtable'
  }
]

const integrationStats = [
  { count: '1000+', label: 'Available Integrations' },
  { count: '50+', label: 'Official Nodes' },
  { count: '500+', label: 'Community Nodes' },
  { count: '99.9%', label: 'Availability' }
]

export default function RecommendedTools() {
  return (
    <section id="tools" className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Recommended Tools & Integrations
          </h2>
          <p className="section-subtitle">
            Integrate n8n with your favorite tools to build powerful automated workflows
          </p>
        </div>

        {/* Tools showcase */}
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div key={index} className="card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-3xl">{tool.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {tool.name}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 mb-1">
                    <div className={`w-2 h-2 rounded-full ${
                      tool.difficulty === 'Simple' ? 'bg-green-400' : 
                      tool.difficulty === 'Medium' ? 'bg-yellow-400' : 'bg-red-400'
                    }`}></div>
                    <span className="text-xs text-gray-600">{tool.difficulty}</span>
                  </div>
                  <div className="text-xs text-gray-500">{tool.popularity}% users use</div>
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {tool.description}
              </p>

              <div className="space-y-2 mb-4">
                <div className="text-xs font-medium text-gray-700 mb-2">Common Uses:</div>
                <div className="flex flex-wrap gap-1">
                  {tool.useCases.map((useCase, useCaseIndex) => (
                    <span key={useCaseIndex} className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link href={tool.tutorialLink} className="text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm">
                  View Integration Tutorial →
                </Link>
                <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-600 rounded-full transition-all duration-1000"
                    style={{ width: `${tool.popularity}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Integration statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Rich Integration Ecosystem</h3>
            <p className="text-gray-600">n8n supports seamless integration with hundreds of services and tools</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrationStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">{stat.count}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular integration combinations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Popular Integration Combinations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📧</span>
                <span className="text-2xl">➡️</span>
                <span className="text-2xl">🤖</span>
                <span className="text-2xl">➡️</span>
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Smart Email Processing</h4>
              <p className="text-sm text-gray-600 mb-3">
                Gmail → OpenAI Analysis → Google Sheets Record
              </p>
              <div className="flex items-center gap-2 text-xs text-blue-700">
                <span className="bg-blue-100 px-2 py-1 rounded">Email Management</span>
                <span className="bg-blue-100 px-2 py-1 rounded">AI Processing</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌐</span>
                <span className="text-2xl">➡️</span>
                <span className="text-2xl">📝</span>
                <span className="text-2xl">➡️</span>
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Content Publishing Automation</h4>
              <p className="text-sm text-gray-600 mb-3">
                RSS Feed → Notion Organization → Telegram Publishing
              </p>
              <div className="flex items-center gap-2 text-xs text-green-700">
                <span className="bg-green-100 px-2 py-1 rounded">Content Management</span>
                <span className="bg-green-100 px-2 py-1 rounded">Social Media</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link href="/integrations" className="btn-primary mr-4">
            Browse All Integrations
          </Link>
          <button className="btn-secondary">
            Request New Integration
          </button>
        </div>
      </div>
    </section>
  )
} 