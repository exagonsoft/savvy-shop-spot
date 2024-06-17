"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    caseImage?: string;
    cpuImage: string;
    videoEngineImage: string;
    title: string;
    cpu: string;
    videoCard: string;
    case: string;
    price: number;
    comments: number;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20  max-w-[120%] md:max-w-[90%] overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="group/card pointer-events-none flex flex-col rounded-md shadow-md">
            <a href="/" className="group-target/card"></a>
            <div className="flex flex-col gap-8 rounded-md max-w-[25rem] h-[32rem] bg-white">
              <div className="w-full grid max-h-[16rem] gap-4 justify-between items-center grid-cols-3 p-4">
                <div className=" col-span-2 row-span-2">
                  <img
                    src={`${item.caseImage}`}
                    alt={item.case}
                    className=" object-cover"
                  />
                </div>
                <div className="col-span-1 flex flex-col gap-4 justify-center h-[16rem] items-center overflow-hidden">
                  <div className="row-span-1 overflow-hidden h-[50%]">
                    <img
                      src={`${item.cpuImage}`}
                      alt={item.cpu}
                      className=" object-fill  w-auto h-auto"
                    />
                  </div>
                  <div className=" row-span-1  overflow-hidden h-[50%]">
                    <img
                      src={`${item.videoEngineImage}`}
                      alt={item.videoCard.slice(0, 24)}
                      className=" object-cover w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
              <h1 className="guideGroup font-bold md:text-2xl text-lg w-full text-center min-h-10 py-4 group-hover/card:text-slate-400 transition-all">{item.title}</h1>
              <div className="w-full flex flex-col justify-start items-start">
                <ul className="guide__keyProducts list-unstyled px-4">
                  <li>{item.cpu}</li>
                  <li>{`${item.videoCard.slice(0, 60)}...)`}</li>
                  <li>{item.case}</li>
                </ul>
                <div className="w-full flex justify-between p-2 bg-slate-900 rounded-b-md">
                  <p className="text-white">{`$${item.price}`}</p>
                  <p className="text-white">
                    <span className="text-whites">{`💬${item.comments}`}</span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
