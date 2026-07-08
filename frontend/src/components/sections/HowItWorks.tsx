function HowItWorks() {
  const steps = [
    "Create a Project",
    "Generate AI Code",
    "Test & Review",
    "Deploy Your Application",
  ];

  return (
    <section className="bg-slate-950 px-8 py-20">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        How It Works
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-xl bg-slate-800 p-6 text-center shadow-lg"
          >
            <div className="mb-4 text-4xl font-bold text-cyan-400">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold text-white">
              {step}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;