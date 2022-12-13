import React from "react";



function PortfolioItem({ title, imgUrl, stack, link, parrafo }) {

  return (
    <div>
      <div className="rounded-sm overflow-hidden ">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="overflow-hidden"
        >
          <img
            src={imgUrl}
            alt="portfolio"
            className="w-full lg:h-36 object-cover "
          />
        </a>
      </div>

      <div className="w-full p-4 text-center">
        <h3 className="text-md md:text-xl mb-2 mb:mb-3 text-stone-800 dark:text-stone-200">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs ">
          {stack &&
            stack.map((item) => (
              <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md cursor-pointer text-stone-800 dark:text-stone-200">
                {item}
              </span>
            ))}
          {parrafo && (
            <span className="inline-block text-[12px] md:text-sm cursor-pointer text-stone-800 dark:text-stone-200">
              {parrafo}
            </span>
          )}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
