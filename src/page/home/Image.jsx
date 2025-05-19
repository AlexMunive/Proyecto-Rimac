import React from 'react'
import logoFamiliar from "../../img/foto-familiar.jpg"
const Image = () => {
  return (

      <img
        className="ml-5 w-[180px] object-contain md:rounded-xl md:object-contain md:w-auto md:h-full  "
        src={logoFamiliar}
        alt="imagen.png"
      />
  
  );
}

export default Image