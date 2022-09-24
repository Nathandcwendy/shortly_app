import React from "react";
import HeroSection from "./HeroSection";
import MainBottom from "./MainBottom";

const Main = ({ size }) => {
  return (
    <div className="relative w-full antialiased h-auto flex flex-col items-center">
      <div className="w-screen flex flex-col items-center mb-16 md:bg-illustration md:bg-70% 2lg:bg-60% xl:bg-50% bg-no-repeat max-w-[1440px] md:bg-[right_-6rem_center] lg:bg-[right_-9rem_center]">
        <div className="md:hidden bg-illustration h-[325px] xs:h-[350px] w-full bg-xxs% xxs:bg-xs% xs:bg-80% xsm:bg-90% sm:bg-contain bg-no-repeat bg-[left_1rem_center] xxs:bg-[right_-10rem_center] xs:bg-[right_-7rem_center] xsm:bg-center"></div>
        <HeroSection />
      </div>
      <div className="w-screen flex flex-col items-center justify-start max-w-[1440px] bg-gray-200 mt-16 md:gap-y-12">
        <MainBottom size={size} />
      </div>
    </div>
  );
};

export default Main;
//  lg:bg-60%
