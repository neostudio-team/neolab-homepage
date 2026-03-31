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
    <section className="bg-white text-[#0a0a0a]" style={{ padding: "100px 80px" }}>
      {/* Header */}
      <div className="flex justify-between items-end mb-14">
        <div>
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
            className="font-bold"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(32px, 3.2vw, 52px)",
              letterSpacing: "-1px",
              lineHeight: 1.1,
              color: "#0a0a0a",
            }}
          >
            {dict.title}
          </h2>
        </div>
        <Link
          href="#"
          className="flex items-center gap-1.5 font-medium text-[#E63B2E] transition-all hover:gap-3"
          style={{ fontSize: "13px", letterSpacing: ".3px" }}
        >
          {dict.viewAll} →
        </Link>
      </div>

      {/* Grid */}
      <div
        className="grid"
        style={{ gridTemplateColumns: "repeat(4, 1fr)", gap: "2px" }}
      >
        {dict.items.map((product, i) => (
          <Link
            key={i}
            href={product.href}
            className="group bg-[#f5f5f3] overflow-hidden relative block transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="overflow-hidden aspect-[3/4] bg-[#ebebea] flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={427}
                className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {/* Info */}
            <div className="p-5 pb-6">
              <div
                className="font-semibold uppercase text-[#E63B2E] mb-1.5"
                style={{ fontSize: "10px", letterSpacing: "2px" }}
              >
                {product.category}
              </div>
              <div
                className="font-bold text-[#0a0a0a] mb-1.5"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px" }}
              >
                {product.name}
              </div>
              <p className="text-[#666] leading-[1.6]" style={{ fontSize: "13px" }}>
                {product.desc}
              </p>
              <div
                className="inline-flex items-center gap-2 mt-4 font-semibold text-[#0a0a0a] border-b border-[#0a0a0a] pb-px transition-colors duration-200 group-hover:text-[#E63B2E] group-hover:border-[#E63B2E]"
                style={{ fontSize: "12px", letterSpacing: ".5px" }}
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
