import { 
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EyeIcon,
  HeartIcon,
  ChatBubbleLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Layout from '../../components/Layout'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readTime: string
  category: string
  tags: string[]
  views: string
  likes: string
  comments: string
  featured: boolean
  coverImage: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Essential n8n Workflows Every Business Should Automate',
    excerpt: 'Discover the most impactful automation workflows that can transform your business operations and save hours of manual work every week.',
    author: {
      name: 'Sarah Chen',
      avatar: '👩‍💻',
      role: 'Automation Expert'
    },
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Best Practices',
    tags: ['Workflows', 'Business Automation', 'Productivity'],
    views: '12.5k',
    likes: '324',
    comments: '45',
    featured: true,
    coverImage: '🚀'
  },
  {
    id: '2',
    title: 'Building Your First AI-Powered Workflow with OpenAI and n8n',
    excerpt: 'Step-by-step guide to creating intelligent automation workflows that leverage AI to process data, generate content, and make decisions.',
    author: {
      name: 'Alex Rodriguez',
      avatar: '👨‍🔬',
      role: 'AI Specialist'
    },
    publishedAt: '2024-01-12',
    readTime: '12 min read',
    category: 'AI Integration',
    tags: ['OpenAI', 'AI Automation', 'Machine Learning'],
    views: '8.9k',
    likes: '267',
    comments: '32',
    featured: true,
    coverImage: '🤖'
  },
  {
    id: '3',
    title: 'Advanced Error Handling Strategies in n8n Workflows',
    excerpt: 'Learn professional techniques for building robust workflows that gracefully handle errors and maintain reliability in production environments.',
    author: {
      name: 'Michael Thompson',
      avatar: '👨‍💼',
      role: 'DevOps Engineer'
    },
    publishedAt: '2024-01-10',
    readTime: '10 min read',
    category: 'Advanced Techniques',
    tags: ['Error Handling', 'Best Practices', 'Production'],
    views: '6.2k',
    likes: '189',
    comments: '28',
    featured: false,
    coverImage: '⚡'
  },
  {
    id: '4',
    title: 'Scaling n8n: From Prototype to Enterprise',
    excerpt: 'Comprehensive guide on scaling your n8n implementation from small prototypes to enterprise-grade automation solutions.',
    author: {
      name: 'Emily Davis',
      avatar: '👩‍🚀',
      role: 'Enterprise Architect'
    },
    publishedAt: '2024-01-08',
    readTime: '15 min read',
    category: 'Enterprise',
    tags: ['Scaling', 'Enterprise', 'Architecture'],
    views: '9.1k',
    likes: '298',
    comments: '41',
    featured: false,
    coverImage: '🏢'
  },
  {
    id: '5',
    title: 'Security Best Practices for n8n Workflows',
    excerpt: 'Essential security considerations and best practices to protect your automation workflows and sensitive data.',
    author: {
      name: 'David Kim',
      avatar: '👨‍🔒',
      role: 'Security Expert'
    },
    publishedAt: '2024-01-05',
    readTime: '9 min read',
    category: 'Security',
    tags: ['Security', 'Best Practices', 'Data Protection'],
    views: '7.3k',
    likes: '234',
    comments: '19',
    featured: false,
    coverImage: '🔒'
  },
  {
    id: '6',
    title: 'Integrating n8n with Modern SaaS Tools: A Complete Guide',
    excerpt: 'Explore how to connect n8n with popular SaaS applications like Slack, Notion, Airtable, and more for seamless automation.',
    author: {
      name: 'Lisa Wang',
      avatar: '👩‍🎨',
      role: 'Integration Specialist'
    },
    publishedAt: '2024-01-03',
    readTime: '11 min read',
    category: 'Integrations',
    tags: ['SaaS', 'Integrations', 'API'],
    views: '10.7k',
    likes: '312',
    comments: '37',
    featured: false,
    coverImage: '🔗'
  }
]

const categories = [
  'All Categories',
  'Best Practices',
  'AI Integration',
  'Advanced Techniques',
  'Enterprise',
  'Security',
  'Integrations'
]

const blogStats = [
  { label: 'Total Articles', value: '150+' },
  { label: 'Monthly Readers', value: '45k+' },
  { label: 'Expert Authors', value: '25+' },
  { label: 'Community Engagement', value: '98%' }
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <Layout>
      <div className="bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-50 via-white to-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                n8n Automation Blog
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Expert insights, tutorials, and best practices for mastering workflow automation. 
                Stay updated with the latest trends and techniques in the automation world.
              </p>
              
              {/* Blog Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {blogStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div className="flex gap-4">
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                  <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option value="latest">Latest</option>
                    <option value="popular">Most Popular</option>
                    <option value="trending">Trending</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Articles */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Articles</h2>
              <span className="text-sm text-gray-500">Editor's picks</span>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{post.coverImage}</div>
                      <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-xs font-medium text-primary-800">
                        Featured
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Author and Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{post.author.avatar}</div>
                        <div>
                          <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                          <div className="text-xs text-gray-500">{post.author.role}</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HeartIcon className="h-3 w-3" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChatBubbleLeftIcon className="h-3 w-3" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center rounded bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                    >
                      Read Article
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Regular Articles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
              <span className="text-sm text-gray-500">{regularPosts.length} articles</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl">{post.coverImage}</div>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-xl">{post.author.avatar}</div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{post.author.name}</div>
                        <div className="text-xs text-gray-500">{post.author.role}</div>
                      </div>
                    </div>
                    
                    {/* Meta Information */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <CalendarDaysIcon className="h-3 w-3" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <EyeIcon className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span key={tagIndex} className="inline-flex items-center rounded bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link 
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors text-sm"
                    >
                      Read More
                      <ArrowRightIcon className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Load More Articles
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">📧 Stay Updated!</h2>
            <p className="text-lg mb-6 opacity-90">
              Get the latest automation insights and tutorials delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm opacity-75 mt-4">
              Join 15,000+ automation enthusiasts. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
} 