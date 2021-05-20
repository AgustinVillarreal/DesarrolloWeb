import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
  PROYECTO_ERROR,
  ELIMINAR_PROYECTOS
} from "../../types";

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [ action.payload, ...state.proyectos],
        formulario: false,
        errorformulario: false,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      };
    case PROYECTO_ACTUAL:
      return {
          ...state,
          proyectoseleccionado: state.proyectos.filter(proyecto => proyecto._id === action.payload)
      }
    case ELIMINAR_PROYECTO:
        return {
          ...state,
          proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload),
          proyectoseleccionado: null
        }
    case PROYECTO_ERROR:
      return {
        ...state,
        mensaje: action.payload
      }
    case ELIMINAR_PROYECTOS:
      return{
        ...state,
        proyectos: [],
        proyectoseleccionado: null
      }
    
    default:
      return state;
  }
};
export default proyectoReducer;
