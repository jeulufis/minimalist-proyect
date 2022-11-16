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
    <div className="shadow-md w-full fixed top-0 left-0 z-10 bg-[#f4ede4]">
      <div className="md:flex items-center justify-center  py-3 md:px-10 px-7">
        <div
          className="text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
            <img src={logo} className="w-8 h-8" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center  md:pb-0 pb-6 absolute md:static bg-[#f4ede4] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 shadow-md" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
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
