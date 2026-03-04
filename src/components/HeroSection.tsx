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
// center distance = outerR_large + outerR_satellite
const GEARS = [
  { cx: 360, cy: 360, outerR: 180, innerR: 130, teeth: 28, cls: "g-large", origin: "360px 360px", anim: "gSpinCW  20s" },
  { cx: 360, cy: 102, outerR: 78,  innerR: 54,  teeth: 16, cls: "g-med1",  origin: "360px 102px", anim: "gSpinCCW 11s" },
  { cx: 120, cy: 360, outerR: 60,  innerR: 42,  teeth: 12, cls: "g-med2",  origin: "120px 360px", anim: "gSpinCCW 9s"  },
  { cx: 590, cy: 360, outerR: 50,  innerR: 34,  teeth: 10, cls: "g-sm1",   origin: "590px 360px", anim: "gSpinCCW 7s"  },
  { cx: 360, cy: 580, outerR: 40,  innerR: 28,  teeth: 8,  cls: "g-sm2",   origin: "360px 580px", anim: "gSpinCCW 6s"  },
];

// Precompute static gear paths once at module level (avoid recalculating on every render)
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
      sparks = Array.from({ length: 80 }, () => {
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
    <>
      {/* ── Scoped styles ──────────────────────────────────────────────────── */}
      <style>{`
        .hero-root {
          position: relative;
          min-height: 100vh;
          background: #05080D;
          background: radial-gradient(ellipse 90% 110% at 88% 50%, #0C1B2E 0%, #05080D 58%);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Moving engineering grid */
        .hero-root::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,107,26,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,26,0.05) 1px, transparent 1px);
          background-size: 64px 64px;
          animation: gridMove 18s linear infinite;
          z-index: 0;
          pointer-events: none;
        }

        /* CNC scanner sweep */
        .hero-root::after {
          content: "";
          position: absolute;
          left: 0; right: 0;
          height: 160px;
          background: linear-gradient(to bottom,
            transparent 0%,
            rgba(255,107,26,0.04) 30%,
            rgba(255,107,26,0.09) 50%,
            rgba(255,107,26,0.04) 70%,
            transparent 100%);
          animation: scanLine 5s linear infinite;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes gridMove {
          from { background-position: 0 0; }
          to   { background-position: 64px 64px; }
        }
        @keyframes scanLine {
          from { top: -160px; }
          to   { top: 100%; }
        }

        /* CNC crosshair sweeps */
        .cnc-h {
          position: absolute; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg,
            transparent,
            rgba(255,107,26,0.45) 25%,
            rgba(255,107,26,0.7) 50%,
            rgba(255,107,26,0.45) 75%,
            transparent);
          animation: sweepH 7s ease-in-out infinite;
          z-index: 2; pointer-events: none;
        }
        .cnc-v {
          position: absolute; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(180deg,
            transparent,
            rgba(255,107,26,0.45) 25%,
            rgba(255,107,26,0.7) 50%,
            rgba(255,107,26,0.45) 75%,
            transparent);
          animation: sweepV 9s ease-in-out infinite;
          z-index: 2; pointer-events: none;
        }
        @keyframes sweepH {
          0%,100% { top: 20%; opacity: 0; }
          5%,95%  { opacity: 1; }
          50%     { top: 78%; }
        }
        @keyframes sweepV {
          0%,100% { left: 5%;  opacity: 0; }
          5%,95%  { opacity: 1; }
          50%     { left: 92%; }
        }

        /* Gear spin keyframes */
        @keyframes gSpinCW  { to { transform: rotate( 360deg); } }
        @keyframes gSpinCCW { to { transform: rotate(-360deg); } }

        /* Gear animation classes */
        .g-large { transform-box: fill-box; transform-origin: center; animation: gSpinCW  20s linear infinite; }
        .g-med1  { transform-box: fill-box; transform-origin: center; animation: gSpinCCW 11s linear infinite; }
        .g-med2  { transform-box: fill-box; transform-origin: center; animation: gSpinCCW  9s linear infinite; }
        .g-sm1   { transform-box: fill-box; transform-origin: center; animation: gSpinCCW  7s linear infinite; }
        .g-sm2   { transform-box: fill-box; transform-origin: center; animation: gSpinCCW  6s linear infinite; }

        /* Orbit ring animations */
        @keyframes orb1 { to { transform: rotate( 360deg); } }
        @keyframes orb2 { to { transform: rotate(-360deg); } }
        @keyframes orb3 { to { transform: rotate( 360deg); } }
        @keyframes orb4 { to { transform: rotate( 360deg); } }
        .o-ring1 { transform-box: fill-box; transform-origin: center; animation: orb1 30s linear infinite; }
        .o-ring2 { transform-box: fill-box; transform-origin: center; animation: orb2 45s linear infinite; }
        .o-ring3 { transform-box: fill-box; transform-origin: center; animation: orb3 60s linear infinite; }
        .o-dot   { transform-origin: 360px 360px; animation: orb4 12s linear infinite; }

        /* Slide fade-up */
        .hero-slide        { display: none; animation: slideIn 0.55s ease-out both; }
        .hero-slide.active { display: block; }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Primary angled CTA */
        .h-btn-primary {
          clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
          background: #FF6B1A;
          color: #05080D;
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1rem;
          letter-spacing: 0.13em;
          padding: 14px 38px;
          border: none;
          cursor: pointer;
          font-weight: 700;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .h-btn-primary:hover {
          background: #e55912;
          box-shadow: 0 0 28px rgba(255,107,26,0.45);
        }

        /* Ghost CTA */
        .h-btn-ghost {
          background: transparent;
          border: 1px solid rgba(255,107,26,0.35);
          color: #EEF2F5;
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.92rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          padding: 13px 28px;
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .h-btn-ghost:hover {
          border-color: #FF6B1A;
          color: #FF6B1A;
          background: rgba(255,107,26,0.07);
        }

        /* Blinking status dot */
        @keyframes blinkDot { 0%,100%{opacity:1} 50%{opacity:0.15} }
        .h-blink { animation: blinkDot 1.2s ease-in-out infinite; }

        /* Scroll indicator */
        @keyframes scrollPulse {
          0%,100% { opacity: 0.25; transform: scaleY(0.85); }
          50%     { opacity: 1;    transform: scaleY(1);    }
        }
        .h-scroll-line {
          transform-origin: top center;
          animation: scrollPulse 2s ease-in-out infinite;
        }

        /* Respect reduced-motion preference */
        @media (prefers-reduced-motion: reduce) {
          .hero-root::before,
          .hero-root::after { animation: none; }
          .cnc-h, .cnc-v { display: none; }
          .g-large, .g-med1, .g-med2, .g-sm1, .g-sm2 { animation: none; }
          .o-ring1, .o-ring2, .o-ring3, .o-dot { animation: none; }
          .hero-slide.active { animation: none; opacity: 1; transform: none; }
          .h-blink { animation: none; opacity: 1; }
          .h-scroll-line { animation: none; opacity: 0.5; }
        }
      `}</style>

      <section id="home" className="hero-root">
        {/* CNC crosshair sweeps */}
        <div className="cnc-h" />
        <div className="cnc-v" />

        {/* ── Spark canvas (z-index 3, above grid, below text) ───────────── */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            zIndex: 3, pointerEvents: "none",
          }}
        />

        {/* ── Gear SVG assembly (right ~55%, z-index 4) ──────────────────── */}
        <div style={{
          position: "absolute", right: 0, top: 0,
          width: "55%", height: "100%",
          zIndex: 4, pointerEvents: "none",
        }}>
          <svg
            viewBox="0 0 720 720"
            style={{ width: "100%", height: "100%" }}
            preserveAspectRatio="xMidYMid meet"
          >
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

            {/* ── Gears ── */}
            {GEARS.map(({ cx, cy, outerR, innerR, cls }, gi) => (
              <g key={cls} className={cls}>
                <path
                  d={GEAR_PATHS[gi]}
                  fill="rgba(10,18,30,0.96)"
                  stroke="rgba(255,107,26,0.5)"
                  strokeWidth="1.5"
                />
                {/* Decorative inner ring at 72% of innerR */}
                <circle
                  cx={cx} cy={cy} r={innerR * 0.72}
                  fill="none" stroke="rgba(255,107,26,0.22)" strokeWidth="1"
                />
                {/* Hub dot */}
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

        {/* ── Hero content (z-index 10) ───────────────────────────────────── */}
        <div style={{
          position: "relative", zIndex: 10,
          flex: 1, display: "flex", alignItems: "center",
        }}>
          <div style={{
            maxWidth: "1280px", margin: "0 auto",
            padding: "96px 2rem 2rem", width: "100%",
          }}>
            <div style={{ maxWidth: "560px" }}>

              {/* Status pill badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "6px 16px", borderRadius: "999px",
                background: "rgba(255,107,26,0.08)",
                border: "1px solid rgba(255,107,26,0.28)",
                marginBottom: "28px",
              }}>
                <span className="h-blink" style={{
                  width: "8px", height: "8px",
                  borderRadius: "50%", background: "#FF6B1A", display: "block",
                }} />
                <span style={{
                  fontFamily: "'Share Tech Mono', monospace",
                  color: "#FF6B1A", fontSize: "0.68rem", letterSpacing: "0.16em",
                }}>
                  PRECISION MACHINE · COIMBATORE
                </span>
              </div>

              {/* Three text slides */}
              {SLIDES.map((s, i) => (
                <div key={i} className={`hero-slide${activeSlide === i ? " active" : ""}`} aria-hidden={activeSlide !== i}>
                  <h1 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    color: "#EEF2F5",
                    fontSize: "clamp(72px, 9.5vw, 128px)",
                    lineHeight: 0.88,
                    margin: "0 0 20px",
                    letterSpacing: "0.01em",
                  }}>
                    {s.line1}<br />
                    <span style={{
                      color: "#FF6B1A",
                      textShadow: "0 0 40px rgba(255,107,26,0.55), 0 0 80px rgba(255,107,26,0.2)",
                    }}>
                      {s.line2}
                    </span>
                  </h1>
                  <p style={{
                    fontFamily: "'Rajdhani', sans-serif",
                    color: "#8FA3B3", fontSize: "1.05rem", lineHeight: 1.65,
                    marginBottom: "28px", maxWidth: "420px",
                  }}>
                    {s.sub}
                  </p>
                </div>
              ))}

              {/* Slide dot indicators */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "32px", alignItems: "center" }}>
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    style={{
                      width: activeSlide === i ? "28px" : "8px",
                      height: "8px", borderRadius: "4px",
                      background: activeSlide === i ? "#FF6B1A" : "rgba(255,255,255,0.18)",
                      border: "none", cursor: "pointer", padding: 0,
                      transition: "width 0.35s ease, background 0.35s ease",
                    }}
                  />
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", marginBottom: "56px" }}>
                <a href="#contact" onClick={(e) => { e.preventDefault(); onScrollTo("contact"); }} className="h-btn-primary">
                  GET A QUOTE
                </a>
                <a href="#capabilities" onClick={(e) => { e.preventDefault(); onScrollTo("capabilities"); }} className="h-btn-ghost">
                  Our Capabilities →
                </a>
              </div>

              {/* Stats row with count-up */}
              <div
                ref={statsRef}
                style={{
                  display: "flex", gap: "40px", flexWrap: "wrap",
                  borderTop: "1px solid rgba(255,107,26,0.18)",
                  paddingTop: "28px",
                }}
              >
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <div style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      color: "#EEF2F5", fontSize: "2.6rem", lineHeight: 1,
                    }}>
                      <span ref={el => { countEls.current[i] = el; }} style={{ fontVariantNumeric: "tabular-nums" }}>0</span>
                    </div>
                    <div style={{
                      fontFamily: "'Share Tech Mono', monospace",
                      color: "#8FA3B3", fontSize: "0.6rem",
                      letterSpacing: "0.14em", marginTop: "3px", textTransform: "uppercase",
                    }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* ── Floating certification badges (bottom-right) ────────────────── */}
        <div style={{
          position: "absolute", bottom: "28px", right: "28px",
          display: "flex", gap: "8px", zIndex: 10,
        }}>
          {["ISO CERTIFIED", "TÜV INDIA"].map(label => (
            <div key={label} style={{
              padding: "5px 14px", borderRadius: "999px",
              background: "rgba(5,8,13,0.78)",
              border: "1px solid rgba(255,107,26,0.28)",
              backdropFilter: "blur(10px)",
            }}>
              <span style={{
                fontFamily: "'Share Tech Mono', monospace",
                color: "#FFB347", fontSize: "0.6rem", letterSpacing: "0.16em",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* ── Scroll indicator (bottom-centre) ───────────────────────────── */}
        <div style={{
          position: "absolute", bottom: "36px", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column",
          alignItems: "center", gap: "6px", zIndex: 10,
        }}>
          <span style={{
            fontFamily: "'Share Tech Mono', monospace",
            color: "rgba(143,163,179,0.4)", fontSize: "0.58rem", letterSpacing: "0.22em",
          }}>
            SCROLL
          </span>
          <div
            className="h-scroll-line"
            style={{
              width: "1px", height: "44px",
              background: "linear-gradient(to bottom, #FF6B1A, transparent)",
            }}
          />
        </div>
      </section>
    </>
  );
}
