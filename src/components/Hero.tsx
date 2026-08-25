const trustItems = [
  'Named decision-makers',
  'Dated signals only',
  'Practicing CTO analysis',
  'Any region or industry',
]

export default function Hero() {
  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
        <p className="mb-6 text-xs font-semibold tracking-[0.2em] text-bronze uppercase">
          Market Intelligence &middot; CTO Advisory
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.08] font-medium tracking-tight text-ink md:text-6xl">
          Know what business needs. Before your competitors&nbsp;do.
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-body">
          Vitiaev Intelligence delivers market intelligence reports and CTO-level advisory as one
          service. We map who is buying technology services right now, what hurts inside those
          companies, and where to dig deeper — so your sales team stops guessing.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-sm bg-ink px-6 py-3 text-sm font-medium tracking-wide text-paper transition-colors hover:bg-ink-2"
          >
            Request pricing
          </a>
          <a
            href="#process"
            className="rounded-sm border border-line px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:border-muted hover:text-ink-2"
          >
            See how it works
          </a>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
          {trustItems.map((item) => (
            <li
              key={item}
              className="text-xs font-medium tracking-[0.14em] text-muted uppercase"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
