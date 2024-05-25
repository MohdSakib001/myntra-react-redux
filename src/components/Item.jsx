import React from "react";
import { bagActions } from "../store/bagSlice";
import { useDispatch, useSelector } from "react-redux";
import { ItemButton } from "./ItemButton";

export const Item = ({ item }) => {
  const dispatch = useDispatch();

  const bag = useSelector((store) => store.Bag);

  function handleAddToBag() {
    dispatch(bagActions.addToBag(item.id));
  }
  function handleRemoveFromBag() {
    dispatch(bagActions.removeFromBag(item.id));
  }

  return (
    <div className=" transition w-4/6 sm:max-w-60 md:max-w-64 shadow-lg rounded-md mx-auto my-3">
      <img
        src={item.image}
        alt="image"
        className="rounded-t-md mx-auto cursor-pointer"
      />

      <div className="px-2 py-1">
        <div className="font-bold text-sm mb-2">
          <span className="cursor-pointer">
            {item.rating.stars} ⭐ | {item.rating.count}
          </span>
        </div>

        <div className="mb-1 ">
          <div className="font-semibold block">
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

        {bag.includes(item.id) ? (
          <ItemButton
            method={handleRemoveFromBag}
            text="Remove from Cart"
            color="red"
          />
        ) : (
          <ItemButton
            method={handleAddToBag}
            text="Add to Cart"
            color="green"
          />
        )}
      </div>
    </div>
  );
};
