import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Team from "@/pages/Team";
import Services from "@/pages/Services";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import Construction from "@/services/Construction";
import Renovation from "@/services/Renovation";
import Consulting from "@/services/Consulting";
import Maintenance from "@/services/Maintenance";
import Layout from "@/layouts/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import "@/styles/globals.css";
export default function App() {
 return <BrowserRouter><ScrollToTop /><Layout><Routes>
  <Route path="/" element={<Home />} />
  <Route path="/home" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/team" element={<Team />} />
  <Route path="/services" element={<Services />} />
  <Route path="/services/construction" element={<Construction />} />
  <Route path="/services/renovation" element={<Renovation />} />
  <Route path="/services/consulting" element={<Consulting />} />
  <Route path="/services/finiture" element={<Consulting />} />
  <Route path="/services/maintenance" element={<Maintenance />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<section className="not-found"><h1>Pagina non trovata</h1><Link className="btn" to="/home">Torna alla Home</Link></section>} />
 </Routes></Layout></BrowserRouter>;
}
