// TODO(UI/内容): 补全真实技术栈关键词、从业年限、核心亮点一句话
const heroHighlights = ['React', 'TypeScript', 'Vue', '中后台架构']

export default function Hero() {
  return (
    <header id="top" className="hero-spacing mx-auto max-w-4xl px-6">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        Frontend Engineer — Web / C端 / 多端
      </p>

      <h1 className="mt-4 text-4xl leading-[1.1] font-semibold tracking-tight text-[var(--ink)] sm:mt-6 sm:text-6xl">
        魏威
        <span className="ml-3 text-2xl font-normal text-[var(--ink-faint)] sm:text-4xl">
          / Weiwei
        </span>
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] sm:mt-8 sm:text-lg">
        目前专注
        <span className="underline-accent">换电 / 车服域</span>
        的 Web 中后台开发，业余时间在扩展 C 端、多端与 AI-agent
        方向的能力。这里是我技术探索与项目的合集。
      </p>

      {/* 技术栈/亮点展示位：chip 容器，具体关键词与年限文案由内容负责人填充 */}
      <div className="tag-chip-group mt-4 sm:mt-5">
        {heroHighlights.map((item) => (
          <span key={item} className="tag-chip">
            {item}
          </span>
        ))}
      </div>

      {/* CTA 层级：联系我是最终转化目标，做成主按钮；看项目为次要路径，弱化为文字链接 */}
      <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-6">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-[var(--ink)] px-5 py-2.5 text-base font-medium text-[var(--paper)] transition-colors hover:bg-[var(--accent)]"
        >
          联系我
          <span aria-hidden="true">→</span>
        </a>
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 border-b-2 border-transparent pb-1 text-base text-[var(--ink-soft)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          看项目
          <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </header>
  )
}
