import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Section from "../page/quotation/Section";
import Plan from "../page/plan/Plan";
import { useContext } from "react";
import UserContext from "../hooks/Context";
import Button from "../components/Button/Button";
import Stage from "../components/stage/Stage";


const Main = () => {
  const { plan } = useContext(UserContext);

  return (
    <div className="min-h-screen flex flex-col bg-indigo-50">
      <header className="h-auto">
        <Header />
      </header>

      <main className="flex-grow flex flex-col w-full">
        <Stage />
         <div className="ml-5 md:max-w-[600px] md:flex md:justify-center mt-5">

        <Button ruta={"/"}/>
         </div>
    
        <Section />
        <Plan />
      </main>

      <footer className="h-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Main;
