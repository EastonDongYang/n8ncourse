import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'n8n Automation Templates | Ready-to-Use Workflow Collection',
  description: 'Discover our curated collection of n8n automation templates. Copy, customize, and deploy ready-to-use workflows in minutes. From social media automation to data processing.',
  keywords: 'n8n templates, automation workflows, no-code automation, workflow templates, business automation, API integration, data processing',
  openGraph: {
    title: 'n8n Automation Templates | Ready-to-Use Workflow Collection',
    description: 'Discover our curated collection of n8n automation templates. Copy, customize, and deploy ready-to-use workflows in minutes.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Automation Templates | Ready-to-Use Workflow Collection',
    description: 'Discover our curated collection of n8n automation templates. Copy, customize, and deploy ready-to-use workflows in minutes.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 