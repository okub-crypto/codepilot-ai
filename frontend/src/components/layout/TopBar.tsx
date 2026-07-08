function TopBar() {
  return (
    <header className="flex items-center justify-between border-b border-slate-800 bg-slate-900 px-8 py-5">
      <h1 className="text-2xl font-bold text-white">
        Dashboard
      </h1>

      <div className="text-gray-300">
        Welcome, Benjamin
      </div>
    </header>
  );
}

export default TopBar;