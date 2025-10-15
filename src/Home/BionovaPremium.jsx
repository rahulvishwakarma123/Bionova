import React from "react";
import ProductCards from "../Components/ProductCards";

const BionovaPremium = () => {
  return (
    <div className="gap relative z-30 flex h-screen w-full flex-col items-center justify-center gap-10 overflow-hidden text-white max-lg:h-[50vh] max-lg:p-2 max-lg:gap-8">
      <video
        className="absolute left-0 top-0 -z-20 h-full w-full max-lg:h-[50vh] object-cover"
        loop
        autoPlay
        muted
        src="bionova.mp4"
      ></video>
      <div className="absolute left-0 top-0 -z-20 min-h-full w-full bg-black/80 "></div>


      <h1 className="text-4xl font-bold max-lg:text-xl max-lg:font-semibold">BECOME A BIONOVA PREMIUM RETAILER</h1>
      <p className="max-lg:text-lg text-center max-lg:-mt-6">Expand your business and maximize your earnings</p>
      <div className="flex items-center justify-center gap-20 flex-wrap max-lg:gap-7">
        <div className="flex items-center justify-center gap-20 flex-wrap max-lg:gap-7">
           <ProductCards product={"Tablets"} image={"images/feutre-img1.jpg"} />
            <ProductCards product={"Capsules"} image={"images/feutre-img2.jpg"} />
        </div>
        <div className="flex items-center justify-center gap-20 flex-wrap max-lg:gap-7">
            <ProductCards product={"Powder"} image={"images/feutre-img3.jpg"} />
            <ProductCards product={"Liquid"} image={"images/feutre-img4.jpg"} />
        </div>
      </div>
    </div>
  );
};

export default BionovaPremium;
