import React from "react";
// import './Footer.css'
import logo from "../../img/logo-rimac-negro.png";

const Footer = () => {
  return (
    <footer
      className=" pr-10 pl-10 bg-black text-stone-50 min-h-[70px] flex flex-col w-l00vh justify-between justify-items-center items-center
    sm:flex-row"
    >
      <img className="max-h-10 mr-20 ml-20 mt-2 mb-2 sm:max-h-15" src={logo} alt="logo.png" />
      <span className="block h-px w-5/6 bg-white mx-auto sm:hidden"></span>
      <p className="w-full flex justify-center content-center md:justify-end md:content-end mt-2 mb-2 mr-20 ml-20 text-xs sm:text-base">
        &#169; 2025 RIMAC Seguros y Reaseguros.
      </p>
    </footer>
  );
};

export default Footer;
