import React, { useContext, useEffect, useState } from 'react'
import casa from "../../img/casa.png"
import clinica from "../../img/clinica.png"

import 'react-alice-carousel/lib/alice-carousel.css';
import UserContext from '../../hooks/Context';
import getAgeFromDate from '../../helper/Time';
import { useNavigate } from 'react-router-dom';
const CardOffer = ({ ofertas }) => {

   const navigate = useNavigate();


  const [page, setPage] = useState(0);
  const [responsive, setResponsive] = useState(false);

  const { plan, user, dataUsuario, setPlanSelecionado } = useContext(UserContext);

  // calculamos la edad
  const edad = getAgeFromDate(dataUsuario.birthDay);

  // FILTRO

  const dataFiltrada = ofertas.list.filter((item)=> item.age >= edad);

  // CALCULAMOS EL TAMO DE LA PANTALLA PARA DISMINUIR LAS OFERTAS
  useEffect(() => {
    const checkScreen = () => {
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      setResponsive(isMd);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // paginación

  const maxItem = responsive ? 3 : 1;
  const totalItems = dataFiltrada.length;
  const maxPage = Math.ceil(totalItems / maxItem);

  const onNextPage = () => {
    setPage((page + 1) % maxPage);
  };
  const onPrevPage = () => {
    setPage((page - 1) % maxPage);
  };

  return (
    <div className="flex flex-col justify-center items-center">

      <div className="flex flex-row flex-wrap justify-center  gap-4 min-h-[450px] mb-8">
        {dataFiltrada
          .slice(page * maxItem, maxItem * (page + 1))
          .map((item, index) => (
            <div key={index}>
              {item.age >= edad ? (
                <div className="  hover:shadow-md hover:bg-gray-50 pt-4 min-h-[500px] w-[250px] bg-white flex flex-col justify-between p-4 rounded-2xl shadow-xl">
                  <div>
                    <div className="flex items-center flex-row gap-2 justify-between pt-5 pb-5">
                      <h1 className="text-xl font-semibold">{item.name}</h1>
                      <img
                        src={
                          item.name.toLowerCase().trim().includes("clínica")
                            ? clinica
                            : casa
                        }
                        alt="icono"
                        className="w-auto h-[50px]"
                      />
                    </div>

                    <div className="mt-2 text-sm">
                      <p
                        style={{ color: "oklch(70.8% 0 0)" }}
                        className="font-semibold text-xs "
                      >
                        COSTO DEL PLAN
                      </p>
                      {plan == 1 ? (
                        <div className="text-sm text-gray-500 line-through">
                          ${item.price} antes
                        </div>
                      ) : (
                        <></>
                      )}
                      <p className="text-lg font-semibold">
                        $
                        {plan === 1
                          ? (item.price * 0.95).toFixed(2)
                          : item.price}
                         <span className='ml-1'>al mes</span>
                      </p>

                      <span className="block h-px  bg-gray-400 mx-auto mt-3 mb-3 "></span>
                      <ul className="mt-2 list-disc pl-4 ">
                        {item.description.map((desc, idx) => (
                          <li className="p-t3 pr-3 pb-3" key={idx}>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button onClick={()=> {
                     setPlanSelecionado(item);
       
                     navigate("/resumen")
                  }} className="mb-5 bg-rose-500 rounded-3xl pt-2 pb-2 text-white font-semibold cursor-pointer">
                    Seleccionar Plan
                  </button>
                </div>
              ) : (
                <></>
              )}
            </div>
          ))}
      </div>

      {maxItem <= 2? (
        <div className="flex flex-row mt-4 mb-4">
          <button onClick={onPrevPage} disabled={!page}>
            <span
              className={`material-symbols-outlined rotate-180 text-violet-500 ${
                page === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              expand_circle_right
            </span>
          </button>
          <p className="mr-2 ml-2">
            {page + 1} / {maxPage}
          </p>
          <button
            onClick={onNextPage}
            disabled={page === Math.ceil(totalItems / maxItem) - 1}
          >
            <span
              className={`material-symbols-outlined text-violet-500 ${
                page === maxPage - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
            >
              expand_circle_right
            </span>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default CardOffer;
