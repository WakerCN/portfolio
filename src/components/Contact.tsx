const primaryLink = {
  label: '语雀',
  href: 'https://www.yuque.com/star-one',
  hint: '技术笔记 · 学习记录 · 经验沉淀',
}

const links = [
  { label: 'GitHub', href: 'https://github.com/WakerCN' },
  { label: 'Email', href: 'mailto:1209562577@qq.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="section-spacing mx-auto max-w-4xl px-6">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        05 — Contact
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">联系我</h2>
      <p className="mt-2 text-[var(--ink-faint)]">
        欢迎交流前端 / 全栈 / AI-agent 相关的机会
      </p>

      <div className="mt-8 border-t border-[var(--rule)] pt-8">
        <a
          href={primaryLink.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-baseline gap-3"
        >
          <span className="text-2xl font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]">
            {primaryLink.label}
          </span>
          <span
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </a>
        <p className="font-mono-tech mt-1 text-xs text-[var(--ink-faint)]">{primaryLink.hint}</p>

        <div className="mt-6 flex gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="underline-accent text-[var(--ink-soft)] hover:text-[var(--accent)]"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      <p className="font-mono-tech mt-12 text-xs text-[var(--ink-faint)] sm:mt-16">
        © {new Date().getFullYear()} Weiwei · Built with Vite + React, deployed on GitHub Pages
      </p>
    </section>
  )
}
