import React from "react";

function TimelineItem({ year, title }) {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-gray-600 dark:border-stone-700 ">
        <li className="mb-1 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-black dark:border-stone-800" />
          <h3 className="dark:text-white text-sm">
            <span className="px-3 py-1 text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md font-bold mr-1">
              {year}
            </span>{" "}
            <span className="dark:text-stone-300 leading-7">
            {title}
            </span>
            
          </h3>
        </li>
      </ol>
    </>
  );
}

export default TimelineItem;
