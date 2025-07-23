import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real-World n8n Examples - Practical Automation Workflows',
  description: 'Learn real-world n8n automation examples including marketing automation, data processing, content generation, and reporting systems.',
  keywords: 'n8n, automation examples, marketing automation, data processing, content generation, reporting',
}

export default function RealWorldExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 