import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'n8n Use Cases & Automation Tutorials | Complete Workflow Collection',
  description: 'Explore comprehensive n8n automation use cases and tutorials. From social media automation to AI-powered workflows, discover ready-to-implement solutions for your business.',
  keywords: 'n8n use cases, automation tutorials, workflow examples, business automation, API integration, social media automation, data collection, AI automation',
  openGraph: {
    title: 'n8n Use Cases & Automation Tutorials | Complete Workflow Collection',
    description: 'Explore comprehensive n8n automation use cases and tutorials. From social media automation to AI-powered workflows, discover ready-to-implement solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8n Use Cases & Automation Tutorials | Complete Workflow Collection',
    description: 'Explore comprehensive n8n automation use cases and tutorials. From social media automation to AI-powered workflows.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function UseCasesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 