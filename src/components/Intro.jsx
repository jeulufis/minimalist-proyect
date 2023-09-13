import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Intro() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div
        className="pt-[4rem] md:pt-20"
        data-aos="fade-up"
        data-aos-duration="2300"
      >
        <div className="flex flex-col mx-3">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-full md:w-8/12">
              <div className="bg-[#f5efe8] text-center p-3 text-sm md:text-base rounded-md dark:bg-[#313133]">
                Hello, I'm an indie app developer based in Cauquenes!
              </div>
              <img
                src="/assets/foto-me.jpg"
                alt="Fotografia a Juan Eulufi Salazar"
                className="h-32 w-32 object-cover rounded-full m-5 border-2 self-center "
              />

              <h1 className="md:text-3xl md:mb-3 tracking-wide font-bold text-2xl">
                Juan Eulufí Salazar ✋🌟
              </h1>

              <p className="md:text-xl tracking-wide font-semibold">
                Young Tech{" "}
              </p>
              <p className=" text-sm md:text-base tracking-wide md:tracking-wider dark:text-[#dcb98a] text-pink-500">
                <Typewriter
                  words={[
                    "Software Engenieer",
                    "Full-Stack Developer",
                    "Front-End Dev",
                    "Back-End Dev",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>

              <p className="text-sm md:text-base  mb-6 text-justify pt-3 indent-3 leading-6 lg:indent-5 text-stone-800 dark:text-stone-200">
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
                from each{" "}
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
                <Link to="/blog">
                  <button className="py-3 text-sm md:text-base transition ease-in-out delay-100 hover:-translate-y-0.5 hover:scale-110 duration-300 bg-emerald-400 hover:bg-emerald-300 dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:hover:text-black px-10 rounded-md flex items-center text-black">
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
