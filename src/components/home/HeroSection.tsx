 "use client";
import { useEffect, useRef, useState } from "react";
import {
  DotCanvas,
  FadeOverlay,
  GradientOverlay,
  HeroTextBlock,
  HeroTitle,
  HeroTitleAccent,
  HeroVideo,
  LabelDot,
  LabelRow,
  LabelText,
  ScrollIndicator,
  ScrollLine,
  ScrollText,
  Section,
  VideoBackground,
} from "./HeroSection.styles";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOpacity, setFadeOpacity] = useState(0);
  void dict;

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;
    const drawCtx: CanvasRenderingContext2D = ctx;

    let W = 0, H = 0;
    const SPACING = 28, BASE_R = 1.2, GLOW_R = 5, REPEL = 100;
    let dots: {
      gx: number; gy: number;
      encX: number; encY: number;
      x: number; y: number;
      phase: number; isRed: boolean;
    }[] = [];
    let mouse = { x: -9999, y: -9999 };
    let animId: number;

    function resize() {
      const c = canvasRef.current;
      if (!c) return;
      W = c.width = c.offsetWidth;
      H = c.height = c.offsetHeight;
      buildDots();
    }

    function buildDots() {
      dots = [];
      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const enc = (r * cols + c) % 4;
          const offsets: [number, number][] = [[1, 1], [-1, 1], [1, -1], [-1, -1]];
          const [ox, oy] = offsets[enc];
          dots.push({
            gx: c * SPACING - SPACING, gy: r * SPACING - SPACING,
            encX: ox * 2.2, encY: oy * 2.2,
            x: 0, y: 0,
            phase: Math.random() * Math.PI * 2,
            isRed: Math.random() < 0.04,
          });
        }
      }
    }

    function loop() {
      drawCtx.clearRect(0, 0, W, H);
      const t = performance.now() * 0.001;
      for (const d of dots) {
        d.x = d.gx + d.encX + Math.sin(t * 0.3 + d.phase) * 0.6;
        d.y = d.gy + d.encY + Math.cos(t * 0.25 + d.phase * 0.7) * 0.6;
        const dx = d.x - mouse.x, dy = d.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let r = BASE_R, alpha = d.isRed ? 0.35 : 0.22;
        if (dist < REPEL) {
          const f = 1 - dist / REPEL;
          const ang = Math.atan2(dy, dx);
          d.x += Math.cos(ang) * f * 18;
          d.y += Math.sin(ang) * f * 18;
          r = BASE_R + (GLOW_R - BASE_R) * f * f;
          alpha = Math.min(0.8, alpha + f * 0.6);
        }
        drawCtx.beginPath();
        drawCtx.arc(d.x, d.y, r, 0, Math.PI * 2);
        drawCtx.fillStyle = d.isRed
          ? `rgba(230,59,46,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        drawCtx.fill();
      }
      animId = requestAnimationFrame(loop);
    }

    const onMouseMove = (e: MouseEvent) => {
      const c = canvasRef.current;
      if (!c) return;
      const rect = c.getBoundingClientRect();
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    resize();
    loop();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const SLOW = 1 / 1.5;
    const FADE_SEC = 1.5;

    const onCanPlay = () => {
      video.playbackRate = SLOW;
    };

    const onTimeUpdate = () => {
      const t = video.currentTime;
      const dur = video.duration;
      if (!dur) return;

      if (t < FADE_SEC) {
        setFadeOpacity(t / FADE_SEC);
      } else if (t > dur - FADE_SEC) {
        setFadeOpacity((dur - t) / FADE_SEC);
      } else {
        setFadeOpacity(1);
      }
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("timeupdate", onTimeUpdate);
    if (video.readyState >= 3) video.playbackRate = SLOW;

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, []);

  return (
    <Section>
      <VideoBackground>
        <HeroVideo
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </HeroVideo>
      </VideoBackground>

      <FadeOverlay $opacity={1 - fadeOpacity} />

      <GradientOverlay />

      <DotCanvas ref={canvasRef} />

      <HeroTextBlock>
        <LabelRow>
          <LabelDot />
          <LabelText>NeoLAB Convergence</LabelText>
        </LabelRow>
        <HeroTitle>
          Write the{" "}
          <HeroTitleAccent>
            Future,
          </HeroTitleAccent>
          <br />
          Connect the{" "}
          <HeroTitleAccent>
            World.
          </HeroTitleAccent>
        </HeroTitle>
      </HeroTextBlock>

      <ScrollIndicator>
        <ScrollLine />
        <ScrollText>Scroll</ScrollText>
      </ScrollIndicator>
    </Section>
  );
}
