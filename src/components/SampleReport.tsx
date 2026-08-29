import { useState } from 'react'

const leads = [
  {
    signal: 'Mass engineering hiring — 170 engineers planned this year',
    role: 'CTO',
    intent: 'scaling AI automation & infra teams',
  },
  {
    signal: 'Enterprise AI transformation, “no pilot theater”',
    role: 'VP AI Transformation',
    intent: 'wants production-AI builders',
  },
  {
    signal: 'AI delivery build-out in regulated bank',
    role: 'Head of AI Delivery',
    intent: 'MD-level mandate',
  },
  {
    signal: 'Agentic AI production build-out',
    role: 'Head of AI & Automation',
    intent: 'hiring across transformation program',
  },
  {
    signal: 'Founding engineer search for pre-seed SaaS',
    role: 'Founder',
    intent: 'outsourcing founding engineer',
  },
]

const observations = [
  'Agentic AI is the dominant theme — nearly every leadership post mentions agents, LLM orchestration, or RAG. The market is moving from pilots to production agent systems.',
  'Enterprise transformation mandates at Fortune 500 scale carry real budgets — healthcare, banking, telecom.',
  'Mass engineering hiring continues despite the AI narrative — one scale-up alone plans 170 engineer hires this year.',
  'Direct buyer intent: a venture-backed AI firm is scaling an entire delivery organization; a 12-month GenAI contract need is already open.',
  'Fractional appetite at startups — founders seek founding engineers on equity or contract terms.',
]

const outreach = [
  {
    rank: '#1',
    target: 'Venture-backed AI services firm',
    why: 'building a delivery organization; already buys external implementation capacity',
  },
  {
    rank: '#2',
    target: 'Fortune 500 healthcare enterprise',
    why: 'explicitly wants production-AI builders with regulated-industry experience',
  },
  {
    rank: '#3',
    target: 'Healthtech scale-up, NYC',
    why: '170 hires per year; realistic staff-augmentation conversation',
  },
  {
    rank: '#4',
    target: 'AI-native re-platforming',
    why: 'a 140-engineer org moving its entire stack to agentic workflows',
  },
  {
    rank: '#5',
    target: 'Regulated US bank',
    why: 'MD-level AI delivery build-out; integration-heavy work suits outsourcing vendors',
  },
]

const leadsStats = [
  { value: '17', label: 'leads mapped' },
  { value: '11', label: 'AI leadership' },
  { value: '3', label: 'engineering leadership' },
  { value: '3', label: 'demand signals' },
]

const leadsBrief = [
  { label: 'Region', value: 'United States & Global' },
  { label: 'Client', value: 'Outsourcing / outstaffing provider' },
  {
    label: 'Objective',
    value: 'Map active development directions and identify companies buying engineering capacity right now',
  },
]

const researchBrief = [
  { label: 'Target', value: '[Anonymized] Top-10 Fintech Lending Group' },
  { label: 'Scope', value: 'Digital Lending & Super-App Expansion Market' },
  {
    label: 'Objective',
    value: 'Assess financial health, regulatory adaptation (EBS biometrics), leadership priorities, and partnership entry points',
  },
]

const researchFindings = [
  {
    category: 'Financial Health & Scale',
    detail: 'Ranked among top-10 sector leaders with 35B+ ₽ annual issue volume. Delivered record 916M ₽ net profit (+26% YoY) with ~60% ROE and active bond issuance on the Moscow Exchange.',
  },
  {
    category: 'Regulatory & Tech Shifts',
    detail: 'Managing mandatory biometric identification (EBS integration) via dual corporate legal structures while transitioning from short-term loans to Installment loans and Super-App ecosystem products.',
  },
  {
    category: 'Leadership & Hiring',
    detail: 'Founder-led with seasoned banking executive background. Active executive recruitment for Chief Data Officer (CDO) and Head of Super App positions to drive product diversification.',
  },
  {
    category: 'Partnership Entry Points',
    detail: 'High-budget windows in compliance tech (biometric anti-fraud), credit risk analytics, collection optimization (addressing rising NPL ratios), and digital product development.',
  },
]

const researchStats = [
  { value: '35B+ ₽', label: 'Annual issue volume' },
  { value: '916M ₽', label: 'Net profit (9M)' },
  { value: '60.4%', label: 'ROE (Return on Equity)' },
  { value: 'Top-10', label: 'Market position' },
]

