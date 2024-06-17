import React from "react";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { FaTools } from "react-icons/fa";
import MagicButton from "../ui/MagicButton";

const Hero = () => {
  return (
    <section id='hero' className="h-[80vh] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-start md:justify-center pt-20">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="absolute bottom-4 rigth-4 md:-bottom-[7rem] md:-right-[6rem] w-[400px] h-[400px] md:w-[800px] md:h-[800px]">
        <img
          src={"/hero-paralax.png"}
          alt="decoration"
          className="object-fill"
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
    </section>
  );
};

export default Hero;
