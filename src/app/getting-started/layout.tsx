import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started with n8n - Complete Beginner Guide',
  description: 'Learn how to install, configure, and create your first n8n workflow. Complete beginner-friendly tutorial with step-by-step instructions.',
  keywords: 'n8n, workflow automation, getting started, tutorial, beginner guide',
}

export default function GettingStartedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 