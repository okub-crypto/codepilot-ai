function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-md rounded-2xl bg-slate-900 p-8 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">
          Create Account
        </h1>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white"
          />

          <button className="w-full rounded-lg bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-600">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;