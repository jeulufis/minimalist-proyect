import React from "react";

function Intro() {
  return (
    <>
      <div className="pt-24">
        <div className="flex flex-col mb-10 mx-auto">
          <div className="flex justify-center items-center">
            <div className="flex flex-col w-full md:w-7/12">
              <div className="text-sm bg-[#f5efe8] text-center p-3 rounded-md dark:bg-[#313133]">Hello, I'm an indie app developer based in Cauquenes!</div>
              <h1 className="text-3xl md:mb-3 font-semibold pt-4">
                Juan Eulufí Salazar
              </h1>

              <p className="text-base md:text-xl font-semibold">
                Young Tech{" "}
                <span className="text-sm dark:text-[#c9a87d]">
                  (Software Engenieer / Web Developer)
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
                real-life problems with code.
                <br />I am full of attitude to be able to work as a team and to
                be able to share my knowledge in each project, challenging
                obstacles, solving problems and learning from each{" "}
                <span className="text-blue-500 dark:text-pink-500">
                  new experience
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
