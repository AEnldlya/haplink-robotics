import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { PageTransition } from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HapLink | Team 26532",
  description: "FIRST Tech Challenge robotics team. Eight students, one robot, infinite innovation. State champions building the future.",
  keywords: ["robotics", "FIRST Tech Challenge", "Team 26532", "HapLink", "Happy Haptic Doctors"],
  authors: [{ name: "Team 26532" }],
  openGraph: {
    title: "HapLink | Team 26532",
    description: "Eight students. One robot. Infinite innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0A1628] text-[#F0F4F8] antialiased overflow-x-hidden">
        <SmoothScroll>
          <Navigation />
          <PageTransition>
            {children}
          </PageTransition>
        </SmoothScroll>
      </body>
    </html>
  );
}
