import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "School Registration System",
  description: "Online school registration and management website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
