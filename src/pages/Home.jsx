import React, { Fragment } from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import { Web } from "../components/Web";


export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Intro />
      <Timeline />
      <Web />
      <Portfolio />
      <Footer />
    </Fragment>
  );
};
