function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 border-r border-slate-800 p-6">
      <h2 className="text-2xl font-bold text-cyan-400">
        CodePilot AI
      </h2>

      <nav className="mt-10 space-y-4">
        <a href="/dashboard" className="block rounded-lg px-4 py-3 text-white hover:bg-slate-800">
          Dashboard
        </a>

        <a href="#" className="block rounded-lg px-4 py-3 text-white hover:bg-slate-800">
          Projects
        </a>

        <a href="#" className="block rounded-lg px-4 py-3 text-white hover:bg-slate-800">
          AI Assistant
        </a>

        <a href="#" className="block rounded-lg px-4 py-3 text-white hover:bg-slate-800">
          Tasks
        </a>

        <a href="#" className="block rounded-lg px-4 py-3 text-white hover:bg-slate-800">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default Sidebar;