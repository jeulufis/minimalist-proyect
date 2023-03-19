import React from "react";
import portfolio from "../data/portfolio";
import { ButtonContact } from "../ui/ButtonContact";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="mx-3">
      <div className="pl-0 md:pl-[13.5rem] ">
        <Title>Projects</Title>
      </div>
      <div className="flex flex-col mb-10 mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex flex-col w-full md:w-7/12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {portfolio.map((project) => (
                <PortfolioItem key={project.title}  {...project} />
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
