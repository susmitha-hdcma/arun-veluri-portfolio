import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arun Veluri — From Systems to AI",
  description:
    "Portfolio of Arun Veluri — software engineering across embedded systems, middleware, automation and modern AI.",
  openGraph: {
    title: "Arun Veluri — From Systems to AI",
    description:
      "Software engineer building across systems, automation and AI.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}