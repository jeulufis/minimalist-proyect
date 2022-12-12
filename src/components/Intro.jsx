import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


function Intro() {
  AOS.init();
  return (
    <>
      <div className="pt-[4rem] md:pt-20" data-aos="fade-up" data-aos-duration="2300">
        <div className="flex flex-col mb-10 mx-3">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-full md:w-7/12">
              <div className="text-sm bg-[#f5efe8] text-center p-3 rounded-md dark:bg-[#313133]">
                Hello, I'm an indie app developer based in Cauquenes!
              </div>
              <img
                src="/assets/foto-me.jpg"
                className="h-32 w-32 object-cover rounded-full m-5 border-2 self-center "
              />

              <h1 className="md:text-3xl md:mb-3 font-semibold text-2xl">
                Juan Eulufí Salazar
              </h1>

              <p className="text-md md:text-xl font-semibold">
                Young Tech{" "}
                <span className="text-sm dark:text-[#c9a87d]">
                  ( Software Engenieer / Developer / Designer )
                </span>
              </p>

              <p className="text-sm max-w-xl mb-6 text-justify pt-3 indent-3 lg:indent-5 ">
                I'm an indie front-end developer creator building my version of
                the digital world one step at a time. All coding projects are
                built from the ground up, from planning and designing all the
                way to{" "}
                <span className="text-blue-500 dark:text-pink-500">
                  solving
                </span>{" "}
                real-life problems with code. I am full of attitude to be able
                to work as a team and to be able to share my knowledge in each
                project, challenging obstacles, solving problems and learning
                from each {" "}
                <span className="text-blue-500 dark:text-pink-500">
                  "new experience"
                </span>
                . I am a software engineer specialized in building ( and
                designing ) exceptional digital design exceptional digital
                experiences. Currently, I'm focused on building websites and
                creating courses on web development to share my learnings on web
                development to share my learnings, as I believe that "knowledge
                is power".
              </p>
              <div className="self-center">
                <Link to='/blog'>
                <button className="py-2 bg-emerald-300 hover:bg-emerald-200 dark:hover:text-black text-sm px-5  rounded-md flex items-center text-black">
                  My Blog
                  <AiOutlineDoubleRight className="ml-1" />
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
