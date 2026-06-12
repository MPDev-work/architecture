import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Hammer, Layers, Compass, Mail, Clock, LayoutGrid } from "lucide-react";

interface NavbarProps {
  showGridLines: boolean;
  setShowGridLines: (show: boolean) => void;
}

export default function Navbar({ showGridLines, setShowGridLines }: NavbarProps) {
  const [time, setTime] = useState("");
  const [scrollDir, setScrollDir] = useState<"up" | "down" | "top">("top");

  useEffect(() => {
    // Clock in UTC/Local format representing architectural precision
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(now.toLocaleTimeString("en-US", options));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 50) {
        setScrollDir("top");
      } else if (currentScrollY > lastScrollY) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: scrollDir === "down" ? -100 : 0,
        backgroundColor: scrollDir === "top" ? "rgba(10, 10, 10, 0)" : "rgba(10, 10, 10, 0.9)",
        borderBottom: scrollDir === "top" ? "1px solid rgba(247, 244, 240, 0)" : "1px solid rgba(247, 244, 240, 0.1)",
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 text-light py-4 px-6 md:px-12 backdrop-blur-sm transition-all"
    >
      <div className="mx-auto flex h-14 items-center justify-between font-mono text-xs">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-8">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex flex-col text-left transition-colors hover:text-brand cursor-pointer"
          >
            <span className="font-syne text-lg font-extrabold tracking-wider text-light group-hover:text-brand transition-colors">
              M O N O L I T H
            </span>
            <span className="text-[9px] tracking-[0.25em] text-light/50">
              ARCHITECTURAL STUDIO
            </span>
          </button>

          {/* Location details */}
          <div className="hidden xl:flex flex-col text-[10px] text-light/40 tracking-wider">
            <span>COORD: 46.3629° N, 9.1793° E</span>
            <span>VALS // GENEVA // BERLIN</span>
          </div>
        </div>

        {/* Center: Navigation Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "INDEX", id: "projects" },
            { label: "DISCIPLINE", id: "services" },
            { label: "SEQUENCE", id: "process" },
            { label: "PHILOSOPHY", id: "about" },
            { label: "COMMISSION", id: "contact" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative py-1 text-light/75 transition-colors hover:text-brand cursor-pointer text-[11px] tracking-[0.18em]"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Right: Technical Utilities */}
        <div className="flex items-center gap-6">
          {/* Clock */}
          <div className="hidden sm:flex items-center gap-2 text-light/60 text-[10px] tracking-widest border-r border-light/10 pr-6">
            <Clock className="h-3 w-3 text-brand" />
            <span>UTC {time}</span>
          </div>

          {/* Interactive structural grid toggle */}
          <button
            id="grid-toggle-btn"
            onClick={() => setShowGridLines(!showGridLines)}
            className={`flex items-center gap-2 rounded border px-3 py-1.5 font-mono text-[9px] tracking-widest transition-all cursor-pointer ${
              showGridLines
                ? "bg-brand text-dark border-brand font-bold"
                : "bg-transparent text-light/60 border-light/20 hover:text-light hover:border-light"
            }`}
          >
            <LayoutGrid className="h-3 w-3" />
            <span className="hidden lg:inline">{showGridLines ? "GRID ON" : "GRID OFF"}</span>
          </button>

          {/* Direct CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="relative hidden sm:block overflow-hidden bg-light text-dark px-4 py-2 font-mono text-[10px] font-bold tracking-wider hover:bg-brand hover:text-dark transition-all duration-300 cursor-pointer border border-transparent"
          >
            COMMISSION
          </button>
        </div>
      </div>
    </motion.header>
  );
}
