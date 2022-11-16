import React from 'react';
import Title from './Title';


function Intro() {
   return (

      <div className="pt-24">
        
        <div className="flex flex-col mb-10 mx-auto">
         <div className="flex justify-center items-center">
         <div className='flex flex-col w-full md:w-7/12'>
          
          <h1 className="text-3xl mb-1 md:mb-3 font-bold ml-1">Juan Eulufi Salazar</h1>
         
          <p className="text-base md:text-xl font-semibold">Young Tech <span className="text-sm font-bold text-slate-600 dark:text-[#c9a87d]">(Software Engenieer & Web Developer)</span></p>
          <p className="text-sm max-w-xl mb-6 text-justify pt-3">
            I'm an indie front-end developer creator building my
            version of the digital world one step at a time. All coding projects
            are built from the ground up, from planning and designing all the way
            to solving real-life problems with code.
            <br />
            I am full of attitude to be able to work as a team and to be able to
            share my knowledge in each project, challenging obstacles, solving
            problems and learning from each new experience.
          </p>
          </div>
        </div>
      </div>
    </div>
   )
}

export default Intro;