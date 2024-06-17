import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import MagicButton from "./ui/MagicButton";
import { FaTools } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[80vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="absolute -bottom-[7rem] -right-[6rem]">
        <Image
          src={"/hero-paralax.png"}
          width={800}
          height={400}
          alt="decoration"
        />
      </div>
      <div className="w-full items-center md:items-start md:px-8 flex flex-col">
        <h1
          className={cn(
            "md:text-4xl text-xl w-full md:w-[50%] px-4 text-wrap text-center font-bold text-white relative z-20"
          )}
        >
          Get the Latest Insights on PC Hardware and Build Your Dream Machine
        </h1>
        <p className="text-center mt-2 w-full md:w-[50%] text-wrap text-neutral-300 relative z-20">
          We provide part selection, pricing, and compatibility guidance for
          do-it-yourself computer builders.
        </p>
        <div className="w-max md:w-[50%] flex justify-center py-4">
          <MagicButton
            text="Build Your Workstation"
            icon={<FaTools />}
            position="left"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
