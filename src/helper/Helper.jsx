import React from "react";

export const FormError = ({ error }) => {
    if(!error){
        return null
    }
    return (
        <>
            {error && (
                <p className=" -mt-3 text-xs text-red-500 p-0 font-semibold">
                  {error.message}
                </p>
            )}
        </>
    );
};


export const removerTildres = (str) => {
  if (typeof str !== 'string') return str;
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};





