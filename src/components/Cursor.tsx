import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hideSystemCursor, setHideSystemCursor] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setActive(true);
    };

    const handleMouseLeave = () => {
      setActive(false);
    };

    // Detect clickable elements for hover effects
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("clickable")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Quick helper to see if we're on mobile/tablet (touch device)
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  if (isTouchDevice || !active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-difference"
      style={{
        left: 0,
        top: 0,
      }}
    >
      {/* Horizontal and vertical drafting axis lines (subtle) */}
      <div
        className="absolute h-[1px] w-screen bg-light/10 transition-transform duration-75"
        style={{
          transform: `translateY(${position.y}px)`,
        }}
      />
      <div
        className="absolute w-[1px] h-screen bg-light/10 transition-transform duration-75"
        style={{
          transform: `translateX(${position.x}px)`,
        }}
      />

      {/* Crosshair target */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out"
        style={{
          left: position.x,
          top: position.y,
        }}
      >
        <div
          className={`rounded-full border border-brand bg-transparent transition-all duration-300 ${
            isHovered ? "h-12 w-12 scale-125 bg-brand/10" : "h-5 w-5"
          }`}
        />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />

        {/* Real-time draft plate coordinates */}
        <div className="absolute top-6 left-6 whitespace-nowrap font-mono text-[9px] tracking-widest text-[#FF4D00] opacity-80">
          X: {position.x} Y: {position.y}
        </div>
      </div>
    </div>
  );
}
