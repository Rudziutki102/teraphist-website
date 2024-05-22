import { BurgerMenuProps } from "@/lib/types";
import React from "react";

const BurgerMenu = ({ openNavigation, onClick }: BurgerMenuProps) => {
  return (
    <div
      onClick={onClick}
      className="relative size-9 mr-2 transition-all duration-600 overflow-hidden lg:hidden"
    >
      <div
        className={`origin-left absolute transition-all w-full h-[3px] bg-color-1 rounded-full top-[15%] ${
          openNavigation ? "rotate-45" : ""
        }`}
      ></div>
      <div
        className={`origin-left absolute transition-all w-3/4 h-[3px] bg-color-1 rounded-full top-[50%]  ${
          openNavigation ? "-right-full" : "right-0"
        }`}
      ></div>
      <div
        className={`origin-left absolute transition-all h-[3px] bg-color-1 rounded-full top-[85%] right-0 ${
          openNavigation ? "w-full -rotate-45" : "w-1/2"
        }`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
