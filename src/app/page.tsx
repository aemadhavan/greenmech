"use client";

import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// SVG Icon Components
// ─────────────────────────────────────────────

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
function IconGear({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function IconWind({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M9.59 4.59A2 2 0 1 1 11 8H2M10.59 19.41A2 2 0 1 0 14 16H2M15.73 7.73A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
  );
}
function IconWrench({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}
function IconDisc({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3" />
      <line x1="12" y1="2" x2="12" y2="5" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="22" strokeLinecap="round" />
      <line x1="2" y1="12" x2="5" y2="12" strokeLinecap="round" />
      <line x1="19" y1="12" x2="22" y2="12" strokeLinecap="round" />
    </svg>
  );
}
function IconDroplets({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  );
}
function IconAperture({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
      <line x1="9.69" y1="8" x2="21.17" y2="8" />
      <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
      <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
      <line x1="14.31" y1="16" x2="2.83" y2="16" />
      <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
    </svg>
  );
}
function IconRocket({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function IconCar({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M19 17H5a2 2 0 0 1-2-2V9l3-5h12l3 5v6a2 2 0 0 1-2 2z" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="16.5" cy="17.5" r="2.5" />
    </svg>
  );
}
function IconAward({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}
function IconCpu({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M20 9h3M1 15h3M20 15h3" />
    </svg>
  );
}
function IconShield({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function IconSettings({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function IconClock({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function IconPhone({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IconMail({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function IconMapPin({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function IconFileText({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4M10 9H8M16 13H8M16 17H8" />
    </svg>
  );
}
function IconCheckCircle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" viewBox="0 0 24 24">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </svg>
  );
}

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Industries", href: "industries" },
  { label: "Capabilities", href: "capabilities" },
  { label: "Machinery", href: "machinery" },
  { label: "Quality", href: "quality" },
  { label: "Why Us", href: "why-us" },
  { label: "Contact", href: "contact" },
];

const INDUSTRIES = [
  { name: "Automation", desc: "Precision components for automation systems.", Icon: IconGear },
  { name: "Wind Energy", desc: "High-precision parts for wind turbine applications.", Icon: IconWind },
  { name: "Jigs & Fixtures", desc: "Custom jigs and fixtures for manufacturing processes.", Icon: IconWrench },
  { name: "Precision Surface Grinding", desc: "Components requiring precise surface grinding.", Icon: IconDisc },
  { name: "Oil & Gas", desc: "Durable components for the oil and gas industry.", Icon: IconDroplets },
  { name: "Valve Components", desc: "Precision-engineered valve components.", Icon: IconAperture },
  { name: "Aerospace", desc: "High-precision parts for aerospace applications.", Icon: IconRocket },
  { name: "Automobiles", desc: "Precision components for automobile parts.", Icon: IconCar },
];

const CAPABILITIES = [
  {
    name: "VMC Machining",
    specs: ["800 × 500 × 500 mm", "1100 × 650 × 600 mm", "1600 × 840 × 800 mm"],
    desc: "Vertical Machining Centers for complex multi-axis milling operations with exceptional positional accuracy.",
  },
  {
    name: "Surface Grinding with HMI",
    specs: ["1500 × 600 × 600 mm", "1200 × 400 × 400 mm", "900 × 300 × 300 mm"],
    desc: "HMI-controlled precision surface grinding delivering superior flatness and surface finish quality.",
  },
  {
    name: "CNC Machining",
    specs: ["Dia. 250 × 500 mm Length", "Chuck Bore Dia. 65 mm"],
    desc: "CNC turning for precise cylindrical components, profiles, and complex rotational geometries.",
  },
  {
    name: "Heavy Rough Milling",
    specs: ["1600 × 400 × 400 mm"],
    desc: "Heavy-duty milling capability for large workpieces requiring significant material removal.",
  },
  {
    name: "M1TR Machining",
    specs: ["850 × 400 × 300 mm"],
    desc: "DRO-equipped milling machines for versatile, precise machining of complex components.",
  },
];

const MACHINERY = [
  { no: 1,  name: "VMC",                      make: "COSMOS CVM 800",              size: "800 × 500 × 500",  qty: 7 },
  { no: 2,  name: "VMC",                      make: "COSMOS CVM 1160",             size: "1100 × 650 × 600", qty: 4 },
  { no: 3,  name: "VMC",                      make: "BFW MODEL – BMV-70",          size: "1600 × 840 × 800", qty: 1 },
  { no: 4,  name: "VMC",                      make: "HURCO VMX-42",                size: "1060 × 610 × 600", qty: 1 },
  { no: 5,  name: "CNC Turning",              make: "LMW LL 20T L5",              size: "Dia. 250 × 500L",  qty: 1 },
  { no: 6,  name: "Surface Grinding",         make: "LIVNICA KIKINDA – YUGOSLAVIA",size: "1500 × 600 × 500", qty: 1 },
  { no: 7,  name: "Surface Grinding",         make: "COSMOS",                      size: "1000 × 500 × 400", qty: 1 },
  { no: 8,  name: "Surface Grinding",         make: "ELB",                         size: "1000 × 350 × 400", qty: 1 },
  { no: 9,  name: "Surface Grinding",         make: "HITACHI – JAPAN",             size: "1000 × 300 × 300", qty: 1 },
  { no: 10, name: "M1TR DRO Milling Machine", make: "ESTEEM – TAIWAN",             size: "850 × 400 × 300",  qty: 4 },
  { no: 11, name: "Vertical Milling Machine", make: "OKK Japan",                   size: "1000 × 450 × 400", qty: 1 },
  { no: 12, name: "Universal Milling Machine",make: "HMT",                         size: "1000 × 450 × 400", qty: 1 },
  { no: 13, name: "Horizontal Milling Machine",make:"TOYODA – JAPAN",              size: "800 × 400 × 350",  qty: 1 },
  { no: 14, name: "Vertical Milling Machine", make: "HOWA SANGYO – JAPAN",         size: "700 × 350 × 300",  qty: 1 },
];

const QUALITY_INSTRUMENTS = [
  {
    name: "Plain & Thread Plug Gauges",
    desc: "Used to check the lower size limit of a hole. Precise and reliable accuracy of internal threads — essential for all threaded parts.",
  },
  {
    name: "Micrometers",
    desc: "Standard & Digital options for fine measurements (0–150 mm) with superior repeatability and accuracy.",
  },
  {
    name: "2D Height Master",
    desc: "For calibrating and inspecting vertical measurements. High precision guaranteed across all setups.",
  },
  {
    name: "Surface Table",
    desc: "Provides a flat reference plane for dimensional measurement and inspection of all machined components.",
  },
  {
    name: "Digital Calipers",
    desc: "Versatile tool for measuring internal and external dimensions with instant digital accuracy readout.",
  },
  {
    name: "Bore Dial Gauges",
    desc: "Ensuring internal bore precision across a measurement range of 6–150 mm.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Deep Industry Expertise",
    desc: "Decades of hands-on experience in precision machining across diverse industrial sectors.",
    Icon: IconAward,
  },
  {
    title: "Advanced Technology",
    desc: "Cutting-edge CNC & VMC machines from global manufacturers ensure exceptional accuracy.",
    Icon: IconCpu,
  },
  {
    title: "Uncompromising Quality",
    desc: "Rigorous multi-stage inspections with calibrated instruments guarantee defect-free components.",
    Icon: IconShield,
  },
  {
    title: "Customized Solutions",
    desc: "Tailored machining solutions precisely engineered to meet your unique production requirements.",
    Icon: IconSettings,
  },
  {
    title: "On-Time Delivery",
    desc: "Streamlined production workflow ensures consistent, reliable on-time project completion.",
    Icon: IconClock,
  },
];

// ─────────────────────────────────────────────
// Shared Styles
// ─────────────────────────────────────────────
const DISPLAY = { fontFamily: "var(--font-rajdhani)" } as const;

// ─────────────────────────────────────────────
// Main Page
// ─────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B1120]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <button
              onClick={() => scrollTo("home")}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="w-9 h-9 rounded-lg bg-[#1A5EAB] flex items-center justify-center text-white font-bold text-xl shrink-0"
                style={DISPLAY}
              >
                G
              </div>
              <div className="text-left leading-tight">
                <span
                  className="block text-white font-bold text-base"
                  style={DISPLAY}
                >
                  GreenMech
                </span>
                <span className="block text-[#F5A623] text-[11px] font-medium tracking-widest uppercase">
                  Automation
                </span>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="px-3.5 py-2 text-sm text-white/75 hover:text-[#F5A623] transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 px-5 py-2.5 bg-[#F5A623] text-[#0B1120] text-sm font-bold rounded-lg hover:bg-[#e09510] transition-colors duration-200 tracking-wider"
                style={DISPLAY}
              >
                GET A QUOTE
              </button>
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
          <div className="lg:hidden bg-[#0B1120]/98 backdrop-blur-md border-t border-white/10 px-5 pb-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left py-3.5 text-white/75 hover:text-[#F5A623] transition-colors border-b border-white/5 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-5 w-full py-3.5 bg-[#F5A623] text-[#0B1120] font-bold rounded-lg text-sm tracking-wider"
              style={DISPLAY}
            >
              GET A QUOTE
            </button>
          </div>
        )}
      </nav>

      <main>
        {/* ══════════════════════════════════════════
            HERO
        ══════════════════════════════════════════ */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-center bg-[#0B1120] overflow-hidden"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 hero-grid opacity-100" />

          {/* Radial gradients for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0B1120]/70 to-[#1A5EAB]/10" />
          <div
            className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #1A5EAB 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-20 left-0 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl"
            style={{ background: "radial-gradient(circle, #F5A623 0%, transparent 70%)" }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
            <div className="hero-content">
              {/* ISO badge */}
              <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1A5EAB]/15 border border-[#1A5EAB]/35 text-[#F5A623] text-xs font-bold tracking-widest uppercase mb-8">
                <span className="w-2 h-2 bg-[#F5A623] rounded-full animate-pulse-dot" />
                ISO 9001 Certified &nbsp;·&nbsp; TUV India
              </div>

              {/* Headline */}
              <h1
                className="animate-fade-in-up text-6xl sm:text-7xl lg:text-[96px] font-bold text-white leading-[0.95] mb-6"
                style={{ ...DISPLAY, letterSpacing: "-0.02em" }}
              >
                Perfection
                <br />
                <span
                  className="text-[#F5A623]"
                  style={{ WebkitTextStroke: "0px" }}
                >
                  in Precision.
                </span>
              </h1>

              {/* Subtext */}
              <p className="animate-fade-in-up max-w-lg text-lg text-white/55 mb-10 leading-relaxed">
                Premier CNC, VMC &amp; Surface Grinding machining from
                Coimbatore — delivering high-precision components across 8+
                industries with zero-compromise quality.
              </p>

              {/* CTAs */}
              <div className="animate-fade-in-up flex flex-wrap gap-4 mb-24">
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-4 bg-[#F5A623] text-[#0B1120] font-bold rounded-lg hover:bg-[#e09510] transition-all duration-200 hover:shadow-xl hover:shadow-[#F5A623]/20 hover:-translate-y-0.5 text-base tracking-wider"
                  style={DISPLAY}
                >
                  GET A QUOTE
                </button>
                <button
                  onClick={() => scrollTo("capabilities")}
                  className="px-8 py-4 border border-white/25 text-white font-medium rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-base"
                >
                  Our Capabilities →
                </button>
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="relative z-10 mt-auto bg-[#1A5EAB]/90 backdrop-blur border-t border-[#1A5EAB]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { value: "13+", label: "Precision Machines" },
                  { value: "8", label: "Industries Served" },
                  { value: "ISO 9001", label: "TUV Certified" },
                  { value: "100%", label: "Quality Assured" },
                ].map((s, i) => (
                  <div key={i} className="text-white py-1">
                    <div
                      className="text-3xl font-bold text-[#F5A623]"
                      style={DISPLAY}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm text-white/75 font-medium mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            ABOUT
        ══════════════════════════════════════════ */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Visual */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden bg-[#0B1120] aspect-[4/3] flex items-center justify-center">
                  <div className="absolute inset-0 hero-grid opacity-40" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120]/60 to-[#1A5EAB]/10" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="text-[#1A5EAB]/60">
                      <IconGear className="w-36 h-36 animate-spin-slow" />
                    </div>
                    <span className="text-white/30 text-xs font-bold tracking-[0.25em] uppercase">
                      Precision Engineering
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#F5A623] rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#1A5EAB] rounded-br-2xl" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1A5EAB] text-white rounded-xl px-5 py-3.5 shadow-2xl shadow-[#1A5EAB]/30">
                  <div className="text-[10px] text-white/60 uppercase tracking-widest mb-0.5">
                    Certified
                  </div>
                  <div
                    className="font-bold text-lg leading-tight"
                    style={DISPLAY}
                  >
                    ISO 9001
                  </div>
                  <div className="text-[11px] text-[#F5A623] font-medium">
                    TUV India
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-4">
                <p className="text-[#1A5EAB] text-xs font-bold tracking-widest uppercase mb-3">
                  Who We Are
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-bold text-[#0F172A] mb-6 section-title"
                  style={DISPLAY}
                >
                  Premier Precision
                  <br />
                  Machining Solutions
                </h2>
                <p className="text-[#475569] leading-relaxed mb-5 text-lg">
                  GreenMech Automation is a premier provider of precision
                  machining solutions specializing in CNC, VMC, and surface
                  grinding. Our expertise extends across multiple industries,
                  delivering high-precision components with a commitment to
                  quality and efficiency.
                </p>
                <p className="text-[#64748B] leading-relaxed mb-8">
                  Based in Coimbatore — India&apos;s precision machining hub —
                  we combine decades of hands-on expertise with cutting-edge
                  machinery from world-class manufacturers to serve clients in
                  aerospace, oil &amp; gas, wind energy, automobiles, and more.
                </p>

                {/* Info grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    ["GSTIN", "33AAXFG6115F1ZC"],
                    ["Location", "Coimbatore, Tamil Nadu"],
                    ["Specialization", "CNC · VMC · Grinding"],
                    ["Certification", "ISO 9001 – TUV India"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="bg-[#F8FAFC] rounded-lg p-3.5 border border-[#E2E8F0]"
                    >
                      <div className="text-[10px] text-[#94A3B8] uppercase tracking-widest mb-1">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-[#1E293B]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F172A] text-white font-semibold rounded-lg hover:bg-[#1A5EAB] transition-colors duration-200 text-sm"
                >
                  Get in Touch →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INDUSTRIES
        ══════════════════════════════════════════ */}
        <section id="industries" className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1A5EAB] text-xs font-bold tracking-widest uppercase mb-3">
                Our Reach
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] section-title-center"
                style={DISPLAY}
              >
                Industries We Serve
              </h2>
              <p className="mt-6 text-[#64748B] max-w-xl mx-auto">
                Precision-engineered components for demanding sectors — each
                with unique tolerances and zero room for error.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INDUSTRIES.map(({ name, desc, Icon }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="h-1 bg-[#E2E8F0] group-hover:bg-[#1A5EAB] transition-colors duration-300" />
                  <div className="p-6">
                    <div className="text-[#1A5EAB] mb-4 group-hover:text-[#F5A623] transition-colors duration-300">
                      <Icon className="w-10 h-10" />
                    </div>
                    <h3
                      className="font-bold text-[#0F172A] mb-2 text-lg leading-tight"
                      style={DISPLAY}
                    >
                      {name}
                    </h3>
                    <p className="text-[#64748B] text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CAPABILITIES
        ══════════════════════════════════════════ */}
        <section id="capabilities" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1A5EAB] text-xs font-bold tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] section-title-center"
                style={DISPLAY}
              >
                Our Capabilities
              </h2>
              <p className="mt-6 text-[#64748B] max-w-xl mx-auto">
                State-of-the-art machining capabilities with precise
                specifications to handle any production requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[#E2E8F0] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="bg-[#1A5EAB] px-6 py-5 group-hover:bg-[#0F172A] transition-colors duration-300">
                    <h3
                      className="text-white font-bold text-2xl"
                      style={DISPLAY}
                    >
                      {cap.name}
                    </h3>
                  </div>
                  <div className="bg-white p-6">
                    <p className="text-[#64748B] text-sm mb-5 leading-relaxed">
                      {cap.desc}
                    </p>
                    <div className="space-y-2.5">
                      {cap.specs.map((spec, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2.5 text-sm text-[#1E293B] font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A623] shrink-0" />
                          <span className="font-mono text-xs text-[#374151]">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            MACHINERY TABLE
        ══════════════════════════════════════════ */}
        <section id="machinery" className="py-24 bg-[#0B1120]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#F5A623] text-xs font-bold tracking-widest uppercase mb-3">
                Our Fleet
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white section-title-center"
                style={DISPLAY}
              >
                List of Machineries
              </h2>
              <p className="mt-6 text-white/45 max-w-xl mx-auto">
                A comprehensive fleet of precision machines sourced from
                world-class global manufacturers.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-white/8">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="bg-[#1A5EAB]">
                    {["Sr. No.", "Name of Machine", "Make", "Travel Size (mm)", "Qty"].map(
                      (h) => (
                        <th
                          key={h}
                          className="px-5 py-4 text-left text-sm font-bold text-white tracking-wide"
                          style={DISPLAY}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {MACHINERY.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-white/5 hover:bg-white/5 transition-colors duration-150 ${
                        i % 2 === 0 ? "bg-white/[0.025]" : "bg-transparent"
                      }`}
                    >
                      <td className="px-5 py-4 text-[#F5A623] font-bold text-sm">
                        {row.no}
                      </td>
                      <td className="px-5 py-4 text-white font-medium text-sm">
                        {row.name}
                      </td>
                      <td className="px-5 py-4 text-white/65 text-sm">
                        {row.make}
                      </td>
                      <td className="px-5 py-4 text-white/65 text-sm font-mono">
                        {row.size}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#1A5EAB]/40 text-white font-bold text-sm">
                          {row.qty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            QUALITY CONTROL
        ══════════════════════════════════════════ */}
        <section id="quality" className="py-24 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1A5EAB] text-xs font-bold tracking-widest uppercase mb-3">
                Quality First
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] section-title-center"
                style={DISPLAY}
              >
                Inspection &amp; Quality Control
              </h2>
              <p className="mt-6 text-[#64748B] max-w-xl mx-auto">
                Our comprehensive suite of calibrated instruments ensures every
                component meets the highest precision standards before delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUALITY_INSTRUMENTS.map((inst, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-7 border border-[#E2E8F0] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F0F5FF] flex items-center justify-center mb-5 group-hover:bg-[#1A5EAB] transition-colors duration-300">
                    <IconCheckCircle className="w-6 h-6 text-[#1A5EAB] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="font-bold text-[#0F172A] mb-2.5 text-lg leading-tight"
                    style={DISPLAY}
                  >
                    {inst.name}
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {inst.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY CHOOSE US
        ══════════════════════════════════════════ */}
        <section id="why-us" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1A5EAB] text-xs font-bold tracking-widest uppercase mb-3">
                Our Advantage
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] section-title-center"
                style={DISPLAY}
              >
                Why Choose GreenMech?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {WHY_CHOOSE.map(({ title, desc, Icon }, i) => (
                <div
                  key={i}
                  className="text-center px-5 py-8 rounded-xl border border-[#E2E8F0] hover:border-[#1A5EAB] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F5FF] flex items-center justify-center mx-auto mb-5 text-[#1A5EAB] group-hover:bg-[#1A5EAB] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3
                    className="font-bold text-[#0F172A] mb-2 text-base leading-tight"
                    style={DISPLAY}
                  >
                    {title}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            VALUED CUSTOMERS
        ══════════════════════════════════════════ */}
        <section className="py-20 bg-[#0B1120] relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, #1A5EAB 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#F5A623] text-xs font-bold tracking-widest uppercase mb-3">
              Trusted By
            </p>
            <h2
              className="text-4xl lg:text-5xl font-bold text-white mb-12 section-title-center"
              style={DISPLAY}
            >
              Our Valued Customers
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              {[
                {
                  abbr: "TEAL",
                  full: "Titan Engineering & Automation Limited",
                  color: "text-[#4BC8D4]",
                },
                {
                  abbr: "INDO-MIM",
                  full: "Complexity Simplified",
                  color: "text-[#F5A623]",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white/6 backdrop-blur-sm border border-white/12 rounded-2xl px-12 py-8 text-center hover:bg-white/12 hover:border-white/25 transition-all duration-300 hover:-translate-y-1 min-w-[260px]"
                >
                  <div
                    className={`text-4xl font-black mb-2 ${c.color}`}
                    style={{ ...DISPLAY, letterSpacing: "0.08em" }}
                  >
                    {c.abbr}
                  </div>
                  <div className="text-white/55 text-sm">{c.full}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════ */}
        <section id="contact" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1A5EAB] text-xs font-bold tracking-widest uppercase mb-3">
                Reach Out
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0F172A] section-title-center"
                style={DISPLAY}
              >
                Contact Us
              </h2>
              <p className="mt-6 text-[#64748B] max-w-md mx-auto">
                Ready to discuss your precision machining requirements? We
                respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Info Panel */}
              <div className="bg-[#0B1120] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: "radial-gradient(circle, #1A5EAB, transparent)" }} />
                <div className="relative z-10">
                  <div className="mb-2">
                    <span
                      className="text-2xl font-bold"
                      style={DISPLAY}
                    >
                      GreenMech Automation
                    </span>
                  </div>
                  <p className="text-[#F5A623] text-sm font-medium tracking-wider mb-8">
                    Perfection in Precision
                  </p>

                  <div className="space-y-7">
                    {[
                      {
                        Icon: IconMapPin,
                        label: "Address",
                        content: (
                          <>
                            No: 37, Athipalayam Road,
                            <br />
                            Chinnavedampatti,
                            <br />
                            Coimbatore, Tamil Nadu – 641049
                          </>
                        ),
                      },
                      {
                        Icon: IconPhone,
                        label: "Phone",
                        content: (
                          <>
                            <a href="tel:+919566657428" className="block hover:text-[#F5A623] transition-colors">+91 95666 57428</a>
                            <a href="tel:+919384947902" className="block hover:text-[#F5A623] transition-colors">+91 93849 47902</a>
                          </>
                        ),
                      },
                      {
                        Icon: IconMail,
                        label: "Email",
                        content: (
                          <a
                            href="mailto:greenmechcbe@gmail.com"
                            className="hover:text-[#F5A623] transition-colors break-all"
                          >
                            greenmechcbe@gmail.com
                          </a>
                        ),
                      },
                      {
                        Icon: IconFileText,
                        label: "GSTIN",
                        content: (
                          <span className="font-mono">33AAXFG6115F1ZC</span>
                        ),
                      },
                    ].map(({ Icon, label, content }, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#1A5EAB]/25 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4.5 h-4.5 text-[#F5A623]" />
                        </div>
                        <div>
                          <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1">
                            {label}
                          </div>
                          <div className="text-white/75 text-sm leading-relaxed">
                            {content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/8">
                    <div className="inline-flex items-center gap-2.5 bg-[#1A5EAB]/20 rounded-lg px-4 py-2.5 text-sm text-white/60">
                      <span className="w-2 h-2 bg-green-400 rounded-full" />
                      ISO 9001 Certified · TUV India
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form
                className="space-y-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Full Name <span className="text-[#F5A623]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1A5EAB]/50 focus:border-[#1A5EAB] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1A5EAB]/50 focus:border-[#1A5EAB] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Email <span className="text-[#F5A623]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1A5EAB]/50 focus:border-[#1A5EAB] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1A5EAB]/50 focus:border-[#1A5EAB] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Message <span className="text-[#F5A623]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Describe your machining requirements, material, quantity, tolerances..."
                    className="w-full px-4 py-3 rounded-lg border border-[#D1D5DB] text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#1A5EAB]/50 focus:border-[#1A5EAB] text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F5A623] text-[#0B1120] font-bold rounded-lg hover:bg-[#e09510] transition-all duration-200 hover:shadow-xl hover:shadow-[#F5A623]/20 text-base tracking-wider"
                  style={DISPLAY}
                >
                  SEND MESSAGE
                </button>
                <p className="text-center text-xs text-[#9CA3AF]">
                  We respond within 24 business hours.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════ */}
      <footer className="bg-[#07090F] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-9 h-9 rounded-lg bg-[#1A5EAB] flex items-center justify-center text-white font-bold text-xl shrink-0"
                  style={DISPLAY}
                >
                  G
                </div>
                <div>
                  <span
                    className="block text-white font-bold"
                    style={DISPLAY}
                  >
                    GreenMech Automation
                  </span>
                  <span className="block text-[#F5A623] text-xs font-medium tracking-wider">
                    Perfection in Precision
                  </span>
                </div>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-5">
                Premier provider of CNC, VMC &amp; surface grinding precision
                machining from Coimbatore, Tamil Nadu, India.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/30">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                ISO 9001 Certified &nbsp;·&nbsp; GSTIN: 33AAXFG6115F1ZC
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white font-bold mb-5 text-sm tracking-widest uppercase"
                style={DISPLAY}
              >
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-white/40 hover:text-[#F5A623] text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                className="text-white font-bold mb-5 text-sm tracking-widest uppercase"
                style={DISPLAY}
              >
                Contact
              </h4>
              <div className="space-y-3 text-sm text-white/40">
                <p>
                  No: 37, Athipalayam Road,
                  <br />
                  Chinnavedampatti,
                  <br />
                  Coimbatore – 641049
                </p>
                <p>
                  <a
                    href="tel:+919566657428"
                    className="hover:text-[#F5A623] transition-colors"
                  >
                    +91 95666 57428
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:greenmechcbe@gmail.com"
                    className="hover:text-[#F5A623] transition-colors break-all"
                  >
                    greenmechcbe@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
            <span>
              © {new Date().getFullYear()} GreenMech Automation. All rights reserved.
            </span>
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>
        </div>
      </footer>
    </>
  );
}
