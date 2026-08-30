
const email = "info@vitiaev.com";

const steps = [
  "Start with a written problem brief — no sales call required.",
  "Fixed-scope research, analysis or advisory engagements.",
  "Clear findings, recommendations and next steps."
]

export default function Contact() {
  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-4xl font-medium tracking-tight text-paper md:text-5xl">
              Request pricing
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-paper/70">
              Tell us which market you want mapped. We reply within one business day with scope
              options and pricing.
            </p>
            <a
              href={`mailto:${email}`}
              className="mt-10 inline-block rounded-sm bg-bronze px-6 py-3 text-sm font-medium tracking-wide text-ink transition-colors hover:bg-bronze-deep">
              {email}
            </a>
          </div>
          <ul className="space-y-5 self-end border-t border-white/10 pt-8 text-[15px] md:border-t-0 md:pt-0">
            {steps.map((s, i) => {
              return (
                <li key={i} className="flex gap-3">
                  <span aria-hidden className="mt-[9px] h-px w-4 shrink-0 bg-bronze" />
                  <span className="text-paper/80">
                    {s}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
