"use client";

import { scrollViewportToTopSmooth } from "@/lib/browser-runtime";
import { ToTopButton } from "./Footer.styles";
import { Icon } from "@iconify/react";

export default function BackToTopButton() {
  const handleClick = () => {
    scrollViewportToTopSmooth();
  };

  return (
    <ToTopButton type="button" aria-label="맨 위로" onClick={handleClick}>
      <Icon icon="fluent-emoji-high-contrast:top-arrow" width={32} height={32} aria-hidden />
    </ToTopButton>
  );
}
