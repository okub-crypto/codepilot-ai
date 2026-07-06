function Features() {
  const features = [
    {
      title: "AI Code Generation",
      description: "Generate clean, production-ready code with AI assistance.",
    },
    {
      title: "Project Management",
      description: "Organize projects, tasks, and milestones in one workspace.",
    },
    {
      title: "Documentation",
      description: "Automatically generate technical documentation.",
    },
    {
      title: "Deployment",
      description: "Deploy applications quickly with Docker and CI/CD.",
    },
  ];

  return (
    <section className="px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Powerful Features
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl bg-slate-800 p-6"
          >
            <h3 className="mb-4 text-xl font-semibold text-cyan-400">
              {feature.title}
            </h3>

            <p className="text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;