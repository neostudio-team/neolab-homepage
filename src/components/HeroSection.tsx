"use client";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  dict: {
    title: string;
    subtitle: string;
    visionLabel: string;
    visionTitle: string;
    visionDesc: string;
  };
}

// Full slogan, split into characters
const SLOGAN = "Write the Future, Connect the World.";

export default function HeroSection({ dict }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isClient, setIsClient] = useState(false);
  // How many characters of the slogan are revealed (0 = none, SLOGAN.length = all)
  const [visibleChars, setVisibleChars] = useState(0);
  const scrollProgressRef = useRef(0); // 0→1 over section scroll

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ── Scroll → character reveal ──────────────────────────────────────────────
  useEffect(() => {
    if (!isClient) return;

    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      // Section height is 300svh, sticky panel shows while 0→300vh of scroll
      const sectionH = section.offsetHeight - vh; // scrollable part
      const raw = Math.min(1, Math.max(0, scrollY / sectionH));
      scrollProgressRef.current = raw;

      // Text reveal: starts at 5% scroll, finishes at 60% scroll
      const textStart = 0.05;
      const textEnd = 0.60;
      const textProg = Math.max(0, Math.min(1, (raw - textStart) / (textEnd - textStart)));
      const chars = Math.floor(textProg * SLOGAN.length);
      setVisibleChars(chars);
    };

    // Show first char after a small delay so the hero doesn't feel empty
    const initTimer = setTimeout(() => {
      setVisibleChars(1);
    }, 900);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(initTimer);
    };
  }, [isClient]);

  // ── Canvas: seamless ring-based field → exploding particles ───────────────
  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let W = 0, H = 0;
    let animId: number;

    // Per-ring scatter data, built once (recreated on resize)
    // We need stable random values per dot even though numDots changes on resize.
    // Solution: store scatter seed per (ring, slot) lazily; use a prng per dot index.
    const scatterCache = new Map<string, { angle: number; speed: number; sizeM: number }>();
    function getScatter(r: number, i: number) {
      const key = `${r}_${i}`;
      if (!scatterCache.has(key)) {
        // LCG prng seeded by r & i for determinism
        let s = ((r * 1973 + i * 9301 + 49297) % 233280) / 233280;
        const angle = s * Math.PI * 2;
        s = ((r * 3511 + i * 6271 + 7919) % 233280) / 233280;
        const speed = 0.5 + s * 1.5;
        s = ((r * 7187 + i * 2311 + 3491) % 233280) / 233280;
        const sizeM = 0.6 + s * 3.4;
        scatterCache.set(key, { angle, speed, sizeM });
      }
      return scatterCache.get(key)!;
    }

    // Extra scatter-only stars (for the very scattered look in ref image)
    interface Star { x: number; y: number; size: number; alpha: number; dx: number; dy: number; }
    const stars: Star[] = [];
    for (let i = 0; i < 220; i++) {
      stars.push({
        x: Math.random(), y: Math.random(),
        size: 1 + Math.random() * 4,
        alpha: 0.2 + Math.random() * 0.8,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
      });
    }

    function resize() {
      if (!canvas) return;
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function loop(ts: number) {
      if (!ctx) return;
      const time = ts * 0.0008;
      const prog = scrollProgressRef.current; // 0→1

      // Scatter progress ramps from 15%→80% of total scroll
      const scatterProg = Math.max(0, Math.min(1, (prog - 0.15) / 0.65));
      const zoomProg = scatterProg;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, W, H);

      // ── Fan geometry ─────────────────────────────────────────────────────
      // Origin sits just below the viewport bottom, centred horizontally.
      const originX = W / 2;
      // Origin 25% below viewport bottom — deep enough to hide tight inner rings,
      // close enough to maintain clear perspective fan gradient.
      const originY = H + H * 0.25;

      // Fan sweeps 152° centred straight up.
      const fanCenter = -Math.PI / 2;
      const fanHalf   = Math.PI * 0.422; // ±76°
      const angMin  = fanCenter - fanHalf;
      const angSpan = fanHalf * 2;

      // ── Cartesian grid → polar mapping ──────────────────────────────────
      // COLS × ROWS grid mapped to (angle, radius) inside the fan.
      const COLS     = 82;
      const ROWS     = 60;
      const minDist  = H * 0.28;   // inner edge (clips near bottom of screen)
      const maxDist  = H * 1.45;
      const rowSpacing = (maxDist - minDist) / ROWS;
      const colSpacing = angSpan / COLS;

      for (let row = 0; row < ROWS; row++) {
        const rT   = row / (ROWS - 1);            // 0 = inner, 1 = outer
        const dist = minDist + rT * (maxDist - minDist);

        for (let col = 0; col < COLS; col++) {
          // 4-level stagger → honeycomb, prevents column alignment
          const staggers = [0, 0.5, 0.25, 0.75];
          const stagger = staggers[row % 4] / COLS;
          const cT = (col / (COLS - 1)) + stagger;
          if (cT > 1 || cT < 0) continue;

          const baseAngle = angMin + cT * angSpan;

          // ── Per-dot deterministic hash values ───────────────────────
          const h1 = Math.sin(row * 127.1 + col * 311.7) * 43758.5453;
          const h2 = Math.sin(row * 269.5 + col * 183.3) * 43758.5453;
          const h3 = Math.sin(row *  74.3 + col * 421.9) * 43758.5453;
          const Jr = (h1 - Math.floor(h1));   // 0..1, radial
          const Ja = (h2 - Math.floor(h2));   // 0..1, angular
          const Jt = (h3 - Math.floor(h3));   // 0..1, timing offset

          // Small structural jitter (stable per dot, breaks grid monotony)
          const jitterRad = (Jr - 0.5) * rowSpacing * 0.65;
          const jitterAng = (Ja - 0.5) * colSpacing * 0.65;
          const effDist  = dist + jitterRad;
          const effAngle = baseAngle + jitterAng;
          const cosE = Math.cos(effAngle);
          const sinE = Math.sin(effAngle);

          // ── Surface wave animation ───────────────────────────────────
          // Perpendicular-to-radius (tangential) direction
          const perpX = -sinE;
          const perpY =  cosE;

          // Main wave: 2-3 crests crossing the fan slowly left-to-right
          // NO per-dot Jt offset → adjacent dots move coherently → visible wave surface
          const w1 = Math.sin(cT * Math.PI * 3.6 - time * 1.0) * rT * 68;
          const w2 = Math.sin(cT * Math.PI * 1.9 + rT * Math.PI * 1.5 - time * 0.55) * rT * 38;
          const waveOff = w1 + w2;   // tangential displacement (px)

          // Small radial breath: whole surface inhales/exhales slightly
          const breathe = Math.sin(cT * Math.PI * 1.8 - time * 0.7 + rT * 0.9) * rT * 18;

          // Grid resting position (wave applied)
          const gx = originX + cosE * (effDist + breathe) + perpX * waveOff;
          const gy = originY + sinE * (effDist + breathe) + perpY * waveOff;

          // ── Scatter on scroll ────────────────────────────────────────
          const sc = getScatter(row, col);
          let x = gx, y = gy;

          if (scatterProg > 0) {
            // Scatter target: each dot fans out from centre
            const approachScale = 1 + zoomProg * sc.speed * 3.2;
            const baseSx = W / 2 + Math.cos(sc.angle) * W * 0.52 * approachScale;
            const baseSy = H / 2 + Math.sin(sc.angle) * H * 0.52 * approachScale;

            // Continuous drift around scatter position (keeps animation alive)
            const driftAmp   = 14 + sc.sizeM * 18;
            const driftSpeed = 0.5 + sc.speed * 0.7;
            const driftPh    = time * driftSpeed + Jt * Math.PI * 2;
            const sx = baseSx + Math.cos(driftPh)       * driftAmp;
            const sy = baseSy + Math.sin(driftPh * 1.3) * driftAmp;

            x = gx + (sx - gx) * scatterProg;
            y = gy + (sy - gy) * scatterProg;
          }

          if (x < -100 || x > W + 100 || y < -100 || y > H + 100) continue;

          // ── Brightness & size ────────────────────────────────────────
          const proximity = 1 - rT;   // inner rows = brighter (depth illusion)
          // Also modulate brightness with the wave to create light-crest effect
          // waveLum matches w1 so brightness peaks at wave crests → visible light-crest
          const waveLum  = (Math.sin(cT * Math.PI * 3.6 - time * 1.0) + 1) * 0.5;
          const baseAlpha = Math.max(0.04, (0.08 + proximity * 0.72) * (0.15 + Jr * 0.45 + waveLum * 0.4));
          const gridSize  = Math.max(0.4,  0.5 + proximity * 3.0 + Jr * 0.8);
          const scSize    = gridSize * (1 + sc.sizeM * zoomProg * 1.8);
          const size      = gridSize + (scSize - gridSize) * scatterProg;
          const finalAlpha = Math.min(0.95, baseAlpha + scatterProg * sc.sizeM * 0.3);

          // Accent glow on wave crests (sparse, adds sparkle)
          const isAccent = (row % 6 === 2) && (col % 9 === 3);
          if (isAccent && finalAlpha > 0.2) {
            const glowR = size * 3 + scatterProg * 5;
            const grd   = ctx.createRadialGradient(x, y, 0, x, y, glowR);
            grd.addColorStop(0, `rgba(255,255,255,${Math.min(0.9, finalAlpha * 0.9)})`);
            grd.addColorStop(1, "rgba(255,255,255,0)");
            ctx.beginPath();
            ctx.arc(x, y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }

          ctx.beginPath();
          ctx.arc(x, y, isAccent ? size * 1.5 : size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${finalAlpha})`;
          ctx.fill();
        }
      }

      // ── Extra scatter stars (bloom as scroll increases) ─────────────────
      if (scatterProg > 0) {
        for (const s of stars) {
          s.x = ((s.x + s.dx * 0.0003 + 1) % 1);
          s.y = ((s.y + s.dy * 0.0003 + 1) % 1);
          const sx2 = s.x * W;
          const sy2 = s.y * H;
          const a2  = s.alpha * scatterProg * Math.min(1, scatterProg * 2);
          const sz  = s.size * (1 + scatterProg * 2.2);
          if (a2 < 0.01) continue;
          if (s.size > 2.5) {
            const grd = ctx.createRadialGradient(sx2, sy2, 0, sx2, sy2, sz * 3);
            grd.addColorStop(0, `rgba(255,255,255,${Math.min(0.8, a2 * 0.6)})`);
            grd.addColorStop(1, "rgba(255,255,255,0)");
            ctx.beginPath();
            ctx.arc(sx2, sy2, sz * 3, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }
          ctx.beginPath();
          ctx.arc(sx2, sy2, sz, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${a2})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(loop);
    }

    resize();
    animId = requestAnimationFrame(loop);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [isClient]);

  if (!isClient)
    return <section className="w-full bg-black" style={{ minHeight: "300svh" }} />;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black"
      style={{ height: "300svh" }}
    >
      <h1 className="sr-only">{SLOGAN}</h1>

      {/* Sticky viewport */}
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100svh" }}
      >
        {/* Animated canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full z-[1]"
        />

        {/* Bottom fade */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0) 50%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 18%)",
          }}
        />

        {/* Centered slogan — character by character */}
        <div
          className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center px-6 pointer-events-none"
        >
          <p
            style={{
              fontFamily: "'Inter', 'Pretendard', sans-serif",
              fontSize: "clamp(1.4rem, 2.8vw, 2.8rem)",
              fontWeight: 300,
              color: "rgba(255,255,255,0.95)",
              letterSpacing: "0.06em",
              lineHeight: 1.4,
              maxWidth: "860px",
              whiteSpace: "pre-wrap",
            }}
          >
            {SLOGAN.split("").map((ch, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  // Keep spaces from collapsing
                  whiteSpace: ch === " " ? "pre" : undefined,
                  opacity: i < visibleChars ? 1 : 0,
                  transform: i < visibleChars ? "translateY(0)" : "translateY(14px)",
                  transition: `opacity 0.5s ease ${Math.min(i * 0.03, 1.5)}s, transform 0.5s ease ${Math.min(i * 0.03, 1.5)}s`,
                }}
              >
                {ch}
              </span>
            ))}
          </p>
        </div>

        {/* Scroll indicator — disappears once text fully revealed */}
        <div
          className="absolute bottom-8 left-1/2 z-[10] flex flex-col items-center gap-2 pointer-events-none"
          style={{
            transform: "translateX(-50%)",
            opacity: visibleChars < SLOGAN.length ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        >
          <div
            className="w-px h-10"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.55), transparent)",
            }}
          />
          <span
            style={{
              fontSize: "9px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
