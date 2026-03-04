"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Gear tooth path generator ───────────────────────────────────────────────
function makeGearPath(
  cx: number, cy: number,
  outerR: number, innerR: number,
  teeth: number
): string {
  const toothWidthFrac = 0.38;
  const totalSegs = teeth * 2;
  const pts: string[] = [];
  for (let i = 0; i < totalSegs; i++) {
    const mid  = (i / totalSegs) * 2 * Math.PI - Math.PI / 2;
    const half = (Math.PI / totalSegs) * toothWidthFrac;
    const r    = i % 2 === 0 ? outerR : innerR;
    pts.push(`${(cx + r * Math.cos(mid - half)).toFixed(2)},${(cy + r * Math.sin(mid - half)).toFixed(2)}`);
    pts.push(`${(cx + r * Math.cos(mid + half)).toFixed(2)},${(cy + r * Math.sin(mid + half)).toFixed(2)}`);
  }
  return `M ${pts[0]} ` + pts.slice(1).map(p => `L ${p}`).join(" ") + " Z";
}

// ─── Spark system ─────────────────────────────────────────────────────────────
interface Spark {
  x: number; y: number;
  vx: number; vy: number;
  gravity: number;
  life: number; decay: number;
  size: number;
  color: string;
  trail: Array<{ x: number; y: number }>;
}
const SPARK_COLORS = ["#FF6B1A", "#FFB347", "#FF8C00"];

function resetSpark(s: Spark, W: number, H: number) {
  s.x       = W * (0.6 + Math.random() * 0.2);
  s.y       = H * (0.35 + Math.random() * 0.35);
  s.vx      = (Math.random() - 0.5) * 5;
  s.vy      = -(0.5 + Math.random() * 4.5);
  s.gravity = 0.09 + Math.random() * 0.06;
  s.life    = 1;
  s.decay   = 0.008 + Math.random() * 0.018;
  s.size    = 0.5 + Math.random() * 2.2;
  s.color   = SPARK_COLORS[Math.floor(Math.random() * 3)];
  s.trail   = [];
}

// ─── Static data ──────────────────────────────────────────────────────────────
const SLIDES = [
  {
    line1: "Perfection",
    line2: "in Precision.",
    sub: "CNC Turning · VMC Machining · Precision Components for global industries.",
  },
  {
    line1: "Job Works",
    line2: "Excellence.",
    sub: "High-precision job works from the heart of Coimbatore's industrial hub.",
  },
  {
    line1: "Manufacturing",
    line2: "Trust.",
    sub: "A decade of engineering excellence. Trusted by leading manufacturers.",
  },
];

const STATS = [
  { label: "COMPONENTS / MO",   target: 500 },
  { label: "PRECISION MACHINES", target: 13  },
  { label: "YEARS EXPERIENCE",   target: 9   },
];

// Gears: all mesh with the central large gear (360,360,R=180)
const GEARS = [
  { cx: 360, cy: 360, outerR: 180, innerR: 130, teeth: 28, cls: "g-large" },
  { cx: 360, cy: 102, outerR: 78,  innerR: 54,  teeth: 16, cls: "g-med1"  },
  { cx: 120, cy: 360, outerR: 60,  innerR: 42,  teeth: 12, cls: "g-med2"  },
  { cx: 590, cy: 360, outerR: 50,  innerR: 34,  teeth: 10, cls: "g-sm1"   },
  { cx: 360, cy: 580, outerR: 40,  innerR: 28,  teeth: 8,  cls: "g-sm2"   },
];

// Precompute static gear paths once at module level
const GEAR_PATHS = GEARS.map(({ cx, cy, outerR, innerR, teeth }) =>
  makeGearPath(cx, cy, outerR, innerR, teeth)
);

