import clienteAxios from "../config/axios";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";
import Swal from 'sweetalert2'

// Crear nuevos productos
export function crearNuevoProductoAction(producto){
  return async (dispatch) => {
    dispatch( agregarProducto() )

    try {
      //insertar en la API o db
      await clienteAxios.post('/productos', producto);

      // Si todo sale bien, actualizar el state
      dispatch( agregarProductoExito(producto) )

      //Alerta
      Swal.fire(
        'Correcto',
        'El producto se agrego correctamente',
        'success'
      )
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch( agregarProductoError(true) )

       //Alerta
       Swal.fire(
       { icon:'error',
        title: 'Hubo un error',
        text: 'Hubo un error, intente de nuevo'
      })
      
    }
  }
}

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true
})

// si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
})

// si hubo un error

const agregarProductoError = booleanState => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: booleanState
})