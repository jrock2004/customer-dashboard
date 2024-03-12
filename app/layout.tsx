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
        className={`flex h-full flex-row bg-white text-slate-500 antialiased ${raleway.className}`}
      >
        <MainNav />
        <main className="h-full w-full p-5 md:px-20 md:py-12">{children}</main>
      </body>
    </html>
  );
}
