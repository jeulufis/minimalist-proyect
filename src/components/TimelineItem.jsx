import React from "react";

function TimelineItem({ year, title }) {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-gray-600 dark:border-stone-700 ">
        <li className="mb-4 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-black dark:border-stone-800" />
          <div className="dark:text-white text-sm flex">
            <time className="px-1 py-1 text-white absolute dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
              {year}
            </time>{" "}
            <p className="dark:text-stone-300 pl-14">{title}</p>
          </div>
        </li>
      </ol>
    </>
  );
}

export default TimelineItem;
