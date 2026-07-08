import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import AIPage from "./pages/AI/AIPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/ai" element={<AIPage />} />
    </Routes>
  );
}

export default App;