import { useRef } from "react";
import logo from "../assets/images/logo.svg";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const mobMenu = useRef();
  const handleMenu = (e) => {
    mobMenu.current.classList.toggle("hidden");
    mobMenu.current.classList.toggle("flex");
    e.currentTarget.classList.toggle("text-slate-400");
  };

  return (
    <nav className="relative flex justify-between items-center font-bold text-base mb-4 sm:mb-16">
      <div className="flex space-x-8 items-center">
        <img
          src={logo}
          alt="Logo"
          className="flex justify-center items-center"
        />
        <ul className="hidden sm:flex space-x-6 text-GrayishViolet">
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-black">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-black">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-black">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <BiMenu
          className="sm:hidden h-9 w-9 transform translate-x-[.35rem] text-slate-400"
          onClick={handleMenu}
        />
        <ul className="hidden sm:flex space-x-6 text-GrayishViolet items-center">
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-black">
              Login
            </a>
          </li>
          <li className="py-2 px-6 bg-Cyan text-slate-100 rounded-3xl hover:bg-Cyan-hover hover:cursor-pointer">
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
      <div
        ref={mobMenu}
        id="mobile-menu"
        className="hidden sm:hidden absolute top-full left-1/2 mt-4 transform -translate-x-1/2 py-10 px-6 z-10  flex-col items-center gap-y-8 bg-DarkViolet w-full xsm:w-3/4 rounded-xl"
      >
        <ul className="w-full flex flex-col items-center gap-y-6 text-white">
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-Cyan">
              Features
            </a>
          </li>
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-Cyan">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-Cyan">
              Resources
            </a>
          </li>
        </ul>
        <hr className="bg-slate-500 opacity-30 w-full" />
        <ul className="w-full flex flex-col gap-y-6 text-white items-center">
          <li>
            <a href="/" className="hover:cursor-pointer hover:text-Cyan">
              Login
            </a>
          </li>
          <li className="w-full py-4 px-6 bg-Cyan text-slate-100 rounded-3xl hover:bg-Cyan-hover hover:cursor-pointer text-center">
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
