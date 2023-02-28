import React from "react";
import { Link } from "react-router-dom";
import { useScrollTo } from "../hooks/useScrollTo";

export const Error = () => {
  useScrollTo();
  return (
    <div className="pt-40 container">
      <div className="flex flex-col md:flex-row justify-center mx-3">
        <div className="w-full md:w-7/12 text-center">
          <h4 className="md:text-2xl font-bold text-xl">Not Found</h4>
          <p className="md:text-md text-sm">The page you're looking for was not found.</p>
          <div className="flex justify-center pt-7">
            <Link to="/">
              <button className="py-1.5 bg-emerald-300 hover:bg-emerald-200 dark:hover:text-black text-sm md:px-7 px-4 rounded-md flex items-center text-black">
                Return to home
              </button>
            </Link>
          </div>

          <hr className="mt-4 " />
        </div>
      </div>
    </div>
  );
};
