import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Kuber - Watch Web Series & Earn Money",
  description: "Experience the ultimate entertainment and earning app. Watch your favorite web series and earn real money from ads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} min-h-full flex flex-col font-sans`}>
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
