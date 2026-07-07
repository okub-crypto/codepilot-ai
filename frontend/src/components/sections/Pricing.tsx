function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "KSh 0",
      description: "Perfect for students and beginners.",
      features: [
        "AI Chat",
        "1 Project",
        "Basic Documentation",
        "Community Support",
      ],
      featured: false,
    },
    {
      name: "Pro",
      price: "KSh 1,500/mo",
      description: "Best for professional developers.",
      features: [
        "Unlimited Projects",
        "Advanced AI",
        "Code Generation",
        "Documentation Generator",
        "Priority Support",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      description: "For companies and teams.",
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "Dedicated Support",
        "Custom AI Models",
        "API Access",
      ],
      featured: false,
    },
  ];

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-4 text-lg text-gray-400">
            Choose the plan that fits your development journey.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 ${
                plan.featured
                  ? "border-cyan-500 bg-slate-900"
                  : "border-slate-800 bg-slate-900/60"
              }`}
            >
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>

              <p className="mt-4 text-4xl font-bold text-cyan-400">
                {plan.price}
              </p>

              <p className="mt-4 text-gray-400">{plan.description}</p>

              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>✔ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full rounded-lg py-3 font-semibold ${
                  plan.featured
                    ? "bg-cyan-500 text-white hover:bg-cyan-600"
                    : "border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;