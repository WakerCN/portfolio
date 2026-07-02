export default function Hero() {
  return (
    <header className="mx-auto max-w-4xl px-6 pt-28 pb-20 sm:pt-36">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        Frontend Engineer — Web / C端 / 多端
      </p>

      <h1 className="mt-6 text-5xl leading-[1.1] font-semibold tracking-tight text-[var(--ink)] sm:text-6xl">
        魏威
        <span className="ml-3 text-3xl font-normal text-[var(--ink-faint)] sm:text-4xl">
          / Weiwei
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--ink-soft)]">
        目前专注
        <span className="underline-accent">换电 / 车服域</span>
        的 Web 中后台开发，业余时间在扩展 C 端、多端与 AI-agent
        方向的能力。这里是我技术探索与项目的合集。
      </p>

      <div className="mt-10 flex items-center gap-8">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 border-b-2 border-[var(--ink)] pb-1 text-base font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          看项目
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
        <a
          href="#contact"
          className="text-base text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
        >
          联系我
        </a>
      </div>
    </header>
  )
}
