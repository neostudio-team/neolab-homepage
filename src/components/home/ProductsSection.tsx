"use client";

import { useRouter } from "next/navigation";
import {
  memo,
  useCallback,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import SectionHeading from "@/components/common/SectionHeading";
import {
  BigBody,
  BigCategory,
  BigInfo,
  BigImageWrap,
  BigSub,
  BigTitle,
  BigTitleRow,
  Card,
  CardContent,
  ChipList,
  ChipButton,
  ProductTextBlock,
  Row,
  SearchBadge,
  Section,
  SmallChip,
  SmallChipList,
  SmallHeader,
  SmallImage,
  SmallImageWrap,
  SmallTitle,
  SwappableProductImage,
} from "../ProductsSection.styles";
import { categories, type Category } from "./productsData";

interface ProductsSectionProps {
  dict?: unknown;
}

interface CategoryCardProps {
  category: Category;
  index: number;
  active: boolean;
  onActivate: (
    event: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
  ) => void;
}

function CategoryCardView({
  category,
  index,
  active,
  onActivate,
}: CategoryCardProps) {
  const router = useRouter();
  const [productIndex, setProductIndex] = useState(0);
  const product = category.products[productIndex];

  const handleCardClick = () => {
    router.push(product.href);
  };

  const handleChipSelect = useCallback(
    (event: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const nextIndex = Number(event.currentTarget.dataset.productIndex);
      if (Number.isNaN(nextIndex)) return;
      setProductIndex(nextIndex);
    },
    [],
  );

  const handleChipClick = (
    event: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    handleChipSelect(event);
  };

  return (
    <Card
      type="button"
      data-index={index}
      $active={active}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={handleCardClick}
      aria-pressed={active}
    >
      {active ? (
        <CardContent>
          <BigImageWrap>
            {category.products.map((p, i) => (
              <SwappableProductImage
                key={p.key}
                $visible={i === productIndex}
                src={p.image}
                alt={p.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i === 0 && index === 0}
              />
            ))}
          </BigImageWrap>
          <BigBody>
            <BigInfo>
              <BigCategory>{category.label}</BigCategory>
              <ProductTextBlock key={product.key}>
                <BigTitleRow>
                  <BigTitle>{product.name}</BigTitle>
                </BigTitleRow>
                <BigSub>{product.tagline}</BigSub>
              </ProductTextBlock>
            </BigInfo>
            {category.products.length > 1 && (
              <ChipList>
                {category.products.map((p, i) => (
                  <ChipButton
                    key={p.key}
                    type="button"
                    data-product-index={i}
                    $active={i === productIndex}
                    onMouseEnter={handleChipSelect}
                    onFocus={handleChipSelect}
                    onClick={handleChipClick}
                  >
                    {p.chipLabel}
                  </ChipButton>
                ))}
              </ChipList>
            )}
          </BigBody>
        </CardContent>
      ) : (
        <CardContent>
          <SmallHeader>
            <SmallTitle>{category.label}</SmallTitle>
            <SmallChipList>
              {category.products.map((p) => (
                <SmallChip key={p.key}>{p.chipLabel}</SmallChip>
              ))}
            </SmallChipList>
          </SmallHeader>
          <SmallImageWrap>
            <SmallImage
              src={category.smallImage}
              alt={category.label}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
            />
            <SearchBadge aria-hidden>⌕</SearchBadge>
          </SmallImageWrap>
        </CardContent>
      )}
    </Card>
  );
}
const CategoryCard = memo(CategoryCardView);

export default function ProductsSection({ dict }: ProductsSectionProps) {
  void dict;
  const [activeIndex, setActiveIndex] = useState(0);

  const activate = (
    event: MouseEvent<HTMLButtonElement> | FocusEvent<HTMLButtonElement>,
  ) => {
    const idx = Number(event.currentTarget.dataset.index);
    if (Number.isNaN(idx)) return;
    setActiveIndex(idx);
  };

  return (
    <Section>
      <SectionHeading>OUR PRODUCTS</SectionHeading>

      <Row>
        {categories.map((category, index) => (
          <CategoryCard
            key={category.key}
            category={category}
            index={index}
            active={index === activeIndex}
            onActivate={activate}
          />
        ))}
      </Row>
    </Section>
  );
}
