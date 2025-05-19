import React from 'react';
import Header from '../components/header/Header';

import Footer from '../components/footer/Footer';
import Home from '../page/home/Home';
import Modal from '../components/modal/Modal';


const Login = () => {
  return (
 <main className="min-h-screen flex flex-col h-screen overflow-hidden bg-gradient-to-r from-purple-100 via-white to-cyan-100 ">
      <header className="h-auto">
        <Header />
      </header>
<Modal/>
      <div className="flex-grow overflow-y-auto ">
        <Home />
      </div>

      <footer className="h-auto">
        <Footer />
      </footer>
    </main>
  )
}

export default Login