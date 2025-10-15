import React from "react";

const HighlightsComponent = ({svg, heading, data}) => {
  return (
    <div className="flex w-auto basis-1/2 items-center gap-3 max-lg:flex-col max-lg:items-center">
      <div className="h-13 w-13 flex items-center justify-center rounded-full bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 text-purple-700"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={svg}
          />
        </svg>
      </div>

      <div className="max-lg:text-center">
        <h3 className="text-lg text-pink-500">{heading}</h3>
        <p className="text-2xl font-semibold text-white duration-300 hover:cursor-pointer hover:text-[#fd7e14]">
          {data}
        </p>
      </div>
    </div>
  );
};

export default HighlightsComponent;
