import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../hooks/Context";

const Usuario = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {dataUsuario, setDataUsuario} = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://rimac-front-end-challenge.netlify.app/api/user.json")
      .then((response) => {
        setDataUsuario(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error al cargar datos");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando usuario...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      <h1 className="md:text-3xl max-w-[400px] text-center text-2xl font-semibold p-5">
        {dataUsuario?.name} ¿Para quién deseas cotizar?
      </h1>
      <h3 className="pr-5 pl-5 text-center">
        Selecciona la opción que se ajuste más a tus necesidades.
      </h3>
    </div>
  );
};

export default Usuario;
