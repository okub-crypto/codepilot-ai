function Stats() {
  const stats = [
    { number: "10K+", label: "Developers" },
    { number: "500+", label: "Projects Built" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "AI Support" },
  ];

  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Trusted by Developers Worldwide
        </h2>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-slate-800 p-8 text-center shadow-lg"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {stat.number}
              </h3>

              <p className="mt-3 text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;