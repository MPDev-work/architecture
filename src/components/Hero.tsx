import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Eye, ArrowDown, ChevronRight, Activity } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Scroll mapping for beautiful parallax
  const bgY = useTransform(scrollY, [0, 800], [0, 250]);
  const textY = useTransform(scrollY, [0, 800], [0, -120]);
  const textScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const imageScale = useTransform(scrollY, [0, 800], [1.1, 1.3]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  const scrollToNext = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-dark text-light pt-24 pb-12"
    >
      {/* Structural Brutalist background grid lines */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 opacity-15">
        <div className="grid grid-cols-4 h-full w-full mx-auto max-w-7xl border-x border-light/10">
          <div className="border-r border-light/10 h-full" />
          <div className="border-r border-light/10 h-full" />
          <div className="border-r border-light/10 h-full" />
          <div className="h-full" />
        </div>
      </div>

      {/* Top Metadata */}
      <div className="relative z-15 w-full max-w-7xl mx-auto px-6 md:px-12 pt-6 flex flex-wrap justify-between items-start gap-4 font-mono text-[10px] text-light/45 tracking-widest">
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <Activity className="h-3 w-3 text-brand animate-pulse" />
          <span>CURRENT PROTOCOL : SEISMIC INTEGRATION ACTIVE</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <span>ISSUE NO. 04 // 2026</span>
          <span className="text-brand">MONOLITH / GLOBAL</span>
        </motion.div>
      </div>

      {/* Center Image Integrated into Typography */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center px-4">
        <div className="relative w-full max-w-4xl mx-auto aspect-video md:aspect-[21/9] overflow-hidden group border border-light/10 shadow-2xl">
          {/* Parallax Container */}
          <motion.div style={{ y: bgY, scale: imageScale }} className="absolute -inset-10 z-0">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90"
              alt="Raw brutalist concrete scaffolding detail"
              className="w-full h-full object-cover brightness-[0.4] grayscale contrast-125 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Glowing subtle linear light beam across image */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80" />
          <div className="absolute inset-y-0 left-1/4 w-[1px] bg-gradient-to-b from-transparent via-brand/30 to-transparent" />
          <div className="absolute inset-y-0 left-3/4 w-[1px] bg-gradient-to-b from-transparent via-brand/30 to-transparent" />

          {/* Overlay Tech Grid spec elements on hover */}
          <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 font-mono text-[9px] tracking-widest text-[#FF4D00] z-20 pointer-events-none">
            <div className="flex justify-between">
              <span>FACADE MASS COMPRESSION TEST: 45 N/mm²</span>
              <span>LIGHT EXPOSURE: OPTIMIZED AT 78%</span>
            </div>
            <div className="flex justify-between">
              <span>LATITUDE: 46.3629° - NORTH PIER</span>
              <span>GRID ALIGNED: TRUE</span>
            </div>
          </div>
        </div>

        {/* MASSIVE HEADLINE LAYERED ON THE HERO */}
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center z-10 select-none">
          {/* "ARCHITECTURE" */}
          <motion.h1
            style={{ y: textY, scale: textScale }}
            className="font-syne text-[11vw] lg:text-[10vw] font-extrabold text-center tracking-tighter leading-none text-light uppercase select-none opacity-95 flex flex-col"
          >
            <span className="tracking-[-0.04em]">ARCHITECTURE</span>
          </motion.h1>

          {/* OVERLAY SCRIPT TEXT: "Reimagined" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -5 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="absolute mt-14 sm:mt-24 md:mt-32 lg:mt-40 z-30 font-script text-[10vw] md:text-[7vw] text-brand mix-blend-normal tracking-wide drop-shadow-lg"
          >
            Reimagined
          </motion.div>
        </div>
      </div>

      {/* Hero Footer */}
      <div className="relative z-15 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-8 font-mono">
        {/* Supporting manifest copy blocks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-md text-left"
        >
          <div className="text-brand text-[10px] tracking-[0.3em] font-bold mb-2">RAW STATEMENT 01</div>
          <p className="text-xs text-light/70 leading-relaxed font-sans tracking-wide">
            We operate at the volatile intersection of tectonic honesty and poetic light. 
            Rejecting decorative fluff, we forge monolithic structures that endure, register geographic age, and frame human tranquility.
          </p>
        </motion.div>

        {/* Down Scroll Button */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-4 self-end cursor-pointer"
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-end text-right">
            <span className="text-[10px] tracking-widest text-[#FF4D00]">EXPLORE INDEX</span>
            <span className="text-[9px] tracking-widest text-light/40">PROJECTS [01/04]</span>
          </div>
          <div className="flex items-center justify-center h-10 w-10 rounded-full border border-light/20 text-light bg-concrete-mid hover:bg-brand hover:text-dark hover:border-brand transition-colors duration-300">
            <ArrowDown className="h-4 w-4" />
          </div>
        </motion.div>
      </div>

      {/* Decorative large bottom absolute text */}
      <div className="absolute bottom-0 right-0 pointer-events-none transform translate-y-1/2 opacity-5 whitespace-nowrap overflow-hidden select-none font-sans font-extrabold text-[15vw]">
        MONOLITHICITY
      </div>
    </section>
  );
}
