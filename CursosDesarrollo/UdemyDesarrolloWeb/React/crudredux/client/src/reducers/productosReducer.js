import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTO_EXITO,
  DESCARGA_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
  COMENZAR_EDICION_PRODUCTO
} from "../types";

// Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };

    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };

    case PRODUCTO_EDITADO_ERROR:
    case DESCARGA_PRODUCTO_ERROR:
    case AGREGAR_PRODUCTO_ERROR:
    case PRODUCTO_ELIMINADO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DESCARGA_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: action.payload,
        error: null,
      };

    case OBTENER_PRODUCTO_ELIMINAR:
      return {
        ...state,
        productoEliminar: action.payload,
      };

    case PRODUCTO_ELIMINADO_EXITO:
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    
    case OBTENER_PRODUCTO_EDITAR:
      return{
        ...state,
        productoEditar: action.payload
      }

    case PRODUCTO_EDITADO_EXITO:
      return{
        ...state,
        productoEditar: null,
        productos: state.productos.map(producto => producto.id === action.payload.id ? producto = action.payload : producto)
      }
    default:
      return state;
  }
}
