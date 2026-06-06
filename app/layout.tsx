import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://satyamgurjar.engineer"),

  title: "Satyam Gurjar AI Engineer Portfolio",

  description:
    "AI Engineer specializing in Generative AI, LLMs, RAG systems, AI agents, machine learning, and full-stack AI applications.",

  keywords: [
    "Satyam Gurjar",
    "satyamgurjar.engineer",
    "satyam gurjar portfolio",
    "Satyam Gurjar AI Engineer",
    "AI Engineer",
    "Generative AI",
    "LLM",
    "RAG",
    "AI Agents",
    "Machine Learning",
    "Python",
    "LangChain",
    "Next.js",
  ],

  openGraph: {
    title: "Satyam Gurjar | AI Engineer",
    description:
      "Portfolio showcasing AI projects, LLM applications, RAG systems, AI agents, and machine learning solutions.",
    url: "https://satyamgurjar.engineer",
    siteName: "Satyam Gurjar Portfolio",
    type: "website",
  },

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