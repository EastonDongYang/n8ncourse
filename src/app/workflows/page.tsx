import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function WorkflowsPage() {
  const workflows = [
    {
      id: 'auto-post-tweets-telegram',
      title: 'Monitor Twitter and Save to Airtable',
      description: 'Search Twitter/X for specific keywords, automatically collect and organize tweets in Airtable database with deduplication.',
      category: 'Social Media',
      difficulty: 'Beginner',
      duration: '15 minutes',
      downloads: '2.3k',
      likes: '156',
      bgColor: 'bg-blue-100',
      categoryColor: 'bg-blue-100 text-blue-800',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v11a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1V2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2H7zM5 2h2v4H5V2zm14 0h2v4h-2V2zM3 5h18v2H3V5zm16 3v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8h14z"/>
          <path d="M8 10h8v2H8v-2zm0 4h8v2H8v-2z"/>
        </svg>
      )
    },
    {
      id: 'sync-form-responses-google-sheets',
      title: 'Sync Form Responses to Google Sheets',
      description: 'Automatically collect website form data, sync to Google Sheets in real-time with data validation and formatting.',
      category: 'Data Management',
      difficulty: 'Beginner',
      duration: '20 minutes',
      downloads: '4.1k',
      likes: '289',
      bgColor: 'bg-blue-100',
      categoryColor: 'bg-blue-100 text-blue-800',
      icon: (
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
        </svg>
      )
    },
    {
      id: 'generate-summaries-openai-email',
      title: 'Generate Summaries with OpenAI & Email',
      description: 'Use AI to automatically generate content summaries, format and send via email to subscribers or team members.',
      category: 'AI Automation',
      difficulty: 'Intermediate',
      duration: '30 minutes',
      downloads: '1.8k',
      likes: '134',
      bgColor: 'bg-purple-100',
      categoryColor: 'bg-purple-100 text-purple-800',
      icon: (
        <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Workflow Templates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of ready-to-use workflow templates to automate your tasks and boost productivity.
          </p>
        </div>

        {/* Workflow Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {workflows.map((workflow) => (
            <div key={workflow.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${workflow.bgColor} rounded-lg flex items-center justify-center`}>
                    {workflow.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {workflow.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${workflow.categoryColor}`}>
                        {workflow.category}
                      </span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        workflow.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
                      }`}>
                        {workflow.difficulty}
                      </span>
                      <span className="text-xs text-gray-500">
                        {workflow.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-6 line-clamp-3">
                  {workflow.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-600">{workflow.downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-sm text-gray-600">{workflow.likes}</span>
                    </div>
                  </div>
                </div>

                {/* View Details Button */}
                <Link 
                  href={`/${workflow.id}`}
                  className="inline-flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Workflow?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We can help you create a custom workflow tailored to your specific needs.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
} 