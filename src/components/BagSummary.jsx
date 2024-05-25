import React from "react";
import { useSelector } from "react-redux";

export const BagSummary = ({ handlePlaceOrder }) => {
  const bagItems = useSelector((store) => store.Bag);
  const itemsList = useSelector((store) => store.Items);

  const currentItems = itemsList.filter((item) => bagItems.includes(item.id));

  let totalMRP = 0;
  let totalDiscount = 0;
  currentItems.forEach((element) => {
    // Calculating total price on MRP
    totalMRP += element.original_price;

    // Calculating total discount on every item
    totalDiscount += element.original_price - element.current_price;
  });

  const bagSummary = {
    totalItem: bagItems.length,
    totalPrice: totalMRP,
    MRPDiscount: totalDiscount,
    convenienceFee: 99,
  };

  return (
    <div className="shadow-md mx-2 my-10 lg:my-2 max-w-lg lg:max-w-full lg:w-2/5 p-2 rounded-lg lg:h-5/6">
      <div className="border-b-[1px] border-gray-400 space-y-2 py-2">
        <span className="text-sm text-gray-600">
          PRICE DETAILS ({bagSummary.totalItem} Items)
        </span>
        <div className="flex justify-between">
          <span className="cursor-pointer">Total MRP</span>
          <span className="cursor-pointer">Rs. {bagSummary.totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="cursor-pointer">Discount on MRP</span>
          <span className="cursor-pointer text-lime-600">
            Rs. -{bagSummary.MRPDiscount}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="cursor-pointer">Total after Discount</span>
          <span className="cursor-pointer ">
            Rs. {bagSummary.totalPrice - bagSummary.MRPDiscount}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="cursor-pointer">Convenience Fee</span>
          <span className="cursor-pointer">
            Rs. {bagSummary.convenienceFee}
          </span>
        </div>
      </div>

      <div className="space-y-5 my-2">
        <div className="flex justify-between font-semibold">
          <span className="cursor-pointer">Total Amount</span>
          <span className="cursor-pointer">
            Rs.{" "}
            {bagSummary.totalPrice -
              bagSummary.MRPDiscount +
              bagSummary.convenienceFee}
          </span>
        </div>
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="bg-red-400 text-white py-2 rounded-lg w-full active:bg-red-500 md:hover:bg-red-500 md:active:bg-red-400"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};
