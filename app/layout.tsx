import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savvy Shop Spot",
  description: "Keep your hardware updated with the latest parts of the Market",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarDemo />
        <div className="w-full mt-[4.4rem]">{children}</div>
      </body>
    </html>
  );
}
