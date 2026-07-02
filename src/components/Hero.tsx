export default function Hero() {
  return (
    <header className="mx-auto max-w-5xl px-6 pt-24 pb-16 text-center">
      <p className="mb-4 text-sm tracking-widest text-sky-400 uppercase">
        Frontend Engineer · Web / C端 / 多端
      </p>
      <h1 className="text-4xl font-semibold text-white sm:text-5xl">
        魏威 <span className="text-slate-500">/ Weiwei</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
        目前专注换电 / 车服域的 Web 中后台开发，业余时间在扩展 C 端、多端与
        AI-agent 方向的能力。这里是我技术探索与项目的合集。
      </p>
      <div className="mt-8 flex justify-center gap-4 text-sm">
        <a
          href="#projects"
          className="rounded-full bg-sky-500 px-5 py-2 font-medium text-white transition hover:bg-sky-400"
        >
          看项目
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-700 px-5 py-2 font-medium text-slate-300 transition hover:border-slate-500"
        >
          联系我
        </a>
      </div>
    </header>
  )
}
