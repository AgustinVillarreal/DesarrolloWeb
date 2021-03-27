import React, { Fragment, useState } from "react";
/*El fragment se utiliza para no devolver todo dentro de un contenedor, ya que me quedaran estructuras html sin utilidad*/
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";

function App() {
  //Crear listado de Productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa ReactJS", precio: 50 },
    { id: 2, nombre: "Camisa VueJS", precio: 40 },
    { id: 3, nombre: "Camisa Node.js", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
  ]);
  const [carrito, setCarrito] = useState([]);

  //Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />
      <h2>Lista de Productos</h2>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          productos={productos}
          producto={producto}
          carrito={carrito}
          setCarrito={setCarrito}
        />
      ))}

      <Carrito 
        carrito={carrito}
        setCarrito = {setCarrito} 
      />

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
