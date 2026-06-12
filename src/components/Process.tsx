import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { services } from "../data";
import { Hammer, CircleDot, Play, HelpCircle, Layers, ClipboardCheck, Settings, ShieldAlert } from "lucide-react";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = services[activeIndex];

  // Helper icons for architectural blueprints depending on step
  const getStepBlueprint = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg className="w-full h-full text-brand opacity-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="0.5" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="0.5" />
            <rect x="70" y="70" width="60" height="60" stroke="currentColor" strokeWidth="1" strokeDasharray="5 3" />
            <path d="M40 40 L160 160" stroke="currentColor" strokeWidth="0.25" />
            <path d="M160 40 L40 160" stroke="#F7F4F0" strokeWidth="0.25" opacity="0.3" />
            <text x="110" y="145" className="font-mono text-[7px]" fill="currentColor">SITE BEARING VECTOR_A</text>
          </svg>
        );
      case 1:
        return (
          <svg className="w-full h-full text-brand opacity-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="30" width="140" height="140" stroke="currentColor" strokeWidth="0.75" />
            <rect x="50" y="50" width="100" height="100" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <line x1="30" y1="30" x2="170" y2="170" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <circle cx="150" cy="150" r="4" fill="currentColor" />
            <circle cx="150" cy="50" r="4" fill="currentColor" />
            <circle cx="50" cy="150" r="4" fill="currentColor" />
            <text x="35" y="45" className="font-mono text-[7px]" fill="currentColor">VOLUMETRIC LIMITS</text>
            <text x="110" y="95" className="font-mono text-[6px]" fill="#F7F4F0" opacity="0.4">D1_50_RADIUS</text>
          </svg>
        );
      case 2:
        return (
          <svg className="w-full h-full text-brand opacity-45" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 50 H180 M20 90 H180 M20 130 H180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            <path d="M50 20 V180 M90 20 V180 M130 20 V180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
            {/* Castings outline */}
            <rect x="50" y="50" width="40" height="80" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" />
            <rect x="90" y="90" width="40" height="40" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="1" />
            <rect x="130" y="50" width="20" height="40" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 50 L90 90" stroke="#F7F4F0" strokeWidth="1" />
            <circle cx="70" cy="70" r="2" fill="#FF4D00" />
            <text x="55" y="145" className="font-mono text-[7px]" fill="currentColor">JOINT MAP CO-ORD_Z</text>
          </svg>
        );
      case 3:
        return (
          <svg className="w-full h-full text-brand opacity-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,20 170,150 30,150" stroke="currentColor" strokeWidth="0.75" />
            <polygon points="100,60 140,140 60,140" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
            <line x1="100" y1="20" x2="100" y2="150" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="100" cy="150" r="6" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.2" />
            <text x="40" y="165" className="font-mono text-[7px]" fill="currentColor">MATERIAL WEIGHT SHEAR</text>
          </svg>
        );
      case 4:
        return (
          <svg className="w-full h-full text-brand opacity-40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="25" y="25" width="150" height="150" stroke="currentColor" strokeWidth="0.25" />
            <path d="M25 25 L175 175 M175 25 L25 175" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
            <polygon points="100,50 150,100 100,150 50,100" stroke="currentColor" strokeWidth="0.75" />
            <circle cx="100" cy="100" r="25" stroke="currentColor" strokeWidth="0.5" />
            <text x="35" y="32" className="font-mono text-[7px]" fill="currentColor">AS-BUILT STRUCTURAL</text>
            <text x="110" y="110" className="font-mono text-[6px]" fill="currentColor">T1_ANCHOR_CHECK</text>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="process"
      className="relative min-h-screen bg-dark text-light py-24 md:py-36 px-6 md:px-12 border-t border-light/10 overflow-hidden"
    >
      {/* MASSIVE BACKGROUND TEXT: "SERVICES" / "PROCESS" */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-visible opacity-5 text-center mt-[-5%]">
        <span className="font-syne font-extrabold text-[28vw] leading-none tracking-tighter text-stroke">
          SEQUENCE
        </span>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-light/15 pb-8 mb-16 font-mono">
          <div className="text-[10px] tracking-[0.25em] text-[#FF4D00] font-bold">
            [WORK SEQUENCE ENGINE]
          </div>
          <div className="text-light/50 text-[10px] tracking-widest mt-2 md:mt-0">
            03 // CHRONOLOGICAL EXECUTION OF IDEALS
          </div>
        </div>

        {/* Layout split: Left timeline triggers, Right active detail pane with custom blueprint generator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Vertical Segment Trigger list */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className="space-y-4">
              <span className="font-mono text-xs text-light/40 tracking-widest block mb-4">
                CHOOSE CHRONOLOGY LAYER:
              </span>
              
              {services.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-full text-left p-6 border transition-all duration-300 relative group cursor-pointer ${
                      isActive
                        ? "bg-concrete-mid border-brand text-light"
                        : "bg-transparent border-light/10 text-light/45 hover:border-light/30 hover:text-light"
                    }`}
                  >
                    {/* Background active bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProcessIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#FF4D00]"
                      />
                    )}

                    <div className="flex items-center justify-between font-mono">
                      <span className={`text-[10px] tracking-widest ${isActive ? "text-brand" : "text-light/30"}`}>
                        PHASE {item.phase}
                      </span>
                      <span className="text-[10px] tracking-wider text-light/45">
                        {item.duration}
                      </span>
                    </div>

                    <h4 className="font-display font-bold text-sm tracking-wide mt-2">
                      {item.title}
                    </h4>

                    {/* Quick hover graphic info */}
                    <div className="mt-2 flex items-center justify-between text-[9px] tracking-widest text-[#FF4D00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>LOAD DATA MATRIX</span>
                      <Play className="h-2 w-2 fill-current" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Subtle extra architectural footnote */}
            <div className="hidden lg:block font-mono text-[10px] text-light/40 mt-12 bg-concrete-dark border border-light/5 p-4 relative overflow-hidden">
              <div className="absolute -right-8 -bottom-8 h-16 w-16 rounded-full border border-light/10 flex items-center justify-center">
                <Settings className="h-5 w-5 text-light/20 animate-spin" />
              </div>
              <span className="text-[#FF4D00] font-bold block mb-1">COMPLIANCE ADVICE:</span>
              <span>All sequences adhere to strict digital twin integration, allowing client telemetry validation on each phase.</span>
            </div>
          </div>

          {/* Right Column: Visualizer pane */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-concrete-dark border border-light/10 p-6 md:p-10 relative overflow-hidden">
            
            {/* Embedded Grid Marks */}
            <div className="absolute inset-0 p-1 pointer-events-none opacity-5 flex flex-col justify-between font-mono text-[8px]">
              <div className="flex justify-between">
                <span>COORD_NODE: S0_P{activeService.phase}</span>
                <span>SYSTEM ACTIVE</span>
              </div>
              <div className="flex justify-between">
                <span>0.00_DATUM_0</span>
                <span>MONOLITH UNIT V</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10"
              >
                
                {/* Visualizer content left: text facts */}
                <div className="md:col-span-7 flex flex-col justify-between space-y-6">
                  
                  <div>
                    <span className="font-mono text-brand text-[10px] tracking-[0.3em] font-semibold block mb-2">
                      ACTIVE PARAMETERS [PHASE {activeService.phase}]
                    </span>
                    <h3 className="font-display font-extrabold text-2xl tracking-tight text-light leading-none mb-4">
                      {activeService.title}
                    </h3>
                    <p className="text-xs text-light/80 leading-relaxed font-sans tracking-wide">
                      {activeService.description}
                    </p>
                  </div>

                  {/* Bullet Deliverables */}
                  <div>
                    <span className="font-mono text-[9px] text-light/40 tracking-widest block mb-3 uppercase">
                      TACTICAL DELIVERABLES
                    </span>
                    <ul className="space-y-2">
                      {activeService.deliverables.map((d, di) => (
                        <li key={di} className="flex items-center gap-3 font-mono text-[10px] text-light/75">
                          <CircleDot className="h-2 w-2 text-brand flex-shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Detailed Spec block */}
                  <div className="pt-6 border-t border-light/15">
                    <span className="font-mono text-[9px] text-[#FF4D00] tracking-widest block mb-1">
                      TECTONIC COMPRESSION NOTE
                    </span>
                    <span className="font-mono text-[10px] text-light/60 leading-relaxed block">
                      {activeService.technicalDetails}
                    </span>
                  </div>

                </div>

                {/* Visualizer content right: Vector Blueprint display */}
                <div className="md:col-span-5 flex flex-col items-center justify-center p-6 border border-light/5 bg-concrete-mid relative overflow-hidden group min-h-[250px]">
                  
                  {/* Drawing blueprint overlay */}
                  <div className="w-full aspect-square max-w-[200px] relative transition-transform duration-500 group-hover:scale-105">
                    {getStepBlueprint(activeIndex)}
                  </div>

                  {/* Drafting elements specs text */}
                  <div className="absolute bottom-2 left-2 right-2 flex justify-between font-mono text-[8px] text-light/30">
                    <span>CAD M_1:250</span>
                    <span>STRUCTURAL ACCURACY</span>
                  </div>

                  {/* Visual mask cutting through decoration */}
                  <div className="absolute top-2 right-2 flex gap-1 items-center font-mono text-[7px] text-[#FF4D00]">
                    <span className="h-1 w-1 rounded-full bg-brand animate-ping" />
                    <span>CALIBRATING</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>

            {/* Quick interactive phase indicators across the bottom */}
            <div className="mt-12 pt-6 border-t border-light/10 flex justify-between items-center z-10 font-mono text-[10px]">
              <div className="text-light/35">
                EST. ALLOCATION: <span className="text-light font-bold">{activeService.duration}</span>
              </div>
              <div className="flex gap-2">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                      idx === activeIndex ? "bg-brand" : "bg-light/20 hover:bg-light/40"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
