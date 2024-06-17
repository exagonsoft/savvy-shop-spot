import React from "react";
import MagicButton from "../ui/MagicButton";
import { FaEye } from "react-icons/fa";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { ideas } from "@/data/mocks/ideas";

const IdeasSection = () => {
  return (
    <section
      id="hero"
      className="h-auto relative w-full overflow-hidden flex flex-col items-center justify-start py-20 gap-8"
    >
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-4xl text-xl w-full px-4 text-wrap text-center font-bold text-white relative z-20">
          Powerful Ideas
        </h1>
        <p className="text-center mt-2 w-full text-wrap text-neutral-300 relative z-20">
          In this section you will find some ideas to build your dream PC. Our
          specialists have created some of the most successful configurations
          that are also affordable in price.
        </p>
        <div className="w-[50%] md:w-full flex justify-center items-center"><MagicButton text="Check More Ideas" icon={<FaEye />} position="left"/></div>
        
      </div>
      <div className="h-max py-20 w-full  rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-x-hidden">
        <InfiniteMovingCards items={ideas} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default IdeasSection;
