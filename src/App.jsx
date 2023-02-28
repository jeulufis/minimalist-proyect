import React, { Fragment } from "react";
import "./styles/styles.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Blog, History } from "./pages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Error } from "./pages/Error";



function App() {
  
  return (
    <Fragment>
      <div className="bg-[#f0e7db] dark:bg-[#202023]  text-stone-900 dark:text-stone-300 min-h-screen font-plus">
        <div className="max-w-5xl w-11/12 mx-auto transition-all  duration-500 ease-in dark:transition-all dark:duration-500 dark:ease-in">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="history" element={<History />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
