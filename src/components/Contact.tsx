// TODO: 替换成你自己的真实联系方式
const links = [
  { label: 'GitHub', href: 'https://github.com/WakerCN' },
  { label: 'Email', href: 'mailto:your-email@example.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h2 className="text-2xl font-semibold text-white">联系我</h2>
      <p className="mt-2 text-slate-400">欢迎交流前端 / 全栈 / AI-agent 相关的机会</p>
      <div className="mt-6 flex justify-center gap-6 text-sm">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-sky-500 hover:text-sky-400"
          >
            {l.label}
          </a>
        ))}
      </div>
      <p className="mt-10 text-xs text-slate-600">
        © {new Date().getFullYear()} Weiwei · Built with Vite + React, deployed on GitHub Pages
      </p>
    </section>
  )
}
