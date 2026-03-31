import Link from "next/link";

interface TechItem {
  title: string;
  description: string;
}

interface TechSectionProps {
  dict: {
    tag: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: readonly TechItem[];
  };
}

// Golden wave SVG path for background decoration
function WaveLines() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="none"
      viewBox="0 0 1440 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[0, 40, 80, 120, 160, 200, 240, 280].map((offset, i) => (
        <path
          key={i}
          d={`M-100 ${180 + offset} Q360 ${100 + offset} 720 ${200 + offset} Q1080 ${300 + offset} 1540 ${160 + offset}`}
          stroke="rgba(245,166,35,0.12)"
          strokeWidth="1.5"
          fill="none"
        />
      ))}
    </svg>
  );
}

const cardImages = [
  { bg: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)" },
  { bg: "linear-gradient(135deg, #0f3460 0%, #16213e 100%)" },
  { bg: "linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)" },
  { bg: "linear-gradient(135deg, #16213e 0%, #1a1a2e 100%)" },
];

const techIcons = [
  // Digitalization — Ncode dot grid
  <svg key="1" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="8" cy="8" r="2.5" fill="rgba(245,166,35,0.8)" />
    <circle cx="20" cy="8" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="32" cy="8" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="8" cy="20" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="20" cy="20" r="2.5" fill="rgba(245,166,35,0.8)" />
    <circle cx="32" cy="20" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="8" cy="32" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="20" cy="32" r="2.5" fill="rgba(255,255,255,0.3)" />
    <circle cx="32" cy="32" r="2.5" fill="rgba(245,166,35,0.8)" />
  </svg>,
  // Engagement — pen wave
  <svg key="2" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M5 28 Q12 12 20 20 Q28 28 35 12" stroke="rgba(245,166,35,0.8)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <circle cx="35" cy="12" r="3" fill="rgba(245,166,35,0.6)" />
  </svg>,
  // Integration — connected nodes
  <svg key="3" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <rect x="3" y="14" width="13" height="12" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <rect x="24" y="14" width="13" height="12" rx="2" stroke="rgba(245,166,35,0.7)" strokeWidth="1.5" />
    <path d="M16 20h8" stroke="rgba(245,166,35,0.5)" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>,
  // Scalability — growth arrow
  <svg key="4" width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M6 32 L6 18 L16 10 L24 18 L34 6" stroke="rgba(245,166,35,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="34" cy="6" r="3.5" fill="rgba(245,166,35,0.5)" />
  </svg>,
];

export default function TechSection({ dict }: TechSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1A0A00 0%, #2D1200 50%, #1A0800 100%)",
        padding: "100px 80px",
      }}
    >
      {/* Golden wave decoration */}
      <WaveLines />

      {/* Radial glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-150px",
          right: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Central text content */}
      <div className="relative text-center mb-16">
        <h2
          className="font-bold text-white mx-auto"
          style={{
            fontSize: "clamp(32px, 4vw, 60px)",
            letterSpacing: "-1.5px",
            lineHeight: 1.15,
            whiteSpace: "pre-line",
            maxWidth: 800,
          }}
        >
          {dict.title}
        </h2>

        {/* Orange pill button */}
        <div className="mt-8 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-white transition-all hover:brightness-110"
            style={{
              background: "#F5A623",
              fontSize: "14px",
              letterSpacing: ".3px",
              padding: "12px 28px",
              borderRadius: "100px",
            }}
          >
            {dict.learnMore} →
          </Link>
        </div>
      </div>

      {/* 2x2 Card grid */}
      <div
        className="relative grid grid-cols-2"
        style={{ gap: "20px", maxWidth: 1000, margin: "0 auto" }}
      >
        {dict.items.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            style={{
              background: cardImages[i].bg,
              border: "1px solid rgba(245,166,35,0.15)",
              padding: "40px 36px",
              // Slight offset for visual interest
              marginTop: i === 1 || i === 3 ? "24px" : "0",
            }}
          >
            {/* Golden top border accent on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] bg-[#F5A623] origin-left transition-transform duration-400 scale-x-0 group-hover:scale-x-100"
            />

            <div className="mb-4">{techIcons[i]}</div>

            <div
              className="font-bold text-white mb-3"
              style={{
                fontSize: "20px",
                letterSpacing: "-0.3px",
              }}
            >
              {item.title}
            </div>
            <p
              className="leading-[1.7]"
              style={{ fontSize: "14px", color: "rgba(255,255,255,0.55)" }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
