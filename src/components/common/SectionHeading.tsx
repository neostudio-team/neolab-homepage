import type { ReactNode } from "react";
import { HeadingTitle, HeadingWrap } from "./SectionHeading.styles";

interface SectionHeadingProps {
  children: ReactNode;
  tone?: "dark" | "light";
}

export default function SectionHeading({
  children,
  tone = "dark",
}: SectionHeadingProps) {
  return (
    <HeadingWrap>
      <HeadingTitle $tone={tone}>{children}</HeadingTitle>
    </HeadingWrap>
  );
}
