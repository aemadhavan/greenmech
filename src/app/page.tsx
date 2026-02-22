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
  { name: "Automation", desc: "Precision components for automation systems.", img: "/indus-automation.jpeg" },
  { name: "Wind Energy", desc: "High-precision parts for wind turbine applications.", img: "/indus-windenergy.jpeg" },
  { name: "Jigs & Fixtures", desc: "Custom jigs and fixtures for manufacturing processes.", img: "/indus-jigs.jpeg" },
  { name: "Precision Surface Grinding", desc: "Components requiring precise surface grinding.", img: "/indus-precision.jpeg" },
  { name: "Oil & Gas", desc: "Durable components for the oil and gas industry.", img: "/indus-oilgas.jpeg" },
  { name: "Valve Components", desc: "Precision-engineered valve components.", img: "/indus-value.jpeg" },
  { name: "Aerospace", desc: "High-precision parts for aerospace applications.", img: "/indus-aerospace.jpeg" },
  { name: "Automobiles", desc: "Precision components for automobile parts.", img: "/indus-automobiles.jpeg" },
];

const CAPABILITIES = [
  {
    name: "VMC Machining",
    specs: ["800 × 500 × 500 mm", "1100 × 650 × 600 mm", "1600 × 840 × 800 mm"],
    desc: "Vertical Machining Centers for complex multi-axis milling operations with exceptional positional accuracy.",
    img: "/01-cap-VMC%20Machining.png",
  },
  {
    name: "Surface Grinding with HMI",
    specs: ["1500 × 600 × 600 mm", "1200 × 400 × 400 mm", "900 × 300 × 300 mm"],
    desc: "HMI-controlled precision surface grinding delivering superior flatness and surface finish quality.",
    img: "/02-cap-Surface%20Grinding.png",
  },
  {
    name: "CNC Machining",
    specs: ["Dia. 250 × 500 mm Length", "Chuck Bore Dia. 65 mm"],
    desc: "CNC turning for precise cylindrical components, profiles, and complex rotational geometries.",
    img: "/03-cap-CNC%20Machining.png",
  },
  {
    name: "Heavy Rough Milling",
    specs: ["1600 × 400 × 400 mm"],
    desc: "Heavy-duty milling capability for large workpieces requiring significant material removal.",
    img: "/04-cap-Heavy%20Rough%20Milling.png",
  },
  {
    name: "M1TR Machining",
    specs: ["850 × 400 × 300 mm"],
    desc: "DRO-equipped milling machines for versatile, precise machining of complex components.",
    img: "/05-cap-M1TR%20Machining.png",
  },
];

