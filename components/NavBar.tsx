"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem } from "./ui/navBarMenu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import {
  FaBox,
  FaChartLine,
  FaLightbulb,
  FaNewspaper,
  FaQuestion,
} from "react-icons/fa";
import { FaComputer, FaMessage, FaPersonDrowning } from "react-icons/fa6";
import Separator from "./shared/Separator";
import { MdForum } from "react-icons/md";

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
            icon={<FaBox />}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          >
            <div className="text-sm grid grid-cols-3 gap-10 p-4">
              <ProductItem title="CPUs" href="/products" src="/cpu-icon.png" />
              <ProductItem
                title="CPU Coolers"
                href="/products"
                src="/cooler-icon.png"
              />
              <ProductItem
                title="Motherboards"
                href="/products"
                src="/board-icon.png"
              />
              <ProductItem
                title="RAM Cards"
                href="/products"
                src="/ram-icon.png"
              />
              <ProductItem
                title="Storage"
                href="/products"
                src="/storage-icon.png"
              />
              <ProductItem
                title="Graphic Cards"
                href="/products"
                src="/graphic-icon.png"
              />
              <ProductItem
                title="Power Supplies"
                href="/products"
                src="/supply-icon.png"
              />
              <ProductItem
                title="Cases"
                href="/products"
                src="/case-icon.png"
              />
            </div>
          </MenuItem>
          <Separator />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Ideas"
            icon={<FaLightbulb />}
            towable={false}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          ></MenuItem>
          <Separator />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Bundles"
            icon={<FaComputer />}
            towable={false}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          ></MenuItem>
          <Separator />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Trends"
            icon={<FaChartLine />}
            towable={false}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          ></MenuItem>
          <Separator />
          <MenuItem
            setActive={setActive}
            active={active}
            item="Social"
            icon={<FaMessage />}
            otherClasses="uppercase font-bold text-[#2d2e4c]"
          >
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Discussions"
                href="https://algochurn.com"
                icon={<MdForum />}
              />
              <ProductItem
                title="FAQs"
                href="https://tailwindmasterkit.com"
                icon={<FaQuestion/>}
              />
              <ProductItem
                title="News"
                href="https://gomoonbeam.com"
                icon={<FaNewspaper />}
              />
            </div>
          </MenuItem>
        </div>
        <div className="w-full flex justify-center items-center"></div>
      </Menu>
    </div>
  );
}
