import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advanced n8n Skills - Expert Workflow Automation',
  description: 'Master advanced n8n skills including flow control, error handling, data transformation, and performance optimization for enterprise-grade workflows.',
  keywords: 'n8n, advanced, workflow automation, error handling, performance optimization, enterprise',
}

export default function AdvancedSkillsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 