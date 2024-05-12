import React from "react";

type SectionHeaderProps = {
  name: string;
};
const SectionHeader: React.FC<SectionHeaderProps> = ({ name }) => {
  return (
    <h2 className="my-10 flex justify-center text-3xl tracking-wider text-gray-200 uppercase font-semibold">
      {name}
    </h2>
  );
};

export default SectionHeader;
