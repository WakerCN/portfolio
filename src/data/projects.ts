export type Track = 'web' | 'c-end' | 'multi' | 'fullstack' | 'ai-agent'

// production：真实业务项目（含金量最高，应优先展示）
// practice：练习/教程/自学类项目（用于体现技术广度，权重次之）
export type ProjectTier = 'production' | 'practice'

export interface Project {
  title: string
  desc: string
  tracks: Track[]
  tags: string[]
  repo?: string
  demo?: string
  status: 'live' | 'wip'
  tier: ProjectTier
}

export const trackMeta: Record<Track, { label: string; mark: string }> = {
  web: { label: 'Web / PC 中后台', mark: '01' },
  'c-end': { label: 'C端 / H5', mark: '02' },
  multi: { label: '多端', mark: '03' },
  fullstack: { label: '全栈', mark: '04' },
  'ai-agent': { label: 'AI-Agent', mark: '05' },
}

export const tierMeta: Record<ProjectTier, { label: string; hint: string }> = {
  production: { label: '真实业务项目', hint: '生产环境 · 团队协作' },
  practice: { label: '练习 / 自学项目', hint: '个人学习 · 技术验证' },
}

// TODO: 补全每个项目的 demo 链接、真实截图、一句话业务背景
// 排序原则：production 分组优先展示，组内保持原有先后顺序；practice 分组置后
export const projects: Project[] = [
  {
    title: '换电/车服中后台系统',
    desc: '哈啰内部真实业务的 PC 中后台系统（运营/商户 Admin），因涉及公司代码不开源，可提供脱敏架构说明与效果数据。',
    tracks: ['web'],
    tags: ['中后台', '权限体系', '大数据表格'],
    status: 'wip',
    tier: 'production',
  },
  {
    title: 'Darwick 官网',
    desc: '为船舶服务公司开发的商业宣传官网，独立完成从设计还原到上线的全流程。',
    tracks: ['c-end', 'web'],
    tags: ['响应式', '官网', 'SEO'],
    repo: 'https://github.com/WakerCN/darwick-website',
    status: 'live',
    tier: 'production',
  },
  {
    title: '大屏数据可视化',
    desc: '学习并实践大屏项目的分栏布局、自适应缩放与数据可视化方案。',
    tracks: ['web'],
    tags: ['ECharts', '大屏', '数据可视化'],
    repo: 'https://github.com/WakerCN/learn-big-screen-lab',
    status: 'live',
    tier: 'practice',
  },
  {
    title: '仿问卷星低代码编辑器',
    desc: '仿问卷星的低代码问卷编辑器，涉及拖拽搭建、Schema 驱动渲染。',
    tracks: ['web', 'fullstack'],
    tags: ['低代码', 'React', 'Schema 驱动'],
    repo: 'https://github.com/WakerCN/imooc-question-star',
    status: 'live',
    tier: 'practice',
  },
  {
    title: '跨端聊天桌面应用',
    desc: '基于跨平台方案开发的桌面聊天应用，探索前端技术跨终端复用的边界。',
    tracks: ['multi', 'fullstack'],
    tags: ['Electron/Tauri', '跨端', 'IM'],
    repo: 'https://github.com/WakerCN/imooc-cpc-desktop',
    status: 'live',
    tier: 'practice',
  },
  {
    title: 'Taro 多端开发实践',
    desc: '基于 Taro 的多端（小程序/H5）统一开发实践记录。',
    tracks: ['multi', 'c-end'],
    tags: ['Taro', '小程序', '多端复用'],
    repo: 'https://github.com/WakerCN/learn-taro',
    status: 'live',
    tier: 'practice',
  },
]
