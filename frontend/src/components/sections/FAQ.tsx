function FAQ() {
  const faqs = [
    {
      question: "What is CodePilot AI?",
      answer:
        "CodePilot AI is an AI-powered platform that helps developers plan, build, document, and deploy software faster.",
    },
    {
      question: "Is CodePilot AI free?",
      answer:
        "Yes. A free plan is available, with Pro and Enterprise plans offering advanced features.",
    },
    {
      question: "Who created CodePilot AI?",
      answer:
        "CodePilot AI was created by Benjamin Okubasu as a modern AI-powered software development platform.",
    },
    {
      question: "Which technologies are supported?",
      answer:
        "React, TypeScript, FastAPI, Python, PostgreSQL, Docker, GitHub and many more.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-4xl font-bold text-white">
          Frequently Asked Questions
        </h2>

        <div className="mt-12 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-slate-700 p-6"
            >
              <h3 className="text-xl font-semibold text-cyan-400">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;