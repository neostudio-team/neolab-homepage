import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import "../globals.css";
import { i18n, Locale } from "@/i18n/config";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home - NeoLAB Convergence Inc.",
  description: "A Gateway Bridging the Physical and Virtual Worlds. We help you turn handwritten notes, paper documents, and real-world inputs into digital data easily and accurately.",
  icons: {
    icon: "/favicon.ico",
  },
};

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
        {children}
      </body>
    </html>
  );
}
