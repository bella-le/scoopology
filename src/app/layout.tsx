import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "🍦 Scoopology Personality Test",
  description: "The Ice Cream Personality Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
