import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../hooks/Context";

const LocalStorage = () => {

    const {setUser} = useContext(UserContext);
    
  useEffect(() => {
    localStorage.clear(); 
    setUser({}); 
 
  }, []);

  return <Navigate to="/" replace />;
};

export default LocalStorage;