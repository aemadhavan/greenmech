"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home",         href: "home"         },
  { label: "About",        href: "about"        },
  { label: "Industries",   href: "industries"   },
  { label: "Capabilities", href: "capabilities" },
  { label: "Machinery",    href: "machinery"    },
  { label: "Quality",      href: "quality"      },
  { label: "Why Us",       href: "why-us"       },
  { label: "Portfolio",    href: "portfolio"    },
  { label: "Contact",      href: "contact"      },
];

const DISPLAY = { fontFamily: "var(--font-rajdhani)", textWrap: "balance" as const } as const;

function IconMenu({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}
function IconClose({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export default function NavbarClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#071523]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("home"); }}
            aria-label="GreenMech Automation – home"
            className="flex items-center gap-2.5 group"
          >
            <Image
              src="/greenmach-logo.png"
              alt="GreenMech Automation logo"
              width={40}
              height={40}
              priority
              className="w-10 h-10 shrink-0 object-contain"
            />
            <div className="text-left leading-tight">
              <span className="block text-[#1B72B8] font-bold text-base" style={DISPLAY}>GreenMech</span>
              <span className="block text-[#F47920] text-[11px] font-medium tracking-widest uppercase">Automation</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className="px-3.5 py-2 text-sm text-white/75 hover:text-[#F47920] transition-colors duration-200 font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
              className="ml-4 px-5 py-2.5 bg-[#F47920] text-[#071523] text-sm font-bold rounded-lg hover:bg-[#D36410] transition-colors duration-200 tracking-wider"
              style={DISPLAY}
            >
              GET A QUOTE
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#071523]/98 backdrop-blur-md border-t border-white/10 px-5 pb-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
              className="block w-full text-left py-3.5 text-white/75 hover:text-[#F47920] transition-colors border-b border-white/5 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}
            className="mt-5 block w-full text-center py-3.5 bg-[#F47920] text-[#071523] font-bold rounded-lg text-sm tracking-wider"
            style={DISPLAY}
          >
            GET A QUOTE
          </a>
        </div>
      )}
    </nav>
  );
}
