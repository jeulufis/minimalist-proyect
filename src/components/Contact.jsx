import React from 'react';
import Title from './Title';

function Contact() {
   return (
      <div className="flex flex-col mb-10 mx-3 pt-20">
         <div className="flex justify-center items-center">
            <form
               action="https://getform.io/f/f66bf08a-f063-4db9-8f9b-3341149349e7"
               method="POST"
               className="flex flex-col w-full md:w-7/12"
            >
               <Title>Contact</Title>
               <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="p-2 bg-transparent border-2 rounded-md focus:outline-none border-black dark:border-white"
               />
               <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none border-black dark:border-white"
               />
               <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none border-black dark:border-white"
               />
               <button
                  type="submit"
                  className="text-center dark:text-black inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-200 to-orange-300 drop-shadow-md hover:stroke-white"
               >
                  Work With Me
               </button>
            </form>
         </div>
      </div>
   )
}

export default Contact;