const MACHINERY_CATEGORIES = [
  {
    id: "vmc",
    label: "VMC Machining Centers",
    watermark: "VMC",
    desc: "High-precision vertical machining centers for complex multi-axis milling operations with exceptional positional accuracy.",
    color: "#1B72B8",
    machines: [
      { no: 1, name: "VMC", make: "COSMOS CVM 800",     size: "800 × 500 × 500 mm",  qty: 7 },
      { no: 2, name: "VMC", make: "COSMOS CVM 1160",    size: "1100 × 650 × 600 mm", qty: 4 },
      { no: 3, name: "VMC", make: "BFW MODEL – BMV-70", size: "1600 × 840 × 800 mm", qty: 1 },
      { no: 4, name: "VMC", make: "HURCO VMX-42",       size: "1060 × 610 × 600 mm", qty: 1 },
    ],
  },
  {
    id: "turning-grinding",
    label: "Turning & Surface Grinding",
    watermark: "CNC",
    desc: "Precision CNC turning centers and HMI-controlled surface grinding machines delivering superior flatness and finish quality.",
    color: "#F47920",
    machines: [
      { no: 5, name: "CNC Turning",    make: "LMW LL 20T L5",              size: "Dia. 250 × 500 mm L",  qty: 1 },
      { no: 6, name: "Surface Grinding", make: "LIVNICA KIKINDA – YUGOSLAVIA", size: "1500 × 600 × 500 mm", qty: 1 },
      { no: 7, name: "Surface Grinding", make: "COSMOS",                      size: "1000 × 500 × 400 mm", qty: 1 },
      { no: 8, name: "Surface Grinding", make: "ELB",                         size: "1000 × 350 × 400 mm", qty: 1 },
      { no: 9, name: "Surface Grinding", make: "HITACHI – JAPAN",             size: "1000 × 300 × 300 mm", qty: 1 },
    ],
  },
  {
    id: "milling",
    label: "Milling Machines",
    watermark: "MILL",
    desc: "Versatile DRO-equipped and conventional milling machines for precise and repeatable component manufacture.",
    color: "#10B981",
    machines: [
      { no: 10, name: "M1TR DRO Milling",  make: "ESTEEM – TAIWAN",      size: "850 × 400 × 300 mm",  qty: 4 },
      { no: 11, name: "Vertical Milling",  make: "OKK – Japan",          size: "1000 × 450 × 400 mm", qty: 1 },
      { no: 12, name: "Universal Milling", make: "HMT",                  size: "1000 × 450 × 400 mm", qty: 1 },
      { no: 13, name: "Horizontal Milling",make: "TOYODA – JAPAN",       size: "800 × 400 × 350 mm",  qty: 1 },
      { no: 14, name: "Vertical Milling",  make: "HOWA SANGYO – JAPAN",  size: "700 × 350 × 300 mm",  qty: 1 },
    ],
  },
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
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const HERO_SLIDES = [
    {
      accent: "PRECISION MACHINE",
      title: (
        <>
          Perfection
          <br />
          <span className="text-[#F47920]">in Precision.</span>
        </>
      ),
      desc: "Providing the best range of high-precision components with effective and timely delivery for global industries.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="absolute" style={{ color: "rgba(27,114,184,0.05)" }}>
            <IconGear className="w-64 h-64" />
          </div>
          <div className="flex gap-5 items-end z-10">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-14 rounded-t-xl shadow-xl relative overflow-hidden"
                style={{
                  height: `${80 + i * 36}px`,
                  background: "linear-gradient(to top, rgba(27,114,184,0.55), rgba(27,114,184,0.08))",
                  borderLeft: "1px solid rgba(27,114,184,0.3)",
                  borderRight: "1px solid rgba(27,114,184,0.3)",
                }}
              >
                <div className="w-full h-3 rounded-t-xl" style={{ background: "rgba(244,121,32,0.7)" }} />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      accent: "CNC & VMC",
      title: (
        <>
          Job Works
          <br />
          <span className="text-[#F47920]">Excellence.</span>
        </>
      ),
      desc: "Specialists in CNC Turning, Milling, and VMC Machining services from the heart of Coimbatore's industrial hub.",
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative">
            <div
              className="w-44 h-64 rounded-xl overflow-hidden relative shadow-2xl"
              style={{ background: "#0A1628", border: "1px solid rgba(27,114,184,0.3)" }}
            >
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#1B72B8]/15 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-center gap-2.5 p-6">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="h-1 w-full rounded" style={{ background: "rgba(27,114,184,0.14)" }} />
                ))}
              </div>
              <div className="absolute bottom-5 left-0 right-0 flex justify-center">
                <IconCpu className="w-10 h-10 text-[#1B72B8]/40" />
              </div>
            </div>
            {/* Tool arm */}
            <div className="absolute flex items-center" style={{ left: "-76px", top: "32%" }}>
              <div
                className="w-16 h-7 rounded-md"
                style={{ background: "#071523", border: "1px solid rgba(27,114,184,0.25)" }}
              />
              <div className="w-16 h-0.5" style={{ background: "#F47920", boxShadow: "0 0 12px #F47920" }} />
            </div>
            {/* Right accent lines */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 flex flex-col gap-2.5">
              {[60, 35, 80].map((w, i) => (
                <div key={i} className="h-0.5 rounded" style={{ width: `${w}%`, background: "rgba(27,114,184,0.3)" }} />
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      accent: "9+ YEARS OF",
      title: (
        <>
          Manufacturing
          <br />
          <span className="text-[#F47920]">Trust.</span>
        </>
      ),
      desc: "A decade of engineering excellence as a premier manufacturer and service provider in Tamil Nadu.",
      visual: (
        <div className="relative flex flex-col items-center justify-center w-full h-full gap-6">
          <div
            className="relative flex items-center justify-center rounded-full"
            style={{ width: "220px", height: "220px", background: "rgba(27,114,184,0.08)", border: "1px solid rgba(27,114,184,0.3)" }}
          >
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{ border: "1px dashed rgba(27,114,184,0.25)" }}
            />
            <div
              className="absolute rounded-full"
              style={{ inset: "16px", border: "1px solid rgba(244,121,32,0.15)" }}
            />
            <IconGear className="w-24 h-24 text-[#1B72B8]/60 animate-spin-slow" />
          </div>
          <div className="flex gap-3">
            <div
              className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1B72B8]"
              style={{ background: "rgba(27,114,184,0.1)", border: "1px solid rgba(27,114,184,0.2)" }}
            >
              ISO Certified
            </div>
            <div
              className="px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#F47920]"
              style={{ background: "rgba(244,121,32,0.1)", border: "1px solid rgba(244,121,32,0.2)" }}
            >
              TUV India
            </div>
          </div>
        </div>
      ),
    },
  ];

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
            ? "bg-[#071523]/95 backdrop-blur-md shadow-xl shadow-black/40 border-b border-white/5"
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
              <img src="/greenmach-logo.png" alt="GreenMech logo" className="w-10 h-10 shrink-0 object-contain" />
              <div className="text-left leading-tight">
                <span
                  className="block text-[#1B72B8] font-bold text-base"
                  style={DISPLAY}
                >
                  GreenMech
                </span>
                <span className="block text-[#F47920] text-[11px] font-medium tracking-widest uppercase">
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
                  className="px-3.5 py-2 text-sm text-white/75 hover:text-[#F47920] transition-colors duration-200 font-medium tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="ml-4 px-5 py-2.5 bg-[#F47920] text-[#071523] text-sm font-bold rounded-lg hover:bg-[#D36410] transition-colors duration-200 tracking-wider"
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
          <div className="lg:hidden bg-[#071523]/98 backdrop-blur-md border-t border-white/10 px-5 pb-5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="block w-full text-left py-3.5 text-white/75 hover:text-[#F47920] transition-colors border-b border-white/5 text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-5 w-full py-3.5 bg-[#F47920] text-[#071523] font-bold rounded-lg text-sm tracking-wider"
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
          className="relative min-h-screen flex flex-col bg-[#071523] overflow-hidden"
        >
          {/* Grid pattern */}
          <div className="absolute inset-0 hero-grid opacity-100" />

          {/* Radial gradients for depth */}
          <div className="absolute inset-0 bg-linear-to-br from-[#071523] via-[#071523]/70 to-[#1B72B8]/10" />
          <div
            className="absolute top-0 right-0 w-175 h-175 rounded-full opacity-10 blur-3xl"
            style={{ background: "radial-gradient(circle, #1B72B8 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-20 left-0 w-100 h-100 rounded-full opacity-8 blur-3xl"
            style={{ background: "radial-gradient(circle, #F47920 0%, transparent 70%)" }}
          />

          {/* Carousel content */}
          <div className="relative z-10 flex-1 flex items-center w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8 w-full">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-16">

                {/* Left: Text */}
                <div className="w-full md:w-3/5 lg:w-1/2">
                  <div key={activeSlide}>
                    {/* Accent badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B72B8]/15 border border-[#1B72B8]/35 text-[#F47920] text-xs font-bold tracking-widest uppercase mb-8">
                      <span className="w-2 h-2 bg-[#F47920] rounded-full animate-pulse-dot" />
                      {HERO_SLIDES[activeSlide].accent}
                    </div>

                    {/* Headline */}
                    <h1
                      className="animate-fade-in-up text-white text-5xl sm:text-6xl lg:text-[88px] font-bold leading-[0.95] mb-6"
                      style={{ ...DISPLAY, letterSpacing: "-0.02em" }}
                    >
                      {HERO_SLIDES[activeSlide].title}
                    </h1>

                    {/* Subtext */}
                    <p className="animate-fade-in-up max-w-lg text-lg text-white/55 mb-10 leading-relaxed">
                      {HERO_SLIDES[activeSlide].desc}
                    </p>

                    {/* CTAs */}
                    <div className="animate-fade-in-up flex flex-wrap gap-4">
                      <button
                        onClick={() => scrollTo("contact")}
                        className="px-8 py-4 bg-[#F47920] text-[#071523] font-bold rounded-lg hover:bg-[#D36410] transition-all duration-200 hover:shadow-xl hover:shadow-[#F47920]/20 hover:-translate-y-0.5 text-base tracking-wider"
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

                {/* Right: Visual */}
                <div className="w-full md:w-2/5 lg:w-1/2 h-[260px] md:h-[420px] flex items-center justify-center">
                  <div key={`visual-${activeSlide}`} className="w-full h-full">
                    {HERO_SLIDES[activeSlide].visual}
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Carousel dots */}
          <div className="relative z-20 flex justify-center gap-3 pb-5">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-500 rounded-full border ${
                  activeSlide === idx
                    ? "w-10 bg-[#F47920] border-[#F47920] h-2"
                    : "w-2 bg-transparent border-white/30 h-2 hover:border-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Vertical slide counter */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-2 z-20">
            <span className="text-[10px] font-bold text-[#F47920]" style={DISPLAY}>
              0{activeSlide + 1}
            </span>
            <div className="h-20 w-px bg-white/10 relative">
              <div
                className="absolute top-0 left-0 w-full bg-[#F47920] transition-all duration-700"
                style={{ height: `${((activeSlide + 1) / HERO_SLIDES.length) * 100}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-white/20" style={DISPLAY}>
              0{HERO_SLIDES.length}
            </span>
          </div>

          {/* Stats Strip */}
          <div className="relative z-10 bg-[#1B72B8]/90 backdrop-blur border-t border-[#1B72B8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                {[
                  { value: "13+", label: "Precision Machines" },
                  { value: "8", label: "Industries Served" },
                  { value: "ISO 9001", label: "TUV Certified" },
                  { value: "100%", label: "Quality Assured" },
                ].map((s, i) => (
                  <div key={i} className="text-white py-1">
                    <div className="text-3xl font-bold text-[#F47920]" style={DISPLAY}>
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
                <div className="relative rounded-2xl overflow-hidden bg-[#071523] aspect-4/3 flex items-center justify-center">
                  <div className="absolute inset-0 hero-grid opacity-40" />
                  <div className="absolute inset-0 bg-linear-to-br from-[#071523]/60 to-[#1B72B8]/10" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="text-[#1B72B8]/60">
                      <IconGear className="w-36 h-36 animate-spin-slow" />
                    </div>
                    <span className="text-white/30 text-xs font-bold tracking-[0.25em] uppercase">
                      Precision Engineering
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#F47920] rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#1B72B8] rounded-br-2xl" />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#1B72B8] text-white rounded-xl px-5 py-3.5 shadow-2xl shadow-[#1B72B8]/30">
                  <div className="text-[10px] text-white/60 uppercase tracking-widest mb-0.5">
                    Certified
                  </div>
                  <div
                    className="font-bold text-lg leading-tight"
                    style={DISPLAY}
                  >
                    ISO 9001
                  </div>
                  <div className="text-[11px] text-[#F47920] font-medium">
                    TUV India
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:pl-4">
                <p className="text-[#1B72B8] text-xs font-bold tracking-widest uppercase mb-3">
                  Who We Are
                </p>
                <h2
                  className="text-4xl lg:text-5xl font-bold text-[#0C1826] mb-6 section-title"
                  style={DISPLAY}
                >
                  Premier Precision
                  <br />
                  Machining Solutions
                </h2>
                <p className="text-[#385578] leading-relaxed mb-5 text-lg">
                  GreenMech Automation is a premier provider of precision
                  machining solutions specializing in CNC, VMC, and surface
                  grinding. Our expertise extends across multiple industries,
                  delivering high-precision components with a commitment to
                  quality and efficiency.
                </p>
                <p className="text-[#4A6B8C] leading-relaxed mb-8">
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
                      className="bg-[#EFF7FF] rounded-lg p-3.5 border border-[#C4D9EE]"
                    >
                      <div className="text-[10px] text-[#6888AA] uppercase tracking-widest mb-1">
                        {label}
                      </div>
                      <div className="text-sm font-semibold text-[#1A2C40]">
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0C1826] text-white font-semibold rounded-lg hover:bg-[#1B72B8] transition-colors duration-200 text-sm"
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
        <section id="industries" className="py-24 bg-[#EFF7FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1B72B8] text-xs font-bold tracking-widest uppercase mb-3">
                Our Reach
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0C1826] section-title-center"
                style={DISPLAY}
              >
                Industries We Serve
              </h2>
              <p className="mt-6 text-[#4A6B8C] max-w-xl mx-auto">
                Precision-engineered components for demanding sectors — each
                with unique tolerances and zero room for error.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {INDUSTRIES.map(({ name, desc, img }, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden border border-[#C4D9EE] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-bold text-[#0C1826] mb-1.5 text-base leading-tight"
                      style={DISPLAY}
                    >
                      {name}
                    </h3>
                    <p className="text-[#4A6B8C] text-sm leading-relaxed">{desc}</p>
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
              <p className="text-[#1B72B8] text-xs font-bold tracking-widest uppercase mb-3">
                What We Do
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0C1826] section-title-center"
                style={DISPLAY}
              >
                Our Capabilities
              </h2>
              <p className="mt-6 text-[#4A6B8C] max-w-xl mx-auto">
                State-of-the-art machining capabilities with precise
                specifications to handle any production requirement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((cap, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border border-[#C4D9EE] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group bg-white"
                >
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={cap.img}
                      alt={cap.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Title overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#0C1826]/80 via-transparent to-transparent" />
                    <h3
                      className="absolute bottom-0 left-0 right-0 px-5 py-4 text-white font-bold text-xl leading-tight"
                      style={DISPLAY}
                    >
                      {cap.name}
                    </h3>
                  </div>
                  {/* Body */}
                  <div className="p-6">
                    <p className="text-[#4A6B8C] text-sm mb-5 leading-relaxed">
                      {cap.desc}
                    </p>
                    <div className="space-y-2.5">
                      {cap.specs.map((spec, j) => (
                        <div
                          key={j}
                          className="flex items-center gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F47920] shrink-0" />
                          <span className="font-mono text-xs text-[#2A4262]">{spec}</span>
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
            MACHINERY SHOWROOM
        ══════════════════════════════════════════ */}
        <section id="machinery" className="py-24 bg-[#071523]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="text-[#F47920] text-xs font-bold tracking-widest uppercase mb-3">
                Our Fleet
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-white section-title-center"
                style={DISPLAY}
              >
                Machinery Showroom
              </h2>
              <p className="mt-6 text-white/45 max-w-xl mx-auto">
                A comprehensive fleet of precision machines sourced from
                world-class global manufacturers.
              </p>
              <div className="flex items-center justify-center gap-10 mt-8">
                {[
                  { value: "14", label: "Machine Models" },
                  { value: "26+", label: "Total Units" },
                  { value: "3",  label: "Categories" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-bold text-[#F47920]" style={DISPLAY}>{s.value}</div>
                    <div className="text-[11px] text-white/35 tracking-wider uppercase mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-14">
              {MACHINERY_CATEGORIES.map((cat, ci) => (
                <div key={cat.id}>
                  {/* ── Hero Banner ── */}
                  <div className="relative rounded-2xl overflow-hidden mb-5 h-44 sm:h-52">
                    {/* Base gradient */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #071523 0%, #0C1E32 100%)" }} />
                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                        backgroundSize: "32px 32px",
                      }}
                    />
                    {/* Color glow */}
                    <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: cat.color }} />
                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, ${cat.color} 0%, transparent 60%)` }} />
                    {/* Watermark */}
                    <div
                      className="absolute right-6 top-1/2 -translate-y-1/2 font-black select-none leading-none"
                      style={{ ...DISPLAY, color: "rgba(255,255,255,0.04)", fontSize: "clamp(56px, 9vw, 108px)" }}
                    >
                      {cat.watermark}
                    </div>
                    {/* Content */}
                    <div className="relative z-10 flex items-center h-full px-7 sm:px-10">
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className="inline-flex items-center justify-center w-5 h-5 rounded text-[9px] font-black"
                            style={{ background: cat.color + "30", color: cat.color }}
                          >
                            {String(ci + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ color: cat.color }}>
                            Machine Category
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight" style={DISPLAY}>
                          {cat.label}
                        </h3>
                        <p className="text-white/40 text-sm max-w-md leading-relaxed hidden sm:block">{cat.desc}</p>
                      </div>
                      <div className="hidden sm:flex flex-col gap-4 items-end shrink-0 ml-auto">
                        <div className="text-right">
                          <div className="text-4xl font-black leading-none" style={{ ...DISPLAY, color: cat.color }}>
                            {cat.machines.length}
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-white/35 mt-1">Models</div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold leading-none text-white/20" style={DISPLAY}>
                            {cat.machines.reduce((s, m) => s + m.qty, 0)}
                          </div>
                          <div className="text-[10px] uppercase tracking-widest text-white/35 mt-1">Units</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ── Horizontal Scroll Cards ── */}
                  <div
                    className="flex gap-4 overflow-x-auto pb-2"
                    style={{ scrollbarWidth: "thin", scrollbarColor: `${cat.color}50 transparent` }}
                  >
                    {cat.machines.map((m, mi) => (
                      <div
                        key={mi}
                        className="shrink-0 w-60 rounded-xl overflow-hidden bg-[#0A1628] border border-white/8 hover:border-white/20 hover:shadow-xl transition-all duration-300 group flex flex-col"
                      >
                        <div className="h-1" style={{ background: cat.color }} />
                        <div className="p-5 flex flex-col flex-1">
                          <div className="text-[10px] font-bold tracking-[0.18em] uppercase mb-3" style={{ color: cat.color }}>
                            #{String(m.no).padStart(2, "0")}
                          </div>
                          <h4 className="text-white font-bold text-[15px] leading-snug mb-1" style={DISPLAY}>
                            {m.name}
                          </h4>
                          <p className="text-white/40 text-xs leading-relaxed mb-4">{m.make}</p>
                          <div className="mt-auto pt-4 border-t border-white/8 space-y-2.5">
                            <div className="flex items-start gap-2">
                              <svg className="w-3 h-3 text-white/25 mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" d="M3 9h18M3 15h18M9 3v18M15 3v18" />
                              </svg>
                              <span className="font-mono text-[11px] text-white/50 leading-relaxed">{m.size}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-3 h-3 text-white/25 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
                                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                              </svg>
                              <span className="text-[11px] text-white/50">{m.qty} {m.qty === 1 ? "unit" : "units"}</span>
                              {m.qty > 1 && (
                                <span
                                  className="ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full"
                                  style={{ background: cat.color + "28", color: cat.color }}
                                >
                                  ×{m.qty}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div
                          className="h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                          style={{ background: `linear-gradient(90deg, ${cat.color}, transparent)` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            QUALITY CONTROL
        ══════════════════════════════════════════ */}
        <section id="quality" className="py-24 bg-[#EFF7FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-[#1B72B8] text-xs font-bold tracking-widest uppercase mb-3">
                Quality First
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0C1826] section-title-center"
                style={DISPLAY}
              >
                Inspection &amp; Quality Control
              </h2>
              <p className="mt-6 text-[#4A6B8C] max-w-xl mx-auto">
                Our comprehensive suite of calibrated instruments ensures every
                component meets the highest precision standards before delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {QUALITY_INSTRUMENTS.map((inst, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-7 border border-[#C4D9EE] shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#E4F0FF] flex items-center justify-center mb-5 group-hover:bg-[#1B72B8] transition-colors duration-300">
                    <IconCheckCircle className="w-6 h-6 text-[#1B72B8] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3
                    className="font-bold text-[#0C1826] mb-2.5 text-lg leading-tight"
                    style={DISPLAY}
                  >
                    {inst.name}
                  </h3>
                  <p className="text-[#4A6B8C] text-sm leading-relaxed">
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
              <p className="text-[#1B72B8] text-xs font-bold tracking-widest uppercase mb-3">
                Our Advantage
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0C1826] section-title-center"
                style={DISPLAY}
              >
                Why Choose GreenMech?
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {WHY_CHOOSE.map(({ title, desc, Icon }, i) => (
                <div
                  key={i}
                  className="text-center px-5 py-8 rounded-xl border border-[#C4D9EE] hover:border-[#1B72B8] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#E4F0FF] flex items-center justify-center mx-auto mb-5 text-[#1B72B8] group-hover:bg-[#1B72B8] group-hover:text-white transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3
                    className="font-bold text-[#0C1826] mb-2 text-base leading-tight"
                    style={DISPLAY}
                  >
                    {title}
                  </h3>
                  <p className="text-[#4A6B8C] text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            VALUED CUSTOMERS
        ══════════════════════════════════════════ */}
        <section className="py-20 bg-[#071523] relative overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-30" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at center, #1B72B8 0%, transparent 70%)",
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-[#F47920] text-xs font-bold tracking-widest uppercase mb-3">
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
                  src: "/teal.jpeg",
                  alt: "TEAL – Titan Engineering & Automation Limited",
                  label: "",
                },
                {
                  src: "/indo-mim.jpeg",
                  alt: "INDO-MIM – Complexity Simplified",
                  label: "",
                },
              ].map((c, i) => (
                <div
                  key={i}
                  className="bg-white backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-7 text-center hover:scale-105 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300 min-w-65"
                >
                  <img
                    src={c.src}
                    alt={c.alt}
                    className="h-14 w-auto mx-auto object-contain"
                  />
                  <div className="text-[#4A6B8C] text-xs mt-3 font-medium">{c.label}</div>
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
              <p className="text-[#1B72B8] text-xs font-bold tracking-widest uppercase mb-3">
                Reach Out
              </p>
              <h2
                className="text-4xl lg:text-5xl font-bold text-[#0C1826] section-title-center"
                style={DISPLAY}
              >
                Contact Us
              </h2>
              <p className="mt-6 text-[#4A6B8C] max-w-md mx-auto">
                Ready to discuss your precision machining requirements? We
                respond within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Info Panel */}
              <div className="bg-[#071523] rounded-2xl p-8 lg:p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-10" style={{ background: "radial-gradient(circle, #1B72B8, transparent)" }} />
                <div className="relative z-10">
                  <div className="mb-2">
                    <span
                      className="text-2xl font-bold"
                      style={DISPLAY}
                    >
                      GreenMech Automation
                    </span>
                  </div>
                  <p className="text-[#F47920] text-sm font-medium tracking-wider mb-8">
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
                            <a href="tel:+919566657428" className="block hover:text-[#F47920] transition-colors">+91 95666 57428</a>
                            <a href="tel:+919384947902" className="block hover:text-[#F47920] transition-colors">+91 93849 47902</a>
                          </>
                        ),
                      },
                      {
                        Icon: IconMail,
                        label: "Email",
                        content: (
                          <a
                            href="mailto:greenmechcbe@gmail.com"
                            className="hover:text-[#F47920] transition-colors break-all"
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
                        <div className="w-10 h-10 rounded-lg bg-[#1B72B8]/25 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4.5 h-4.5 text-[#F47920]" />
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
                    <div className="inline-flex items-center gap-2.5 bg-[#1B72B8]/20 rounded-lg px-4 py-2.5 text-sm text-white/60">
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
                    <label className="block text-sm font-semibold text-[#2A4262] mb-1.5">
                      Full Name <span className="text-[#F47920]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-lg border border-[#B4CCDE] text-[#0C1826] placeholder-[#7698B0] focus:outline-none focus:ring-2 focus:ring-[#1B72B8]/50 focus:border-[#1B72B8] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2A4262] mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Your company"
                      className="w-full px-4 py-3 rounded-lg border border-[#B4CCDE] text-[#0C1826] placeholder-[#7698B0] focus:outline-none focus:ring-2 focus:ring-[#1B72B8]/50 focus:border-[#1B72B8] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-[#2A4262] mb-1.5">
                      Email <span className="text-[#F47920]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-[#B4CCDE] text-[#0C1826] placeholder-[#7698B0] focus:outline-none focus:ring-2 focus:ring-[#1B72B8]/50 focus:border-[#1B72B8] text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2A4262] mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 00000 00000"
                      className="w-full px-4 py-3 rounded-lg border border-[#B4CCDE] text-[#0C1826] placeholder-[#7698B0] focus:outline-none focus:ring-2 focus:ring-[#1B72B8]/50 focus:border-[#1B72B8] text-sm transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#2A4262] mb-1.5">
                    Message <span className="text-[#F47920]">*</span>
                  </label>
                  <textarea
                    rows={6}
                    required
                    placeholder="Describe your machining requirements, material, quantity, tolerances..."
                    className="w-full px-4 py-3 rounded-lg border border-[#B4CCDE] text-[#0C1826] placeholder-[#7698B0] focus:outline-none focus:ring-2 focus:ring-[#1B72B8]/50 focus:border-[#1B72B8] text-sm resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#F47920] text-[#071523] font-bold rounded-lg hover:bg-[#D36410] transition-all duration-200 hover:shadow-xl hover:shadow-[#F47920]/20 text-base tracking-wider"
                  style={DISPLAY}
                >
                  SEND MESSAGE
                </button>
                <p className="text-center text-xs text-[#7698B0]">
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
      <footer className="bg-[#050D16] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <img src="/greenmach-logo.jpeg" alt="GreenMech logo" className="w-10 h-10 shrink-0 object-contain" />
                <div>
                  <span
                    className="block text-white font-bold"
                    style={DISPLAY}
                  >
                    GreenMech Automation
                  </span>
                  <span className="block text-[#F47920] text-xs font-medium tracking-wider">
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
                      className="text-white/40 hover:text-[#F47920] text-sm transition-colors duration-200"
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
                    className="hover:text-[#F47920] transition-colors"
                  >
                    +91 95666 57428
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:greenmechcbe@gmail.com"
                    className="hover:text-[#F47920] transition-colors break-all"
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
