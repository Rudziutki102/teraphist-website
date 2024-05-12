"use client";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const HeroSection = () => {
  return (
    <div id="hero" className="section relative pt-[11rem] -mt-[8rem]">
      <div
        className="
        flex
        relative 
        overflow-hidden 
        w-full 
        bg-fixed
        bg-hero-section-bg 
        bg-cover 
        bg-bottom 
        bg-no-repeat 
        z-1
      before:content-['']
      before:absolute
      before:inset-0
      before:block
      before:bg-gradient-to-b
      before:from-gray-900
      before:to-black
      before:opacity-75
      before:z-[-5]
"
      >
        <Tilt tiltMaxAngleY={1} tiltMaxAngleX={0}>
          <div className="flex p-12 flex-wrap flex-col-reverse md:flex-row">
            <div className="flex flex-1 relative justify-center">
              <Image
                src="/hero.png"
                alt="Wiktoria Nowak"
                width={500}
                height={400}
                className="z-15 relative -bottom-14"
              />
            </div>
            <div className="flex flex-1 justify-center items-center flex-col">
              <div className="relative group text-center">
                <h1 className="h1">Hero section</h1>
                <p className="text-xl font-semibold text-gray-300 tracking-wide text-center">
                  Vestibulum elementum arcu id justo ultricies fermentum quis et
                  risus. Suspendisse nibh elit, tincidunt eget placerat blandit,
                  imperdiet eget ligula. Phasellus dignissim nisl eu dolor
                  ullamcorper, non tempor justo ultricies. Ut gravida diam quis
                  lacus viverra molestie.
                </p>
                <div className="b mt-4 mx-auto h-16 w-64 flex justify-center items-center">
                  <div className="i h-16 w-64 bg-gradient-to-br from-color-1 to-color-2 items-center rounded-full shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
                  <a className="text-center text-white font-semibold z-10 pointer-events-none text-xl">
                    Skontaktuj się z Nami
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default HeroSection;
