import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projets/:slug" element={<ProjectPage />} />
      </Routes>
    </Router>
  );
}


