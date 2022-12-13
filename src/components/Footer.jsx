import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      <p className="md:text-sm text-[13px] mt-2  opacity-50">
        &copy; {new Date().getFullYear()} Juan Eulufi. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
