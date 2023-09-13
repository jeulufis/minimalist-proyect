import React from "react";

export const ButtonContact = () => {
  return (
    <div className="flex justify-center">
      <a href="mailto:juan.eulufi.sa@gmail.com">
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg px-7 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <img
            src="/assets/correo.png"
            className="w-7 h-6 mr-2 -ml-1"
            alt="Correo"
          />
          Send Message by Mail
        </button>
      </a>
    </div>
  );
};
