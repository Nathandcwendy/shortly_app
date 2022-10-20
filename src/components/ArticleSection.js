import React from "react";
import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";

const ArticleSection = () => {
  return (
    <div>
      <section className="w-full flex flex-col items-center mb-[6rem]">
        <h2 className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-[2.6rem] mb-6">
          Advanced Statistics
        </h2>
        <p className="w-full xxs:w-11/12 xsm:w-5/6 lg:w-3/4 3lg:w-7/12 text-base xsm:leading-[1.8] sm:text-lg sm:leading-[1.8] lg:text-xl lg:leading-[1.8] xsm:px-4 text-center text-GrayishViolet">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </section>
      <div
        id="articles-container"
        className="relative mb-[4rem] sm:mb-[6rem] grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-y-16 lg:gap-y-0 gap-x-6"
      >
        <div className="relative z-10 bg-white w-full px-7 md:px-9 lg:px-[2.4rem] pb-10 rounded-md h-max">
          <div className="relative top-0 left-1/2 lg:left-auto transform -translate-y-1/2 -translate-x-1/2 lg:translate-x-0 bg-DarkViolet w-max p-5 rounded-full">
            <img
              className="w-[40px] h-[40px]"
              src={brandRecognition}
              alt="chart-icon"
            />
          </div>
          <div className="-mt-4">
            <h3 className="font-bold text-xl mb-4 text-center lg:text-left">
              Brand Recognition
            </h3>
            <p className="text-sm xxs:text-base md:text-base text-GrayishViolet text-center lg:text-left">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="relative z-10 bg-white w-full px-7 md:px-9 lg:px-[2.4rem] pb-10 rounded-md md:mt-0 lg:mt-10 h-max">
          <div className="relative top-0 left-1/2 lg:left-auto transform -translate-y-1/2 -translate-x-1/2 lg:translate-x-0 bg-DarkViolet w-max p-5 rounded-full">
            <img
              className="w-[40px] h-[40px]"
              src={detailedRecords}
              alt="chart-icon"
            />
          </div>
          <div className="-mt-4">
            <h3 className="font-bold text-xl mb-4 text-center lg:text-left">
              Detailed Records
            </h3>
            <p className="text-sm xxs:text-base md:text-base text-GrayishViolet text-center lg:text-left">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>
        <div className="relative z-10 bg-white w-full px-7 md:px-9 lg:px-[2.4rem] pb-10 rounded-md md:mt-0 lg:mt-[5rem] h-max">
          <div className="relative top-0 left-1/2 lg:left-auto transform -translate-y-1/2 -translate-x-1/2 lg:translate-x-0 bg-DarkViolet w-max p-5 rounded-full">
            <img
              className="w-[40px] h-[40px]"
              src={fullyCustomizable}
              alt="chart-icon"
            />
          </div>
          <div className="-mt-4">
            <h3 className="font-bold text-xl mb-4 text-center lg:text-left">
              Fully Customizable
            </h3>
            <p className="text-sm xxs:text-base md:text-base text-GrayishViolet text-center lg:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
        <div className="absolute z-0 top-0 lg:top-1/2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 -translate-y-7 w-2 lg:w-full h-full lg:h-2 bg-[#2BD0D0]"></div>
      </div>
    </div>
  );
};

export default ArticleSection;
