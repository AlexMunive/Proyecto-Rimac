import React from 'react';

const Policy = ({register, onOpenModal}) => {
  return (
    <div className="space-y-3 ">
      <div className="flex items-center space-x-2">
        <input
          id="terminos"
          type="checkbox"
            {...register("terminos", {
            required: "Debe aceptar los Términos y Condiciones",
          })}
          className="h-4 w-4 accent-black focus:ring-black"
        />
        <label htmlFor="terminos" className="text-xs text-black-700">
          Acepto los Términos y Condiciones
        </label>
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="privacidad"
          type="checkbox"
            {...register("privacidad", {
            required: "Debe aceptar la Política de Privacidad",
          })}
          className="h-4 w-4 accent-black focus:ring-black"
        />
        <label htmlFor="privacidad" className="text-xs text-black-700">
          Acepto la Política de Privacidad
        </label>
      </div>

      <span   onClick={onOpenModal} className='cursor-pointer text-xs font-semibold underline'>Aplican Términos y Condiciones.</span>
    </div>
  );
};

export default Policy;
