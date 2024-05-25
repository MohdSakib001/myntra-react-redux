import React from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";

export const BagItemContainer = ({ item }) => {
  const dispatch = useDispatch();

  function handleRemoveFromBag() {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className="flex shadow-md m-2 max-w-lg  relative rounded-lg">
      <img src={item.image} alt="" className="w-40 cursor-pointer" />

      <div className=" py-5 mx-3">
        <RxCross1
          className="absolute top-2 right-2 text-xl active:scale-75 transition cursor-pointer"
          onClick={handleRemoveFromBag}
        />

        <div className="mb-1">
          <div className="font-semibold">
            <span className="cursor-pointer">{item.company}</span>
          </div>

          <span className="text-sm text-gray-500 cursor-pointer">
            {item.item_name}
          </span>
        </div>

        <div className="space-x-1">
          <span className="font-semibold cursor-pointer">
            Rs. {item.current_price}
          </span>
          <span className="line-through text-sm text-gray-500 cursor-pointer">
            Rs. {item.original_price}
          </span>
          <span className="text-sm text-red-400 cursor-pointer">
            ({item.discount_percentage}% OFF)
          </span>
        </div>

        <div className="space-x-1">
          <span className="font-semibold cursor-pointer">14 Days </span>
          <span className="text-sm text-gray-500 cursor-pointer">
            return available
          </span>
        </div>

        <div className="space-x-1">
          <span className="text-sm cursor-pointer">Delivery By</span>
          <span className="text-sm text-lime-600 cursor-pointer">
            {item.delivery_date}
          </span>
        </div>
      </div>
    </div>
  );
};
