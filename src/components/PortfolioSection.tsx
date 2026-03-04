"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const DISPLAY = { fontFamily: "var(--font-rajdhani)", textWrap: "balance" as const } as const;

interface PortfolioSectionProps {
  images: string[];
}

export default function PortfolioSection({ images }: PortfolioSectionProps) {
  const [portfolioOpen, setPortfolioOpen] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const isLightboxOpen = portfolioOpen !== null;
  useEffect(() => {
    if (!isLightboxOpen) return;
    const len = images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")      setPortfolioOpen(null);
      if (e.key === "ArrowRight")  setPortfolioOpen((i) => i !== null ? (i + 1) % len : null);
      if (e.key === "ArrowLeft")   setPortfolioOpen((i) => i !== null ? (i - 1 + len) % len : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isLightboxOpen, images.length]);

  const visible = showAll ? images : images.slice(0, 12);

  return (
    <section id="portfolio" className="py-24 bg-[#050D16]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[#F47920] text-xs font-bold tracking-widest uppercase mb-3">Our Work</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white section-title-center" style={DISPLAY}>
            Design Portfolio
          </h2>
          <p className="mt-6 text-white/40 max-w-xl mx-auto">
            A showcase of precision-machined components crafted to exacting tolerances — quality you can see.
          </p>
        </div>

        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {visible.map((src, i) => (
            <button
              key={i}
              type="button"
              aria-label={`View portfolio image ${i + 1}`}
              className="block w-full break-inside-avoid relative group cursor-pointer overflow-hidden rounded-xl bg-[#0A1628]"
              onClick={() => setPortfolioOpen(i)}
            >
              <Image
                src={src}
                alt=""
                width={400}
                height={300}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ height: "auto" }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-[background-color] duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                  <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" d="M15 3h6m0 0v6m0-6L10 14M9 3H3v18h18v-6" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {!showAll && images.length > 12 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/50 transition-[color,border-color] duration-300 text-sm font-medium tracking-wider"
            >
              View All {images.length} Photos
              <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {portfolioOpen !== null && (
        <div
          className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setPortfolioOpen(null)}
        >
          <button
            aria-label="Close lightbox"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setPortfolioOpen(null)}
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs tracking-widest font-mono">
            {portfolioOpen + 1} / {images.length}
          </div>

          <button
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setPortfolioOpen((i) => i !== null ? (i - 1 + images.length) % images.length : null); }}
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <Image
            src={images[portfolioOpen]}
            alt={`Portfolio image ${portfolioOpen + 1}`}
            width={1200}
            height={900}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            style={{ width: "auto", height: "auto" }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); setPortfolioOpen((i) => i !== null ? (i + 1) % images.length : null); }}
          >
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5 overflow-x-auto max-w-[90vw] px-2 pb-1">
            {images.map((src, i) => (
              <button
                key={i}
                aria-label={`Go to image ${i + 1}`}
                onClick={(e) => { e.stopPropagation(); setPortfolioOpen(i); }}
                className={`shrink-0 w-12 h-9 rounded overflow-hidden transition-opacity duration-200 ${i === portfolioOpen ? "ring-2 ring-[#F47920] opacity-100" : "opacity-40 hover:opacity-70"}`}
              >
                <Image src={src} alt="" width={48} height={36} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
