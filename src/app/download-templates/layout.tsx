import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'n8n Template Library - Download Ready-to-Use Workflows',
  description: 'Download 500+ n8n workflow templates instantly. Copy and import JSON files for automation workflows across all categories and skill levels.',
  keywords: 'n8n, templates, workflow templates, automation, JSON import, download',
}

export default function DownloadTemplatesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 