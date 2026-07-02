const links = [
  { href: '#skills', label: '能力', mark: '02' },
  { href: '#projects', label: '项目', mark: '03' },
  { href: '#case-study', label: '案例', mark: '04' },
  { href: '#contact', label: '联系', mark: '05' },
]

export default function Nav() {
  return (
    <div
      className="sticky top-0 z-50 border-b border-[var(--rule)] bg-[var(--paper)]/90 backdrop-blur-sm"
      style={{ height: 'var(--nav-height)' }}
    >
      <nav className="mx-auto flex h-full max-w-4xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono-tech text-xs tracking-[0.2em] text-[var(--ink)] uppercase"
        >
          魏威 <span className="text-[var(--accent)]">/ WW</span>
        </a>

        <ul className="flex items-center gap-4 sm:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono-tech flex items-center gap-1.5 text-xs text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)] sm:text-sm"
              >
                <span className="hidden text-[var(--accent-soft)] sm:inline">{l.mark}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
