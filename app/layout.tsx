import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import NavButtons from "@/components/NavButtons";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Software Engineer, FinTech Systems - Oladimeji Balogun",
  description:
    "Oladimeji balogun- Software engineer.",
    alternates: {
    canonical: "https://www.portfoliodev.engineer/"
  },
  openGraph: {
    title: "Oladimeji Balogun - Software Engineer",
    description: "finance Undergradutate | FinTech Systems | Researcher | Co Tech lead at WebDevConstruct",
    url: "https://www.portfoliodev.engineer",
    siteName: "Oladimeji Balogun - Software Engineer",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${mono.variable} font-body bg-offwhite text-ink antialiased`}
      >
        <NavButtons />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
