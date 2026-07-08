function TechStack() {
  const technologies = [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "GitHub Actions",
    "OpenAI API",
  ];

  return (
    <section className="bg-slate-900 px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Built With Modern Technologies
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {technologies.map((tech) => (
          <div
            key={tech}
            className="rounded-xl bg-slate-800 p-8 text-center shadow-lg transition hover:scale-105"
          >
            <h3 className="text-xl font-semibold text-cyan-400">
              {tech}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;