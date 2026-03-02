import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://adc.vmamritakochi.in'),
  title: "Amrita Design Conclave",
  description: "A two day immersive conclave bringing students, designers, and industry professionals together.",
  keywords: ["Amrita Design Conclave", "Design", "Conclave", "Design Event", "Kochi", "Kerala", "UI/UX", "Industry", "Academia"],
  openGraph: {
    title: "Amrita Design Conclave",
    description: "A two day immersive conclave bringing students, designers, and industry professionals together.",
    url: "https://adc.vmamritakochi.in",
    siteName: "Amrita Design Conclave",
    images: [
      {
        url: "/assets/backgrounds/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Amrita Design Conclave",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amrita Design Conclave",
    description: "A two day immersive conclave bringing students, designers, and industry professionals together.",
    images: ["/assets/backgrounds/hero-bg.png"],
  },
  icons: {
    icon: "/other/1.svg",
    shortcut: "/other/1.svg",
    apple: "/other/1.svg",
  },
};

import Preloader from "./components/Preloader";
import BackToTop from "./components/BackToTop";
import DynamicFavicon from "./components/DynamicFavicon";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased">
        <DynamicFavicon />
        <Preloader />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
