/** Design tokens — styled-components와 :root CSS 변수의 단일 소스 */

export const colors = {
  primary: "#FF9900",
  primaryDark: "#d4551a",
  dark: "#1a1a2e",
  grayLight: "#f8f8f8",
  teal: "#1a5c5c",
} as const;

export const semantic = {
  background: "#ffffff",
  foreground: "#111111",
} as const;

export const font = {
  /**
   * `body` 기본 스택. `layout`의 `next/font`(예: --font-open-sans) 앞에 온다.
   * `globals.css`는 `var(--font-sans)`만 참조한다.
   */
  sans: '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
} as const;

export const media = {
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 1024px)",
  xl: "@media (min-width: 1280px)",
} as const;

/** `globals.css`의 `var(--*)`와 맞춤. 레이아웃 `<head>`에 SSR 주입 */
export function rootStyleBlock(): string {
  return `:root {
  --color-primary: ${colors.primary};
  --color-primary-dark: ${colors.primaryDark};
  --color-dark: ${colors.dark};
  --color-gray-light: ${colors.grayLight};
  --color-teal: ${colors.teal};
  --font-sans: ${font.sans};
  --background: ${semantic.background};
  --foreground: ${semantic.foreground};
}`;
}
