import clienteAxios from "../config/axios";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTO_ERROR,
  DESCARGA_PRODUCTO_EXITO,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_EXITO,
  PRODUCTO_ELIMINADO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
  PRODUCTO_EDITADO_ERROR,
  COMENZAR_EDICION_PRODUCTO
} from "../types";
import Swal from "sweetalert2";

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
  return async (dispatch) => {
    dispatch(agregarProducto());

    try {
      //insertar en la API o db
      await clienteAxios.post("/productos", producto);

      // Si todo sale bien, actualizar el state
      dispatch(agregarProductoExito(producto));

      //Alerta
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      // si hay un error, cambiar el state
      dispatch(agregarProductoError(true));

      //Alerta
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intente de nuevo",
      });
    }
  };
}

//Funcion que descarga los productos de la base de datos
export function obtenerProductosAction() {
  return async (dispatch) => {
    dispatch(descargarProductos());

    try {
      const respuesta = await clienteAxios.get("/productos");
      dispatch(obtenerProductosExito(respuesta.data));
    } catch (error) {
      console.log(error);
      dispatch(obtenerProductosError());
    }
  };
}

//Selecciona y eliminar el producto
export function eliminarProductoAction(id) {
  return async (dispatch) => {
    dispatch(obtenerProductoEliminar(id));

    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());

      //Si se elimina, mostramos alerta
      Swal.fire(
        "Eliminado!",
        "Tu producto a sido eliminado correctamente.",
        "success"
      );
    } catch (error) {
      console.log(error);
      dispatch(eliminarProductoError());
    }
  };
}

// Colocar producto en edicion
export function obtenerProductoEditarAction(producto) {
  return (dispatch) => {
    dispatch (obtenerProductoEditar(producto))
  }
}

// Edita un registro en la api y state
export function editarProductoAction(producto) {
  return async (dispatch) => {
    dispatch( editarProducto());

    try {
      await clienteAxios.put(`/productos/${producto.id}`, producto)
      dispatch( editarProductoExito(producto) )
    } catch (error) {
      dispatch( editarProductoError() )
    }
  }
}

const editarProductoError = () => ({
  type: PRODUCTO_EDITADO_ERROR,
  payload: true
})

const editarProductoExito = producto => ({
  type: PRODUCTO_EDITADO_EXITO,
  payload: producto
})

const editarProducto =  () => ({
  type: COMENZAR_EDICION_PRODUCTO
})

const obtenerProductoEditar = producto => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto
})

const eliminarProductoError = () => ({
  type: PRODUCTO_ELIMINADO_ERROR,
  payload: true,
});

const eliminarProductoExito = () => ({
  type: PRODUCTO_ELIMINADO_EXITO,
});

const obtenerProductoEliminar = (id) => ({
  type: OBTENER_PRODUCTO_ELIMINAR,
  payload: id,
});

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});

// si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

// si hubo un error

const agregarProductoError = (booleanState) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: booleanState,
});

const descargarProductos = () => ({
  type: COMENZAR_DESCARGA_PRODUCTOS,
  payload: true,
});

const obtenerProductosExito = (productos) => ({
  type: DESCARGA_PRODUCTO_EXITO,
  payload: productos,
});

const obtenerProductosError = () => ({
  type: DESCARGA_PRODUCTO_ERROR,
  payload: true,
});
