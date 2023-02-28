import React, { Fragment } from "react";
import Intro from "../components/Intro";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import { Web } from "../components/Web";
import { useScrollTo } from "../hooks/useScrollTo";

export const Home = () => {
  useScrollTo();
  
  return (
    <Fragment>
      <Intro />
      <Timeline />
      <Web />
      <Portfolio />
    </Fragment>
  );
};
