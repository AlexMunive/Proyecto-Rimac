import React, { useEffect, useState } from 'react'
import UserContext from '../hooks/Context'
import { useLocation } from 'react-router-dom';

const UserProvider = ({children}) => {

  const location = useLocation();
  const [user, setUser] = useState(()=> {
    const dataNueva = localStorage.getItem("DataUsuario");
    return dataNueva ? JSON.parse(dataNueva) : {}
  });

  const [planSelecionado, setPlanSelecionado] = useState(() => {
  const dataplan = localStorage.getItem("planSeleccionado");
  return dataplan ? JSON.parse(dataplan) : {};
})

  const [plan, setPlan] = useState();
  const [dataUsuario, setDataUsuario] = useState();
  


    useEffect(() => {
    if (user) {
      localStorage.setItem("DataUsuario", JSON.stringify(user));
    } else {
      localStorage.removeItem("DataUsuario");
      
    }
  }, [user]);



  useEffect(() => {
    if (planSelecionado) {
      localStorage.setItem("planSeleccionado", JSON.stringify(planSelecionado));
    } else {
      localStorage.removeItem("planSeleccionado");
    }
  }, [planSelecionado]);



  useEffect(() => {
    if (location.pathname === '/cotizacion') {
      localStorage.removeItem("planSeleccionado");
      setPlanSelecionado({}); 
    }
     if (location.pathname === '/') {
      localStorage.removeItem("DataUsuario");
      setUser({}); 
      setPlan()
    }
  }, [location.pathname]);

  return (
    <UserContext.Provider
      value={{ user, setUser, plan, setPlan, dataUsuario, setDataUsuario, planSelecionado, setPlanSelecionado }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider