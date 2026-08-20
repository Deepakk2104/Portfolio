import type { SitemapIndex, SitemapUrl } from "next";

export const metadata = {
  openGraph: {
    title: "Deepak Kumar — Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, Node.js and Firebase.",
  },
};

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  const sitemap: SitemapIndex = {
    urls: [
      {
        loc: "https://deepakk2104.github.io",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 1.0,
      },
    ],
  };

  return {
    sitemap,
  };
}