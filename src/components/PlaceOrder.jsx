import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

export const PlaceOrder = () => {
  const [isCancle, setIsCancle] = useState("block");

  function handleCancle() {
    setIsCancle("hidden");
  }

  return (
    <div
      className={`${isCancle} mx-4 sm:mx-auto p-2 border border-black shadow-md rounded-xl`}
    >
      <div className="flex justify-end">
        <RxCross1
          className="text-xl active:scale-75 transition cursor-pointer "
          onClick={handleCancle}
        />
      </div>
      <div className="flex flex-col text-center p-10 gap-y-4">
        <span className="text-xl cursor-pointer">Your order is Placed</span>
        <span className="text-xl cursor-pointer">Thanx for Shipping.</span>
        <Link
          to="/home"
          type="button"
          className="py-2 px-4 border border-blue-600 bg-blue-100 rounded-lg text-blue-800 active:text-white active:bg-blue-500 transition cursor-pointer md:hover:bg-blue-400 md:hover:text-white md:active:bg-blue-800 "
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
};
