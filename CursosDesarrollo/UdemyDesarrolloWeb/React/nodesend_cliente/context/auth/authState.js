import React, { useReducer } from "react";
import authContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  LIMPIAR_ALERTA,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  USUARIO_AUTENTICADO,
  CERRAR_SESION,
} from "../../types";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

export default function AuthState({ children }){
  //Initial state
  const initialState = {
    token:
      typeof window != "undefined" ? localStorage.getItem("rns_token") : "",
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  //Reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  //Registrar usuario
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data.msg,
      });
    } catch (error) {
      dispatch({
        type: REGISTRO_ERROR,
        payload: error.response.data.msg,
      });
    }

    //Limpia la alerta desp de 3 seg
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 3000);
  };

  //Autenticar usuarios
  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }

    //Limpia la alerta desp de 3 seg
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 3000);
  };

  //Retorna el usuario autenticado segun el JWT
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("rns_token");

    if (token) {
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      if(respuesta.data.usuario){
        dispatch({
          type: USUARIO_AUTENTICADO,
          payload: respuesta.data.usuario,
        });
      }
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: error.response.data.msg,
      });
    }
    //Limpia la alerta desp de 3 seg
    setTimeout(() => {
      dispatch({
        type: LIMPIAR_ALERTA,
      });
    }, 3000);
  };

  //Cerrar sesion
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION
    })
  }



  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        registrarUsuario,
        iniciarSesion,
        usuarioAutenticado,
        cerrarSesion
      }}
    >
      {children}
    </authContext.Provider>
  );
};

