import React, { useContext, useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
  MOSTRAR_ALERTA,
  LIMPIAR_ALERTA,
  SUBIR_ARCHIVO_EXITO,
  SUBIR_ARCHIVO_ERROR,
  SUBIR_ARCHIVO,
  CREAR_ENLACE_EXITO,
  LIMPIAR_STATE,
  AGREGAR_PASSWORD,
  AGREGAR_DESCARGAS,
} from "../../types";
import appContext from "./appContext";
import appReducer from "./appReducer";

const AppState = ({ children }) => {
  const initialState = {
    mensaje_archivo: null,
    nombre: "",
    nombre_original: "",
    cargando: null,
    descargas: 1,
    password: '',
    autor: null,
    url: ''
  };

  const [state, dispatch] = useReducer(appReducer, initialState);

  //Mostrar una alerta
  const mostrarAlerta = (msg) => {
    dispatch({
      type: MOSTRAR_ALERTA,
      payload: msg,
    });
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 5000);
  };

  //Subir los archivos al servidor
  const subirArchivo = async (formData, nombreArchivo) => {
    dispatch({
      type: SUBIR_ARCHIVO,
    });

    try {
      const resultado = await clienteAxios.post("/api/archivos", formData);
      dispatch({
        type: SUBIR_ARCHIVO_EXITO,
        payload: {
          nombre: resultado.data.archivo,
          nombre_original: nombreArchivo,
        },
      });
    } catch (error) {
      dispatch({
        type: SUBIR_ARCHIVO_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  //Crea un enlace una vez que se subio el archivo
  const crearEnlace = async () => {
    const data = {
      nombre: state.nombre,
      nombre_original: state.nombre_original,
      descargas: state.descargas,
      password: state.password,
      autor: state.autor
    }

    try {
      const resultado = await clienteAxios.post('/api/enlaces', data);
      dispatch({
        type: CREAR_ENLACE_EXITO,
        payload: resultado.data.msg
      })
    } catch (error) {
      console.log(error)      
    }

  };

  const limpiarState = () => {
    dispatch({
      type:LIMPIAR_STATE
    })
  }

  const agregarPassword = password => {
    dispatch({
      type: AGREGAR_PASSWORD,
      payload: password
    })
    console.log(password)
  }

  const agregarDescargas = cantidad => {
    dispatch({
      type: AGREGAR_DESCARGAS,
      payload: cantidad
    })
  }


  return (
    <appContext.Provider
      value={{
        nombre: state.nombre,
        nombre_original: state.nombre_original,
        mensaje_archivo: state.mensaje_archivo,
        cargando: state.cargando,
        descargas: state.descargas,
        password: state.password,
        autor: state.autor,
        url: state.url,
        mostrarAlerta,
        subirArchivo,
        crearEnlace,
        limpiarState,
        agregarPassword,
        agregarDescargas
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppState;
