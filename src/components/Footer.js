import React from "react";
import FooterMain from "./FooterMain";
import PreFooter from "./PreFooter";

const Footer = () => {
  return (
    <div className=" relative flex flex-col items-center">
      <div
        className="bg-mob-boostImg sm:bg-desk-boostImg bg-DarkViolet
       bg-bg-once bg-no-repeat w-screen max-w-[1440px] py-[5rem] sm:py-14 flex flex-col items-center"
      >
        <PreFooter />
      </div>
      <div className="bg-VeryDarkViolet bg-no-repeat w-screen max-w-[1440px] py-14 sm:pt-8 sm:pb-16 flex flex-col items-center">
        <FooterMain />
        <a
          href="https://www.frontendmentor.io/profile/Nathandcwendy"
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-0 left-auto text-Cyan text-base pb-3 md:text-xl lg:text-2xl hover:cursor-pointer transition hover:brightness-125"
        >
          Coded By Nate
        </a>
      </div>
    </div>
  );
};

export default Footer;
