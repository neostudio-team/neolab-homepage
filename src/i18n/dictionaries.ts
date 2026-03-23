import type { Locale } from "./config";

const dictionaries = {
  en: () => import("@/locales/en").then((m) => m.default),
  ko: () => import("@/locales/ko").then((m) => m.default),
  ja: () => import("@/locales/ja").then((m) => m.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
