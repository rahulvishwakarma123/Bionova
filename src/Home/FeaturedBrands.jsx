import React from "react";
import Banner from "../Components/Banner";

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
    <div className="flex w-full flex-col items-center overflow-hidden bg-white pt-10">
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

      <h1 className="mb-8 text-2xl font-semibold text-gray-800 md:text-3xl">
        Featured Brands
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {repeatedBrands.map((src, index) => (
            <div
              key={index}
              className="mx-3 flex h-24 w-32 flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white shadow-sm sm:mx-4 sm:h-28 sm:w-40 md:h-32 md:w-48 lg:h-36 lg:w-56"
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
      <Banner />
    </div>
  );
};

export default FeaturedBrands;
