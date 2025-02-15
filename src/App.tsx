import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/navbar";
import { HeroSection } from "./components/home/hero-section";
import { AboutPage } from "./pages/about";
import { EventsPage } from "./pages/events";
import { ResourcesPage } from "./pages/resources";
import { CareersPage } from "./pages/carrers";
import { ContactPage } from "./pages/contact";
import { Projects } from "./pages/projects"; // Added missing import for Projects page
import "./index.css"; // Import index.css here

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/projects" element={<Projects />} /> {/* Added route for Projects */}
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
