import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Providers from "./providers";       // <-- client wrapper
import HeaderBar from "@/components/HeaderBar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devyani Khambete, MD, PC",
  description: "Comprehensive pediatric care services in Bloomfield Hills, MI. Expert medical care for children of all ages.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <HeaderBar />      {/* HeaderBar already has "use client" */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
