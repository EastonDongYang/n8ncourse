import Link from 'next/link'
import Layout from '@/components/Layout'
import {
  ArrowLeftIcon,
  CalendarDaysIcon,
  ClockIcon,
  UserIcon,
  CheckCircleIcon,
  BoltIcon,
  TagIcon
} from '@heroicons/react/24/outline'

export const metadata = {
  title: '10 Essential n8n Workflows Every Business Should Automate | n8ncourse.org',
  description:
    'Explore ten battle-tested n8n automation workflows that cut manual busywork across marketing, operations, support, and leadership teams.'
}

const workflows = [
  {
    title: 'Lead Capture -> CRM Enrichment',
    goal: 'Route website form submissions straight into your CRM with complete context.',
    impact: 'Eliminates manual CSV uploads and ensures sales gets enriched leads within seconds.',
    steps: [
      'Trigger from Webhook/Form node, sanitize text, and standardize company names.',
      'Enrich with Clearbit, Apollo, or another firmographic API to attach headcount and industry.',
      'Auto-create the contact in HubSpot/Salesforce, tag the source campaign, and notify the owner.'
    ]
  },
  {
    title: 'Customer Onboarding Checklist',
    goal: 'Deliver a consistent welcome experience for every new paying customer.',
    impact: 'Saves CS teams ~5 hours each week and boosts activation conversions.',
    steps: [
      'Listen for payment success events from Stripe, Lemon Squeezy, or Paddle.',
      'Post personalized welcome messages in Slack/Teams including kickoff resources.',
      'Create a task bundle in Notion, Asana, or ClickUp with due dates and owners.'
    ]
  },
  {
    title: 'Recurring KPI Digest',
    goal: 'Send stakeholders a weekly automation digest with the latest metrics.',
    impact: 'Replaces spreadsheet screenshot marathons with a single automated email.',
    steps: [
      'Schedule a Cron node to pull metrics from Postgres, Google Analytics, or Metabase.',
      'Aggregate key indicators, compute deltas, and format a branded HTML summary.',
      'Send personalized versions to each stakeholder list and archive to a knowledge base.'
    ]
  },
  {
    title: 'Ticket Triage & Auto-Response',
    goal: 'Classify inbound support tickets and reply with the right level of context.',
    impact: 'Cuts first-response time by 60% and surfaces VIP conversations instantly.',
    steps: [
      'Ingest tickets from Zendesk, Intercom, or Gmail labels and run language/intent detection.',
      'Route urgent cases to the right queue, create a Slack escalation, and log sentiment scores.',
      'Send AI-assisted acknowledgement emails that include relevant help-center articles.'
    ]
  },
  {
    title: 'E-commerce Order Operations',
    goal: 'Keep inventory, fulfillment, and finance systems synchronized after every order.',
    impact: 'Prevents stockouts and removes the need for daily reconciliation spreadsheets.',
    steps: [
      'Watch Shopify/WooCommerce orders, validate payment status, and normalize SKU data.',
      'Update inventory levels in ERP or Airtable and trigger purchase orders when thresholds hit.',
      'Send packing slips to the 3PL while logging revenue + tax entries to the accounting system.'
    ]
  },
  {
    title: 'Marketing Campaign Warm-Up',
    goal: 'Launch coordinated campaigns with zero copy/paste across channels.',
    impact: 'Guarantees every launch hits the right audiences simultaneously.',
    steps: [
      'Fetch approved campaign assets from Notion or Google Drive and generate UTM links.',
      'Create scheduled posts in LinkedIn, Twitter/X, and email platforms with proper tracking.',
      'Notify sales with talking points, enablement collateral, and a CRM call list.'
    ]
  },
  {
    title: 'Finance Receipts & Compliance Locker',
    goal: 'Collect receipts automatically and store them in an audit-ready workspace.',
    impact: 'Gives finance real-time spend visibility and simplifies quarterly closes.',
    steps: [
      'Listen for card transactions via Ramp, Brex, or Expensify APIs and request matching receipts.',
      'OCR uploaded files, extract totals, and validate VAT/tax IDs.',
      'File everything in a structured drive/Notion database with policy tags and reviewer assignments.'
    ]
  },
  {
    title: 'Data Hygiene Guardian',
    goal: 'Keep critical datasets clean by flagging duplicates, missing properties, or stale records.',
    impact: 'Protects dashboards from silent data quality drift.',
    steps: [
      'Run scheduled scans against CRM or warehouse tables to identify anomalies.',
      'Auto-merge duplicates, normalize naming conventions, and refresh reference data sets.',
      'Publish a change log to Slack and create owner follow-ups for unresolved records.'
    ]
  },
  {
    title: 'Executive Daily Briefing',
    goal: 'Provide leadership with a curated morning update in under five minutes.',
    impact: 'Keeps decision makers aligned without extra meetings.',
    steps: [
      'Aggregate revenue, product usage, and incident data from multiple sources.',
      'Generate plain-language highlights plus risk alerts using OpenAI or Claude nodes.',
      'Deliver to email, Slack, and mobile push, then store the archive for compliance.'
    ]
  },
  {
    title: 'Employee Offboarding Automation',
    goal: 'Turn off access, capture knowledge, and notify stakeholders when someone exits.',
    impact: 'Reduces security risk and guarantees HR/legal steps never slip through the cracks.',
    steps: [
      'Trigger from an HRIS status change or signed offboarding checklist.',
      'Deactivate SaaS accounts, reassign assets, and collect documentation in one workflow.',
      'Send closure summaries to IT, finance, and the departing team lead with next steps.'
    ]
  }
]

