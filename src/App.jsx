import React, { useContext } from 'react';
import Login from './routes/Login';
import UserConext from './hooks/Context';
import { Navigate, Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import RutaProtegida from './hooks/RutaProtegida';
import Resumen from './routes/Resumen';
import LocalStorage from './helper/LocalStorage';

const App = () => {
  const {user} = useContext(UserConext);

  return (
    <>
      {/* <pre>{JSON.stringify(user,null,2)}</pre> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/cotizacion"
          element={
            <RutaProtegida>
              <Main />
            </RutaProtegida>
          }
        ></Route>
      
          <Route
          path="/resumen"
          element={
            <RutaProtegida >
              <Resumen />
            </RutaProtegida>
          }
        ></Route>
        <Route path="*" element={<LocalStorage/>} />
      </Routes>
    </>
  );
};

export default App;