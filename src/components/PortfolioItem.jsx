import React from 'react';

function PortfolioItem({ title, imgUrl, stack, link }) {
   return (
      <a 
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className="overflow-hidden"
      >
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img 
        src={imgUrl} 
        alt="portfolio"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      </div>
      
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 mb:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs">{stack.map(item => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
      </a>
   )
}

export default PortfolioItem;