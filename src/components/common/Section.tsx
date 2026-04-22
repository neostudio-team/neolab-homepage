"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import {
  SectionInner,
  SectionOverlay,
  SectionRoot,
} from "./Section.styles";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  title?: string;
  tone?: "dark" | "light";
  background?: string;
  backgroundImage?: string;
  overlay?: string;
  contained?: boolean;
}

export default function Section({
  children,
  title = "",
  tone = "dark",
  background,
  backgroundImage,
  overlay,
  contained = true,
  style,
  ...rest
}: SectionProps) {
  const mergedStyle: CSSProperties = {
    ...(background ? { background } : {}),
    ...(backgroundImage
      ? {
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {}),
    ...style,
  };

  const body = contained ? <SectionInner>{children}</SectionInner> : children;

  return (
    <SectionRoot $tone={tone} style={mergedStyle} {...rest}>
      {overlay && <SectionOverlay $bg={overlay} />}
      {title.length > 0 && <SectionHeading tone={tone}>{title}</SectionHeading>}
      {body}
    </SectionRoot>
  );
}
