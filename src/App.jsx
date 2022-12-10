import React from "react";
import "./styles/styles.css";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";

import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import { Web } from "./components/Web";

function App() {
  return (
    <>
      <div className="bg-[#f0e7db] dark:bg-[#202023]  text-stone-900 dark:text-stone-300 min-h-screen font-plus">
        <div className="max-w-5xl w-11/12 mx-auto transition-all  duration-500 ease-in dark:transition-all dark:duration-500 dark:ease-in">
          <Navbar />
          <Intro />
          <Portfolio />
          <Timeline />
          <Web />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
