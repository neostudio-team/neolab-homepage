import type { ReactNode } from "react";
import Reveal from "./Reveal";
import {
  HeadingDesc,
  HeadingTitle,
  HeadingWrap,
} from "./SectionHeading.styles";

interface SectionHeadingProps {
  children?: ReactNode;
  desc?: ReactNode;
  tone?: "dark" | "light";
}

export default function SectionHeading({
  children,
  desc,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <Reveal>
      <HeadingWrap>
        {children != null ? <HeadingTitle $tone={tone}>{children}</HeadingTitle> : null}
        {desc != null ? <HeadingDesc $tone={tone}>{desc}</HeadingDesc> : null}
      </HeadingWrap>
    </Reveal>
  );
}
