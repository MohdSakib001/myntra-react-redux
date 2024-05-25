// import React from "react";

// export const ItemButton = ({ method, text, color }) => {
//   return (
//     <button
//       type="button"
//       onClick={method}
//       className={`py-2 mt-4 mb-2 w-full bg-${color}-400 active:bg-${color}-500 sm:hover:bg-${color}-500 sm:active:bg-${color}-400 text-white cursor-pointer rounded-lg transition`}
//     >
//       {text}
//     </button>
//   );
// };

// The Upper code was not working coz of the way tailwind Css handles js variable in string literals so in tailwind its better to use static utility classes

import React from "react";

export const ItemButton = ({ method, text, color }) => {
  const getColorClass = () => {
    switch (color) {
      case "green":
        return "bg-green-400 active:bg-green-500 sm:hover:bg-green-500 sm:active:bg-green-400";
      case "red":
        return "bg-red-400 active:bg-red-500 sm:hover:bg-red-500 sm:active:bg-red-400";
      // Add more cases for other colors as needed
      default:
        return "bg-blue-400 active:bg-blue-500 sm:hover:bg-blue-500 sm:active:bg-blue-400";
    }
  };

  return (
    <button
      type="button"
      onClick={method}
      className={`py-2 mt-4 mb-2 w-full text-white cursor-pointer rounded-lg transition ${getColorClass()}`}
    >
      {text}
    </button>
  );
};
