const rows = [
  {
    statement: 'A report without a technologist’s lens is raw data.',
    note: 'Anyone can export a feed. Knowing that a “Head of AI” hire means a production mandate — not an experiment — is engineering judgment.',
  },
  {
    statement: 'A consultant without fresh signals is theorizing.',
    note: 'Opinions without evidence age badly. We ground every session in what companies said this week.',
  },
  {
    statement: 'Together, they are a decision pipeline.',
    note: 'You know who needs you, what hurts, and exactly how to talk about it — this week, not last quarter.',
  },
]

export default function WhyTogether() {
  return (
    <section id="why" className="border-b border-line bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">
          Why Together
        </p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-paper md:text-5xl">
          Data alone doesn’t close deals.
        </h2>
        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {rows.map((r) => (
            <div key={r.statement} className="grid gap-4 py-8 md:grid-cols-2 md:gap-12">
              <h3 className="font-display text-xl font-medium text-paper md:text-2xl">
                {r.statement}
              </h3>
              <p className="leading-relaxed text-paper/70">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
