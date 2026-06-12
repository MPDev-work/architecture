import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Scale, Landmark, ShieldCheck } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen bg-dark text-light py-24 md:py-36 px-6 md:px-12 border-t border-light/10 overflow-hidden"
    >
      {/* Structural grid behind */}
      <div className="absolute inset-y-0 inset-x-0 pointer-events-none opacity-5">
        <div className="grid grid-cols-6 h-full max-w-7xl mx-auto border-x border-light/40">
          <div className="border-r border-light/40" />
          <div className="border-r border-light/40" />
          <div className="border-r border-light/40" />
          <div className="border-r border-light/40" />
          <div className="border-r border-light/40" />
          <div className="h-full" />
        </div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Editorial header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-light/15 pb-8 mb-16 font-mono">
          <div className="text-[10px] tracking-[0.25em] text-[#FF4D00] font-bold">
            [DISCIPLINE SYSTEM] // MONOLITH STUDIO
          </div>
          <div className="text-light/50 text-[10px] tracking-widest mt-2 md:mt-0">
            02 // RAW REDUCTIONISM AS AN OPERATIONAL PARADIGM
          </div>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Massive Vertical Letters */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-2 border-r border-light/10 pr-0 lg:pr-12">
            
            {/* Column 1: DESIGN */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono tracking-widest text-[#FF4D00] mb-4 rotate-180 [writing-mode:vertical-lr]">PROXEMICS</span>
              <div className="flex flex-col font-syne font-extrabold text-[7vw] lg:text-[4.5vw] xl:text-[5vw] leading-none text-light tracking-tighter text-center">
                {"DESIGN".split("").map((letter, i) => (
                  <motion.span
                    whileHover={{ scale: 1.15, color: "#FF4D00" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    key={i}
                    className="cursor-pointer select-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Column 2: BUILD */}
            <div className="flex flex-col items-center border-x border-light/10">
              <span className="text-[11px] font-mono tracking-widest text-light/30 mb-4 rotate-180 [writing-mode:vertical-lr]">TECTONICS</span>
              <div className="flex flex-col font-syne font-extrabold text-[7vw] lg:text-[4.5vw] xl:text-[5vw] leading-none text-light tracking-tighter text-center">
                {"BUILD".split("").map((letter, i) => (
                  <motion.span
                    whileHover={{ scale: 1.15, color: "#FF4D00" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    key={i}
                    className="cursor-pointer select-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Column 3: CREATE */}
            <div className="flex flex-col items-center">
              <span className="text-[11px] font-mono tracking-widest text-light/30 mb-4 rotate-180 [writing-mode:vertical-lr]">MATERIALITY</span>
              <div className="flex flex-col font-syne font-extrabold text-[7vw] lg:text-[4.5vw] xl:text-[5vw] leading-none text-light tracking-tighter text-center">
                {"CREATE".split("").map((letter, i) => (
                  <motion.span
                    whileHover={{ scale: 1.15, color: "#FF4D00" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    key={i}
                    className="cursor-pointer select-none"
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Magazine Collage & Supporting Copy */}
          <div className="lg:col-span-7 space-y-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Image 1: High Contrast Concrete Intersection */}
              <div className="space-y-4">
                <div className="relative aspect-[4/5] bg-concrete-mid overflow-hidden border border-light/10">
                  <img
                    src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80"
                    alt="Artistic architectural concrete fold"
                    className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 hover:contrast-110 transition-all duration-700 pointer-events-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-dark/80 px-2 py-0.5 text-[8px] font-mono tracking-widest text-light/75">
                    PLATE RE-248
                  </div>
                </div>
                <div className="font-mono text-[10px] text-light/50 flex justify-between">
                  <span>01 // VOLUMETRIC FORMATION</span>
                  <span>SWISS SHADOWMAPS</span>
                </div>
              </div>

              {/* Text Blocks */}
              <div className="space-y-8 pt-4 md:pt-16">
                <div>
                  <h3 className="font-display text-lg font-bold tracking-tight mb-3 text-light">
                    TECTONIC MASS & PURE FORM
                  </h3>
                  <p className="text-xs text-light/70 font-sans leading-relaxed tracking-wide">
                    We abandon ornamental excess. Our design discipline starts with bulk matter: 
                    custom self-healing concrete mixes, raw alpine slate, and cold carbon-steel. We design volumes 
                    that breathe and change as low-incidence sunlight sketches seasonal routes upon them.
                  </p>
                </div>

                <div className="border-t border-light/10 pt-6 space-y-4 font-mono text-[10px] text-light/65">
                  <div className="flex gap-3">
                    <Scale className="h-4 w-4 text-[#FF4D00] flex-shrink-0" />
                    <span>Exacting tolerance controls under 0.5mm on structural board formwork castings.</span>
                  </div>
                  <div className="flex gap-3">
                    <Landmark className="h-4 w-4 text-light/40 flex-shrink-0" />
                    <span>Passive geothermal envelope design achieving complete thermal neutrality without active AC noise.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Alternating Second Grid Pair */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
              
              {/* Supporting details block */}
              <div className="order-2 md:order-1 space-y-6">
                <div className="border-l-2 border-[#FF4D00] pl-4 py-1">
                  <span className="font-mono text-[#FF4D00] text-[9px] block tracking-widest mb-1">CRAFT INTEGRATION</span>
                  <p className="text-xs text-light/70 font-sans leading-relaxed tracking-wide">
                    By partnering directly with mountain quarries and experimental glass foundries, 
                    we integrate artisanal trade loops seamlessly into our conceptual development, bypassing anonymous industrial supply chains.
                  </p>
                </div>
                
                <div className="font-mono text-[10px] bg-concrete-dark border border-light/5 p-4 rounded space-y-2">
                  <span className="text-[#FF4D00] font-bold block">TECHNICAL COMPLIANCE</span>
                  <div className="grid grid-cols-2 gap-2 text-[9px] text-light/50">
                    <div>• SEISMIC STRUCT ISO</div>
                    <div>• PASSIVE HOUSE GER</div>
                    <div>• DIN EN 1992 EURO</div>
                    <div>• ZERO-EMISSION CLT</div>
                  </div>
                </div>
              </div>

              {/* Image 2: Architectural crop */}
              <div className="order-1 md:order-2 space-y-4">
                <div className="relative aspect-[5/4] bg-concrete-mid overflow-hidden border border-light/10">
                  <img
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=700&q=80"
                    alt="Concrete building abstract texture"
                    className="w-full h-full object-cover grayscale contrast-125 hover:scale-105 hover:contrast-150 transition-all duration-700 pointer-events-auto"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-dark/80 px-2 py-0.5 text-[8px] font-mono tracking-widest text-[#FF4D00]">
                    SPEC SHEET #31
                  </div>
                </div>
                <div className="font-mono text-[10px] text-light/50 flex justify-between">
                  <span>02 // SPECTRAL CHANNELS</span>
                  <span>NAOSHIMA REVERB</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
