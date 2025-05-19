import React, { useContext, useState } from 'react'
import data from "../../json/DataCard"
import CheckBox from './CheckBox';
import UserContext from '../../hooks/Context';
import paraMi from "../../img/para-mi.png"
import paraAlguien from "../../img/para-alguien.png"

const Card = () => {
  

   const {plan, setPlan} = useContext(UserContext);

  return (
    <div className='md:flex flex-row h-auto'>
  
   
      {data.map((item, index) => (
        <div
         onClick={() => setPlan(index)}
            className={`md:max-w-[250px] md:h-[200px] cursor-pointer bg-white shadow-lg flex flex-col justify-center rounded-3xl m-5 min-w-[150px] min-h-[150px] transition-all duration-300
    hover:shadow-md hover:bg-gray-50
    ${plan === index ? 'border-2 border-black' : 'border border-transparent'}`}
          key={index}
        >
          <div className="flex flex-row content-center justify-between">
            <div className="flex flex-row content-center md:flex-col">
              <img className="p-2 md:w-[70px]" src={item?.number == 1 ? paraMi : paraAlguien } alt="logo" />
              <h1 className="md:pt-0 pb-0 flex justify-center items-center content-center text-xl font-semibold p-2">
                {item.Title}
              </h1>
            </div>
               <CheckBox
                 checked={plan === index} 
                 onChange={() => setPlan(index)} 
              />
          </div>
          <p className="p-3 text-xs">{item?.subTitule}</p>
        </div>
      ))}
    </div>
  );
}

export default Card