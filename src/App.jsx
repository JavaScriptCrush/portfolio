import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return <div className="app">
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
}

export default App;
