import React from 'react'
import logo from "../../img/rimac-rojo.png";


const Header = () => {
  return (
    <header className="w-l00vh flex flex-row justify-between items-center md:pr-10 md:pl-10">
      <img
        className="ml-5 max-h-10 md:mr-20 md:ml-20 mt-2 mb-2 sm:max-h-12"
        src={logo}
        alt="logo.png"
      />
      <div className="md:text-sm mr-2 text-xs md:mr-20 flex flex-row justify-center items-center">
        <p className='hidden md:block font-semibold'>

        ¡Compra por este medio!
        </p>
        <i className="mr-2 ml-2 fa-solid fa-phone md:mr-5 md:ml-5"></i>
        <p className="mr-5 font-bold text-sm md:text-sm">(01) 411 6001</p>
      </div>
    </header>
  );
}

export default Header