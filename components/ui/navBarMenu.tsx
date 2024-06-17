"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowAltCircleDown } from "react-icons/fa";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon,
  children,
  towable = true,
  link,
  otherClasses,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon?: ReactNode;
  children?: React.ReactNode;
  towable?: boolean;
  link?: string;
  otherClasses?: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.div
        transition={{ duration: 0.3 }}
        className={`cursor-pointer flex items-center justify-center text-black hover:opacity-[0.9] hover:scale-[1.1] dark:text-white transition-all antialiased ${otherClasses}`}
      >
        {towable ? (
          <div className="flex gap-2 items-center text-[1rem]">
            {icon}
            {item} <FaArrowAltCircleDown />
          </div>
        ) : (
          <div className="flex gap-2 items-center text-[1rem]">
            {icon}
            <Link href={`/${link}`}>{item}</Link>
          </div>
        )}
      </motion.div>
      {active !== null && towable && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative w-full h-full  border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-between items-center space-x-4 px-8 py-2 drop-shadow-md"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  href,
  src,
  icon,
}: {
  title: string;
  href: string;
  src?: string;
  icon?: ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col p-2 items-center h-max space-x-2 shadow-md rounded-md transition-all hover:shadow-xl"
    >
      <div className="rounded-md w-[6rem] h-[5rem] bg-transparent flex justify-center items-center text-2xl font-bold">
        {icon ? (
          icon
        ) : (
          <img
            src={src}
            alt={title}
            className="w-full h-full rounded-md object-fill bg-transparent"
          />
        )}
      </div>
      <div className="m-0 p-0 w-full contents px-2">
        <h4 className="text-xl w-full m-0 p-0 font-bold text-black dark:text-white text-center">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black "
    >
      {children}
    </Link>
  );
};
