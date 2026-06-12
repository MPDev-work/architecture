import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Compass, Sparkles, Paintbrush, Hammer, Trash2, Sliders, PlayCircle } from "lucide-react";

interface StampedModule {
  id: string;
  name: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: string;
}

export default function About() {
  // Slate Module Sketchpad States
  const [modules, setModules] = useState<StampedModule[]>([
    { id: "1", name: "CONCRETE CORE", x: 60, y: 50, w: 90, h: 100, color: "#FF4D00" },
    { id: "2", name: "LIGHT VOID", x: 180, y: 70, w: 100, h: 80, color: "#F7F4F0" },
    { id: "3", name: "STAIRWELL V", x: 100, y: 170, w: 50, h: 60, color: "#FF4D00" }
  ]);
  const [selectedModuleType, setSelectedModuleType] = useState<"CONCRETE CORE" | "LIGHT VOID" | "STAIRWELL" | "THERMAL PIER">("CONCRETE CORE");
  const [customWidth, setCustomWidth] = useState(80);
  const [customHeight, setCustomHeight] = useState(80);

  const sketchpadRef = useRef<HTMLDivElement>(null);

  // Auto-calculated blueprint analytics
  const totalArea = modules.reduce((acc, m) => acc + (m.w * m.h) / 20, 0); // simulated sqm
  const totalComplexity = Math.max(15, Math.min(99, modules.length * 15 + Math.floor(totalArea / 10)));
  const seismicRating = Math.max(4.0, Math.min(9.9, 9.9 - (modules.length * 0.1) + (totalArea > 80 ? 0.3 : 0))).toFixed(1);

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sketchpadRef.current) return;
    const rect = sketchpadRef.current.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left - customWidth / 2) / 10) * 10; // snap to 10px grid
    const y = Math.round((e.clientY - rect.top - customHeight / 2) / 10) * 10; // snap to 10px grid

    // Bound checks
    const boundedX = Math.max(0, Math.min(rect.width - customWidth, x));
    const boundedY = Math.max(0, Math.min(rect.height - customHeight, y));

    const colors = {
      "CONCRETE CORE": "#FF4D00",
      "LIGHT VOID": "#F7F4F0",
      "STAIRWELL": "#3A3A3A",
      "THERMAL PIER": "#5A5A5A"
    };

    const newModule: StampedModule = {
      id: Date.now().toString(),
      name: selectedModuleType,
      x: boundedX,
      y: boundedY,
      w: customWidth,
      h: customHeight,
      color: colors[selectedModuleType] || "#FF4D00"
    };

    setModules([...modules, newModule]);
  };

  const clearCanvas = () => {
    setModules([]);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen bg-dark text-light py-24 md:py-36 px-6 md:px-12 border-t border-light/10 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <svg className="w-full h-full text-light" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="draftGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#draftGrid)" />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-light/15 pb-8 mb-16 font-mono">
          <div className="text-[10px] tracking-[0.25em] text-[#FF4D00] font-bold">
            [TACTICAL IDENTITY FRAME]
          </div>
          <div className="text-light/50 text-[10px] tracking-widest mt-2 md:mt-0">
            05 // PHYSICAL STATEMENT BY ARCHITECT FOUNDERS
          </div>
        </div>

        {/* Column split: Left founder philosophy, Right Interactive Drawing Blueprint tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Founder Philosophy & Text */}
          <div className="lg:col-span-5 space-y-10">
            
            <div className="space-y-4">
              <span className="font-mono text-[9px] text-[#FF4D00] tracking-[0.3em] font-bold block">
                FOUNDER'S SPECTRUM
              </span>
              <h2 className="font-syne font-extrabold text-4xl lg:text-5xl leading-none tracking-tighter uppercase text-light">
                TECTONIC <br />
                REDUCTIONISM
              </h2>
            </div>

            {/* Inset B&W graphic representation styled like Swiss magazine */}
            <div className="grid grid-cols-3 gap-4 border border-light/10 p-5 bg-concrete-dark rounded relative">
              <div className="col-span-1 aspect-[3/4] overflow-hidden bg-concrete-mid border border-light/5">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
                  alt="Architect Founder Portrait"
                  className="w-full h-full object-cover grayscale brightness-90 contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="col-span-2 flex flex-col justify-between p-1">
                <div>
                  <span className="font-mono text-xs font-bold text-light block">HELIOS VANE</span>
                  <span className="font-mono text-[9px] text-light/40 block mb-3">PRINCIPAL TECTONIC LEAD</span>
                  <p className="text-[11px] text-light/75 font-sans leading-relaxed">
                    "We do not design buildings to occupy catalogues. Every concrete mass is a spatial test 
                    of shadow behavior, thermal storage, and geological permanence."
                  </p>
                </div>
                <span className="font-mono text-[8px] text-brand self-end">MONOLITH.2026</span>
              </div>
            </div>

            {/* Core Philosophy Paragraphs */}
            <div className="space-y-6 font-sans text-xs text-light/75 leading-relaxed tracking-wide">
              <p>
                Founded in Geneva, MONOLITH operates as a boutique creative think tank. We refuse multi-project 
                standardization. Under our covenant, our lead architects witness and guide the casting, pouring, and 
                alignment of every facade on-site personally.
              </p>
              <p>
                Our aesthetic stems from Swiss monumentalism, Japanese clean light manipulation, and raw brutalist materiality. 
                We believe total spatial honesty breeds modern luxury.
              </p>
            </div>

            {/* Highlighted Stat rows */}
            <div className="grid grid-cols-2 gap-4 border-t border-light/10 pt-8 font-mono text-[10px]">
              <div>
                <span className="text-light/35 block mb-1">GLOBAL MONOLITHS</span>
                <span className="text-xl font-bold tracking-tight text-[#FF4D00]">12 UNITS COMPLETE</span>
              </div>
              <div>
                <span className="text-light/35 block mb-1">COMMUNITY RECOGNITION</span>
                <span className="text-xl font-bold tracking-tight text-light">3 AWWWARDS WINS</span>
              </div>
            </div>

          </div>

          {/* Right: Interactive Architectural Blueprint sandbox tool */}
          <div className="lg:col-span-7 bg-concrete-dark border border-[#FF4D00]/20 p-6 md:p-8 relative">
            
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-light/10 pb-4 mb-6">
              <div>
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-brand animate-spin-slow" />
                  <span className="font-mono text-xs font-bold text-light tracking-wider">BLUEPRINT LABORATORY</span>
                </div>
                <span className="font-mono text-[9px] text-light/40 block mt-1">PROXEMICS COMPOSITION SIMULATOR</span>
              </div>
              <button
                onClick={clearCanvas}
                className="font-mono text-[9px] text-light/50 border border-light/15 hover:border-brand hover:text-brand px-3 py-1 bg-transparent cursor-pointer flex items-center gap-1"
                title="Flush current configuration draft"
              >
                <Trash2 className="h-3 w-3" />
                <span>FLUSH ENGINE</span>
              </button>
            </div>

            {/* Control Panel: Parameters */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6 font-mono text-[10px]">
              
              {/* Box Type */}
              <div className="md:col-span-4 space-y-2">
                <span className="text-light/55 block text-[9px] tracking-wider uppercase">STRUCTURAL DOCK:</span>
                <div className="grid grid-cols-1 gap-1">
                  {(["CONCRETE CORE", "LIGHT VOID", "STAIRWELL", "THERMAL PIER"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedModuleType(type)}
                      className={`text-left px-3 py-1.5 border transition-all cursor-pointer truncate ${
                        selectedModuleType === type
                          ? "bg-brand text-dark border-brand font-bold"
                          : "bg-transparent border-light/10 text-light/65 hover:border-light/25"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Box Dimensions */}
              <div className="md:col-span-4 space-y-4">
                <span className="text-light/55 block text-[9px] tracking-wider uppercase">DIMENSIONS [M]:</span>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-[9px] text-light/45 mb-1">
                      <span>WIDTH:</span>
                      <span className="text-brand font-bold">{customWidth / 10} M</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="140"
                      step="10"
                      value={customWidth}
                      onChange={(e) => setCustomWidth(Number(e.target.value))}
                      className="w-full accent-brand bg-concrete-mid cursor-ew-resize h-1"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-[9px] text-light/45 mb-1">
                      <span>HEIGHT:</span>
                      <span className="text-brand font-bold">{customHeight / 10} M</span>
                    </div>
                    <input
                      type="range"
                      min="40"
                      max="140"
                      step="10"
                      value={customHeight}
                      onChange={(e) => setCustomHeight(Number(e.target.value))}
                      className="w-full accent-brand bg-concrete-mid cursor-ew-resize h-1"
                    />
                  </div>
                </div>
              </div>

              {/* Simulated Analytics summary readouts */}
              <div className="md:col-span-4 space-y-2 bg-concrete-mid p-3 border border-light/5 font-mono text-[9px]">
                <span className="text-brand font-bold block pb-1 border-b border-light/5 mb-1">ANALYTICAL TELEMETRY</span>
                <div className="flex justify-between">
                  <span>EST. TOTAL MASS:</span>
                  <span className="text-light font-bold">{(totalArea * 2.4).toFixed(1)} TONS</span>
                </div>
                <div className="flex justify-between">
                  <span>SECTOR COMPL:</span>
                  <span className="text-light font-bold">{totalComplexity}%</span>
                </div>
                <div className="flex justify-between">
                  <span>SEISMIC TOLER:</span>
                  <span className="text-[#FF4D00] font-bold">{seismicRating} MAX</span>
                </div>
                <div className="flex justify-between text-[8px] text-light/40 mt-1">
                  <span>MAPPED UNITS:</span>
                  <span>{modules.length} BLOCKS</span>
                </div>
              </div>

            </div>

            {/* Clickable Sketchpad Grid Container */}
            <div className="relative">
              <div
                ref={sketchpadRef}
                onClick={handleCanvasClick}
                className="w-full h-[280px] bg-concrete-mid border border-light/10 relative overflow-hidden cursor-crosshair group flex items-center justify-center"
              >
                {/* Visual grid lines inside canvas */}
                <div className="absolute inset-0 pointer-events-none opacity-5">
                  <svg className="w-full h-full text-light" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="sandboxGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#sandboxGrid)" />
                  </svg>
                </div>

                {/* Drawn Modules */}
                {modules.map((m) => (
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    key={m.id}
                    className="absolute border flex items-center justify-center font-mono text-[8px] overflow-hidden shadow-lg select-none group/item"
                    style={{
                      left: m.x,
                      top: m.y,
                      width: m.w,
                      height: m.h,
                      borderColor: m.color,
                      backgroundColor: m.name === "LIGHT VOID" ? "rgba(247, 244, 240, 0.05)" : "rgba(255, 77, 0, 0.08)"
                    }}
                  >
                    {/* Corner Drafting ticks */}
                    <div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l" style={{ borderColor: m.color }} />
                    <div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r" style={{ borderColor: m.color }} />
                    <div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l" style={{ borderColor: m.color }} />
                    <div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r" style={{ borderColor: m.color }} />

                    {/* Content text */}
                    <div className="text-center px-1 font-mono">
                      <span className="block font-bold text-light/90 truncate">{m.name}</span>
                      <span className="text-[7px]" style={{ color: m.color }}>
                        {m.w / 10}x{m.h / 10} M
                      </span>
                    </div>

                    {/* Delete button option */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setModules(modules.filter((mod) => mod.id !== m.id));
                      }}
                      className="absolute top-1 right-1 h-3.5 w-3.5 bg-dark border border-light/20 items-center justify-center rounded-full text-light/50 hover:text-brand hover:border-brand flex md:hidden group-hover/item:flex cursor-pointer transition-colors"
                      title="Erase"
                    >
                      ×
                    </button>
                  </motion.div>
                ))}

                {/* Empty State Banner helper */}
                {modules.length === 0 && (
                  <div className="text-center space-y-2 pointer-events-none select-none z-10 px-4">
                    <span className="font-mono text-[#FF4D00] text-[9px] tracking-[0.25em] block uppercase">
                      PLATE IS EMPTY
                    </span>
                    <p className="font-mono text-[10px] text-light/40 uppercase">
                      Click anywhere inside this viewport grid to stamp a <br />
                      <span className="text-light">{selectedModuleType}</span> ({customWidth / 10} x {customHeight / 10} M)
                    </p>
                  </div>
                )}
              </div>

              {/* Blueprint coordinates indicator footer */}
              <div className="flex justify-between font-mono text-[8px] text-light/30 mt-2">
                <span>COORD DATUM_Z SNAP: 10PX</span>
                <span>TAP GRID TO PLOT FORM MAS_S</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
