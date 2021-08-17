import { useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import clienteAxios from "../config/axios";
import appContext from "../context/app/appContext";
import authContext from "../context/auth/authContext";
import Formulario from "./Formulario";

const Dropzone = () => {


  const AppContext = useContext(appContext);
  const { cargando, mostrarAlerta, subirArchivo, crearEnlace } = AppContext;

  const AuthContext = useContext(authContext);
  const { usuario, autenticado } = AuthContext;

  const onDropRejected = () => {
    mostrarAlerta(
      "Ha excedido el limite, obten una cuenta gratis para subir archivos mas grandes"
    );
  };

  const onDropAccepted = useCallback((acceptedFiles) => {
    //Crear un form-data
    const formData = new FormData();
    formData.append("archivo", acceptedFiles[0]);
    subirArchivo(formData, acceptedFiles[0].path);
  }, []);

  //Extraer contenido de dropzone
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ onDropAccepted, onDropRejected, maxSize: 1024 * 1024 });

  const archivos = acceptedFiles.map((archivo) => (
    <li
      key={archivo.lastModified}
      className="flex-1 bg-white mb-4 shadow-lg rounded p-3"
    >
      <p className="font-bold text-xl">{archivo.path}</p>
      <p className="text-sm text-gray-500">
        {(archivo.size / Math.pow(1024, 2)).toFixed(2)} MB
      </p>
    </li>
  ));

  return (
    <div className="md:flex-1 mb-3 mx-2 mt-16 lg:mt-0 flex flex-col items-center justify-center border-dashed border-gray-500 border-2 bg-gray-100 px-4">
      {acceptedFiles.length > 0 ? (
        <div className="w-full mt-10">
          <h4 className="text-2xl font-bold text-center mb-4">Archivos</h4>
          <ul>{archivos}</ul>

          {autenticado ? <Formulario /> : ""}

          {cargando ? (
            <p className='my-10 text-center text-gray-600'>Subiendo Archivo...</p>
          ) : (
            <button
              type="button"
              className="bg-blue-700 w-full hover:bg-blue-800 text-white rounded-lg py-3 my-10"
              onClick={() => {
                crearEnlace();
              }}
            >
              Crear Enlace
            </button>
          )}
        </div>
      ) : (
        <div {...getRootProps({ className: "dropzone py-32 w-full" })}>
          <input className="h-100" {...getInputProps()} />
          {isDragActive ? (
            <p className="text-center text-gray-600 text-2xl">
              Suelta el archivo
            </p>
          ) : (
            <div className="text-center">
              <p className="text-gray-600 text-center text-2xl">
                Selecciona un archivo y arrastralo aqui
              </p>
              <button
                className="bg-blue-700 w-full hover:bg-blue-800 text-white rounded-lg py-3 my-10"
                type="button"
              >
                Selecciona archivos para subir
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropzone;
