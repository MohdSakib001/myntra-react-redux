import React from "react";
import { Link } from "react-router-dom";

export const EmptyBag = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-4 mt-10 ">
      <span>You did not add anything to the cart</span>
      <Link
        to="/home"
        type="button"
        className="py-2 px-4 border border-blue-600 bg-blue-100 rounded-lg text-blue-800 active:text-white active:bg-blue-500 transition cursor-pointer md:hover:bg-blue-400 md:hover:text-white md:active:bg-blue-800"
      >
        Continue shopping
      </Link>
    </div>
  );
};
