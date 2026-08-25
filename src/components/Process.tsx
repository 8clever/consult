const steps = [
  {
    number: '1',
    title: 'Define the question',
    body: 'Region, industry, account list, or technology. One call is enough to scope it.',
  },
  {
    number: '2',
    title: 'Receive the report',
    body: 'Named leads, dated signals, company pains, prioritized targets. Dated and sourced — nothing anonymous.',
  },
  {
    number: '3',
    title: 'Decode it together',
    body: 'Advisory session: what the signals mean for your sales motion, positioning, and pricing.',
  },
  {
    number: '4',
    title: 'Act',
    body: 'Feed CRM, sequences, and board decks. Re-run weekly, monthly, or per question.',
  },
]

export default function Process() {
  return (
    <section id="process" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">How It Works</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          From question to action in four steps.
        </h2>
        <ol className="mt-14 grid gap-x-8 gap-y-10 md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.number} className="border-t border-line pt-6">
              <span className="font-display text-4xl font-medium text-bronze">{s.number}</span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
