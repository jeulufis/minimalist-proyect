import { AiOutlineClose } from "react-icons/ai"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export const Modal = ({ closeModal, showModal, modalText, year }) => {
    const handleCloseModal = () => {
        if (showModal == true) {
            setTimeout(() => {
                closeModal(false)
            }, 100);
        }
    }

    useEffect(() => {
        AOS.init({
            duration: 800
        });
    }, [])


    return (
        <>
            <div
                data-aos="zoom-in"
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-xs md:max-w-lg">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold text-black">
                                Date {year}
                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 hover:opacity-80 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => handleCloseModal()}
                            >
                                <AiOutlineClose />
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                            <p className="my-4 text-slate-500 leading-relaxed text-md">
                                {modalText}
                            </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => handleCloseModal()}
                            >
                                Close
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
