import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import logo from "/assets/logo1.svg";

const Navbar = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Bio", link: "/" },
    { name: "On the web", link: "/" },
    {
      name: "Source",
      logo: <AiFillGithub />,
      link: "https://github.com/itodev-source/minimalist-proyect",
    },
  ];
  let [open, setOpen] = useState(false);

  const [theme, setTheme] = useState(null);


  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 text-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <div className="shadow-sm w-full fixed top-0 left-0 z-10 bg-[#f4ede4] opacity-95 dark:bg-[#202023]">
      <div className="md:flex items-center justify-center py-3 md:px-10 px-7">
        <div className="cursor-pointer text-gray-800 dark:text-white flex items-center ">
          <img
            src={logo}
            className="w-6 h-6 hover:rotate-12 mr-1 transition-all dark:bg-pink-500"
          />
          <span className="text-sm font-semibold tracking-wider">
            Juan Eulufí
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-lg absolute right-8 top-[14px] cursor-pointer md:hidden dark:text-white"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center text-right pr-14 md:pb-0 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease-in  ${
            open
              ? "top-15 shadow-sm bg-[#f4ede4] dark:bg-[#202023]"
              : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-sm md:my-0 my-7">
              <a
                href={link.link}
                className="text-gray-800 dark:text-white hover:text-gray-700 "
              >
                <div className="md:flex items-center justify-center ">
                  <span className="hidden md:inline-flex pr-1">
                    {link.logo}
                  </span>
                  <span className="hover:underline hover:underline-offset-4">
                    {link.name}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button
            type="button"
            onClick={handleThemeSwitch}
            className="fixed z-30 right-20 top-[9px] bg-violet-500 dark:bg-orange-300 text-lg p-1 rounded-md "
          >
            {theme === "dark" ? sun : moon}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
