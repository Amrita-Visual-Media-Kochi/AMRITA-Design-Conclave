import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Amrita Design Conclave",
  description: "A two day immersive conclave bringing students, designers, and industry professionals together.",
  icons: {
    icon: "/shapes/favicon.svg",
  },
};

import Preloader from "./components/Preloader";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
