import React from "react";

const SpecialDivisionElement = ({ image, desc }) => {
  return (
    <div className="max-lg:w-30 flex flex-col items-center gap-5 max-lg:h-40 max-lg:gap-3">
      <a
        className="overflow-hidden rounded-full bg-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:shadow-xl"
        href="#"
      >
        <img className="rounded-full" src={image} alt="6 Image" />
      </a>
      <h1 className="text-xl font-semibold max-lg:text-sm">{desc}</h1>
    </div>
  );
};

export default SpecialDivisionElement;
