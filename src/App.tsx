import { useState } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProjects from "./components/FeaturedProjects";
import Services from "./components/Services";
import Process from "./components/Process";
import Statement from "./components/Statement";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import { Info, HelpCircle } from "lucide-react";

export default function App() {
  const [showGridLines, setShowGridLines] = useState(true);

  return (
    <div className="relative min-h-screen bg-dark text-light overflow-hidden font-sans selection:bg-brand selection:text-dark">
      {/* Structural Custom Cursor (Only on non-touch desktop) */}
      <Cursor />

      {/* Static/Dynamic Grid overlay aligning with brutalist/Swiss typography layout guidelines */}
      {showGridLines && (
        <div className="fixed inset-y-0 inset-x-0 pointer-events-none z-40 opacity-15">
          <div className="grid grid-cols-4 lg:grid-cols-12 h-full w-full mx-auto max-w-7xl border-x border-brand/20">
            {Array.from({ length: 11 }).map((_, i) => (
              <div key={i} className="border-r border-brand/20 h-full hidden lg:block" />
            ))}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="border-r border-brand/20 h-full block lg:hidden" />
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <Navbar showGridLines={showGridLines} setShowGridLines={setShowGridLines} />

      {/* Main Pages Flow */}
      <main className="relative w-full overflow-hidden">
        
        {/* HERO SECTION */}
        <Hero />

        {/* FEATURED PROJECTS REPOSITORY */}
        <FeaturedProjects />

        {/* SERVICES RE-SPEC MODULE */}
        <Services />

        {/* PROCESS TIMELINE */}
        <Process />

        {/* STATEMENT ACCENT BANNER */}
        <Statement />

        {/* GALLERY GRID */}
        <Gallery />

        {/* FOUNDER PHILOSOPHY / BLUEPRINT CANVAS */}
        <About />

        {/* CONTACT TERMINAL / PROJECT BRIEF GENERATOR */}
        <Contact />

      </main>

      {/* Minimal Footer */}
      <footer className="bg-dark text-light/30 border-t border-light/10 py-12 px-6 md:px-12 font-mono text-[9px] tracking-widest relative z-30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col text-left gap-1">
            <span className="font-syne font-black text-light tracking-widest text-xs">MONOLITH STUDIO</span>
            <span>© 2026 MONOLITH GRUPPE. ALL RIGHTS REGULATED.</span>
          </div>

          <div className="flex gap-8">
            <span className="hover:text-brand transition-colors cursor-pointer">DIN EN 1990</span>
            <span className="hover:text-brand transition-colors cursor-pointer">SIA 260 REG SYSTEM</span>
            <span className="hover:text-brand transition-colors cursor-pointer">TECTONICS V_4.0</span>
          </div>

          <div className="text-right flex flex-col items-center md:items-end gap-1">
            <span>CO-ORD: VALS // SWITZERLAND</span>
            <span>PRODUCED UNDER RADICAL SCHEME</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
