'use client'

import { useState } from 'react'
import { CheckIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const benefits = [
  'Weekly workflow templates and tutorials',
  'Exclusive automation guides and tips',
  'Early access to new features and tools',
  'Community success stories and case studies',
  'Expert insights and best practices'
]

const socialProof = [
  { count: '15,000+', label: 'subscribers' },
  { count: '4.8/5', label: 'rating' },
  { count: '98%', label: 'open rate' }
]

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  if (isSubscribed) {
    return (
      <section className="py-24 sm:py-32 bg-gradient-to-b from-primary-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-8">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckIcon className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to the Community! 🎉
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for subscribing! Check your email for a welcome message with your first automation template.
              </p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  📧 First email arriving within 5 minutes
                </p>
                <p className="text-sm text-gray-500">
                  🎁 Exclusive welcome template included
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 inline-block">
              <p className="text-sm text-gray-600 mb-2">Join the conversation:</p>
              <div className="flex gap-3 justify-center">
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  Telegram Group →
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                  Discord Server →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-b from-primary-50 to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <EnvelopeIcon className="w-4 h-4" />
              Free Weekly Newsletter
            </div>
            <h2 className="section-title mb-4">
              Stay Updated with n8n Automation
            </h2>
            <p className="section-subtitle">
              Get the latest workflows, tutorials, and automation insights delivered directly to your inbox
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left side - Benefits */}
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  What you'll get:
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <CheckIcon className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Social proof */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {socialProof.map((item, index) => (
                      <div key={index}>
                        <div className="text-lg font-bold text-gray-900">{item.count}</div>
                        <div className="text-xs text-gray-500">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Form */}
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <EnvelopeIcon className="w-4 h-4" />
                        Subscribe Free
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </form>

                {/* Recent newsletter preview */}
                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">Latest Issue #47</span>
                  </div>
                  <h4 className="text-sm font-medium text-gray-900 mb-1">
                    "5 Advanced n8n Workflows for E-commerce Automation"
                  </h4>
                  <p className="text-xs text-gray-600 mb-3">
                    Learn how to automate inventory management, customer service, and sales reporting...
                  </p>
                  <button className="text-xs text-primary-600 font-medium hover:text-primary-700">
                    Preview this issue →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 mb-4">Trusted by automation enthusiasts at:</p>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <span className="text-gray-400 font-medium">Google</span>
              <span className="text-gray-400 font-medium">Microsoft</span>
              <span className="text-gray-400 font-medium">Shopify</span>
              <span className="text-gray-400 font-medium">GitHub</span>
              <span className="text-gray-400 font-medium">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 