import React from "react";
import { CircularText } from "./Icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div 
      className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden
      lg:right-2 lg:left-auto lg:top-0 lg:bottom-auto lg:absolute"
    >
      <div className="w-48 h-auto flex items-center justify-center relative lg:w-24">
        <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />

        <Link
          href="mailto: franco3007199@gmail.com"
          className="flex items-center justify-center text-[12px] lg:w-12 lg:h-12 lg:text-[7px] z-10
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
          border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light first-letter
        hover:text-dark animate-pulse-slow dark:bg-light dark:text-dark hover:dark:bg-dark 
        hover:dark:text-light hover:dark:border-light"
        >
          Contáctame
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
