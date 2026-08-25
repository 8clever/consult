const slices = [
  {
    title: 'By region',
    body: 'A country, a corridor — US nearshore, CEE, Gulf — or a city cluster.',
  },
  {
    title: 'By industry',
    body: 'Fintech, healthcare, logistics, defense tech, retail — whatever you sell into.',
  },
  {
    title: 'By account list',
    body: 'Your named targets, enriched, decoded, and prioritized for outreach.',
  },
  {
    title: 'By technology',
    body: 'Agentic AI, cloud migration, embedded systems, platform replatforming — any practice area.',
  },
]

export default function Scope() {
  return (
    <section id="scope" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">Scope</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Scoped to your question. Nothing else limits it.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
          We don’t sell fixed regions or fixed packages of coverage. We answer the question you
          bring.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {slices.map((s) => (
            <article key={s.title} className="bg-paper p-8">
              <h3 className="font-display text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{s.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
          Current default source: native hiring and intent signals from professional networks across
          Tier-1 and Tier-2 IT markets — simply because that’s where most engagements start. It is a
          starting point, not a boundary.
        </p>
      </div>
    </section>
  )
}
