function AIPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-slate-800 p-6">
        <h1 className="text-3xl font-bold">
          AI Workspace
        </h1>
      </header>

      <main className="mx-auto max-w-5xl p-8">
        <div className="rounded-xl bg-slate-900 p-6">
          <div className="mb-6 h-96 overflow-y-auto rounded-lg bg-slate-800 p-4">
            <p className="text-gray-400">
              AI conversation will appear here...
            </p>
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Ask CodePilot AI anything..."
              className="flex-1 rounded-lg bg-slate-800 p-4 outline-none"
            />

            <button className="rounded-lg bg-cyan-500 px-8 font-semibold hover:bg-cyan-600">
              Send
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AIPage;