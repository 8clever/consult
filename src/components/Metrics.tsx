const metrics = [
  {
    value: '< 30 days',
    label: 'Signal freshness',
    description: 'Only recent market data and active buying intent. No stale databases.',
  },
  {
    value: '3–5x',
    label: 'Higher response rate',
    description: 'Achieved in outbound campaigns by addressing verified, real-time company pain points.',
  },
  {
    value: '100%',
    label: 'CTO-filtered analysis',
    description: 'Every report and lead is validated with engineering judgment, not raw automated scraping.',
  },
  {
    value: '4 regions',
    label: 'Global market coverage',
    description: 'Deep expertise across US, EU, CIS, and Gulf IT and tech ecosystems.',
  },
]

export default function Metrics() {
  return (
    <section className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">Impact &amp; Numbers</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-paper md:text-5xl">
          Precision intelligence built for sales velocity.
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <article key={m.label} className="flex flex-col justify-between rounded-sm border border-white/10 bg-white/5 p-8">
              <div>
                <p className="font-display text-3xl font-medium tracking-tight text-bronze md:text-4xl">
                  {m.value}
                </p>
                <h3 className="mt-4 font-display text-lg font-medium text-paper">{m.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/70">{m.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
