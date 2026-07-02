// TODO: 替换成你自己的真实联系方式
const links = [
  { label: 'GitHub', href: 'https://github.com/WakerCN' },
  { label: 'Email', href: 'mailto:your-email@example.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        05 — Contact
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">联系我</h2>
      <p className="mt-2 text-[var(--ink-faint)]">
        欢迎交流前端 / 全栈 / AI-agent 相关的机会
      </p>

      <div className="mt-8 flex gap-8 border-t border-[var(--rule)] pt-8 text-base">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="underline-accent text-[var(--ink)] hover:text-[var(--accent)]"
          >
            {l.label}
          </a>
        ))}
      </div>

      <p className="font-mono-tech mt-16 text-xs text-[var(--ink-faint)]">
        © {new Date().getFullYear()} Weiwei · Built with Vite + React, deployed on GitHub Pages
      </p>
    </section>
  )
}
