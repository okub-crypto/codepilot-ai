function AIPage() {
  return (
    <div className="flex h-screen flex-col bg-slate-950 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900 px-8 py-5">
        <h1 className="text-3xl font-bold text-cyan-400">
          CodePilot AI Workspace
        </h1>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-xl bg-slate-900 p-6 shadow-lg">
            <p className="mb-4 text-cyan-400 font-semibold">
              AI Assistant
            </p>

            <div className="h-[450px] overflow-y-auto rounded-lg bg-slate-800 p-5">
              <div className="mb-4 rounded-lg bg-slate-700 p-4">
                👋 Hello Benjamin! I'm CodePilot AI.
              </div>

              <div className="rounded-lg bg-cyan-600 p-4 text-white">
                How can I help you build your project today?
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Input */}
      <footer className="border-t border-slate-800 bg-slate-900 p-6">
        <div className="mx-auto flex max-w-5xl gap-4">
          <input
            type="text"
            placeholder="Ask CodePilot AI anything..."
            className="flex-1 rounded-lg bg-slate-800 p-4 text-white outline-none focus:ring-2 focus:ring-cyan-500"
          />

          <button className="rounded-lg bg-cyan-500 px-8 font-semibold hover:bg-cyan-600">
            Send
          </button>
        </div>
      </footer>
    </div>
  );
}

export default AIPage;