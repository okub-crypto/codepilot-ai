function TechStack() {
  const tech = [
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
      <h2 className="mb-12 text-center text-4xl font-bold">
        Built With Modern Technologies
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {tech.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-slate-800 p-6 text-center text-cyan-400 font-semibold"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;