import React, { useState } from "react";
import logo from "/assets/logo.png";


const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Bio", link: "/" },
    { name: "On the web", link: "/" },
    { name: "Contact", link: "/" },
  ];
  let [open, setOpen] = useState(false);

 

  
  return (
    <div  className="shadow-sm w-full fixed top-0 left-0 z-10 bg-[#f4ede4] opacity-95">
      <div className="md:flex items-center justify-center py-3 md:px-10 px-7">
        <div className="cursor-pointer flex items-center text-gray-800">
          <img
            src={logo}
            className="w-7 h-7 hover:rotate-12"
          />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-lg absolute right-8 top-4 cursor-pointer md:hidden dark:text-black"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center text-right pr-14 md:pb-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in ${
            open
              ? "top-15 shadow-sm bg-[#f4ede4] "
              : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-500 "
              >
                {link.name} 
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
