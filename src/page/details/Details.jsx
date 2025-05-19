import React, { useContext } from 'react'
import UserContext from '../../hooks/Context';
import logoUsuario from "../../img/user.png"

const Details = () => {

    const { plan, dataUsuario, planSelecionado, user } = useContext(UserContext);

  if (!planSelecionado) {
    return <p>No hay plan seleccionado.</p>;
  }

  return (
 <div className=" flex flex-col md:justify-center w-full max-w-[900px] mx-auto px-4 ">

      <h1 className="text-3xl font-semibold md:text-start mb-5 mt-3 pl-5">
        Resumen del seguro
      </h1>
      <div className="bg-white mr-5 ml-5 rounded-2xl shadow-xl  ">
        <div className="pt-5 pr-5 pl-5">
          <h2 className="text-xs font-bold mb-2">PRECIOS CALCULADOS PARA:</h2>
          <div className="flex flex-row">
            <img className="w-[40px] mr-3" src={logoUsuario} alt="logo" />
            <h1 className="flex flex-row text-lg font-semibold text-center">
              {dataUsuario.name} <p className="ml-1">{dataUsuario.lastName} </p>
            </h1>
          </div>
          <span className="block h-px  bg-gray-400 mx-auto mt-3 mb-3 "></span>
        </div>
        <div className="m-5">
          <h2 className="text-base font-semibold">Responsable de pago</h2>
          <p>
            {user.tipoDocumento}: {user.numeroDocumento}
          </p>
          <p>Celular: {user.celular}</p>
        </div>
        <div className="m-5 pb-10">
          <h2 className="text-base font-semibold">Plan elegido</h2>
          <p>{planSelecionado.name}</p>
          <p>
            Costo del plan: $
            {plan === 1 ? (planSelecionado.price * 0.95).toFixed(2) : planSelecionado.price} al mes
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details