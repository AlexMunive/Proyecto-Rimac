import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import { useLocation } from 'react-router-dom';

const Stage = () => {
  const { pathname } = useLocation();
  const step = pathname.includes("cotizacion") ? 0 : pathname.includes("resumen") ? 1 : 0;

  return (
    <div className="w-full flex justify-center bg-violet-200">
      <Stepper
        activeStep={step}
        connector={
          <div
            style={{
              flex: 1,
              borderTop: '2px dashed #4646e8',
              margin: '0 8px',
            }}
          />
        }
        sx={{
          width: '100%',
          maxWidth: '350px',

          '& .MuiStepConnector-line': {
            borderTop: '1px dashed #4646e8',
          },

          // Ícono del paso (círculo)
          '& .MuiStepIcon-root': {
            marginTop: '5px',
            marginBottom: '5px',
            color: '#4646e8', // color base
          },
          '& .MuiStepIcon-root.Mui-active': {
            color: '#4646e8',
          },
          '& .MuiStepIcon-root.Mui-completed': {
            color: '#4646e8',
          },

          // Estilo de etiqueta (label)
          '& .MuiStepLabel-label': {
            fontWeight: '600',
            fontSize: '12px',
            color: '#000000',
            marginLeft: '8px', // espacio entre el ícono y el texto
          },

          // Alinea texto a la derecha del círculo
          '& .MuiStepLabel-horizontal': {
            flexDirection: 'row',
            alignItems: 'center',
          }
        }}
      >
        {['Planes y coberturas', 'Resumen'].map((label, index) => (
          <Step key={label}>
            <StepLabel
              sx={{
                opacity: step === index ? 1 : 0.5,
              }}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Stage;
