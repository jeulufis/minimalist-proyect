import React, { useEffect } from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div
      className="flex flex-col md:flex-row justify-center my-8 mx-3 "
      data-aos="fade-up"
    >
      <div className="w-full md:w-8/12">
        <Title>Bio</Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.title}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            modalText={item.modalText}
          />
        ))}
      </div>
    </div>
  );
}

export default Timeline;
