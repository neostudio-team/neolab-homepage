import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { i18n, Locale } from "@/i18n/config";
import GlobalPopups from "@/components/GlobalPopups";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const siteTitle: Record<string, string> = {
  ko: "NeoLab Convergence",
  en: "NeoLab Convergence",
  ja: "NeoLab Convergence",
};

const siteDescription: Record<string, string> = {
  ko: "아날로그와 디지털을 잇는 네오랩 컨버전스입니다.",
  en: "A Gateway Bridging the Physical and Virtual Worlds.",
  ja: "アナログとデジタルをつなぐNeoLab Convergenceです。",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: siteTitle[lang] ?? "NeoLab Convergence",
    description: siteDescription[lang] ?? siteDescription.en,
    icons: { icon: "/favicon.ico" },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5865P9Q0K2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5865P9Q0K2');
          `}
        </Script>
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <GlobalPopups />
        {children}
      </body>
    </html>
  );
}
