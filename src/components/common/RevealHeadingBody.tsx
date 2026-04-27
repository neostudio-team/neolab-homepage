"use client";

import { type ComponentProps, type ElementType, type ReactNode } from "react";
import Reveal from "@/components/common/Reveal";
import {
  ContentsSlot,
  HeadingGroup,
  RevealDescription,
  RevealTitle,
  Root,
} from "./RevealHeadingBody.styles";

type RevealMotionProps = Partial<ComponentProps<typeof Reveal>>;

export type RevealHeadingBodyProps = {
  title: ReactNode;
  /** Description text. Newlines (`\n`) render as line breaks. */
  description?: ReactNode;
  /** Variable contents rendered below the heading group (e.g. cards, image, CTA). */
  contents?: ReactNode;
  titleReveal?: RevealMotionProps;
  descriptionReveal?: RevealMotionProps;
  contentsReveal?: RevealMotionProps;
  /** Override the wrapper element (default: `section`). Useful inside another section. */
  as?: ElementType;
  /** Render top vertical padding. Default `true`. Set `false` when preceded by a section that already has bottom padding. */
  paddingTop?: boolean;
  /** Render bottom vertical padding. Default `true`. Set `false` when followed by a section that already has top padding. */
  paddingBottom?: boolean;
  className?: string;
};

const titleDefaults: RevealMotionProps = {
  y: 40,
  once: false,
  amount: 0.2,
  duration: 1.0,
};

const descDefaults: RevealMotionProps = {
  y: 32,
  delay: 0.15,
  once: false,
  amount: 0.2,
};

const contentsDefaults: RevealMotionProps = {
  y: 50,
  delay: 0.25,
  once: false,
  amount: 0.15,
  duration: 1.0,
};

export default function RevealHeadingBody({
  title,
  description,
  contents,
  titleReveal,
  descriptionReveal,
  contentsReveal,
  as,
  paddingTop = true,
  paddingBottom = true,
  className,
}: RevealHeadingBodyProps) {
  return (
    <Root as={as} $pt={paddingTop} $pb={paddingBottom} className={className}>
      <HeadingGroup>
        <Reveal {...titleDefaults} {...titleReveal}>
          <RevealTitle>{title}</RevealTitle>
        </Reveal>
        {description != null && description !== "" && (
          <Reveal {...descDefaults} {...descriptionReveal}>
            <RevealDescription>{description}</RevealDescription>
          </Reveal>
        )}
      </HeadingGroup>

      {contents != null && (
        <Reveal {...contentsDefaults} {...contentsReveal}>
          <ContentsSlot>{contents}</ContentsSlot>
        </Reveal>
      )}
    </Root>
  );
}
