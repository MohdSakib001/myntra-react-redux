import React from "react";
import { RxCross1 } from "react-icons/rx";
import { BsFillPersonFill } from "react-icons/bs";
import { Category } from "./Category";
import { useGetAuth } from "../hooks/useGetAuth";

export const Sidebar = ({ handleHamburger, hamburger }) => {
  const { userAuth } = useGetAuth();

  return (
    <div
      className={`sm:w-1/5 absolute sm:relative h-screen w-full bg-gray-100 py-2 px-4 ${
        hamburger ? "translate-x-0" : "-translate-x-full"
      }  transition ease-out duration-300 z-20 sm:translate-x-0`}
    >
      <div className="flex items-center justify-between sm:justify-start border-b-[1px] border-gray-300 py-2 mb-5">
        <RxCross1
          className="text-2xl sm:hidden active:scale-90 transition z-20"
          onClick={handleHamburger}
        />
        <div className="flex gap-x-3 sm:gap-x-1 items-center sm:justify-between md:w-full">
          <p className="text-sm font-semibold lg:text-lg transition cursor-pointer">
            {userAuth.name !== null ? `${userAuth.name}` : "Guest"}
          </p>

          {userAuth.photoURL !== null ? (
            <img
              src={userAuth.photoURL}
              alt=""
              className="rounded-full w-9 md:w-10 cursor-pointer"
            />
          ) : (
            <div className="flex items-center bg-pink-300 p-1 rounded-full active:scale-90 transition hover:cursor-pointer">
              <BsFillPersonFill className="text-3xl text-red-500" />
            </div>
          )}
        </div>
      </div>

      <Category />
    </div>
  );
};
