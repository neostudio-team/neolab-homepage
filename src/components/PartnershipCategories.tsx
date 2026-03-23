"use client";

import { useState } from "react";
import Image from "next/image";

interface PartnerCard {
  name: string;
  description: string;
  image: string;
}

interface CategoryData {
  icon: string;
  title: string;
  cards: PartnerCard[];
}

function PartnerCardItem({ card }: { card: PartnerCard }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative rounded-lg overflow-hidden bg-gray-200 shadow-sm">
      {/* Image area */}
      <div
        className={`relative transition-all duration-300 ${
          expanded ? "h-48" : "h-64"
        }`}
      >
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {/* Partner name */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h4 className="font-bold text-sm">{card.name}</h4>
        </div>
        {/* Expand/Collapse button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-gray-800 flex items-center justify-center text-lg font-light leading-none shadow transition-colors"
          aria-label={expanded ? "접기" : "펼치기"}
        >
          {expanded ? "−" : "+"}
        </button>
      </div>

      {/* Description panel */}
      <div
        className={`overflow-hidden transition-all duration-300 bg-white ${
          expanded ? "max-h-48 py-4 px-4" : "max-h-0"
        }`}
      >
        <p className="text-xs text-gray-600 leading-relaxed">{card.description}</p>
      </div>
    </div>
  );
}

function CategorySection({ icon, title, cards }: CategoryData) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <Image src={icon} alt={title} width={40} height={40} />
        <h3 className="text-xl font-bold text-black">{title}</h3>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map((card) => (
          <PartnerCardItem key={card.name} card={card} />
        ))}
      </div>
    </div>
  );
}

export default function PartnershipCategories({
  categories,
}: {
  categories: CategoryData[];
}) {
  return (
    <>
      {categories.map((cat) => (
        <CategorySection key={cat.title} {...cat} />
      ))}
    </>
  );
}
