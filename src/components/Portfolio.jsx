import React, { useEffect } from "react";
import portfolio from "../data/portfolio";
import { ButtonContact } from "../ui/ButtonContact";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mx-3" data-aos="fade-up">
      <div className="pl-0 md:pl-[10.2rem] ">
        <Title>Projects</Title>
      </div>
      <div className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full md:w-8/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolio.map((project) => (
                <PortfolioItem {...project} key={project.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <ButtonContact />
    </div>
  );
}

export default Portfolio;
