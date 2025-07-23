import Link from 'next/link'

const useCases = [
  {
    title: 'Social Media Automation',
    description: 'Auto-post content, monitor mentions, reply to comments, data analysis',
    examples: ['X/Twitter Auto-posting', 'Telegram Bots', 'Discord Message Management'],
    icon: '📱',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-800',
    tutorialLink: '/tutorial/social-media-automation'
  },
  {
    title: 'Data Collection & Scraping',
    description: 'Website monitoring, price tracking, news aggregation, market research',
    examples: ['Price Monitoring Alerts', 'Website Content Scraping', 'API Data Collection'],
    icon: '🔍',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-800',
    tutorialLink: '/tutorial/data-collection-scraping'
  },
  {
    title: 'AI-Powered Email Writers',
    description: 'Intelligently generate email content, auto-reply, personalized marketing',
    examples: ['Customer Service Auto-reply', 'Marketing Email Generation', 'Content Summary Emails'],
    icon: '🤖',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-800',
    tutorialLink: '/tutorial/ai-powered-email-writers'
  },
  {
    title: 'Custom API Integrations',
    description: 'Connect different systems, data synchronization, business process automation',
    examples: ['CRM System Integration', 'E-commerce Platform Sync', 'Payment Processing Automation'],
    icon: '🔗',
    color: 'bg-orange-50 border-orange-200',
    textColor: 'text-orange-800',
    tutorialLink: '/tutorial/custom-api-integrations'
  },
  {
    title: 'Internal Tools Development',
    description: 'Dashboards, report generation, logging, team collaboration',
    examples: ['Performance Dashboards', 'Daily Report Auto-generation', 'Team Notification Systems'],
    icon: '⚙️',
    color: 'bg-indigo-50 border-indigo-200',
    textColor: 'text-indigo-800',
    tutorialLink: '/tutorial/internal-tools-development'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Popular Automation Use Cases
          </h2>
          <p className="section-subtitle">
            Explore n8n automation applications across different industries and scenarios to find the solution that fits your needs
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div key={index} className={`card p-6 border-2 ${useCase.color} hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{useCase.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {useCase.title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {useCase.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className={`text-sm font-medium ${useCase.textColor} mb-2`}>
                  Common Applications:
                </div>
                {useCase.examples.map((example, exampleIndex) => (
                  <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3"></div>
                    {example}
                  </div>
                ))}
              </div>
              
              {useCase.tutorialLink ? (
                <Link 
                  href={useCase.tutorialLink}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors w-full text-left block"
                >
                  View Detailed Tutorial →
                </Link>
              ) : (
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors w-full text-left">
                  View Detailed Tutorial →
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/use-cases" className="btn-primary">
            View All Use Cases
          </Link>
        </div>

        {/* 用例统计和特色 */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-n8n-50 rounded-2xl p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-2">💡</div>
                <div className="text-2xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Detailed Use Case Tutorials</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🏢</div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Industry Solutions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⭐</div>
                <div className="text-2xl font-bold text-gray-900">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
        </div>

        {/* 成功案例引用 */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">User Success Stories</h3>
              <div className="w-16 h-0.5 bg-primary-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <blockquote className="border-l-4 border-primary-600 pl-4">
                <p className="text-gray-600 italic mb-3">
                  "Using n8n and these tutorials, we reduced customer service response time by 80% and significantly improved team efficiency."
                </p>
                <footer className="text-sm text-gray-500">
                  — Manager Zhang, E-commerce Company
                </footer>
              </blockquote>
              <blockquote className="border-l-4 border-n8n-600 pl-4">
                <p className="text-gray-600 italic mb-3">
                  "Automated report generation saves us 20 hours of work per week, and the data is more accurate."
                </p>
                <footer className="text-sm text-gray-500">
                  — Director Li, Technology Company
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 