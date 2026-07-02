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
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">能力矩阵</h2>
      <p className="mt-2 text-slate-400">五个方向，从当前主力到正在拓展的能力</p>
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s) => {
          const meta = trackMeta[s.track]
          return (
            <div
              key={s.track}
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-5"
            >
              <span
                className="inline-block rounded-full px-3 py-1 text-xs font-medium"
                style={{ backgroundColor: `${meta.color}22`, color: meta.color }}
              >
                {meta.label}
              </span>
              <p className="mt-3 text-sm text-slate-300">{s.summary}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
