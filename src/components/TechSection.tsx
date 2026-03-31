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

const svgIcons = [
  // Digitalization — dot grid
  <svg key="1" viewBox="0 0 48 48" fill="none">
    <circle cx="10" cy="10" r="3" fill="rgba(230,59,46,0.6)" />
    <circle cx="24" cy="10" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="38" cy="10" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="10" cy="24" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="24" cy="24" r="3" fill="rgba(230,59,46,0.6)" />
    <circle cx="38" cy="24" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="10" cy="38" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="24" cy="38" r="3" fill="rgba(255,255,255,0.4)" />
    <circle cx="38" cy="38" r="3" fill="rgba(230,59,46,0.6)" />
  </svg>,
  // Engagement — lens
  <svg key="2" viewBox="0 0 48 48" fill="none">
    <path d="M8 24 Q24 8 40 24 Q24 40 8 24Z" stroke="rgba(230,59,46,0.6)" strokeWidth="1.5" fill="none" />
    <circle cx="24" cy="24" r="5" fill="rgba(230,59,46,0.4)" />
    <circle cx="24" cy="24" r="14" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
  </svg>,
  // Integration — boxes
  <svg key="3" viewBox="0 0 48 48" fill="none">
    <rect x="4" y="16" width="16" height="16" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <rect x="28" y="16" width="16" height="16" rx="2" stroke="rgba(230,59,46,0.6)" strokeWidth="1.5" />
    <path d="M20 24h8" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>,
  // Scalability — chart
  <svg key="4" viewBox="0 0 48 48" fill="none">
    <path d="M8 36 L8 20 L20 12 L28 20 L40 8" stroke="rgba(230,59,46,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="8" r="4" fill="rgba(230,59,46,0.4)" />
  </svg>,
];

const nums = ["01", "02", "03", "04"];

export default function TechSection({ dict }: TechSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#111", padding: "100px 80px" }}
    >
      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-200px",
          right: "-200px",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,59,46,.08) 0%, transparent 70%)",
        }}
      />

      <div className="inline-flex items-center gap-2.5 mb-5">
        <div className="w-6 h-0.5 bg-[#E63B2E]" />
        <span
          className="font-semibold uppercase text-[#E63B2E]"
          style={{ fontSize: "11px", letterSpacing: "2.5px" }}
        >
          {dict.tag}
        </span>
      </div>
      <h2
        className="font-bold text-white"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(32px, 3.2vw, 52px)",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}
      >
        {dict.title}
      </h2>
      <p
        className="font-light mt-3.5 mb-16"
        style={{ fontSize: "15px", color: "rgba(255,255,255,.5)", maxWidth: "520px", lineHeight: 1.7 }}
      >
        {dict.subtitle}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2" style={{ gap: "2px" }}>
        {dict.items.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden cursor-pointer transition-all duration-300"
            style={{
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "48px 40px",
            }}
          >
            {/* Red left border on hover */}
            <div
              className="absolute top-0 left-0 w-[3px] bg-[#E63B2E] transition-all duration-300 group-hover:h-full"
              style={{ height: 0 }}
            />
            <div
              className="font-bold mb-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "2px",
                color: "rgba(255,255,255,.2)",
              }}
            >
              {nums[i]}
            </div>
            <div className="w-12 h-12 mb-5">{svgIcons[i]}</div>
            <div
              className="font-bold text-white mb-3"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "22px",
                letterSpacing: "-0.5px",
              }}
            >
              {item.title}
            </div>
            <p
              className="font-light leading-[1.7] mb-6"
              style={{ fontSize: "14px", color: "rgba(255,255,255,.5)" }}
            >
              {item.description}
            </p>
            <div
              className="flex items-center gap-2 font-semibold transition-colors duration-200 group-hover:text-[#E63B2E]"
              style={{
                fontSize: "12px",
                letterSpacing: ".5px",
                color: "rgba(255,255,255,.3)",
              }}
            >
              {dict.learnMore} →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
