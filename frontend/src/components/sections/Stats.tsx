function Stats() {
  const stats = [
    { value: "10K+", label: "Developers" },
    { value: "500+", label: "Projects Built" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "AI Support" },
  ];

  return (
    <section className="bg-slate-950 px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Trusted by Developers Worldwide
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl bg-slate-800 p-8 text-center shadow-lg"
          >
            <h3 className="text-5xl font-bold text-cyan-400">
              {stat.value}
            </h3>

            <p className="mt-4 text-lg text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;