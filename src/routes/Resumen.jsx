import React, { useContext } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import UserContext from '../hooks/Context';
import Details from '../page/details/Details';
import Button from '../components/Button/Button';
import Stage from '../components/stage/Stage';


const Resumen = () => {

     
  return (
   <div className="min-h-screen flex flex-col bg-indigo-50 overflow-hidden">
  <header className="h-auto">
    <Header />
  </header>

  <main className="flex-grow overflow-y-auto">
     <Stage />
    <div className="flex flex-col items-start w-full max-w-[900px] mx-auto px-4">
      <div className='ml-7 mt-3'>

      <Button ruta={"/cotizacion"} />
      </div>
      <Details />
    </div>
  </main>

  <footer className="h-auto">
    <Footer />
  </footer>
</div>

  );
}

export default Resumen