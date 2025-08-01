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
  RssIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

const templateInfo = {
  title: 'Aggregate RSS Feeds to Notion Database',
  description: 'Automatically fetch multiple RSS sources, intelligently categorize and organize into Notion database with tagging and filtering',
  category: 'Content Management',
  difficulty: 'Intermediate',
  duration: '25 minutes',
  downloads: '956',
  likes: 78,
  rating: 4.6,
  tags: ['RSS', 'Notion', 'Content Aggregation'],
  author: 'n8n Community',
  lastUpdated: '5 days ago'
}

const workflowSteps = [
  {
    id: 1,
    title: 'RSS Feed Configuration',
    description: 'Set up multiple RSS feed sources and scheduling',
    duration: '8 minutes',
    content: [
      'Configure RSS trigger nodes for multiple feed sources',
      'Set up polling intervals and feed validation',
      'Add feed source identification and metadata',
      'Test RSS feed connectivity and data parsing'
    ]
  },
  {
    id: 2,
    title: 'Content Processing & Categorization',
    description: 'Process and intelligently categorize RSS content',
    duration: '10 minutes',
    content: [
      'Extract and clean article content and metadata',
      'Implement keyword-based categorization logic',
      'Add duplicate detection and filtering',
      'Format content for Notion database structure',
      'Generate tags and categories automatically',
      'Add content quality scoring and filtering'
    ]
  },
  {
    id: 3,
    title: 'Notion Database Integration',
    description: 'Store processed content in organized Notion database',
    duration: '7 minutes',
    content: [
      'Set up Notion API credentials and database connection',
      'Configure database schema with proper field types',
      'Map RSS content to Notion database properties',
      'Implement batch insertion for performance',
      'Test data insertion and verify formatting'
    ]
  }
]

const requirements = [
  'Notion account with API access',
  'RSS feed URLs from target sources',
  'n8n instance (cloud or self-hosted)',
  'Basic understanding of Notion databases',
  'Content categorization strategy'
]

const features = [
  'Multi-source RSS aggregation',
  'Intelligent content categorization',
  'Duplicate content detection',
  'Automatic tagging system',
  'Content quality filtering',
  'Scheduled feed updates',
  'Notion database organization',
  'Custom field mapping',
  'Batch processing optimization',
  'Error handling and logging'
]

const rssSources = [
  { 
    name: 'Tech News', 
    description: 'Technology and startup news feeds',
    examples: ['TechCrunch', 'Hacker News', 'The Verge']
  },
  { 
    name: 'Industry Blogs', 
    description: 'Professional and industry-specific blogs',
    examples: ['Medium', 'Dev.to', 'Industry publications']
  },
  { 
    name: 'Research Papers', 
    description: 'Academic and research publications',
    examples: ['arXiv', 'Research journals', 'University feeds']
  },
  { 
    name: 'News Outlets', 
    description: 'Traditional news and media sources',
    examples: ['Reuters', 'BBC', 'Associated Press']
  },
  { 
    name: 'Company Updates', 
    description: 'Corporate blogs and announcement feeds',
    examples: ['Company blogs', 'Product updates', 'Release notes']
  },
  { 
    name: 'Social Media', 
    description: 'Social platform RSS feeds',
    examples: ['Reddit', 'YouTube', 'Podcast feeds']
  }
]

export default function AggregateRSSNotionTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link href="/#templates" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Templates
          </Link>
        </div>
      </div>

      {/* Template Header */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="flex items-start gap-6 mb-6">
              <div className="text-4xl">📰</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-800">
                    {templateInfo.category}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    {templateInfo.difficulty}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-3">{templateInfo.title}</h1>
                <p className="text-lg text-gray-600 mb-4">{templateInfo.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" />
                    <span>{templateInfo.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowDownTrayIcon className="h-4 w-4" />
                    <span>{templateInfo.downloads} downloads</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HeartIcon className="h-4 w-4" />
                    <span>{templateInfo.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="h-4 w-4" />
                    <span>by {templateInfo.author}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {templateInfo.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <button className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors mb-3">
                  Download Template
                </button>
                <div className="text-sm text-gray-500">Updated {templateInfo.lastUpdated}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Template Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* RSS Source Types */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <RssIcon className="h-6 w-6 mr-3 text-orange-600" />
            Supported RSS Source Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {rssSources.map((source, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
                <h3 className="font-semibold text-gray-900 mb-2">{source.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{source.description}</p>
                <div className="text-xs text-gray-500">
                  <strong>Examples:</strong> {source.examples.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ExclamationTriangleIcon className="h-6 w-6 mr-3 text-orange-600" />
            Requirements
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

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CogIcon className="h-6 w-6 mr-3 text-orange-600" />
            Key Features
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

        {/* Workflow Steps */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center">
            <DocumentTextIcon className="h-6 w-6 mr-3 text-orange-600" />
            Implementation Steps
          </h2>
          
          {workflowSteps.map((step, index) => (
            <div key={step.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-orange-50 to-red-50 px-8 py-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-orange-600 text-white rounded-full font-bold">
                      {step.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 mt-1">{step.description}</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-8 py-6">
                <ul className="space-y-3">
                  {step.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Notion Database Schema */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Notion Database Schema</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Property Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Title</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Title</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Article title from RSS feed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">URL</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">URL</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Original article link</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Source</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Select</td>
                  <td className="px-6 py-4 text-sm text-gray-500">RSS feed source name</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Category</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Multi-select</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Auto-generated categories</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Published Date</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Date</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Original publication date</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Summary</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rich Text</td>
                  <td className="px-6 py-4 text-sm text-gray-500">Article excerpt or summary</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">📚 Start Building Your Content Library!</h2>
          <p className="text-lg mb-6 opacity-90">
            Download the template and begin aggregating RSS feeds into your organized Notion database!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center">
              <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
              Download JSON Template
            </button>
            <button className="bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border border-orange-500 inline-flex items-center">
              <PlayCircleIcon className="h-5 w-5 mr-2" />
              Watch Setup Tutorial
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 