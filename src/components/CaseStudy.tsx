export default function CaseStudy() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        04 — Case Study
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">
        多 AI-Agent 编排工作流
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[var(--rule)] pt-10 sm:grid-cols-3">
        <div>
          <span className="tag-mark">背景</span>
          {/* TODO: 换成你自己的真实描述 —— 为什么需要同时用多个编码 agent，遇到的具体痛点 */}
          <p className="mt-3 text-[var(--ink-soft)]">
            日常开发中同时使用多个编码 agent（Claude / Kiro / Codex /
            Cursor），任务分散在不同工具里容易打断注意力、难以追踪进度。
          </p>
        </div>
        <div>
          <span className="tag-mark">方案</span>
          {/* TODO: 补充架构图和具体调度逻辑 */}
          <p className="mt-3 text-[var(--ink-soft)]">
            自托管一套编排层，统一发起任务、检测各 agent CLI 状态、按任务类型路由到合适的
            agent，减少手动切换成本。
          </p>
        </div>
        <div>
          <span className="tag-mark">收获</span>
          {/* TODO: 补充可量化的效果，例如任务并行数、节省的时间等 */}
          <p className="mt-3 text-[var(--ink-soft)]">
            形成了"AI 并行、人串行"的协作节奏，同时加深了对 agent
            工具链、CLI 自动化与工作流设计的理解 —— 这也是我想往 AI-agent
            方向发展的起点。
          </p>
        </div>
      </div>
    </section>
  )
}
