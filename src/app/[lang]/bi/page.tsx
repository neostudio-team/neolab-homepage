import { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import CiBiPage from "@/features/cibi/CiBiPage";

export const metadata: Metadata = {
  title: "CI/BI (브랜드 가이드라인) | 네오랩컨버전스",
  description: "네오랩 컨버전스의 브랜드 가이드라인",
};

export default async function BiPage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <CiBiPage lang={lang} />;
}
