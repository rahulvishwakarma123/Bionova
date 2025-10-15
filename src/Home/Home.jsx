import React from "react";
import Highlights from "./Highlights";
import MedicineSection from "./MedicineSection";
import SpecialityDevision from "./SpecialityDevision";
import BionovaPremium from "./BionovaPremium";
import CoreAspiration from "./CoreAspiration";
import FeaturedBrands from "./FeaturedBrands";
import HeroCarousel from "../Components/HeroCarousel";
import Navbar from "../Components/Navbar1";
const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroCarousel/>
      <Highlights />
      <MedicineSection />
      <SpecialityDevision />
      <BionovaPremium />
      <CoreAspiration />
      <FeaturedBrands/>
    </div>
  );
};

export default Home;
