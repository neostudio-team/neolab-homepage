"use client";
import { useState } from "react";

interface FaqItem {
  q: string;
  a: string | string[];
}

export default function SupportFaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-100">
      {items.map((item, i) => (
        <div key={i} className="py-1">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex justify-between items-center py-4 text-left text-[15px] font-semibold text-[#333] hover:text-[#ff4e00] transition-colors"
          >
            <span>{item.q}</span>
            <span className="text-xl text-gray-400 ml-4">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && (
            <div className="pb-5 text-[14px] text-[#555] leading-relaxed space-y-2">
              {Array.isArray(item.a)
                ? item.a.map((line, j) => <p key={j}>{line}</p>)
                : <p>{item.a}</p>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
