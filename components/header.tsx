"use client";
import { links } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import BurgerMenu from "./burger-menu";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
export default function Header() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const moveToSection = () => {
    setOpenNavigation(false);
    enablePageScroll();
  };
  return (
    <div className="fixed top-0 left-0 w-full lg:bg-color-5/90 lg:backdrop-blur-sm z-5 bg-color-5/95">
      <div className="flex items-center justify-between px-1 py-3 lg:px-10 lg:py-3">
        <a href="#hero" className="inline-flex items-center">
          <Image
            className="hidden lg:block"
            src="/Logo.png"
            width={50}
            height={30}
            alt="logo"
          ></Image>
          <span className="relative mx-2 lg:mx-4 font-semibold uppercase text-lg lg:text-2xl z-1">
            Centrum Terapii Ciała
            <span className="absolute top-0 -left-[.45rem] size-4 z-0 border-t-[1px] border-l-[1px] lg:hidden"></span>
            <span className="absolute bottom-0 -right-[.45rem] size-4 z-0 border-b-[1px] border-r-[1px] lg:hidden"></span>
          </span>
        </a>
        <nav
          className={`fixed lg:static ${
            openNavigation ? "flex" : "hidden"
          } top-[3.70rem] bottom-0 right-0 left-0 z-5 bg-color-5/95 lg:bg-transparent lg:flex lg:top-0`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {links.map(({ name, hash }) => (
              <a
                onClick={moveToSection}
                className="relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 lg:py-2 lg:text-lg lg:font-semibold lg:text-n-1/50 lg:leading-5 lg:hover:text-n-1 xl:px-6"
                href={hash}
                key={name}
              >
                {name}
              </a>
            ))}
          </div>
        </nav>
        <BurgerMenu
          openNavigation={openNavigation}
          onClick={toggleNavigation}
        />
      </div>
    </div>
  );
}