// ─── Component ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const onScrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const [activeSlide, setActiveSlide] = useState(0);
  const [counted,     setCounted    ] = useState(false);

  const canvasRef  = useRef<HTMLCanvasElement>(null);
  const timerRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const statsRef   = useRef<HTMLDivElement>(null);
  const countEls   = useRef<(HTMLSpanElement | null)[]>([]);

  // ── Slide auto-advance ──────────────────────────────────────────────────────
  const goSlide = useCallback((i: number) => {
    setActiveSlide(i);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActiveSlide(p => (p + 1) % 3), 5000);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => setActiveSlide(p => (p + 1) % 3), 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // ── Spark canvas ───────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let sparks: Spark[] = [];

    const init = () => {
      canvas.width  = canvas.offsetWidth  || window.innerWidth;
      canvas.height = canvas.offsetHeight || window.innerHeight;
      const sparkCount = canvas.width < 640 ? 30 : 80;
      sparks = Array.from({ length: sparkCount }, () => {
        const s: Spark = { x:0,y:0,vx:0,vy:0,gravity:0.1,life:0,decay:0.02,size:1,color:"#FF6B1A",trail:[] };
        resetSpark(s, canvas.width, canvas.height);
        s.life = Math.random();
        return s;
      });
    };

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      let resets = 2 + Math.floor(Math.random() * 4);

      for (const s of sparks) {
        s.trail.push({ x: s.x, y: s.y });
        if (s.trail.length > 5) s.trail.shift();
        s.vy += s.gravity;
        s.x  += s.vx;
        s.y  += s.vy;
        s.life -= s.decay;

        if (s.life <= 0) {
          if (resets-- > 0) resetSpark(s, W, H);
          continue;
        }

        // Trail
        if (s.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(s.trail[0].x, s.trail[0].y);
          for (let t = 1; t < s.trail.length; t++) ctx.lineTo(s.trail[t].x, s.trail[t].y);
          const alpha = Math.floor(s.life * 60).toString(16).padStart(2, "0");
          ctx.strokeStyle = s.color + alpha;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }

        // Spark dot
        ctx.save();
        ctx.globalAlpha  = s.life;
        ctx.shadowBlur   = 8;
        ctx.shadowColor  = s.color;
        ctx.fillStyle    = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      raf = requestAnimationFrame(draw);
    };

    // Respect prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Defer init one frame so layout is complete
    requestAnimationFrame(() => { init(); draw(); });

    const onResize = () => { cancelAnimationFrame(raf); init(); draw(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  // ── Count-up on scroll-into-view ───────────────────────────────────────────
  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !counted) {
        setCounted(true);
        STATS.forEach(({ target }, i) => {
          const span = countEls.current[i];
          if (!span) return;
          const t0 = performance.now();
          const tick = (now: number) => {
            const p    = Math.min((now - t0) / 1800, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            span.textContent = Math.floor(ease * target) + (p >= 1 ? "+" : "");
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [counted]);

  return (
    <section id="home" className="hero-root">
      {/* CNC crosshair sweeps */}
      <div className="cnc-h" />
      <div className="cnc-v" />

      {/* Spark canvas (z-index 3, above grid, below text) */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Gear SVG assembly (right ~55%, z-index 4) */}
      <div className="hero-gear-wrap">
        <svg viewBox="0 0 720 720" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbit rings */}
          <g className="o-ring1">
            <circle cx="360" cy="360" r="220" fill="none"
              stroke="rgba(255,107,26,0.15)" strokeWidth="1" strokeDasharray="8 6" />
          </g>
          <g className="o-ring2">
            <circle cx="360" cy="360" r="280" fill="none"
              stroke="rgba(255,107,26,0.10)" strokeWidth="1" strokeDasharray="12 8" />
          </g>
          <g className="o-ring3">
            <circle cx="360" cy="360" r="340" fill="none"
              stroke="rgba(255,107,26,0.07)" strokeWidth="1" strokeDasharray="16 10" />
          </g>

          {/* Glowing orbiting dot on the 280-radius ring */}
          <g className="o-dot">
            <circle cx="640" cy="360" r="5" fill="#FF6B1A" filter="url(#glow)" />
          </g>

          {/* Gears */}
          {GEARS.map(({ cx, cy, outerR, innerR, cls }, gi) => (
            <g key={cls} className={cls}>
              <path
                d={GEAR_PATHS[gi]}
                fill="rgba(10,18,30,0.96)"
                stroke="rgba(255,107,26,0.5)"
                strokeWidth="1.5"
              />
              <circle
                cx={cx} cy={cy} r={innerR * 0.72}
                fill="none" stroke="rgba(255,107,26,0.22)" strokeWidth="1"
              />
              <circle
                cx={cx} cy={cy} r={Math.max(3, outerR * 0.035)}
                fill="none" stroke="rgba(255,107,26,0.45)" strokeWidth="1.5"
              />
              <circle
                cx={cx} cy={cy} r={Math.max(2, outerR * 0.018)}
                fill="rgba(255,107,26,0.5)"
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Hero content (z-index 10) */}
      <div className="hero-content-outer">
        <div className="hero-content-inner">
          <div className="hero-text-col">

            {/* Status pill badge */}
            <div className="hero-badge">
              <span className="h-blink hero-badge-dot" />
              <span className="hero-badge-text">PRECISION MACHINE · COIMBATORE</span>
            </div>

            {/* Three text slides */}
            <div className="slides-wrap">
              {SLIDES.map((s, i) => {
                const HeadingTag = i === 0 ? "h1" : "div";
                return (
                  <div key={i} className={`hero-slide${activeSlide === i ? " active" : ""}`} aria-hidden={activeSlide !== i}>
                    <HeadingTag className="hero-heading">
                      {s.line1}<br />
                      <span className="hero-heading-accent">{s.line2}</span>
                    </HeadingTag>
                    <p className="hero-sub">{s.sub}</p>
                  </div>
                );
              })}
            </div>

            {/* Slide dot indicators */}
            <div className="hero-dots">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`hero-dot-btn${activeSlide === i ? " active" : ""}`}
                />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="hero-ctas">
              <a href="#contact" onClick={(e) => { e.preventDefault(); onScrollTo("contact"); }} className="h-btn-primary">
                GET A QUOTE
              </a>
              <a href="#capabilities" onClick={(e) => { e.preventDefault(); onScrollTo("capabilities"); }} className="h-btn-ghost">
                Our Capabilities →
              </a>
            </div>

            {/* Stats row with count-up */}
            <div ref={statsRef} className="hero-stats">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <div className="hero-stat-num">
                    <span ref={el => { countEls.current[i] = el; }}>0</span>
                  </div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Floating certification badges (bottom-right) */}
      <div className="hero-certs">
        {["ISO CERTIFIED", "TÜV INDIA"].map(label => (
          <div key={label} className="hero-cert-badge">
            <span className="hero-cert-text">{label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator (bottom-centre) */}
      <div className="hero-scroll">
        <span className="hero-scroll-text">SCROLL</span>
        <div className="h-scroll-line" />
      </div>
    </section>
  );
}
