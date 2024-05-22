import React, { useState } from "react";
import Link from "next/link";
import { links } from "@/lib/data";
import Image from "next/image";

type SectionName = (typeof links)[number]["name"];
const NavigationMenu = () => {
  const [activeSection, setActiveSection] = useState<SectionName>("Cennik");
  return (
    <nav className="hidden sm:w-2/3 sm:flex w-50 py-2 items-center gap-10 uppercase">
      <div className="hidden sm:block">
        <Image width={70} quality={95} height={70} src="/Logo.png" alt="Logo" />
      </div>
      <ul className="ml-auto flex gap-10 font-semibold">
        {links.map(({ name, hash }) => (
          <li key={name}>
            <Link
              className={`text-lg tracking-wider text-gray-600 dark:text-gray-200 hover:text-gray-950 dark:hover:text-gray-300`}
              href={hash}
              onClick={() => setActiveSection(name)}
            >
              {name}
            </Link>
            {activeSection === name && (
              <span className="block bg-gray-500 h-1"></span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;
