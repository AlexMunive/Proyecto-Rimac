import React, { useContext } from 'react'
import UserContext from './Context'
import { Navigate } from 'react-router-dom';


const RutaProtegida = ({children}) => {

    const {user} = useContext(UserContext);

    const habilitado = (user?.tipoDocumento != "" || user?.tipoDocumento != null ) 
    && (user?.numeroDocumento != "" || user?.numeroDocumento != null ) 
    && (user?.celular != "" || user?.celular != null ) 
    && user?.terminos == true 
    && user?.privacidad == true

 return habilitado ? children :  <Navigate to="/" replace />;
}

export default RutaProtegida