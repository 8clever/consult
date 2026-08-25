export default function AnalystNote() {
  return (
    <section className="border-b border-line bg-white">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <blockquote className="font-display text-2xl leading-snug font-medium text-ink italic md:text-3xl">
          “Every signal in these reports is read the way an engineer reads it — architecture, team
          maturity, budget implications — not the way a scraper exports it.”
        </blockquote>
        <p className="mt-8 text-sm font-semibold tracking-wide text-ink">Ivan Vitiaev</p>
        <p className="mt-1 text-sm text-muted">
          Founder &middot; Practicing CTO — high-load systems, AI implementation, engineering
          leadership across US, EU, CIS, and Gulf markets.
        </p>
      </div>
    </section>
  )
}
