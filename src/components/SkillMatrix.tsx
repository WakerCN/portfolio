import { trackMeta, type Track } from '../data/projects'

interface Skill {
  track: Track
  summary: string
  items: string[]
}

// TODO: 按真实经验调整每一项的具体技术点
const skills: Skill[] = [
  {
    track: 'web',
    summary: 'PC 中后台系统的核心开发经验：权限体系、大数据表格、数据可视化。',
    items: ['React / Vue', '中后台架构', '权限系统', 'ECharts 大屏'],
  },
  {
    track: 'c-end',
    summary: '面向 C 端用户的响应式页面与官网开发，兼顾性能与体验。',
    items: ['响应式布局', '首屏性能优化', 'SEO', '官网独立交付'],
  },
  {
    track: 'multi',
    summary: '探索一套代码多端复用的可能性，覆盖小程序与跨端桌面应用。',
    items: ['Taro', '小程序', 'Electron / Tauri'],
  },
  {
    track: 'fullstack',
    summary: '具备从前端延伸到接口与部署的全栈视角（持续加强中）。',
    items: ['Node.js', 'Serverless Functions', '数据库基础'],
  },
  {
    track: 'ai-agent',
    summary: '自托管多 AI-agent 编排环境，日常用多个编码 agent 并行处理任务。',
    items: ['Agent 编排', 'Claude / Kiro CLI', '工作流自动化'],
  },
]

export default function SkillMatrix() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        02 — Capabilities
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">
        能力矩阵
      </h2>
      <p className="mt-2 text-[var(--ink-faint)]">五个方向，从当前主力到正在拓展的能力</p>

      <div className="mt-10 border-t border-[var(--rule)]">
        {skills.map((s) => {
          const meta = trackMeta[s.track]
          return (
            <div
              key={s.track}
              className="grid grid-cols-1 gap-2 border-b border-[var(--rule)] py-6 sm:grid-cols-[7rem_1fr]"
            >
              <div className="flex items-baseline gap-2 sm:flex-col sm:gap-1">
                <span className="tag-mark">{meta.mark}</span>
                <h3 className="text-sm font-medium text-[var(--ink)]">{meta.label}</h3>
              </div>
              <div>
                <p className="text-[var(--ink-soft)]">{s.summary}</p>
                <p className="font-mono-tech mt-3 text-xs text-[var(--ink-faint)]">
                  {s.items.join('  ·  ')}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
