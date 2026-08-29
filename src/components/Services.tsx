const reportItems = [
  'Leads & hiring signals: active job openings, team expansion, and budget indicators',
  'Deep company research: financials, business models, and operational maturity',
  'Specific decision-makers: mapped CTOs, CIOs, and AI leaders with direct public statements',
  'Company pains in their own language, ready to mirror in outreach',
  'A prioritized target list — who to contact first, and why',
]

const advisoryItems = [
  'Where the industry is actually moving — not where the press releases say',
  'What big tech is doing behind the headlines, and where capital flows next',
  'Which signals in your report matter, and which are noise',
  'How to position your offer against the pains we found',
]

function ProductCard({
  number,
  title,
  lead,
  items,
}: {
  number: string
  title: string
  lead: string
  items: string[]
}) {
  return (
    <article className="flex flex-col rounded-sm border border-line bg-paper p-8 md:p-10">
      <span className="font-display text-sm italic text-bronze">{number}</span>
      <h3 className="mt-3 font-display text-2xl font-medium text-ink md:text-3xl">{title}</h3>
      <p className="mt-4 leading-relaxed text-body">{lead}</p>
      <ul className="mt-6 space-y-3.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-[15px] leading-relaxed">
            <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-bronze" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Services() {
  return (
    <section id="services" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">What You Get</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Two products. One system.
        </h2>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <ProductCard
            number="01"
            title="Intelligence Reports"
            lead="A scoped intelligence report on the market segment you choose. Inside:"
            items={reportItems}
          />
          <ProductCard
            number="02"
            title="CTO Advisory"
            lead="A working session with a practicing CTO who reads the same signals from the inside:"
            items={advisoryItems}
          />
        </div>
      </div>
    </section>
  )
}
