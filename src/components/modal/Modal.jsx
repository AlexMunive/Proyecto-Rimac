import { Dialog, DialogPanel } from "@headlessui/react";

const Modal = ({ open = false, setOpen = () => {} }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
      {/* Fondo oscuro */}
      <div className="fixed inset-0 bg-black/40" aria-hidden="true" />

      {/* Contenedor del modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-4xl h-[80vh] rounded-xl bg-white p-4 overflow-hidden shadow-lg flex flex-col">
          {/* Título */}
          <Dialog.Title className="font-bold text-lg text-center text-gray-800 mb-4">
            Términos y Condiciones
          </Dialog.Title>

          {/* Visor PDF */}
          <div className="flex-grow">
            <iframe
              src="https://imagescdn.rimac.com/blt446954286ce4e6ec/61bb4b60aac9397f423166be/TERMINOS-Y-CONDICIONES.pdf"
              title="Términos y Condiciones"
              width="100%"
              height="100%"
              className="rounded-md border"
            />
          </div>

          {/* Botón cerrar */}
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => setOpen(false)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
            >
              Cerrar
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Modal;