export default function SampleReport() {
  const [activeTab, setActiveTab] = useState<'leads' | 'research'>('leads')

  return (
    <section id="sample" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">Sample Report</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
            Actual deliveries, anonymized.
          </h2>
          <div className="flex rounded-sm border border-line bg-paper p-1">
            <button
              onClick={() => setActiveTab('leads')}
              className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeTab === 'leads'
                  ? 'bg-ink text-white'
                  : 'text-muted hover:text-ink'
              }`}
            >
              Leads Report
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                activeTab === 'research'
                  ? 'bg-ink text-white'
                  : 'text-muted hover:text-ink'
              }`}
            >
              Deep Research
            </button>
          </div>
        </div>

        <figure className="mt-14">
          <div className="overflow-hidden rounded-sm border border-line bg-white shadow-[0_1px_2px_rgba(14,27,44,0.05),0_20px_50px_-16px_rgba(14,27,44,0.14)]">
            {activeTab === 'leads' ? (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line bg-paper px-6 py-6 md:px-10">
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                      Leads: Tech &amp; AI Leadership — United States &amp; Global
                    </h3>
                    <p className="mt-2 text-[13px] text-muted">
                      Search date 2026-08-28 &middot; Window August 2026 &middot; Source: LinkedIn Posts
                    </p>
                  </div>
                  <span className="rounded-sm border border-bronze/40 bg-bronze/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-bronze-deep">
                    Excerpt
                  </span>
                </div>

                <div className="border-b border-line px-6 py-6 md:px-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                    Request
                  </h3>
                  <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-3">
                    {leadsBrief.map((field) => (
                      <div key={field.label}>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                          {field.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed">{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="overflow-x-auto px-6 py-8 md:px-10">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead>
                      <tr className="border-b border-line text-[11px] uppercase tracking-[0.15em] text-muted">
                        <th scope="col" className="pb-3 pr-4 font-semibold">
                          Signal
                        </th>
                        <th scope="col" className="pb-3 font-semibold">
                          Lead
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.signal} className="border-b border-line/70 align-top last:border-0">
                          <td className="py-4 pr-4 leading-relaxed">{lead.signal}</td>
                          <td className="py-4 leading-relaxed">
                            <span className="font-medium text-ink">[Full Name] / {lead.role}</span>
                            <span> — {lead.intent}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid gap-x-12 gap-y-10 border-t border-line px-6 py-8 md:grid-cols-2 md:px-10">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                      Key Observations
                    </h3>
                    <ol className="mt-5 space-y-4">
                      {observations.map((observation, index) => (
                        <li key={index} className="flex gap-4 text-sm leading-relaxed">
                          <span
                            aria-hidden
                            className="font-display text-base leading-6 font-medium text-bronze"
                          >
                            {index + 1}
                          </span>
                          <span>{observation}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                      Recommended Outreach
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {outreach.map((item) => (
                        <li key={item.rank} className="flex gap-4 text-sm leading-relaxed">
                          <span aria-hidden className="font-semibold whitespace-nowrap text-bronze-deep">
                            {item.rank}
                          </span>
                          <span>
                            <span className="font-medium text-ink">{item.target}</span> — {item.why}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-line bg-paper">
                  <ul className="flex flex-wrap gap-x-12 gap-y-4 px-6 py-6 md:px-10">
                    {leadsStats.map((stat) => (
                      <li key={stat.label}>
                        <p className="font-display text-2xl font-medium text-ink">{stat.value}</p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                          {stat.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-line bg-paper px-6 py-6 md:px-10">
                  <div>
                    <h3 className="font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
                      Deep Research: [Anonymized] Fintech Lending &amp; Super-App Leader
                    </h3>
                    <p className="mt-2 text-[13px] text-muted">
                      Research date 2026-08-26 &middot; Source: Sector Registers, Financials &amp; Executive Analysis
                    </p>
                  </div>
                  <span className="rounded-sm border border-bronze/40 bg-bronze/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-bronze-deep">
                    Excerpt
                  </span>
                </div>

                <div className="border-b border-line px-6 py-6 md:px-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                    Request
                  </h3>
                  <dl className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-3">
                    {researchBrief.map((field) => (
                      <div key={field.label}>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                          {field.label}
                        </dt>
                        <dd className="mt-1 text-sm leading-relaxed">{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="px-6 py-8 md:px-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                    Key Findings &amp; Analysis
                  </h3>
                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    {researchFindings.map((finding) => (
                      <div key={finding.category} className="rounded-sm border border-line bg-paper p-6">
                        <h4 className="font-display text-base font-medium text-ink">
                          {finding.category}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-muted">
                          {finding.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line bg-paper px-6 py-8 md:px-10">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                    Strategic Outreach Recommendations
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted max-w-3xl">
                    When pitching financial institutions undergoing regulatory transformation, focus on compliance acceleration, risk mitigation, and proven technological ROI. Decision-makers value direct access, data-driven credibility, and alignment with their strategic pivot toward installment lending and super-app architectures.
                  </p>
                </div>

                <div className="border-t border-line bg-paper">
                  <ul className="flex flex-wrap gap-x-12 gap-y-4 px-6 py-6 md:px-10">
                    {researchStats.map((stat) => (
                      <li key={stat.label}>
                        <p className="font-display text-2xl font-medium text-ink">{stat.value}</p>
                        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                          {stat.label}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          <figcaption className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            {activeTab === 'leads'
              ? 'Excerpt anonymized for publication. Client reports include named decision-makers, companies, and dated links to each person’s own words.'
              : 'Research excerpt anonymized for publication. Full reports include company registries, financial health signals, executive backgrounds, and specific entry points.'}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
