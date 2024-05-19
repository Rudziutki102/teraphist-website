import React from "react";
import Image from "next/image";
import { LuMapPin } from "react-icons/lu";
import { MdPhone } from "react-icons/md";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="section relative p-20 bg-color-2">
      <div className="flex items-center lg:flex-row flex-col justify-between">
        <div className="flex flex-1 flex-col justify-center lg:items-end lg:mr-10 text-center">
          <h1 className="text-3xl font-semibold mb-5">Skontaktuj się</h1>
          <a
            className="flex justify-center items-center my-1"
            href="https://maps.app.goo.gl/iVn7pKobzNoqWMCS9"
          >
            <LuMapPin />
            <span className="ml-2">Anieli Krzywoń 18, 70-820 Szczecin</span>
          </a>
          <a
            className="text-lg flex justify-center items-center my-1"
            href="tel:510300139"
          >
            <MdPhone />
            <span className="ml-2">510300139</span>
          </a>
        </div>
        <div className="relative size-56">
          <Image src="/Logo.png" fill={true} alt="logo"></Image>
        </div>
        <div className="flex flex-1 flex-col lg:ml-10">
          <h1 className="text-3xl font-semibold mb-5">Sprawdź nas na</h1>
          <a
            className="flex items-center my-1"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100087984004069"
          >
            <FaFacebookF className="text-lg" />
            <span className="ml-2">manualne centrum terapii ciala</span>
          </a>
          <a
            className="flex items-center my-1"
            target="_blank"
            href="https://www.instagram.com/manualne.centrum.terapii.ciala?igsh=ZXlqa2EzNG5hbHhx"
          >
            <FaInstagram className="text-lg" />
            <span className="ml-2">manualne.centrum.terapii.ciala</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
