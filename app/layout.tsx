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
  title: "HapLink | Happy Haptic Doctors - Team 26532",
  description: "FIRST Tech Challenge robotics team bringing haptic technology to life. Experience concerts and events through innovative haptic wearables.",
  keywords: ["robotics", "FIRST Tech Challenge", "haptic technology", "Team 26532", "HapLink"],
  authors: [{ name: "HapLink Robotics" }],
  openGraph: {
    title: "HapLink | Happy Haptic Doctors",
    description: "Bringing haptic technology to life through robotics innovation",
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
      <body className="bg-[#050A15] text-[#F0F4F8] antialiased overflow-x-hidden">
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
