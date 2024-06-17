"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navBarMenu";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0 w-full rounded-md h-[4.5rem]" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"} className="w-full flex justify-start items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="transition-all antialiased hover:scale-[1.1] w-[150px] h-[60px]"
          />
        </Link>
        <div className="w-full flex justify-center items-center gap-6">
          <MenuItem
            setActive={setActive}
            active={active}
            item="Products"
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="/algochurn.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="/algochurn.webp"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="/algochurn.webp"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Ideas"
            towable={false}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Bundles"
            towable={false}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Trends"
            towable={false}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          ></MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Social"
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="/algochurn.webp"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="/algochurn.webp"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="/algochurn.webp"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
        </div>
        <div className="w-full flex justify-center items-center"></div>
      </Menu>
    </div>
  );
}
