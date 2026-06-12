import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { Project } from "../types";
import { X, ArrowRight, Eye, RefreshCw, Layers, Compass, BarChart } from "lucide-react";

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [viewBlueprint, setViewBlueprint] = useState(false);

  // Stats generation helper for visual realism of brutalist buildings
  const getStructuralStats = (projId: string) => {
    switch (projId) {
      case "01":
        return { wind: "185 km/h", seismic: "Grade VIII", thermal: "94% Zero Loss", acoustic: "52dB Isolation" };
      case "02":
        return { wind: "210 km/h", seismic: "Grade IX", thermal: "88% Zero Loss", acoustic: "64dB Isolation" };
      case "03":
        return { wind: "160 km/h", seismic: "Grade VII", thermal: "96% Zero Loss", acoustic: "45dB Isolation" };
      case "04":
        return { wind: "140 km/h", seismic: "Grade VII", thermal: "98% Zero Loss", acoustic: "55dB Isolation" };
      default:
        return { wind: "150 km/h", seismic: "Grade VII", thermal: "90% Zero Loss", acoustic: "50dB Isolation" };
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-dark text-light py-24 md:py-36 px-6 md:px-12 border-t border-light/10"
    >
      {/* Background element */}
      <div className="absolute right-0 top-1/4 pointer-events-none select-none opacity-5 font-mono text-[10vw] tracking-tighter">
        INDEX_04
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-light/15 pb-8 mb-20 font-mono">
          <div className="text-[10px] tracking-[0.25em] text-[#FF4D00] font-bold">
            [PROJECT REPOSITORY]
          </div>
          <div className="text-light/50 text-[10px] tracking-widest mt-2 md:mt-0">
            01 // TECTONIC MONOLITHS & SEISMIC EXPERIMENTS
          </div>
        </div>

        {/* Project List */}
        <div className="space-y-36 md:space-y-48">
          {projects.map((proj, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={proj.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Visual Image Block - Breaking grid boundaries */}
                <div
                  className={`relative lg:col-span-7 group cursor-pointer ${
                    isEven ? "order-1" : "order-1 lg:order-2"
                  }`}
                  onClick={() => setSelectedProject(proj)}
                >
                  {/* Underlay Huge Number */}
                  <div className="absolute -top-16 -left-8 md:-top-24 md:-left-16 font-syne font-extrabold text-[12vw] text-stroke opacity-15 select-none pointer-events-none z-0">
                    {proj.id}
                  </div>

                  {/* Image container with custom cropping & hover distortion hint */}
                  <div className="relative aspect-[3/2] overflow-hidden border border-light/10 bg-concrete-mid z-10">
                    <img
                      src={proj.imageUrl}
                      alt={proj.title}
                      className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark gradient mapping */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/75 via-transparent to-transparent opacity-80" />

                    {/* Overlay project details tag */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end font-mono text-[10px] text-light/80 z-20">
                      <div>
                        <span className="block text-[#FF4D00] font-bold">MONOLITH UNIT {proj.id}</span>
                        <span className="tracking-widest">{proj.location}</span>
                      </div>
                      <div className="bg-dark/90 px-3 py-1.5 border border-light/10 text-[9px] tracking-widest flex items-center gap-2 group-hover:bg-brand group-hover:text-dark transition-all">
                        <span>OPEN REPORT</span>
                        <Eye className="h-3 w-3" />
                      </div>
                    </div>
                  </div>

                  {/* Overlap background/foreground typography layers */}
                  <div
                    className={`absolute hidden md:block z-20 pointer-events-none transform ${
                      isEven ? "right-[-10%] translate-y-[-50%] top-1/2" : "left-[-10%] translate-y-[-50%] top-1/2"
                    }`}
                  >
                    <h3 className="font-syne font-black text-[3.5vw] leading-none text-light drop-shadow-xl select-none tracking-tighter uppercase whitespace-nowrap">
                      {proj.title.split(" ")[0]} <span className="text-brand">{proj.title.split(" ")[1] || ""}</span>
                    </h3>
                  </div>

                </div>

                {/* Text Block */}
                <div
                  className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                    isEven ? "order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 font-mono text-[10px] text-light/45 tracking-widest">
                      <span>{proj.category}</span>
                      <span>•</span>
                      <span>{proj.year}</span>
                    </div>

                    <h4 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight text-light leading-none">
                      {proj.title}
                    </h4>

                    <p className="text-xs text-light/70 font-sans leading-relaxed tracking-wide">
                      {proj.description}
                    </p>
                  </div>

                  {/* Key materials and parameters */}
                  <div className="grid grid-cols-2 gap-4 border-y border-light/10 py-6 font-mono text-[10px]">
                    <div>
                      <span className="text-light/40 block mb-1">SCALE MASS</span>
                      <span className="font-bold text-[#FF4D00]">{proj.scale}</span>
                    </div>
                    <div>
                      <span className="text-light/40 block mb-1">COMPOSITION</span>
                      <span className="font-bold truncate block">{proj.materials.slice(0, 2).join(", ")}</span>
                    </div>
                  </div>

                  {/* Interactive Trigger btn */}
                  <button
                    onClick={() => {
                      setSelectedProject(proj);
                      setViewBlueprint(false);
                    }}
                    className="flex items-center gap-4 text-light hover:text-[#FF4D00] font-mono text-xs tracking-widest transition-colors cursor-pointer self-start group"
                  >
                    <span>DECONSTRUCT STRUCTURAL REPORT</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                  </button>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* EDITORIAL CASE STUDY DRAWER OVERLAY */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark/95 z-[100] overflow-y-auto px-6 py-12 md:p-16 backdrop-blur-md flex justify-end"
          >
            {/* Main Drawer Body */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 100 }}
              className="w-full max-w-4xl bg-concrete-dark border-l border-light/10 min-h-full p-6 md:p-12 text-light flex flex-col justify-between relative shadow-2xl"
            >
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 h-10 w-10 border border-light/25 hover:border-[#FF4D00] hover:text-[#FF4D00] rounded-full flex items-center justify-center transition-colors cursor-pointer group"
              >
                <X className="h-4 w-4 transform group-hover:rotate-90 transition-transform" />
              </button>

              {/* Drawer Content */}
              <div className="space-y-12">
                
                {/* Meta details */}
                <div className="font-mono text-[9px] text-[#FF4D00] tracking-[0.3em] font-bold flex items-center gap-3">
                  <span>STRUCTURAL DECONSTRUCTION REPORT</span>
                  <span>//</span>
                  <span>MONOLITH ID_{selectedProject.id}</span>
                </div>

                {/* Large Title Layer */}
                <div>
                  <h2 className="font-syne font-black text-4xl md:text-5xl tracking-tighter leading-none uppercase mb-2">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] text-light/50 tracking-wider">
                    <span>LOCATION: {selectedProject.location}</span>
                    <span>•</span>
                    <span>SCALE: {selectedProject.scale}</span>
                    <span>•</span>
                    <span>YEAR: {selectedProject.year}</span>
                  </div>
                </div>

                {/* Segment Selector: Photo vs Blueprint Render */}
                <div className="flex gap-4 border-b border-light/10 pb-4">
                  <button
                    onClick={() => setViewBlueprint(false)}
                    className={`font-mono text-[10px] tracking-widest pb-1 border-b cursor-pointer ${
                      !viewBlueprint ? "border-[#FF4D00] text-light font-bold" : "border-transparent text-light/45 hover:text-light"
                    }`}
                  >
                    TECTONIC FITTING PHOTO
                  </button>
                  <button
                    onClick={() => setViewBlueprint(true)}
                    className={`font-mono text-[10px] tracking-widest pb-1 border-b cursor-pointer ${
                      viewBlueprint ? "border-[#FF4D00] text-light font-bold" : "border-transparent text-light/45 hover:text-light"
                    }`}
                  >
                    STRUCTURAL VECTOR CAD
                  </button>
                </div>

                {/* Active Viewbox */}
                <div className="aspect-video bg-concrete-mid border border-light/10 relative overflow-hidden flex items-center justify-center">
                  {!viewBlueprint ? (
                    <img
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover grayscale brightness-90 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    /* Dynamic Blueprint CAD Vector Overlay Generator representation */
                    <div className="absolute inset-0 p-8 flex flex-col justify-between font-mono bg-concrete-dark">
                      <div className="absolute -inset-1 z-0 opacity-15">
                        <div className="grid grid-cols-12 h-full w-full">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="border-r border-light/20 h-full" />
                          ))}
                        </div>
                      </div>

                      <div className="relative z-10 flex justify-between text-[8px] text-brand">
                        <span>MODEL VECTOR_CAD // R_30</span>
                        <span>0.000_TRUE_HORIZON</span>
                      </div>

                      {/* Cool procedural Blueprint vector curves */}
                      <svg className="w-full h-3/5 text-brand opacity-60 relative z-10" viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 130 H390 M10 70 H390 M10 10 H390" stroke="currentColor" strokeWidth="0.25" strokeDasharray="2 2" />
                        {/* Blueprint structural elevations */}
                        <rect x="50" y="40" width="100" height="90" stroke="currentColor" strokeWidth="0.75" />
                        <rect x="80" y="10" width="160" height="120" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" />
                        <circle cx="160" cy="70" r="30" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="160" y1="10" x2="160" y2="130" stroke="currentColor" strokeWidth="0.5" />
                        <line x1="50" y1="40" x2="390" y2="130" stroke="#F7F4F0" strokeWidth="0.25" opacity="0.3" />
                        <path d="M240 130 Q300 40 350 130" stroke="currentColor" strokeWidth="0.75" />
                      </svg>

                      <div className="relative z-10 flex justify-between text-[8px] text-light/40">
                        <span>SCALE MAS_1:150 // SEISMIC CAP: ACTIVE</span>
                        <span>SEC_VALS_SWITZERLAND</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Narrative: Challenge vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans">
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] text-[#FF4D00] tracking-widest block uppercase font-bold">
                      01 // THE CRITICAL SITE CHALLENGE
                    </span>
                    <p className="text-xs text-light/80 leading-relaxed tracking-wide">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div className="space-y-3 border-l border-light/10 pl-0 md:pl-6">
                    <span className="font-mono text-[9px] text-brand tracking-widest block uppercase font-bold">
                      02 // TECHNICAL TECTONIC SOLUTION
                    </span>
                    <p className="text-xs text-light/80 leading-relaxed tracking-wide">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Materials & Stats Library */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-light/10">
                  
                  {/* Left: Materials spec lists */}
                  <div className="md:col-span-7 space-y-4 font-mono">
                    <span className="text-[9px] text-light/40 tracking-widest block uppercase">
                      TACTILE MATERIAL ASSIGNMENT:
                    </span>
                    <div className="flex flex-wrap gap-2 text-[10px]">
                      {selectedProject.materials.map((m, mi) => (
                        <div key={mi} className="bg-concrete-mid border border-light/10 text-light py-1.5 px-3">
                          {m.toUpperCase()}
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-light/5 text-[10px] text-light/60 space-y-2">
                      <span className="text-[#FF4D00] block text-[9px] font-bold">SPECIFICATION METADATA</span>
                      {selectedProject.details.map((d, didx) => (
                        <div key={didx} className="flex gap-2">
                          <span>•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Technical metrics */}
                  <div className="md:col-span-5 bg-concrete-mid border border-light/10 p-5 font-mono text-[10px] space-y-4">
                    <span className="text-[#FF4D00] font-bold block pb-2 border-b border-light/10">
                      STRUCTURAL METRIC TESTING
                    </span>
                    {Object.entries(getStructuralStats(selectedProject.id)).map(([key, val]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-light/50 uppercase">{key}</span>
                        <span className="text-light font-bold">{val}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Close Button footer action */}
              <div className="mt-12 pt-6 border-t border-light/10 flex justify-between items-center font-mono text-xs">
                <span className="text-light/45">MONOLITH DECONSTRUCTION V.2026</span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-brand text-dark font-bold px-4 py-2 hover:bg-light hover:text-dark transition-colors cursor-pointer"
                >
                  CLOSE SPEC SHEET
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
