import type { Metadata } from "next";
import { IBM_Plex_Sans_KR } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTopButton } from "@/components/BackToTopButton";
import { PageBackgroundProvider } from "@/contexts/PageBackgroundContext";

const ibmPlexSansKr = IBM_Plex_Sans_KR({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-ibm-plex-sans-kr",
});

export const metadata: Metadata = {
  title: "texttotext",
  description: "Editorial blog — insights, maker stories, and product updates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body
        className={`${ibmPlexSansKr.variable} antialiased min-h-screen flex flex-col font-sans`}
      >
        <PageBackgroundProvider>
          <Header />
          <main className="flex-1 bg-page">{children}</main>
          <Footer />
          <BackToTopButton />
        </PageBackgroundProvider>
      </body>
    </html>
  );
}
