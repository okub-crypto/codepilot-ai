function CTA() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-4xl font-bold text-white">
          Ready to Build the Future?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-cyan-100">
          Join CodePilot AI and experience a smarter way to plan, develop,
          document, and deploy software with the power of artificial
          intelligence.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-lg bg-white px-8 py-3 font-semibold text-cyan-700 transition hover:bg-gray-100">
            Get Started
          </button>

          <button className="rounded-lg border border-white px-8 py-3 font-semibold text-white transition hover:bg-white hover:text-cyan-700">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;