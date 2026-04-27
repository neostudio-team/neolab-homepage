"use client";

import type { CSSProperties, HTMLAttributes, ReactNode } from "react";
import SectionHeading from "./SectionHeading";
import {
  SectionInner,
  SectionOverlay,
  SectionRoot,
} from "./Section.styles";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  children: ReactNode;
  title?: ReactNode;
  desc?: ReactNode;
  tone?: "dark" | "light";
  background?: string;
  backgroundImage?: string;
  overlay?: string;
  contained?: boolean;
  paddingTop?: CSSProperties["paddingTop"];
  paddingBottom?: CSSProperties["paddingBottom"];
}

export default function Section({
  children,
  title,
  desc,
  tone = "dark",
  background,
  backgroundImage,
  overlay,
  contained = true,
  paddingTop,
  paddingBottom,
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
    ...(paddingTop !== undefined ? { paddingTop } : {}),
    ...(paddingBottom !== undefined ? { paddingBottom } : {}),
    ...style,
  };

  const body = contained ? <SectionInner>{children}</SectionInner> : children;

  return (
    <SectionRoot $tone={tone} style={mergedStyle} {...rest}>
      {overlay && <SectionOverlay $bg={overlay} />}
      {(title != null || desc != null) && (
        <SectionHeading tone={tone} desc={desc}>
          {title}
        </SectionHeading>
      )}
      {body}
    </SectionRoot>
  );
}
