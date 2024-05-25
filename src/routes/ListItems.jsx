import React from "react";
import { Item } from "../components/Item";
import { useSelector } from "react-redux";

export const ListItems = () => {
  // Using a slice from store. which returns an array of items
  const items = useSelector((store) => store.Items);

  return (
    <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-14 mt-8">
      {/* Rendring the whole array using map */}
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};
