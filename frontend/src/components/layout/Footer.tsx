function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-cyan-400">
              CodePilot AI
            </h2>
            <p className="mt-3 text-gray-400">
              AI-powered software development platform built to help developers
              plan, build, document, and deploy applications faster.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Platform</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Dashboard</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-gray-400">
              <li>About</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Founder</h3>
            <p className="mt-3 text-gray-400">
              Benjamin Okubasu
            </p>
            <p className="text-gray-500">
              Computer Science Professional
            </p>
            <p className="text-gray-500">
              Kibabii University
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-gray-500">
          © 2026 CodePilot AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;