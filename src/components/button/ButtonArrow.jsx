import React from 'react'
import { useNavigate } from 'react-router-dom';

const ButtonArrow = ({ruta}) => {

  
  const navigate = useNavigate();
  return (
    <div >
        <button className='flex flex-row cursor-pointer'
        onClick={()=> {
          navigate(ruta)
        }}>
            <span
              className={"material-symbols-outlined rotate-180 text-violet-500"}
            >
              expand_circle_right
            </span> 
            <p className='ml-2 text-center text-violet-500 font-semibold text-xm'>Volver</p>
        </button>
    </div>
  )
}

export default ButtonArrow