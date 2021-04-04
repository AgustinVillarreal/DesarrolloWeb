import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
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
          proyectoseleccionado: state.proyectos.filter(proyecto => proyecto.id === action.payload)
      }
    case ELIMINAR_PROYECTO:
        return {
          ...state,
          proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
          proyectoseleccionado: null
        }
    default:
      return state;
  }
};
