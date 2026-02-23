import type { Metadata } from "next";
import { Rajdhani, DM_Sans, Bebas_Neue, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas-neue",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GreenMech Automation | Perfection in Precision",
  description:
    "Premier provider of precision machining solutions specializing in CNC, VMC, and surface grinding. ISO 9001 Certified by TUV India. Based in Coimbatore, Tamil Nadu.",
  keywords: [
    "CNC machining",
    "VMC machining",
    "surface grinding",
    "precision machining",
    "Coimbatore",
    "Tamil Nadu",
    "ISO 9001",
    "aerospace components",
    "oil gas components",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${dmSans.variable} ${bebasNeue.variable} ${shareTechMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
