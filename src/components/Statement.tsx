import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Animate text layers in opposite directions for visual rhythm
  const xLeft = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const xRight = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#FF4D00] text-dark py-32 md:py-48 overflow-hidden z-20 flex flex-col justify-center"
    >
      {/* Structural Drafting Crosshairs decorative on orange background */}
      <div className="absolute inset-x-0 h-[1px] bg-dark/10 top-1/4" />
      <div className="absolute inset-x-0 h-[1px] bg-dark/10 top-3/4" />
      <div className="absolute inset-y-0 w-[1px] bg-dark/10 left-1/4" />
      <div className="absolute inset-y-0 w-[1px] bg-dark/10 left-3/4" />

      {/* Decorative tiny tech tags */}
      <div className="absolute top-4 left-6 md:left-12 font-mono text-[9px] text-dark/60 tracking-widest uppercase">
        TECTONIC INTENSITY ASSESSMENT: HIGH ACCENT AREA
      </div>
      <div className="absolute bottom-4 right-6 md:right-12 font-mono text-[9px] text-dark/60 tracking-widest uppercase">
        [PRODUCED UNDER MONOLITH DISCIPLINE CODE #FF4D00]
      </div>

      <div className="w-full flex flex-col items-center justify-center space-y-4 select-none">
        
        {/* Row 1: BUILDING */}
        <motion.div
          style={{ x: xLeft }}
          className="whitespace-nowrap font-syne font-black text-[12vw] sm:text-[14vw] md:text-[15vw] leading-none tracking-tighter uppercase text-dark flex items-center"
        >
          <span>BUILDING</span>
          <span className="inline-block mx-4 h-6 w-32 bg-dark rounded-full" />
          <span className="font-light italic text-stroke-brand">BUILDING</span>
        </motion.div>

        {/* Row 2: THE FUTURE */}
        <motion.div
          style={{ x: xRight }}
          className="whitespace-nowrap font-syne font-black text-[12vw] sm:text-[14vw] md:text-[15vw] leading-none tracking-tighter uppercase text-dark flex items-center"
        >
          <span className="font-light italic text-stroke-brand">THE</span>
          <span className="inline-block mx-4 h-1 md:h-2 w-48 bg-dark" />
          <span>FUTURE</span>
        </motion.div>

        {/* Row 3: OF SPACES */}
        <motion.div
          style={{ x: xLeft }}
          className="whitespace-nowrap font-syne font-black text-[12vw] sm:text-[14vw] md:text-[15vw] leading-none tracking-tighter uppercase text-dark flex items-center"
        >
          <span>OF SPACES</span>
          <span className="inline-block mx-4 h-8 w-8 rounded-full border-4 border-dark animate-spin-slow" />
          <span className="font-light italic text-stroke-brand">OF SPACES</span>
        </motion.div>

      </div>
    </section>
  );
}
