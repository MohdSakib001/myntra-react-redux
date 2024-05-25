import React from "react";

export const FooterItem1 = () => {
  const OnlineShopping = [
    "Mens",
    "Womens",
    "Kinds",
    "Home & Living",
    "Beauty",
    "Gift Card",
    "Myntra Insider",
  ];
  return (
    <div className="text-center">
      <div className="text-md font-semibold ">
        <span className="hover:cursor-pointer">Online Shopping</span>
      </div>
      <ul className="text-gray-600 text-sm mx-auto">
        {OnlineShopping.map((item, index) => (
          <li key={index} className="hover:underline-offset-1 ">
            <span className="hover:cursor-pointer hover:border-b-[1px] border-gray-500">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
