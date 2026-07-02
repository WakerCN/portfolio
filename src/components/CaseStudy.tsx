export default function CaseStudy() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">案例：多 AI-Agent 编排工作流</h2>
      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-pink-400">背景</h3>
            {/* TODO: 换成你自己的真实描述 —— 为什么需要同时用多个编码 agent，遇到的具体痛点 */}
            <p className="mt-2 text-sm text-slate-400">
              日常开发中同时使用多个编码 agent（Claude / Kiro / Codex /
              Cursor），任务分散在不同工具里容易打断注意力、难以追踪进度。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-pink-400">方案</h3>
            {/* TODO: 补充架构图和具体调度逻辑 */}
            <p className="mt-2 text-sm text-slate-400">
              自托管一套编排层，统一发起任务、检测各 agent CLI 状态、按任务类型路由到合适的
              agent，减少手动切换成本。
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-pink-400">收获</h3>
            {/* TODO: 补充可量化的效果，例如任务并行数、节省的时间等 */}
            <p className="mt-2 text-sm text-slate-400">
              形成了"AI 并行、人串行"的协作节奏，同时加深了对 agent
              工具链、CLI 自动化与工作流设计的理解 —— 这也是我想往 AI-agent
              方向发展的起点。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
