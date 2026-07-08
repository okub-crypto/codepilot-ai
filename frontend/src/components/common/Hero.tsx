function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 flex flex-col items-center justify-center px-6 py-24 text-center">
      <span className="mb-4 rounded-full bg-cyan-500/20 px-4 py-2 text-cyan-400">
        AI-Powered Development Workspace
      </span>

      <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
        Build Software Faster with
        <span className="text-cyan-400"> CodePilot AI</span>
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        Plan projects, generate code, manage tasks, write documentation,
        and deploy applications—all from one intelligent workspace.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-white hover:bg-cyan-600">
          Get Started
        </button>

        <button className="rounded-lg border border-gray-500 px-6 py-3 text-white hover:bg-slate-800">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default Hero;