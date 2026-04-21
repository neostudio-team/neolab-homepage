/** Design tokens — use in styled-components (no Tailwind). */
export const colors = {
  primary: "#f26522",
  primaryDark: "#d4551a",
  dark: "#1a1a2e",
  grayLight: "#f8f8f8",
  teal: "#1a5c5c",
} as const;

export const media = {
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
} as const;
