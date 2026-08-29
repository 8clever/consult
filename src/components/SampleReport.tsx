import { useState } from 'react'

const leadCategories = [
  {
    category: 'AI Leadership (CTO / Head of AI / AI Director)',
    items: [
      {
        name: 'Executive Name',
        position: 'CTO (Hiring 170 engineers this year for AI automation & infra)',
        company: 'Digital Health Scale-up (New York, NY)',
        format: 'Hybrid',
      },
      {
        name: 'Executive Name',
        position: 'VP, AI Transformation + Senior Director, AI/ML Engineering',
        company: 'Fortune 500 Healthcare Enterprise',
        format: 'Remote-friendly',
      },
      {
        name: 'Executive Name',
        position: 'Head of AI Delivery (Managing Director level mandate)',
        company: 'Regulated Banking Institution (Chicago, IL)',
        format: 'Hybrid',
      },
      {
        name: 'Executive Name',
        position: 'Head of AI & Automation',
        company: 'Global Telecom Enterprise (Plano, TX)',
        format: 'On-site',
      },
    ],
  },
  {
    category: 'Engineering Leadership & Startups',
    items: [
      {
        name: 'Executive Name',
        position: 'VP of Engineering (actively hiring engineering talent)',
        company: 'FinOps & Cloud AI Scale-up',
        format: 'US / Remote',
      },
      {
        name: 'Executive Name',
        position: 'Founding CTO / Co-founder mandate (LLM, RAG, full-stack)',
        company: 'Confidential AI Startup',
        format: 'Remote (equity-led)',
      },
    ],
  },
  {
    category: 'Outsourcing & Staffing Demand Signals',
    items: [
      {
        name: 'Recruiter / Hiring Lead',
        position: 'Hiring Senior GenAI Engineers, W2 contract, 12+ months',
        company: 'Staffing & Consulting Agency (Client)',
        format: 'On-site',
      },
      {
        name: 'Executive Search',
        position: 'Executive search: VP of Professional Services & Delivery (AI agents)',
        company: 'Venture-Backed AI Enterprise Provider',
        format: 'Remote (US)',
      },
    ],
  },
]

const leadObservations = [
  'Agentic AI is the dominant theme — nearly every leadership post mentions agents, LLM orchestration, or RAG. Companies are moving from pilots to production agent systems.',
  'Enterprise AI transformation mandates at Fortune 500 scale carry real budgets (Healthcare, Banking, Telecom).',
  'Mass engineering hiring continues despite the AI narrative — scale-ups plan hundreds of engineering hires this year.',
  'Direct buyer intent spotted: venture-backed firms scaling delivery organizations and staffing agencies with active 12-month GenAI contracts.',
]

const leadOutreach = [
  {
    rank: '#1',
    target: 'Venture-Backed AI Delivery Firm',
    why: 'scaling an entire delivery organization; already buys external implementation capacity',
  },
  {
    rank: '#2',
    target: 'Fortune 500 Healthcare Enterprise',
    why: 'explicitly wants production-AI builders with regulated-industry experience',
  },
  {
    rank: '#3',
    target: 'Healthtech Scale-up (NYC)',
    why: '170 hires per year; realistic staff-augmentation conversation',
  },
  {
    rank: '#4',
    target: 'Regulated Banking Institution',
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
  { label: 'Region', value: 'United States' },
  { label: 'Client', value: 'Outsourcing / outstaffing provider' },
  {
    label: 'Objective',
    value: 'Map active development directions and identify companies buying engineering capacity right now',
  },
]

const researchBrief = [
  { label: 'Target', value: 'Anonymized Top-10 Fintech Lending Group' },
  { label: 'Scope', value: 'Digital Lending & Super-App Expansion Market' },
  {
    label: 'Objective',
    value: 'Assess financial health, regulatory adaptation (biometrics), leadership priorities, and partnership entry points',
  },
]

const researchFindings = [
  {
    category: 'Financial Health & Scale',
    detail: 'Ranked among top-10 sector leaders with substantial annual issue volume. Delivered record net profit (+26% YoY) with ~60% ROE and active bond issuance on major exchanges.',
  },
  {
    category: 'Regulatory & Tech Shifts',
    detail: 'Managing mandatory biometric identification compliance via dual corporate legal structures while transitioning from short-term loans to Installment loans and Super-App ecosystem products.',
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
  { value: '35B+ ₽', label: 'Annual volume' },
  { value: 'Record', label: 'Net profit growth' },
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
                      Leads Report: Tech &amp; AI Leadership — USA
                    </h3>
                    <p className="mt-2 text-[13px] text-muted">
                      Scope: United States &middot; Window: Recent 30 days &middot; Source: Professional Network Posts
                    </p>
                  </div>
                  <span className="rounded-sm border border-bronze/40 bg-bronze/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-bronze-deep">
                    Excerpt (Anonymized)
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
                  {leadCategories.map((group, idx) => (
                    <div key={group.category} className={idx > 0 ? 'mt-8' : ''}>
                      <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-bronze mb-3">
                        {group.category}
                      </h4>
                      <table className="w-full min-w-[700px] text-left text-sm">
                        <thead>
                          <tr className="border-b border-line text-[11px] uppercase tracking-[0.15em] text-muted">
                            <th scope="col" className="pb-3 pr-4 font-semibold w-1/3">Name / Role</th>
                            <th scope="col" className="pb-3 pr-4 font-semibold w-1/2">Position / Signal</th>
                            <th scope="col" className="pb-3 font-semibold w-1/6">Format</th>
                          </tr>
                        </thead>
                        <tbody>
                          {group.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="border-b border-line/70 align-top last:border-0">
                              <td className="py-3.5 pr-4 font-medium text-ink">
                                {item.name}
                                <div className="text-xs text-muted font-normal mt-0.5">{item.company}</div>
                              </td>
                              <td className="py-3.5 pr-4 leading-relaxed">{item.position}</td>
                              <td className="py-3.5 text-xs text-muted">{item.format}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>

                <div className="grid gap-x-12 gap-y-10 border-t border-line px-6 py-8 md:grid-cols-2 md:px-10">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                      Key Observations
                    </h3>
                    <ol className="mt-5 space-y-4">
                      {leadObservations.map((observation, index) => (
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
                      Recommended Outreach Priorities
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {leadOutreach.map((item) => (
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
                      Deep Research: Anonymized Fintech Lending &amp; Super-App Leader
                    </h3>
                    <p className="mt-2 text-[13px] text-muted">
                      Source: Sector Registers, Financials &amp; Executive Analysis
                    </p>
                  </div>
                  <span className="rounded-sm border border-bronze/40 bg-bronze/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-bronze-deep">
                    Excerpt (Anonymized)
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
