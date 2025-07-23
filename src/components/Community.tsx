import { UsersIcon, ChatBubbleLeftRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const communities = [
  {
    name: 'Telegram Group',
    description: 'Join our global automation builders community',
    icon: '📱',
    members: '15.2k',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
    bgColor: 'bg-blue-600',
    link: '#'
  },
  {
    name: 'GitHub Repository',
    description: 'Contribute code, report issues, view updates',
    icon: '💻',
    members: '8.5k',
    color: 'bg-gray-50 border-gray-200',
    textColor: 'text-gray-700',
    bgColor: 'bg-gray-700',
    link: '#'
  },
  {
    name: 'Discord Server',
    description: 'Real-time chat, technical discussions, Q&A',
    icon: '🎮',
    members: '12.8k',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-700',
    bgColor: 'bg-purple-600',
    link: '#'
  }
]

const stats = [
  { number: '25k+', label: 'Active Users' },
  { number: '500+', label: 'Shared Templates' },
  { number: '200+', label: 'Daily Discussions' },
  { number: '95%', label: 'Question Answer Rate' }
]

const contributions = [
  {
    title: 'Share Your Workflows',
    description: 'Submit your n8n workflow templates to help other users',
    icon: '📤',
    color: 'bg-green-50 border-green-200',
    textColor: 'text-green-700',
    button: 'Submit Template',
    reward: 'Earn Community Points'
  },
  {
    title: 'Improve Tutorial Content',
    description: 'Help improve existing tutorials or create new learning content',
    icon: '📝',
    color: 'bg-blue-50 border-blue-200',
    textColor: 'text-blue-700',
    button: 'Participate in Editing',
    reward: 'Become a Contributor'
  },
  {
    title: 'Answer Community Questions',
    description: 'Help other users solve n8n-related problems in forums and groups',
    icon: '💬',
    color: 'bg-purple-50 border-purple-200',
    textColor: 'text-purple-700',
    button: 'Join Discussion',
    reward: 'Expert Badge'
  }
]

export default function Community() {
  return (
    <section id="community" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            Join the Community
          </h2>
          <p className="section-subtitle">
            Join global automation builders to share workflows, ask questions, and grow together
          </p>
        </div>

        {/* Community platforms */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {communities.map((community, index) => (
            <div key={index} className={`card p-6 ${community.color} hover:scale-105 transition-all duration-200`}>
              <div className="text-center">
                <div className="text-4xl mb-4">{community.icon}</div>
                <h3 className={`text-lg font-semibold mb-2 ${community.textColor}`}>
                  {community.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {community.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-gray-900">{community.members}</div>
                  <div className="text-xs text-gray-500">members</div>
                </div>

                <a 
                  href={community.link}
                  className={`${community.bgColor} text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity inline-block`}
                >
                  Join Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Community statistics */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How to contribute */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Contribute to the Community</h3>
            <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contributions.map((contribution, index) => (
              <div key={index} className={`card p-6 ${contribution.color} text-center`}>
                <div className="text-4xl mb-4">{contribution.icon}</div>
                <h4 className={`text-lg font-semibold mb-3 ${contribution.textColor}`}>
                  {contribution.title}
                </h4>
                <p className="text-gray-600 text-sm mb-6">
                  {contribution.description}
                </p>
                
                <div className="space-y-3">
                  <button className="btn-primary w-full text-sm">
                    {contribution.button}
                  </button>
                  <div className={`text-xs font-medium ${contribution.textColor}`}>
                    🏆 {contribution.reward}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly live session */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border border-primary-200">
          <div className="text-center">
            <div className="text-4xl mb-4">🎥</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Weekly Live Q&A</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Every Wednesday at 8 PM, experts answer n8n-related questions online, share best practices and introduce new features
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-lg font-semibold text-primary-600">Next Live: This Wednesday 20:00</div>
                <div className="text-sm text-gray-500">Beijing Time</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-lg font-semibold text-gray-900">Average 50+ participants</div>
                <div className="text-sm text-gray-500">Active discussions</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-lg font-semibold text-green-600">Free to join</div>
                <div className="text-sm text-gray-500">Open to all</div>
              </div>
            </div>

            <button className="btn-primary mr-4">
              Book to Attend
            </button>
            <button className="btn-secondary">
              View Previous Sessions
            </button>
          </div>
        </div>

        {/* Community guidelines */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Please follow community guidelines and maintain friendly and constructive discussions
          </p>
        </div>
      </div>
    </section>
  )
} 