import { CERRAR_SESION, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, REGISTRO_ERROR, REGISTRO_EXITOSO, USUARIO_AUTENTICADO } from '../../types';

export default function authReducer(state, action) {
  switch(action.type){

    case REGISTRO_ERROR:
    case REGISTRO_EXITOSO:
    case LOGIN_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    case LIMPIAR_ALERTA:
      return {
        ...state,
        mensaje: null
      }
    case LOGIN_EXITOSO:
      localStorage.setItem('rns_token', action.payload);
      return {
        ...state,
        token: action.payload,
        autenticado: true
      }
    case USUARIO_AUTENTICADO:
      return {
        ...state,
        usuario: action.payload,
        autenticado: true
      }
    case CERRAR_SESION:
      localStorage.removeItem('rns_token')
      return {
        ...state,
        usuario: null,
        token: null,
        autenticado: null,
      }
    
    default:
      return state;
  }
}