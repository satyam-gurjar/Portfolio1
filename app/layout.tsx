import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Satyam Gurjar",
  description: "Portfolio site",
  icons: {
    icon: "/vite.svg",
  },
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
