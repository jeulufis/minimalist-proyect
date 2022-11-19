import React from 'react';

function TimelineItem({ year, title }) {
   return (
      <>
         <ol className="flex flex-col md:flex-row relative border-l border-gray-600 dark:border-stone-700">
            <li className="mb-6 ml-4" >
               <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-black dark:border-stone-900 dark:bg-[#c9a87d]" />
               <h3 className="dark:text-white text-sm">
                  <span className="px-2 py-1 text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                     {year}
                  </span> {title}
               </h3>
            </li>
         </ol>
      </>


   )
}

export default TimelineItem;