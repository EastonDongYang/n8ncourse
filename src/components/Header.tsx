'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

interface NavigationItem {
  name: string
  href: string
  hasDropdown?: boolean
  dropdownItems?: {
    category: string
    items: {
      name: string
      href: string
      description: string
    }[]
  }[]
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { 
    name: 'Tutorials', 
    href: '/#tutorials',
    hasDropdown: true,
    dropdownItems: [
      {
        category: 'Learning Paths',
        items: [
          { name: 'Learn by Level or Goal', href: '/#tutorials', description: 'From beginner to expert level, systematic learning' },
          { name: 'Use Case Tutorials', href: '/use-cases', description: 'Real-world automation examples and workflows' },
          { name: 'Integration Tutorials', href: '/integrations', description: 'Connect n8n with popular tools and services' }
        ]
      }
    ]
  },
  { name: 'Templates', href: '/#templates' },
  { name: 'Use Cases', href: '/use-cases' },
  { name: 'Tools', href: '/#tools' },
  { name: 'Blog', href: '/blog' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">n8ncourse.org</span>
            <Image
              src="/logo.png"
              alt="n8ncourse.org"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 ml-[-100px]">
          {navigation.map((item) => (
            <div key={item.name} className="relative">
              {item.hasDropdown ? (
                                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">
                    {item.name}
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full pt-2 z-50">
                      <div className="w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-4">
                        {item.dropdownItems?.map((category, categoryIndex) => (
                          <div key={categoryIndex} className="px-4 py-2">
                            <div className="space-y-1">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block px-3 py-2 rounded-md hover:bg-gray-50 transition-colors"
                                >
                                  <div className="text-sm font-medium text-gray-900">{subItem.name}</div>
                                  <div className="text-xs text-gray-500">{subItem.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.href} className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search tutorials..."
              className="rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
            />
          </div>
          <Link href="/#community" className="bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 text-sm">
            Join Us
          </Link>
        </div>
      </nav>
      
      {/* 移动端菜单 */}
      {mobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">n8ncourse.org</span>
                <Image
                  src="/logo.png"
                  alt="n8ncourse.org"
                  width={150}
                  height={35}
                  className="h-8 w-auto"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="text-base font-semibold leading-7 text-gray-900 px-3 py-2">
                            {item.name}
                          </div>
                          {item.dropdownItems?.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="ml-4 space-y-1">
                              {category.items.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/#community"
                    className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 