import type { Metadata, ResolvingMetadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import { createClient, repositoryName } from "@/prismicio";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ActionButton from "@/components/ActionButton";
import { PrismicPreview } from "@prismicio/next";

const syne = Syne({ subsets: ["latin"] });

//dynamic metadata 

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title || "Quid finance",
    description: settings.data.meta_description || "Great way to organize your finances.",
    openGraph: {
      images: [settings.data.og_image.url || ""],
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
        <Header />
        {children}
        <ActionButton />
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
