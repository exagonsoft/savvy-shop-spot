import React from "react";
import { InfiniteMovingCards } from "../ui/InfiniteMovingCards";
import { ideas } from "@/data/mocks/ideas";
import MagicButton from "../ui/MagicButton";
import { FaEye } from "react-icons/fa";

const Bundles = () => {
  return (
    <section
      id="bundles"
      className="h-auto relative w-full overflow-hidden flex flex-col items-center justify-start py-20 gap-8"
    >
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-4xl text-xl w-full px-4 text-wrap text-center font-bold text-white relative z-20">
          Interesting Deals
        </h1>
        <p className="text-center mt-2 w-full text-wrap text-neutral-300 relative z-20">
          Configurations Kids: Complete Tech Packs at One Great Price! Our
          provider-curated bundles offer a variety of essential components like
          boards, CPUs, RAM, and more, all combined to give young tech
          enthusiasts everything they need to start their projects easily and
          affordably
        </p>
        <div className="w-[50%] md:w-full flex justify-center items-center">
          <MagicButton
            text="See More"
            icon={<FaEye />}
            position="left"
          />
        </div>
      </div>
      <div className="h-max py-20 w-full  rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-x-hidden">
        <InfiniteMovingCards items={ideas} direction="left" speed="slow" />
      </div>
    </section>
  );
};

export default Bundles;
