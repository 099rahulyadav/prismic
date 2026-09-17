import Link from "next/link";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "../prismicio";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-4xl mx-auto p-6 font-sans">
        <nav className="flex gap-6 mb-8 border-b pb-4 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}