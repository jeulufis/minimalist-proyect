import React from "react";

export const Button = ({ logo, name, direction }) => {
  return (
    <a href={direction} target='_blank'><button
    className="px-3 py-2 flex place-items-center gap-2 text-emerald-700 text-sm
            rounded-md hover:text-emerald-500 hover:border-b-blue-400 hover:border-b-2 focus:bg-gray-300 
          focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg 
          transition duration-150 ease-in-out dark:text-orange-200"
  >
    <span>{logo}</span>@{name}
  </button></a>
    
  );
};
