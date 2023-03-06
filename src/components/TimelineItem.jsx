import React, { useState } from "react";
import { Modal } from "./Modal";

function TimelineItem({ year, title, modalText }) {
  const [showModal, setShowModal] = useState(false)

  const handelClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <ol className="flex flex-col md:flex-row relative border-l border-gray-600 dark:border-stone-700 ">
        <li className="mb-4 ml-4 flex items-center">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full -left-1.5 border border-black dark:border-stone-800" />
            <div className="dark:text-white text-sm flex items-center">
              <button onClick={handelClick} className="px-2 py-1 hover:px-2.5 hover:py-2 transition-all	 duration-200 	animate-pulse ease-linear text-white absolute dark:text-black cursor-pointer  bg-stone-900 hover:bg-stone-800 dark:hover:bg-stone-200 dark:bg-white rounded-sm">
                {year}
              </button>
              {showModal && <Modal closeModal={setShowModal} modalText={modalText} year={year}/>}
              <p className="pl-14 ml-2 text-stone-800 dark:text-stone-200">{title}</p>
            </div>
        </li>
      </ol>
    </>
  );
}

export default TimelineItem;
