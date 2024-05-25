import React from "react";

export const Category = () => {
  const category = [
    "Mens",
    "Womens",
    "Kinds",
    "Home & Living",
    "Beauty",
    "Gift Card",
    "Studio",
  ];

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-semibold">
        <span className="cursor-pointer">Category</span>
      </h2>
      <ul className="font-semibold space-y-4">
        {category.map((item, index) => (
          <li key={index}>
            <span className="hover:cursor-pointer hover:border-b-[1px] border-gray-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
