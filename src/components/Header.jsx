import React from "react";
import logo from "/images/myntra_logo.webp";
import { BiSearchAlt2 } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = ({ handleHamburger }) => {
  // Using the slice to read from store
  const bagItems = useSelector((store) => store.Bag);

  return (
    <header className="w-full sm:w-9/12 px-2 shadow-md fixed bg-white top-0 z-10">
      <nav className="flex items-center justify-between py-2">
        <div className="flex items-center">
          <RxHamburgerMenu
            className="text-2xl sm:hidden active:scale-90 transition"
            onClick={handleHamburger}
          />

          <Link to="/home">
            <img
              src={logo}
              alt=""
              className="max-w-10 ml-1 hover:cursor-pointer"
            />
          </Link>
        </div>

        <div className="flex items-center justify-end p-2 gap-1 rounded-md mx-1 w-2/3 sm:w-2/3 bg-gray-100">
          <input
            type="text"
            className="w-full min-w-10 bg-gray-100 focus:outline-none"
            placeholder="Search brands and products"
          />

          <BiSearchAlt2 className="text-2xl active:scale-90 transition hover:cursor-pointer" />
        </div>

        <div className="flex gap-x-2 sm:gap-x-5 items-center px-2 sm:px-5 justify-between">
          <AiOutlineHeart className="text-2xl active:scale-90 transition hover:cursor-pointer" />
          <div className="relative">
            <Link to="/bag">
              <BsBag className="text-2xl active:scale-90 transition hover:cursor-pointer" />
              <div className="absolute -top-3 -right-3 bg-red-500 rounded-full px-[6px] text-sm text-white">
                {bagItems.length}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
