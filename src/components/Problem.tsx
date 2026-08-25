const pains = [
  {
    title: 'Hours lost to scraping',
    body: 'SDRs scroll professional networks for hours trying to spot who is in a buying mood — and still miss the posts that matter.',
  },
  {
    title: 'Outreach that lands nowhere',
    body: 'Generic pitches ignore the pain a company just announced to the world. No pain match, no reply.',
  },
  {
    title: 'Reports that arrive late',
    body: 'Analyst publications describe last year’s market in aggregate. They rarely tell you what to do on Monday morning.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="border-b border-line bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-semibold tracking-[0.2em] text-bronze uppercase">The Problem</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-medium tracking-tight text-ink md:text-5xl">
          Most selling happens blind.
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
          Your market is full of real, dated buying signals. Almost nobody reads them properly.
        </p>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-line bg-line md:grid-cols-3">
          {pains.map((p) => (
            <article key={p.title} className="bg-paper p-8">
              <h3 className="font-display text-xl font-medium text-ink">{p.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
