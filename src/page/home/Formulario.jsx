import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import {FormError} from "../../helper/Helper";
import Politica from "./Policy";
import Title from "./Title";
import UserContext from "../../hooks/Context";
import { Alert, AlertTitle, Snackbar } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Modal from "../../components/modal/Modal";
import Policy from "./Policy";

const Formulario = () => {

      const [isFocusDoc, setIsFocusDoc] = useState(false);
      const [isFocusDni, setIsFocusDni] = useState(false);

      const {user, setUser} = useContext(UserContext);
      const [showWarning, setShowWarning] = useState(false);
      const navigate = useNavigate();

        const [open, setOpen] = useState(false);
      
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const numeroDocumento = watch("numeroDocumento", "");
  const celular = watch("celular", "");


  const onSubmit = (data) => {
    console.log(data);
    setUser(data)
  };

  useEffect(()=>{

    if( user?.tipoDocumento &&
  user?.numeroDocumento &&
  user?.celular &&
  user?.terminos === true &&
  user?.privacidad === true){
    navigate("/cotizacion")
  }
  console.log("probando user:", user)
  },[user, navigate])

   const onError = () => {
  const terminos = watch("terminos", false);
  const privacidad = watch("privacidad", false);
  if (!terminos || !privacidad) {
    setShowWarning(true);
  }
};
  return (
    <div className="justify-center items-center pb-5 md:w-1/2 h-full flex flex-col md:justify-start md:items-start  md:p-2 rounded-lg  m-2 md:m-4 overflow-hidden">
      <div className="hidden md:block">
        <Title />
      </div>
      <p className="text-xs md:text-sm font-medium w-[320px] mb-4 ">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      <div>
        <form
          onSubmit={handleSubmit(onSubmit, onError)}
          className="space-y-4 max-w-md mx-auto"
        >
          <div className="flex  border border-black-200 rounded-lg relative">
            <div className="pr-[10px] p-[10px] flex items-center border-r border-black-300 md:pr-[14px] md:p-[14px]">
              <select
                {...register("tipoDocumento", { required: true })}
                className="border-none outline-none bg-transparent text-xs md:text-sm w-20"
              >
                <option value="DNI">DNI</option>
                <option value="CE">CE</option>
              </select>
            </div>

            <div className="p-[10px] relative w-full md:p-[14px]">
              <input
                {...register("numeroDocumento", {
                  required: "Nro. de documento es obligatorio",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Formato incorrecto. Solo se permiten números",
                  },
                  minLength: {
                    value: 8,
                    message: "Mínimo 8 dígitos",
                  },
                })}
                className=" peer w-full bg-transparent outline-none text-sm placeholder-transparent"
                placeholder="Nro. de documento"
                onFocus={() => setIsFocusDoc(true)}
                onBlur={() => setIsFocusDoc(false)}
              />

              <label
                className={clsx(
                  "pointer-events-none absolute left-4 transition-all duration-200",
                  !numeroDocumento && !isFocusDoc
                    ? "top-1/2 -translate-y-1/2 text-sm text-gray-400"
                    : "top-1 text-xs text-gray-500"
                )}
              >
                Nro. de documento
              </label>
            </div>
          </div>
          <FormError error={errors.numeroDocumento} />

          <div className="p-[10px] border border-black-200 rounded-lg md:p-[14px] relative">
            <input
              type="text"
              {...register("celular", {
                required: "Celular es obligatorio",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Formato incorrecto. Solo se permiten números",
                },
                minLength: {
                  value: 9,
                  message: "Celular debe tener 9 dígitos",
                },
                maxLength: {
                  value: 9,
                  message: "Celular debe tener 9 dígitos",
                },
              })}
              className="peer w-full bg-transparent outline-none text-sm placeholder-transparent"
              placeholder="Celular"
              onFocus={() => setIsFocusDni(true)}
              onBlur={() => setIsFocusDni(false)}
            />
            <label
              className={clsx(
                "pointer-events-none absolute left-4 transition-all duration-200",
                !celular && !isFocusDni
                  ? "top-1/2 -translate-y-1/2 text-sm text-gray-400"
                  : "top-1 text-xs text-gray-500"
              )}
            >
              Celular
            </label>
          </div>
          <FormError error={errors.celular} />
          {/* <Politica register={register} /> */}

           <Politica onOpenModal={() => setOpen(true)} register={register} />
      {open && <Modal open={open} setOpen={setOpen} />}
          <Snackbar
            open={showWarning}
            autoHideDuration={5000}
            onClose={() => setShowWarning(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              severity="warning"
              onClose={() => setShowWarning(false)}
              sx={{ width: "100%" }}
            >
              <AlertTitle>Advertencia</AlertTitle>
              Debes aceptar los <strong>Términos y Condiciones</strong> y la{" "}
              <strong>Política de Privacidad</strong> para continuar.
            </Alert>
          </Snackbar>

          <button
            type="submit"
            className="-mt-10 cursor-pointer p-4 rounded-4xl  bg-black text-white py-2 px-4 font-semibold"
          >
            Cotiza aquí
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
