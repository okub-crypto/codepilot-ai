function HowItWorks() {
  const steps = [
    "Create a Project",
    "Generate AI Code",
    "Test & Review",
    "Deploy Your Application",
  ];

  return (
    <section className="px-8 py-20 bg-slate-950">
      <h2 className="text-4xl font-bold text-center mb-12">
        How It Works
      </h2>

      <div className="grid gap-6 md:grid-cols-4">
        {steps.map((step, index) => (
          <div
            key={step}
            className="rounded-xl bg-slate-800 p-6 text-center"
          >
            <div className="text-4xl font-bold text-cyan-400 mb-4">
              {index + 1}
            </div>

            <h3 className="text-xl font-semibold">
              {step}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;