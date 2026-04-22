"use client";

import { useState } from "react";
import {
  CardCoverImage,
  CardGradient,
  CardGrid,
  CardImageArea,
  CardName,
  CardNameBar,
  CardRoot,
  CategoryBlock,
  CategoryHeader,
  CategoryIcon,
  CategoryTitle,
  DescPanel,
  DescText,
  ExpandButton,
} from "./PartnershipCategories.styles";

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

  function handleToggleExpand() {
    setExpanded((prev) => !prev);
  }

  return (
    <CardRoot>
      <CardImageArea $expanded={expanded}>
        <CardCoverImage src={card.image} alt={card.name} fill sizes="(max-width: 768px) 100vw, 25vw" />
        <CardGradient />
        <CardNameBar>
          <CardName>{card.name}</CardName>
        </CardNameBar>
        <ExpandButton
          type="button"
          onClick={handleToggleExpand}
          aria-label={expanded ? "접기" : "펼치기"}
        >
          {expanded ? "−" : "+"}
        </ExpandButton>
      </CardImageArea>

      <DescPanel $expanded={expanded}>
        <DescText>{card.description}</DescText>
      </DescPanel>
    </CardRoot>
  );
}

function CategorySection({ icon, title, cards }: CategoryData) {
  return (
    <CategoryBlock>
      <CategoryHeader>
        <CategoryIcon src={icon} alt={title} width={40} height={40} />
        <CategoryTitle>{title}</CategoryTitle>
      </CategoryHeader>
      <CardGrid>
        {cards.map((card) => (
          <PartnerCardItem key={card.name} card={card} />
        ))}
      </CardGrid>
    </CategoryBlock>
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
