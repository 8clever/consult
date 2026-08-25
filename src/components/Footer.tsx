export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-paper/50 sm:flex-row sm:items-center">
        <p>
          Vitiaev <span className="text-bronze">Intelligence</span>
        </p>
        <nav className="flex flex-wrap gap-6">
          <a href="#services" className="transition-colors hover:text-paper">
            What You Get
          </a>
          <a href="#scope" className="transition-colors hover:text-paper">
            Scope
          </a>
          <a href="#process" className="transition-colors hover:text-paper">
            Process
          </a>
          <a href="#contact" className="transition-colors hover:text-paper">
            Contact
          </a>
        </nav>
        <p>&copy; 2026 Vitiaev Intelligence. All rights reserved.</p>
      </div>
    </footer>
  )
}
