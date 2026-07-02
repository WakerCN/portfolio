# Portfolio

魏威的技术作品集：Web / C端 / 多端前端开发，以及正在拓展的全栈与 AI-agent 能力。

技术栈：Vite + React + TypeScript + Tailwind CSS v4，通过 GitHub Actions 自动构建部署到 GitHub Pages。

在线地址：https://wakercn.github.io/portfolio/

## 本地开发

```bash
npm install
npm run dev
```

## 部署

push 到 `main` 分支即自动触发 `.github/workflows/deploy.yml`，构建产物发布到 GitHub Pages。
仓库需在 Settings → Pages → Source 中选择 **GitHub Actions**（首次需手动设置一次）。

## 待完善（TODO）

- [ ] `src/components/Contact.tsx`：替换成真实邮箱/联系方式
- [ ] `src/components/CaseStudy.tsx`：AI-agent 编排案例补充真实细节和架构图
- [ ] `src/data/projects.ts`：补充各项目的在线 demo 链接、真实截图
- [ ] `src/components/SkillMatrix.tsx`：按实际技术栈微调技能点
- [ ] 换电/车服中后台项目：补充脱敏后的架构说明与效果数据（不开源代码）
- [ ] 可选：全栈方向补一个用 Serverless Functions（Vercel/Cloudflare 免费额度）实现的小 demo
