import React, { useState } from "react";
import { BagSummary } from "../components/BagSummary";
import { BagItemContainer } from "../components/BagItemContainer";
import { useSelector } from "react-redux";
import { EmptyBag } from "../components/EmptyBag";
import { PlaceOrder } from "../components/PlaceOrder";

export const Bag = () => {
  const items = useSelector((store) => store.Items);
  const bag = useSelector((store) => store.Bag);

  // State to place Order if there is any item in the bag
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);

  // Function to place order if there is any item in the bag
  function handlePlaceOrder() {
    if (bag.length > 0) {
      console.log("Order Placed");
      setIsOrderPlaced(!isOrderPlaced);
    }
  }

  const bagList = items.filter((item) => bag.includes(item.id));

  return (
    <div className="flex flex-col lg:flex-row w-full mb-5">
      <div className="w-full space-y-5 lg:mb-5 lg:max-w-full lg:w-3/5">
        {bagList.length === 0 ? (
          <EmptyBag />
        ) : (
          bagList.map((bagItem) => (
            <BagItemContainer key={bagItem.id} item={bagItem} />
          ))
        )}
      </div>

      <BagSummary handlePlaceOrder={handlePlaceOrder} />

      {isOrderPlaced && <PlaceOrder />}
    </div>
  );
};
