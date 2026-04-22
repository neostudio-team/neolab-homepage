"use client";

import { useRouter } from "next/navigation";
import {
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
} from "react";
import SectionHeading from "@/components/common/SectionHeading";
import Section from "@/components/common/Section";
import {
  BigBody,
  BigCategory,
  BigInfo,
  BigImageWrap,
  BigSub,
  BigTitle,
  Card,
  CardContent,
  ChipList,
  ChipButton,
  ProductTextBlock,
  Row,
  SearchBadge,
  SmallChip,
  SmallChipList,
  SmallHeader,
  SmallImage,
  SmallImageWrap,
  SmallTitle,
  SwappableProductImage,
} from "./ProductsSection.styles";
import { categories, type Category } from "./productsData";
import { Icon } from "@iconify/react";

interface ProductsSectionProps {
  dict?: unknown;
}

interface CategoryCardProps {
  category: Category;
  index: number;
  active: boolean;
  onActivateByHover: (event: MouseEvent<HTMLButtonElement>) => void;
  onActivateByFocus: (event: FocusEvent<HTMLButtonElement>) => void;
}

function CategoryCardView({
  category,
  index,
  active,
  onActivateByHover,
  onActivateByFocus,
}: CategoryCardProps) {
  const router = useRouter();
  const [productIndex, setProductIndex] = useState(0);
  const product = category.products[productIndex];
  const hasSingleProductChip = category.products.length === 1;

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
      onMouseEnter={onActivateByHover}
      onFocus={onActivateByFocus}
      onClick={handleCardClick}
      aria-pressed={active}
    >
      <CardContent $active={true} $visible={active}>
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
              <BigTitle>{product.name}</BigTitle>
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
                  tabIndex={active ? 0 : -1}
                >
                  {p.chipLabel}
                </ChipButton>
              ))}
            </ChipList>
          )}
        </BigBody>
      </CardContent>

      <CardContent $active={false} $visible={!active}>
        <SmallHeader>
          <SmallTitle>{category.label}</SmallTitle>
          <SmallChipList $singleChip={hasSingleProductChip}>
            {category.products.map((p) => (
              <SmallChip
                key={p.key}
                $wide={p.key === "lamy" || p.key === "mediaplayer"}
                $singleChip={hasSingleProductChip}
              >
                {p.chipLabel}
              </SmallChip>
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
          <SearchBadge aria-hidden>
            <Icon icon="iconamoon:search-thin" />
          </SearchBadge>
        </SmallImageWrap>
      </CardContent>
    </Card>
  );
}
const CategoryCard = memo(CategoryCardView);

export default function ProductsSection({ dict }: ProductsSectionProps) {
  void dict;
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimeoutRef = useRef<number | null>(null);
  const hoverActivateDelayMs = 180;

  const clearHoverTimeout = useCallback(() => {
    if (hoverTimeoutRef.current === null) return;
    window.clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = null;
  }, []);

  const activateByFocus = (event: FocusEvent<HTMLButtonElement>) => {
    clearHoverTimeout();
    const idx = Number(event.currentTarget.dataset.index);
    if (Number.isNaN(idx)) return;
    setActiveIndex(idx);
  };

  const activateByHover = (event: MouseEvent<HTMLButtonElement>) => {
    const idx = Number(event.currentTarget.dataset.index);
    if (Number.isNaN(idx) || idx === activeIndex) return;

    clearHoverTimeout();
    hoverTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex(idx);
      hoverTimeoutRef.current = null;
    }, hoverActivateDelayMs);
  };

  useEffect(() => clearHoverTimeout, [clearHoverTimeout]);

  return (
    <Section title="OUR PRODUCTS" tone="dark">
      <Row>
        {categories.map((category, index) => (
          <CategoryCard
            key={category.key}
            category={category}
            index={index}
            active={index === activeIndex}
            onActivateByHover={activateByHover}
            onActivateByFocus={activateByFocus}
          />
        ))}
      </Row>
    </Section>
  );
}
