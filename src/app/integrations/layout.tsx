import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'All Integrations - n8n Course',
  description: 'Browse all available n8n integrations and learn how to automate your workflows with popular tools and services.',
  keywords: 'n8n integrations, workflow automation, API integrations, automation tools, n8n tutorials',
  openGraph: {
    title: 'All Integrations - n8n Course',
    description: 'Browse all available n8n integrations and learn how to automate your workflows with popular tools and services.',
    type: 'website',
  },
}

export default function IntegrationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 