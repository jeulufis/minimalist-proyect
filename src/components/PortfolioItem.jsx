import React, { useEffect } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  parrafo,
  parrafoPortfolio,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <div
        className="rounded-sm overflow-hidden transition ease-in-out delay-400 hover:scale-[1.1]"
        data-aos="fade-up"
      >
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

      <div className="w-full text-center">
        <h3 className="text-md md:text-xl mb-2 mb:mb-3 font-semibold tracking-wide pt-3">
          {title}
        </h3>
        {parrafoPortfolio && (
          <div className="mb-4 bg-[#f5efe8] text-center py-3 px-3 rounded-md dark:bg-[#313133]">
            {parrafoPortfolio}
          </div>
        )}
        <p className="flex flex-wrap gap-2 flex-row items-center justify-center text-xs ">
          {stack &&
            stack.map((item) => (
              <>
                <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md cursor-pointer hover:bg-black hover:text-white text-stone-800 dark:text-stone-200">
                  {item}
                </span>
              </>
            ))}
          {parrafo && (
            <>
              <span className="inline-block text-[12px] cursor-pointer text-stone-800 dark:text-stone-200">
                {parrafo}
              </span>
              <a href={link}>
                <button className="py-2 text-[12px] transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 duration-300 bg-emerald-400 hover:bg-emerald-300 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-black md:px-7 px-6 rounded-md flex items-center text-black">
                  Click here
                  <AiOutlineDoubleRight className="ml-1 " />
                </button>
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default PortfolioItem;
