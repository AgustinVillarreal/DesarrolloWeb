import React, { Fragment, useEffect } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { obtenerProductosAction } from "../actions/productosActions";

import Producto from "./Producto";

const Productos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    //Consultar la api
    const cargarProductos = () => {
      dispatch(obtenerProductosAction());
    };
    cargarProductos();

    //eslint-disable-next-line
  }, []);

  // obtener el state
  const { productos, error, loading } = useSelector((state) => state.productos);

  return (
    <Fragment>
      <h2 className="text-center my-5"> Listado de Productos</h2>
      {error && (
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          Hubo un error
        </p>
      )}
      {loading && <p className="text-center">Cargando...</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.length === 0
            ? <tr><th className='bg-white'>No hay productos</th></tr>
            : productos.map((producto) => (
                <Producto key={producto.id} producto={producto} />
              ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Productos;
