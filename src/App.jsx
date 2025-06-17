import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";
import ScrollToTop from "./utils/Scroll";
import NotFound from "./utils/NotFound";

export default function App() {
  return (
    <Router>
            <ScrollToTop />

      <Routes>

        <Route path="/" element={<Portfolio />} />
        <Route path="/projets/:slug" element={<ProjectPage />} />
        <Route path="*" element={<NotFound />} /> {/* Page 404 */}

      </Routes>
    </Router>
  );
}


