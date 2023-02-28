import React from "react";

function TimelineItem({ year, title }) {
  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-gray-600 dark:border-stone-700 ">
        <li className="mb-4 ml-4 flex items-center">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full -left-1.5 border border-black dark:border-stone-800" />
            <div className="dark:text-white text-sm flex items-center">
              <time className="px-2 py-1 text-white absolute dark:text-black cursor-pointer  bg-stone-900 dark:bg-white rounded-sm">
                {year}
              </time>{" "}
              <p className="pl-14 text-stone-800 dark:text-stone-200">{title}</p>
            </div>
        </li>
      </ol>
    </>
  );
}

export default TimelineItem;
