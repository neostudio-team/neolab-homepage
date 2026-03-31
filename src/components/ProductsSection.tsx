import Image from "next/image";
import Link from "next/link";

interface Product {
  category: string;
  name: string;
  desc: string;
  href: string;
  image: string;
}

interface ProductsSectionProps {
  dict: {
    tag: string;
    title: string;
    viewAll: string;
    viewDetail: string;
    items: readonly Product[];
  };
}

export default function ProductsSection({ dict }: ProductsSectionProps) {
  return (
    <section className="bg-white" style={{ padding: "100px 80px" }}>
      {/* Header */}
      <div className="flex justify-between items-center mb-14">
        <div className="flex items-center gap-4">
          {/* Orange circle accent */}
          <div
            className="rounded-full flex-shrink-0"
            style={{ width: 20, height: 20, background: "#F5A623" }}
          />
          <h2
            className="font-bold text-[#0a0a0a]"
            style={{
              fontSize: "clamp(28px, 3vw, 48px)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
            }}
          >
            {dict.tag}
          </h2>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1.5 font-medium text-[#0a0a0a] transition-all hover:text-[#F5A623]"
          style={{ fontSize: "14px", letterSpacing: ".3px" }}
        >
          {dict.viewAll} →
        </Link>
      </div>

      {/* Horizontal scroll card row */}
      <div
        className="flex gap-5 overflow-x-auto pb-4"
        style={{ scrollbarWidth: "none" }}
      >
        {dict.items.map((product, i) => (
          <Link
            key={i}
            href={product.href}
            className="group flex-shrink-0 rounded-2xl overflow-hidden relative block transition-transform duration-300 hover:-translate-y-2"
            style={{
              background: "#F5F5F5",
              width: "clamp(200px, 22vw, 280px)",
              minWidth: 200,
            }}
          >
            {/* Image area */}
            <div
              className="flex items-center justify-center overflow-hidden"
              style={{
                background: "#F5F5F5",
                height: "clamp(180px, 20vw, 260px)",
                padding: "24px",
              }}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={240}
                height={240}
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Info */}
            <div
              className="p-5"
              style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div
                className="font-bold text-[#0a0a0a] mb-1"
                style={{ fontSize: "17px", letterSpacing: "-0.3px" }}
              >
                {product.name}
              </div>
              <div
                className="text-[#666] leading-[1.5] mb-4"
                style={{ fontSize: "13px" }}
              >
                {product.desc}
              </div>
              <div
                className="inline-flex items-center gap-2 font-semibold text-[#0a0a0a] border-b border-[#0a0a0a] pb-px transition-colors duration-200 group-hover:text-[#F5A623] group-hover:border-[#F5A623]"
                style={{ fontSize: "12px", letterSpacing: ".3px" }}
              >
                {dict.viewDetail} →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
