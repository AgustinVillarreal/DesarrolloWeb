import React from "react";

const Producto = ({ producto, productos, setCarrito, carrito }) => {
  const { id, nombre, precio } = producto;

  const seleccionarProducto = (id) => {
    const producto = productos.filter((producto) => producto.id === id)[0];
    setCarrito([...carrito, producto]);
  };

  const eliminarProducto = (id) => {
    const productosCarrito = carrito.filter(producto => producto.id !== id)
    setCarrito(productosCarrito)
  };

  return (
    <div>
      <h2>{nombre}</h2>
      <p>${precio}</p>
      {productos ? (
        <button type="button" onClick={() => seleccionarProducto(id)}>
          Comprar
        </button>
      ) : (
        <button type="button" onClick={() => eliminarProducto(id)}>
          Eliminar
        </button>
      )}
    </div>
  );
};

export default Producto;
