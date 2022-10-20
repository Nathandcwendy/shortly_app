import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-11/12 2lg:w-5/6 3lg:w-9/12 py-10 xsm:py-12 lg:py-[7rem]">
      <div className="w-full md:w-1/2 flex items-center md:items-start flex-col gap-y-4 md:gap-y-0">
        <h1 className="text-4xl leading-tight md:text-5xl lg:text-6xl xl:text-7xl md:leading-tight lg:leading-tight xl:leading-tight font-extrabold text-center md:text-left">
          More than just shorter links
        </h1>
        <p className="text-GrayishViolet w-11/12 xsm:w-5/6 lg:w-11/12 md:text-lg lg:text-xl md:mb-8 text-center md:text-left">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="py-2 md:py-3 px-6 md:px-8 bg-Cyan text-white rounded-3xl hover:bg-Cyan-hover hover:cursor-pointer md:text-lg lg:text-xl">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
