import type { Metadata } from "next";
import localFont from "next/font/local";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";
import Navbar from "@/components/ui/Navbar/Navbar";
import Footer from "@/sections/home/Footer/Footer";
import AdsPanel from "@/sections/home/AdsPanel/AdsPanel";

const tajawal = localFont({
  src: "./fonts/Tajawal-Regular.ttf",
  variable: "--font-tajawal",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arab Code Academy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ChakraProvider>
        <body className={`${tajawal.variable}`}>
          <AdsPanel
            startDate="2024-10-20T00:00:00Z"
            endDate="2025-01-29T23:59:59Z"
            adText="خصومات بنسبة 20% على الكورسات"
          />
          <Navbar />
          {children} <Footer />
        </body>
      </ChakraProvider>
    </html>
  );
}
