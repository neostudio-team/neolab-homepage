"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import {
  BuyLink,
  ColorBlock,
  ColorLabel,
  ColorRow,
  ColorSwatch,
  Container,
  Eyebrow,
  GalleryCol,
  InfoCol,
  MainFrame,
  MainImage,
  Price,
  Row,
  Section,
  Tagline,
  ThumbButton,
  ThumbImage,
  Thumbs,
  Title,
} from "./R1Gallery.styles";

const GALLERY_IMAGES = [
  { src: "https://shop.neosmartpen.com/cdn/shop/files/F45.png?v=1748305970", alt: "Neo Smartpen R1 – Black" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/KakaoTalk_20250103_114024634.png?v=1756790863", alt: "Neo Smartpen R1 – Sky Blue" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2147-278110.jpg?v=1756790863", alt: "Neo Smartpen R1 lifestyle" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2171-592434.jpg?v=1756790863", alt: "Neo Smartpen R1 writing" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2216-408424.jpg?v=1756790863", alt: "Neo Smartpen R1 detail" },
  { src: "https://shop.neosmartpen.com/cdn/shop/products/221104-neolab_smartpen_-2459.jpg?v=1756790863", alt: "Neo Smartpen R1 product" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/neo-smartpen-r1-extra-001.png?v=1756790863", alt: "Neo Smartpen R1 extra view 1" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/neo-smartpen-r1-extra-002.png?v=1756790863", alt: "Neo Smartpen R1 extra view 2" },
  { src: "https://shop.neosmartpen.com/cdn/shop/files/neo-smartpen-r1-extra-003.png?v=1756790863", alt: "Neo Smartpen R1 extra view 3" },
];

interface R1GalleryProps {
  tagline: string;
  price: string;
  colorBlack: string;
  colorSkyBlue: string;
  buyBtn: string;
  buyUrl: string;
  eyebrow: string;
}

export default function R1Gallery({ tagline, price, colorBlack, colorSkyBlue, buyBtn, buyUrl, eyebrow }: R1GalleryProps) {
  const [active, setActive] = useState(0);
  const [color, setColor] = useState<"black" | "skyblue">("black");

  const handleColor = (next: "black" | "skyblue") => {
    setColor(next);
    setActive(next === "skyblue" ? 1 : 0);
  };

  const handleThumbClick = (event: MouseEvent<HTMLButtonElement>) => {
    const idx = Number(event.currentTarget.dataset.index);
    if (!Number.isNaN(idx)) {
      setActive(idx);
    }
  };

  const handleSwatchClick = (event: MouseEvent<HTMLButtonElement>) => {
    const tone = event.currentTarget.dataset.tone;
    if (tone === "black" || tone === "skyblue") {
      handleColor(tone);
    }
  };

  return (
    <Section>
      <Container>
        <Row>
          <GalleryCol>
            <Thumbs>
              {GALLERY_IMAGES.map((img, i) => (
                <ThumbButton
                  key={img.src}
                  type="button"
                  data-index={i}
                  $active={i === active}
                  onClick={handleThumbClick}
                  aria-label={img.alt}
                >
                  <ThumbImage src={img.src} alt="" width={70} height={70} unoptimized />
                </ThumbButton>
              ))}
            </Thumbs>
            <MainFrame>
              <MainImage
                src={GALLERY_IMAGES[active].src}
                alt={GALLERY_IMAGES[active].alt}
                width={560}
                height={560}
                unoptimized
              />
            </MainFrame>
          </GalleryCol>

          <InfoCol>
            <Eyebrow>{eyebrow}</Eyebrow>
            <Title>NEO SMARTPEN R1</Title>
            <Tagline>{tagline}</Tagline>
            <Price>{price}</Price>

            <ColorBlock>
              <ColorLabel>{color === "black" ? colorBlack : colorSkyBlue}</ColorLabel>
              <ColorRow>
                <ColorSwatch
                  type="button"
                  data-tone="black"
                  $selected={color === "black"}
                  $tone="black"
                  title={colorBlack}
                  onClick={handleSwatchClick}
                  aria-pressed={color === "black"}
                />
                <ColorSwatch
                  type="button"
                  data-tone="skyblue"
                  $selected={color === "skyblue"}
                  $tone="skyblue"
                  title={colorSkyBlue}
                  onClick={handleSwatchClick}
                  aria-pressed={color === "skyblue"}
                />
              </ColorRow>
            </ColorBlock>

            <BuyLink href={buyUrl} target="_blank" rel="noopener noreferrer">
              {buyBtn}
            </BuyLink>
          </InfoCol>
        </Row>
      </Container>
    </Section>
  );
}
