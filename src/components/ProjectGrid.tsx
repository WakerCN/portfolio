import { projects, trackMeta, tierMeta, type Project, type ProjectTier } from '../data/projects'

function ProjectRow({
  project,
  index,
  emphasized,
}: {
  project: Project
  index: number
  emphasized?: boolean
}) {
  return (
    <div
      className={
        emphasized
          ? 'grid grid-cols-1 gap-2 border-b border-[var(--rule)] py-6 sm:grid-cols-[7rem_1fr] sm:py-7'
          : 'grid grid-cols-1 gap-2 border-b border-[var(--rule)] py-4 sm:grid-cols-[7rem_1fr] sm:py-5'
      }
    >
      <span className="tag-mark">{String(index + 1).padStart(2, '0')}</span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3
            className={
              emphasized
                ? 'text-xl font-semibold text-[var(--ink)]'
                : 'text-lg font-medium text-[var(--ink)]'
            }
          >
            {project.title}
          </h3>
          {project.status === 'wip' && (
            <span className="font-mono-tech text-[0.65rem] tracking-wide text-[var(--accent-soft)] uppercase">
              work in progress
            </span>
          )}
        </div>

        <p className="mt-1 text-[var(--ink-soft)]">{project.desc}</p>

        <p className="font-mono-tech mt-3 text-xs text-[var(--ink-faint)]">
          {project.tracks.map((t) => trackMeta[t].label).join(' / ')}
        </p>

        {project.tags.length > 0 && (
          <div className="tag-chip-group mt-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-chip">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-3 flex gap-4 text-sm">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="underline-accent text-[var(--ink)] hover:text-[var(--accent)]"
            >
              仓库 →
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
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
  )
}

function ProjectTierGroup({ tier, list, startIndex }: { tier: ProjectTier; list: Project[]; startIndex: number }) {
  if (list.length === 0) return null
  const meta = tierMeta[tier]

  const isProduction = tier === 'production'

  return (
    <div className={isProduction ? 'mt-8 sm:mt-10' : 'mt-12 sm:mt-16'}>
      <div className="flex items-baseline gap-2">
        <h3
          className={
            isProduction
              ? 'tier-heading--production font-mono-tech text-[var(--ink)] uppercase'
              : 'tier-heading--practice font-mono-tech tracking-[0.15em] uppercase'
          }
        >
          {meta.label}
        </h3>
        <span className="font-mono-tech text-[0.65rem] text-[var(--ink-faint)]">{meta.hint}</span>
      </div>
      <div
        className={
          isProduction
            ? 'tier-rule--production mt-3 border-t'
            : 'tier-rule--practice mt-3 border-t'
        }
      >
        {list.map((project, i) => (
          <ProjectRow
            key={project.title}
            project={project}
            index={startIndex + i}
            emphasized={isProduction}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectGrid() {
  const production = projects.filter((p) => p.tier === 'production')
  const practice = projects.filter((p) => p.tier === 'practice')

  return (
    <section id="projects" className="section-spacing mx-auto max-w-4xl px-6">
      <p className="font-mono-tech text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
        03 — Projects
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">项目</h2>
      <p className="mt-2 text-[var(--ink-faint)]">
        真实业务项目优先展示，练习 / 自学项目用于体现技术广度
      </p>

      <ProjectTierGroup tier="production" list={production} startIndex={0} />
      <ProjectTierGroup tier="practice" list={practice} startIndex={production.length} />
    </section>
  )
}
