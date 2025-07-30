import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'n8ncourse.org - Master Workflow Automation with n8n',
  description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
  keywords: 'n8n, workflow automation, tutorials, templates, API integration, automation tools',
  authors: [{ name: 'n8ncourse Team' }],
  // 添加 canonical URL
  alternates: {
    canonical: 'https://n8ncourse.org',
  },
  openGraph: {
    title: 'n8ncourse.org - Master Workflow Automation with n8n',
    description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
    url: 'https://n8ncourse.org',
    siteName: 'n8ncourse.org',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://n8ncourse.org/logo.png',
        width: 1200,
        height: 630,
        alt: 'n8ncourse.org - Master Workflow Automation with n8n',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8ncourse.org - Master Workflow Automation with n8n',
    description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
    images: ['https://n8ncourse.org/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // 添加网站验证支持
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD 结构化数据 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'n8ncourse.org',
              description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
              url: 'https://n8ncourse.org',
              potentialAction: {
                '@type': 'SearchAction',
                target: 'https://n8ncourse.org/search?q={search_term_string}',
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 