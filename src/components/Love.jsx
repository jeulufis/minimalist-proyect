import React from "react";
import Title from "./Title";

export const Love = () => {
  return (
    <div
      className="flex flex-col md:flex-row justify-center my-8 mx-3 "
      data-aos="fade-up"
    >
      <div className="w-full md:w-7/12">
        <div className="pt-5">
          <Title>
            I{" "}
            <span className="dark:text-red-500  text-blue-500 text-2xl font-bold underline underline-offset-8 decoration-4">
              ♥
            </span>
          </Title>
          <p className=" indent-3 lg:indent-5 text-stone-800 dark:text-stone-300">
            Music, Read, Walk,
            <span className="text-blue-500 dark:text-pink-500 cursor-pointer">
              {" "}
              Video Games
            </span>
            , Lear New Programming Language,
            <span className="text-blue-500 dark:text-pink-500 cursor-pointer">
              {" "}
              Meditate
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
