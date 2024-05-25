import React from "react";
import { FooterItem1 } from "./FooterItem1";

export const Footer = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-gray-100 py-5 sm:py-2 gap-y-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <FooterItem1 />
        <FooterItem1 />
        <FooterItem1 />
      </div>
      <br />

      <div className="text-gray-500 text-center text-sm px-2">
        &copy; {new Date().getFullYear()}{" "}
        <a href="www.myntra.com">www.myntra.com.</a> All rights reserved.
      </div>
    </div>
  );
};