const tags = ['Workflows', 'Business Automation', 'Productivity']

export default function BlogArticlePage() {
  const formattedDate = new Date('2024-01-15').toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <Layout>
      <article className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-6">
          <header className="mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-primary-600 font-semibold hover:text-primary-700"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to blog
            </Link>

            <div className="mt-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
              Best Practices
            </div>

            <h1 className="mt-4 text-4xl font-bold text-gray-900">
              10 Essential n8n Workflows Every Business Should Automate
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Discover ten battle-tested n8n automations that consistently save teams hours each week.
              Each workflow blueprint includes the trigger, the value it delivers, and the nodes we recommend
              when you are ready to build.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <UserIcon className="h-4 w-4" />
                Sarah Chen · Automation Expert
              </span>
              <span className="flex items-center gap-2">
                <CalendarDaysIcon className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4" />
                8 min read
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600"
                >
                  <TagIcon className="h-3 w-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <section className="space-y-8">
            {workflows.map((workflow) => (
              <div
                key={workflow.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">{workflow.title}</h2>
                    <p className="mt-2 text-gray-600">{workflow.goal}</p>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-600">
                    <BoltIcon className="h-4 w-4" />
                    High Impact
                  </div>
                </div>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-primary-50 p-4">
                    <h3 className="text-sm font-semibold text-primary-700 tracking-wide">Why it matters</h3>
                    <p className="mt-2 text-sm text-primary-900">{workflow.impact}</p>
                  </div>
                  <div className="rounded-xl bg-gray-100 p-4">
                    <h3 className="text-sm font-semibold text-gray-700 tracking-wide">Recommended Steps</h3>
                    <ul className="mt-2 space-y-2 text-sm text-gray-600">
                      {workflow.steps.map((step) => (
                        <li key={step} className="flex items-start gap-2">
                          <CheckCircleIcon className="mt-0.5 h-4 w-4 text-primary-500" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="mt-12 bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-gray-900">Operational Tips</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-primary-50 p-4 text-sm text-primary-900">
                <h3 className="font-semibold text-primary-700 uppercase tracking-wide">Governance</h3>
                Document owners for every workflow, add version notes, and rerun tests monthly.
              </div>
              <div className="rounded-xl bg-blue-50 p-4 text-sm text-blue-900">
                <h3 className="font-semibold text-blue-700 uppercase tracking-wide">Monitoring</h3>
                Enable error triggers, push alerts to on-call channels, and log metrics to a warehouse table.
              </div>
              <div className="rounded-xl bg-purple-50 p-4 text-sm text-purple-900">
                <h3 className="font-semibold text-purple-700 uppercase tracking-wide">Iteration</h3>
                Pair every automation with a measurable KPI so you know when to double down or refactor.
              </div>
            </div>
          </section>

          <section className="mt-12">
            <div className="bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl px-8 py-10 text-white">
              <h2 className="text-3xl font-bold">Build these workflows faster</h2>
              <p className="mt-3 text-lg text-white/90 max-w-2xl">
                Browse our ready-to-import templates, or follow step-by-step tutorials to launch your automation stack.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/templates"
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Explore Templates
                </Link>
                <Link
                  href="/tutorial/ai-powered-email-writers"
                  className="border border-white/70 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Read a Tutorial
                </Link>
                <Link
                  href="/download-templates"
                  className="border border-white/70 px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Download JSON Files
                </Link>
              </div>
            </div>
          </section>

          <footer className="mt-12 text-center text-sm text-gray-500">
            Enjoyed this playbook? Share it with your team or join the n8ncourse community to request the next deep dive.
          </footer>
        </div>
      </article>
    </Layout>
  )
}
