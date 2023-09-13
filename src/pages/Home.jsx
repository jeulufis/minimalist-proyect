import React, { Fragment } from "react";
import Intro from "../components/Intro";
import { Love } from "../components/Love";
import Portfolio from "../components/Portfolio";
import Timeline from "../components/Timeline";
import { Web } from "../components/Web";
import { useScrollTo } from "../hooks/useScrollTo";
import TechStack from "../components/TechStack";

export const Home = () => {
  useScrollTo();

  return (
    <Fragment>
      <Intro />
      <TechStack />
      <Timeline />
      <Web />
      <Love />
      <Portfolio />
    </Fragment>
  );
};
