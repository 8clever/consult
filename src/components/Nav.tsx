const links = [
  { href: '#problem', label: 'The Problem' },
  { href: '#services', label: 'What You Get' },
  { href: '#why', label: 'Why Together' },
  { href: '#scope', label: 'Scope' },
  { href: '#process', label: 'Process' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-ink">
          Vitiaev <span className="text-bronze">Intelligence</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium tracking-wide text-body transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-sm bg-ink px-4 py-2 text-[13px] font-medium tracking-wide text-paper transition-colors hover:bg-ink-2"
        >
          Request pricing
        </a>
      </div>
    </header>
  )
}
