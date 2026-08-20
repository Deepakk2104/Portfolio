import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://deepakk2104.github.io"),
  title: { default: "Deepak Kumar — Full Stack Developer", template: "%s · Deepak Kumar" },
  description: "Full Stack Developer specializing in React, Next.js, Node.js and Firebase. Building fast, scalable, production-grade web applications.",
  keywords: ["Deepak Kumar", "Full Stack Developer", "React Developer", "Next.js Portfolio"],
  openGraph: {
    title: "Deepak Kumar — Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js and Firebase.",
    url: "https://deepakk2104.github.io",
    siteName: "Deepak Kumar",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
