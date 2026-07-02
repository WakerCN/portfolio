import { projects, trackMeta } from '../data/projects'

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-white">项目</h2>
      <p className="mt-2 text-slate-400">按能力方向标记，点击查看仓库</p>
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-5"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-lg font-medium text-white">{p.title}</h3>
              {p.status === 'wip' && (
                <span className="shrink-0 rounded-full bg-amber-500/15 px-2 py-0.5 text-xs text-amber-400">
                  WIP
                </span>
              )}
            </div>
            <p className="mt-2 flex-1 text-sm text-slate-400">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tracks.map((t) => (
                <span
                  key={t}
                  className="rounded-full px-2 py-0.5 text-xs font-medium"
                  style={{
                    backgroundColor: `${trackMeta[t].color}22`,
                    color: trackMeta[t].color,
                  }}
                >
                  {trackMeta[t].label}
                </span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  仓库 →
                </a>
              )}
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
