import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/TopBar";

function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <TopBar />

        <main className="flex-1 p-8">
          <h2 className="text-3xl font-bold text-white">
            Welcome, Benjamin 👋
          </h2>

          <p className="mt-2 text-gray-400">
            Manage your AI projects from one intelligent workspace.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-slate-900 p-6">
              <h3 className="text-cyan-400 text-lg font-semibold">
                Projects
              </h3>

              <p className="mt-4 text-5xl font-bold text-white">0</p>
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              <h3 className="text-cyan-400 text-lg font-semibold">
                AI Requests
              </h3>

              <p className="mt-4 text-5xl font-bold text-white">0</p>
            </div>

            <div className="rounded-xl bg-slate-900 p-6">
              <h3 className="text-cyan-400 text-lg font-semibold">
                Tasks
              </h3>

              <p className="mt-4 text-5xl font-bold text-white">0</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardPage;