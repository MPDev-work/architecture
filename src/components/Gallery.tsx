import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ZoomIn, Eye, Layers, Compass, Clipboard } from "lucide-react";

interface GalleryImage {
  id: string;
  category: string;
  title: string;
  url: string;
  aspectRatio: string;
  colSpan: string;
  location: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "G1",
    category: "CONCRETE MONOLITHS",
    title: "VALS VALLEY VILLA CROP",
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/4]",
    colSpan: "md:col-span-4",
    location: "VALS, CH"
  },
  {
    id: "G2",
    category: "SHADOW CHANNELS",
    title: "COLUMN SHADOW DEVIATION",
    url: "https://images.unsplash.com/photo-1545464619-95929653a94d?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/5]",
    colSpan: "md:col-span-8",
    location: "KYOTO, JP"
  },
  {
    id: "G3",
    category: "GEOMETRIC SCALES",
    title: "RAW BALCONY STRUCT REVERB",
    url: "https://images.unsplash.com/photo-1517089596392-db9a5e2c227e?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[16/9]",
    colSpan: "md:col-span-12",
    location: "LONDON, UK"
  },
  {
    id: "G4",
    category: "CONCRETE MONOLITHS",
    title: "DATUM CORRIDORS V-800",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[4/3]",
    colSpan: "md:col-span-6",
    location: "GENEVA, CH"
  },
  {
    id: "G5",
    category: "SHADOW CHANNELS",
    title: "BRUTALIST CORRUGATED FACADE",
    url: "https://images.unsplash.com/photo-1448697512061-c814cd471b4a?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[1/1]",
    colSpan: "md:col-span-6",
    location: "STUTTGART, DE"
  },
  {
    id: "G6",
    category: "GEOMETRIC SCALES",
    title: "TACTILE ROTUNDA APERTURE",
    url: "https://images.unsplash.com/photo-1528297506728-9533d2ac3fa4?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[3/5]",
    colSpan: "md:col-span-4",
    location: "MILAN, IT"
  },
  {
    id: "G7",
    category: "CONCRETE MONOLITHS",
    title: "GRAVITY MASS REFLECTION",
    url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
    aspectRatio: "aspect-[16/10]",
    colSpan: "md:col-span-8",
    location: "NAOSHIMA, JP"
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("ALL ARCHITECTURE");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryImage | null>(null);

  const filters = [
    "ALL ARCHITECTURE",
    "CONCRETE MONOLITHS",
    "SHADOW CHANNELS",
    "GEOMETRIC SCALES"
  ];

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === "ALL ARCHITECTURE" || img.category === activeFilter
  );

  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-dark text-light py-24 md:py-36 px-6 md:px-12 border-t border-light/10"
    >
      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-light/15 pb-8 mb-16 font-mono">
          <div className="text-[10px] tracking-[0.25em] text-[#FF4D00] font-bold">
            [IRREGULAR GRID SYSTEM]
          </div>
          <div className="text-light/50 text-[10px] tracking-widest mt-2 md:mt-0">
            04 // VISUAL STUDIES IN SOLID MATTER & VACANCY
          </div>
        </div>

        {/* Filter Bar - Brutalist Style */}
        <div className="flex flex-wrap gap-3 mb-16 font-mono text-[10px]">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`py-2 px-4 border transition-all cursor-pointer ${
                  isActive
                    ? "bg-light text-dark border-light font-bold"
                    : "bg-transparent border-light/10 text-light/55 hover:border-light/35 hover:text-light"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Irregular Bento-like Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 skew-y-0">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={img.id}
                className={`${img.colSpan} group cursor-pointer relative overflow-hidden pointer-events-auto border border-light/10`}
                onClick={() => setSelectedPhoto(img)}
              >
                {/* Photo image container with custom aspect ratios */}
                <div className={`relative w-full ${img.aspectRatio} overflow-hidden bg-concrete-mid`}>
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle technical overlays */}
                  <div className="absolute inset-0 bg-dark/20 mix-blend-multiply transition-colors group-hover:bg-transparent" />
                  <div className="absolute top-3 left-3 bg-dark/80 border border-light/10 text-light py-1 px-2 font-mono text-[8px] tracking-widest">
                    ID_{img.id}
                  </div>
                  <div className="absolute top-3 right-3 bg-brand/90 text-dark font-bold py-1 px-2 font-mono text-[8px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    EXPAND FORM
                  </div>

                  {/* Text details in linear layout style */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/95 to-transparent p-4 flex justify-between items-end transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="font-mono text-[9px] text-light">
                      <span className="block font-bold text-[#FF4D00]">{img.title}</span>
                      <span className="text-light/50">{img.location}</span>
                    </div>
                    <div className="h-6 w-6 rounded-full border border-light/30 flex items-center justify-center text-light">
                      <ZoomIn className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* PICTURE LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 bg-dark/98 z-[120] flex flex-col justify-center items-center p-4 md:p-12 cursor-zoom-out"
          >
            <div className="relative w-full max-w-4xl max-h-[80vh] aspect-video md:aspect-[16/10] bg-concrete-dark border border-light/10 overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-w-full max-h-full object-contain grayscale"
                referrerPolicy="no-referrer"
              />
              
              {/* Image Border guidelines */}
              <div className="absolute inset-x-0 h-[1px] bg-[#FF4D00]/15 top-1/2" />
              <div className="absolute inset-y-0 w-[1px] bg-[#FF4D00]/15 left-1/2" />
            </div>

            {/* Lightbox Information Details */}
            <div className="w-full max-w-4xl mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 font-mono text-light">
              <div>
                <span className="text-[10px] text-brand tracking-[0.2em] font-semibold block uppercase">
                  MONOLITH PLATE ID / {selectedPhoto.id}
                </span>
                <h3 className="font-display font-extrabold text-xl tracking-tight text-light">
                  {selectedPhoto.title}
                </h3>
              </div>
              <div className="text-[10px] text-light/55 text-left sm:text-right">
                <span>SURVEY COORDINATES: {selectedPhoto.location}</span>
                <span className="block uppercase text-[9px] text-[#FF4D00]">REDUCTION DEGREE: 100% RAW</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
