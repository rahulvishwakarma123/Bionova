import React from "react";
import SpecialDivisionElement from "../Components/SpecialDivisionElement";

const SpecialityDevision = () => {
  return (
    <div className="p-10 max-lg:p-4">
      <h1 className="mb-10 text-center text-3xl font-semibold text-[#46336B]">
        Speciality Divisions
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-5 max-lg:gap-10">
        <SpecialDivisionElement image={'images/1.jpg'} desc={'Gynecology'}/>
        <SpecialDivisionElement image={'images/2.jpg'} desc={'Pediatric'}/>
        <SpecialDivisionElement image={'images/3.jpg'} desc={'Health Supplements'}/>
        <SpecialDivisionElement image={'images/6.jpg'} desc={'General Medicines'}/>
        <SpecialDivisionElement image={'images/10.jpg'} desc={'Clinical Nutrition'}/>
      </div>
    </div>
  );
};

export default SpecialityDevision;
