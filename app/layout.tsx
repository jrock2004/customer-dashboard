import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { MainNav } from "@/components/MainNav";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Customer Dashboard",
  description: "A POC to show how NextJS works",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`antialiased h-full text-slate-500 bg-white flex flex-row ${raleway.className}`}
      >
        <MainNav />
        <main className="px-20 py-12 w-full h-full">{children}</main>
      </body>
    </html>
  );
}
