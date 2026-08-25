
const iconLinkedIn = 
<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
</svg>

const menu = [
  { title: "What You Get", link: "#services" },
  { title: "Scope", link: "#scope" },
  { title: "Process", link: "#process" },
  { title: "Contact", link: "#contact" },
  { title: "LinkedIn", link: "https://www.linkedin.com/in/ivan-vitiaev", icon: iconLinkedIn }
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-10 text-sm text-paper/50 sm:flex-row sm:items-center">
        <p>
          Vitiaev <span className="text-bronze">Intelligence</span>
        </p>
        <nav className="-mx-3 -my-2 flex flex-wrap gap-x-2 gap-y-2">
          {menu.map((i, id) => {
            return (
              <a
                className="inline-flex items-center gap-2 rounded-sm px-3 py-2 transition-colors hover:text-paper [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:-translate-y-0.5"
                href={i.link} key={id} target={i.link.startsWith("http") ? "_blank" : undefined}>
                {i.icon}
                {i.title}
              </a>
            )
          })}
        </nav>
        <p>&copy; 2026 Vitiaev Intelligence. All rights reserved.</p>
      </div>
    </footer>
  )
}
