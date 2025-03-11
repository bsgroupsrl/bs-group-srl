import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Construction from "@/services/Construction";
import Renovation from "@/services/Renovation";
import Consulting from "@/services/Consulting";
import Maintenance from "@/services/Maintenance";
import Layout from "@/layouts/Layout";
import "@/styles/globals.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/services/renovation" element={<Renovation />} />
          <Route path="/services/consulting" element={<Consulting />} />
          <Route path="/services/maintenance" element={<Maintenance />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
