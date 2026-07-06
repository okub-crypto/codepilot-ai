function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-800 shadow-md">
      <h1 className="text-2xl font-bold text-cyan-400">
        CodePilot AI
      </h1>

      <div className="flex gap-6">
        <a href="/" className="hover:text-cyan-400">
          Home
        </a>

        <a href="/login" className="hover:text-cyan-400">
          Login
        </a>

        <a href="/register" className="hover:text-cyan-400">
          Register
        </a>
      </div>
    </nav>
  );
}

export default Navbar;