import { projects, trackMeta } from '../data/projects'

export default function ProjectGrid() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        03 — Projects
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">项目</h2>
      <p className="mt-2 text-[var(--ink-faint)]">按能力方向标记，点击查看仓库</p>

      <div className="mt-10 border-t border-[var(--rule)]">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="grid grid-cols-1 gap-2 border-b border-[var(--rule)] py-6 sm:grid-cols-[7rem_1fr]"
          >
            <span className="tag-mark">{String(i + 1).padStart(2, '0')}</span>

            <div>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-medium text-[var(--ink)]">{p.title}</h3>
                {p.status === 'wip' && (
                  <span className="font-mono-tech text-[0.65rem] tracking-wide text-[var(--accent-soft)] uppercase">
                    work in progress
                  </span>
                )}
              </div>

              <p className="mt-1 text-[var(--ink-soft)]">{p.desc}</p>

              <p className="font-mono-tech mt-3 text-xs text-[var(--ink-faint)]">
                {p.tracks.map((t) => trackMeta[t].label).join(' / ')}
                {p.tags.length > 0 && <> &nbsp;—&nbsp; {p.tags.join('  ·  ')}</>}
              </p>

              <div className="mt-3 flex gap-4 text-sm">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-accent text-[var(--ink)] hover:text-[var(--accent)]"
                  >
                    仓库 →
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-accent text-[var(--ink)] hover:text-[var(--accent)]"
                  >
                    Demo →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
