import type { Metadata, ResolvingMetadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";

const syne = Syne({ subsets: ["latin"] });

//dynamic metadata 

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: page.data.site_title || "Quid finance",
    description: page.data.meta_description || "Great way to organize your finances.",
    openGraph: {
      images: [page.data.og_image.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
      </body>
    </html>
  );
}
