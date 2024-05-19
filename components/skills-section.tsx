"use client";
import React, { useState } from "react";
import SectionHeader from "./section-header";
import { skills } from "@/lib/data";
const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(skills.length - 1);
  return (
    <div id="skills" className="section px-5">
      <SectionHeader name="Usługi" />
      <div className="w-full lg:w-3/4 mx-auto flex justify-center items-center lg:h-96">
        <div className="flex h-full w-full flex-col lg:flex-row lg:justify-center">
          {skills.map((skill, index) => (
            <div
              className={`relative h-16 lg:h-96 lg:w-24 flex justify-center items-center bg-cover rounded-xl lg:mx-3 my-1 transition-all duration-700 overflow-hidden hover:cursor-pointer bg-bottom-10p ${
                selectedSkill == index && "!h-96 lg:!w-[600px]"
              }`}
              style={{ backgroundImage: `url(${skill.imageUrl})` }}
              onClick={() => setSelectedSkill(index)}
              key={index}
            >
              <span
                className={`absolute transition-opacity uppercase whitespace-nowrap bottom-0 left-1/2 lg:-rotate-90 origin-left text-xl tracking-wider ${
                  selectedSkill == index && "opacity-0"
                }`}
              >
                {skill.name}
              </span>
              <div
                className={`flex flex-col delay-700 duration-500 justify-around relative h-full transition-transform opacity-0 translate-x-full p-3 text-xl  ${
                  selectedSkill === index && "opacity-100 !translate-x-0"
                } `}
              >
                <p>{skill.description}</p>
                <p className="tracking-wider uppercase font-semibold">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
