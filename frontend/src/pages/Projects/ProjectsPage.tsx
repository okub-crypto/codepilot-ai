function ProjectsPage() {
  const projects = [
    {
      id: 1,
      name: "AI Chatbot",
      status: "In Progress",
    },
    {
      id: 2,
      name: "E-Commerce Platform",
      status: "Completed",
    },
    {
      id: 3,
      name: "Portfolio Website",
      status: "Planning",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Projects</h1>

        <button className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold hover:bg-cyan-600">
          + New Project
        </button>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl bg-slate-900 p-6 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-cyan-400">
              {project.name}
            </h2>

            <p className="mt-4 text-gray-400">
              Status: {project.status}
            </p>

            <button className="mt-6 rounded-lg border border-cyan-500 px-4 py-2 hover:bg-cyan-500 hover:text-white">
              Open Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;