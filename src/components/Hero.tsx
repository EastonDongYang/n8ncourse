import { RocketLaunchIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-n8n-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Master <span className="text-gradient">Workflow Automation</span> with n8n
          </h1>
          <p className="text-xl leading-8 text-gray-600 mb-10 max-w-3xl mx-auto">
            Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.
            Learn from zero to expert level with our comprehensive modern automation toolkit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="#tutorials" className="btn-primary inline-flex items-center gap-2">
              <RocketLaunchIcon className="h-5 w-5" />
              Start Learning
            </a>
            <a href="#templates" className="btn-secondary inline-flex items-center gap-2">
              <WrenchScrewdriverIcon className="h-5 w-5" />
              Browse Templates
            </a>
          </div>

          {/* 社会证明 */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-400 to-n8n-400 border-2 border-white"
                  ></div>
                ))}
              </div>
              <span>Helped 10,000+ users master n8n</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>GitHub 2,500+ Stars</span>
            </div>
          </div>
        </div>

        {/* 可选：添加一个简单的工作流程图示例 */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Example Workflow
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="font-semibold text-gray-900">Receive Email</h3>
                <p className="text-sm text-gray-600 mt-1">Gmail Trigger</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="font-semibold text-gray-900">AI Processing</h3>
                <p className="text-sm text-gray-600 mt-1">OpenAI Analysis</p>
              </div>
              
              <div className="hidden md:block">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              <div className="flex-1 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="font-semibold text-gray-900">Save Data</h3>
                <p className="text-sm text-gray-600 mt-1">Google Sheets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 