import React from "react";
import Banner from "../Components/banner";

const FeaturedBrands = () => {
  const brands = [
    "/images/cazysoft.jpg",
    "/images/Cefdis.jpg",
    "/images/alerout.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/colostrum.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
  ];

  const repeatedBrands = [...brands, ...brands]; // duplicate for infinite loop

  return (
    <div className="w-full pt-10 flex flex-col items-center bg-white overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 5s linear infinite;
        }
        // .animate-marquee:clicked {
        //   animation-play-state: paused;
        // }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 8s !important;
          }
        }
      `}</style>

      <h1 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800">
        Featured Brands
      </h1>

      <div className="w-full overflow-hidden relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {repeatedBrands.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 sm:w-40 md:w-48 lg:w-56 h-24 sm:h-28 md:h-32 lg:h-36 mx-3 sm:mx-4 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center"
            >
              <img
                src={src}
                alt={`brand-${index}`}
                className="max-h-full max-w-full object-contain p-2"
              />
            </div>
          ))}
        </div>
      </div>
      <Banner/>
    </div>
  );
};

export default FeaturedBrands;
