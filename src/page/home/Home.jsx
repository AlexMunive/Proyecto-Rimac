import React from 'react'
import logoFamiliar from "../../img/foto-familiar.jpg"
import Formulario from './Formulario'
import Image from './Image'
import Title from './Title'

const Home = () => {
  return (
    <main className="flex justify-evenly md:flex-row flex-col h-full  from-white to-indigo-100 overflow-hidden">
      <div className=" md:w-1/2 md:h-full  flex flex-row justify-center content-center md:items-start md:justify-center p-2 md:p-4 overflow-hidden">
        <div className="md:hidden">
          <Title />
        </div>
        <Image />
      </div>
      <span className="block h-px w-5/6 bg-gray-300 mx-auto sm:hidden"></span>
      <Formulario />
    </main>
  );
}

export default Home