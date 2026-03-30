"use client";
import { useEffect, useRef } from "react";

interface HeroSectionProps {
  dict: {
    title: string;
    subtitle: string;
    visionLabel: string;
    visionTitle: string;
    visionDesc: string;
  };
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0,
      H = 0;
    const SPACING = 28,
      BASE_R = 1.2,
      GLOW_R = 5,
      REPEL = 100;
    let dots: {
      gx: number;
      gy: number;
      encX: number;
      encY: number;
      x: number;
      y: number;
      phase: number;
      isRed: boolean;
    }[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animId: number;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
      buildDots();
    }

    function buildDots() {
      dots = [];
      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const enc = (r * cols + c) % 4;
          const offsets: [number, number][] = [
            [1, 1],
            [-1, 1],
            [1, -1],
            [-1, -1],
          ];
          const [ox, oy] = offsets[enc];
          dots.push({
            gx: c * SPACING - SPACING,
            gy: r * SPACING - SPACING,
            encX: ox * 2.2,
            encY: oy * 2.2,
            x: 0,
            y: 0,
            phase: Math.random() * Math.PI * 2,
            isRed: Math.random() < 0.04,
          });
        }
      }
    }

    function loop() {
      ctx!.clearRect(0, 0, W, H);
      const t = performance.now() * 0.001;
      for (const d of dots) {
        d.x = d.gx + d.encX + Math.sin(t * 0.3 + d.phase) * 0.6;
        d.y = d.gy + d.encY + Math.cos(t * 0.25 + d.phase * 0.7) * 0.6;
        const dx = d.x - mouse.x,
          dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let r = BASE_R,
          alpha = d.isRed ? 0.35 : 0.22;
        if (dist < REPEL) {
          const f = 1 - dist / REPEL;
          const ang = Math.atan2(dy, dx);
          d.x += Math.cos(ang) * f * 18;
          d.y += Math.sin(ang) * f * 18;
          r = BASE_R + (GLOW_R - BASE_R) * f * f;
          alpha = Math.min(0.8, alpha + f * 0.6);
        }
        ctx!.beginPath();
        ctx!.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx!.fillStyle = d.isRed
          ? `rgba(230,59,46,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas!.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMouseMove);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section
      className="relative w-full bg-black overflow-hidden flex items-end"
      style={{ minHeight: "100svh" }}
    >
      {/* Video background */}
      <div className="absolute inset-0 z-[1] bg-black overflow-hidden">
        <iframe
          src="https://drive.google.com/file/d/1EDgymqWkXqYZw_zSSNJFzASSLDdhv2l2/preview"
          allow="autoplay; encrypted-media"
          title="NeoLAB Brand Video"
          className="absolute top-1/2 left-1/2 border-0 pointer-events-none"
          style={{
            width: "100vw",
            height: "56.25vw",
            minHeight: "100vh",
            minWidth: "177.78vh",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,.55) 0%, rgba(0,0,0,.25) 40%, rgba(0,0,0,.45) 75%, rgba(0,0,0,.85) 100%), linear-gradient(to right, rgba(0,0,0,.4) 0%, transparent 60%)",
        }}
      />

      {/* Ncode dot canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[3] pointer-events-none"
        style={{ opacity: 0.35, mixBlendMode: "screen" }}
      />

      {/* Hero text */}
      <div
        className="relative z-[10] flex flex-col justify-end max-w-[700px]"
        style={{ padding: "0 80px 160px" }}
      >
        <div className="flex items-center gap-2.5 mb-7">
          <div className="w-1.5 h-1.5 rounded-full bg-[#E63B2E]" />
          <span
            className="font-medium uppercase text-[#E63B2E]"
            style={{ fontSize: "10px", letterSpacing: "3px" }}
          >
            NeoLAB Convergence
          </span>
        </div>
        <h1
          className="font-bold text-white mb-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(52px, 5.6vw, 100px)",
            lineHeight: 0.96,
            letterSpacing: "-2px",
          }}
        >
          Write the
          <br />
          <em
            style={{
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "1.5px rgba(255,255,255,.5)",
            }}
          >
            Future,
          </em>
          <br />
          Connect the
          <br />
          World.
        </h1>
        <p
          className="font-light leading-[1.7]"
          style={{ fontSize: "16px", color: "rgba(255,255,255,.65)" }}
        >
          {dict.subtitle}
        </p>
      </div>

      {/* Bottom strip */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[10] flex items-center justify-between"
        style={{
          padding: "24px 80px",
          borderTop: "1px solid rgba(255,255,255,.1)",
          background: "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
        }}
      >
        <div>
          <div
            className="font-medium uppercase mb-[5px]"
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,.25)",
            }}
          >
            {dict.visionLabel}
          </div>
          <div
            className="font-bold"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(20px, 2.2vw, 32px)",
              letterSpacing: "-0.5px",
              color: "rgba(255,255,255,.5)",
            }}
          >
            {dict.visionTitle}
          </div>
          <div
            className="font-light mt-1.5"
            style={{ fontSize: "13px", color: "rgba(255,255,255,.3)" }}
          >
            {dict.visionDesc}
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,.25))",
            }}
          />
          <span
            className="uppercase"
            style={{
              fontSize: "9px",
              letterSpacing: "2px",
              color: "rgba(255,255,255,.2)",
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
