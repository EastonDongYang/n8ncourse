import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'n8ncourse.org - Master Workflow Automation with n8n',
  description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
  keywords: 'n8n, workflow automation, tutorials, templates, API integration, automation tools',
  authors: [{ name: 'n8ncourse Team' }],
  openGraph: {
    title: 'n8ncourse.org - Master Workflow Automation with n8n',
    description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
    url: 'https://n8ncourse.org',
    siteName: 'n8ncourse.org',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8ncourse.org - Master Workflow Automation with n8n',
    description: 'Explore beginner guides, real-world use cases, and ready-to-use templates to supercharge your productivity with n8n.',
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
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  )
} 