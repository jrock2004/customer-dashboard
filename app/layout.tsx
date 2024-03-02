import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { MainNavClient } from "@/components/MainNavClient";

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
        className={`flex h-full flex-row bg-white text-slate-500 antialiased ${raleway.className}`}
      >
        <MainNavClient />
        <main className="h-full w-full px-20 py-12">{children}</main>
      </body>
    </html>
  );
}
