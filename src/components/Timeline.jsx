import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Bio</Title>
        {timeline.map((item) => (
          <TimelineItem
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
        <div className="pt-5">
          <Title>I <span className="dark:text-red-500  text-blue-500 text-2xl font-bold underline underline-offset-8 decoration-4">♥</span></Title>
          <p className="text-sm indent-3 lg:indent-5">
            Music, Read, Walk,
            <span className="text-blue-500 dark:text-pink-500">
              {" "}Video Games
            </span>
            , Lear New Language, 
            <span className="text-blue-500 dark:text-pink-500">
               {' '}Meditate
            </span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
