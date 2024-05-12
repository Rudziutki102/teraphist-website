"use client";
import React from "react";
import SectionHeader from "./section-header";
import { IoMdQuote } from "react-icons/io";
import Slider from "react-slick";
import { reviews } from "@/lib/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const settings = {
  dots: true,
  accessibility: false,
  fade: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 10000,
  autoplay: true,
  arrows: false,
};

const ReviewList = () => {
  return (
    <div id="review" className="section p-5 lg:p-0">
      <SectionHeader name="Co mówią Nasi klienci" />
      <div className="relative flex justify-center items-center lg:h-96 lg:w-[700px] shadow-2xl mx-auto border border-gray-300 shadow-neutral-700 bg-gray-300 rounded-2xl">
        <div className="p-10 w-full">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div className="flex justify-center" key={index}>
                <p className="text-2xl text-color-5 font-semibold">{review}</p>
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute -top-[3rem] lg:-top-[2.5rem] right-[2rem] lg:right-[3.5rem] p-3 flex justify-center items-center text-5xl lg:text-6xl rotate-180 bg-color-1 rounded-full">
          <IoMdQuote className="fill-color-3" />
        </div>
        <div className="absolute -bottom-[3rem] lg:-bottom-[2.5rem] left-[2rem] lg:left-[3.5rem] p-3 flex justify-center items-center text-5xl lg:text-6xl bg-color-1 rounded-full">
          <IoMdQuote className="fill-color-3" />
        </div>
      </div>
    </div>
  );
};

export default ReviewList;
