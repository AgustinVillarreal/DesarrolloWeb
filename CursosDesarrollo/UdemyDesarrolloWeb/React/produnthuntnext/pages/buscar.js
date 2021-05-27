import React, { useEffect, useState } from "react";
import Layout from "../components/layouts/Layout";
import { useRouter } from "next/router";
import useProductos from "../hooks/useProductos";
import DetallesProducto from "../components/layouts/DetallesProducto";
import { css } from "@emotion/react";

const Buscar = () => {
  const router = useRouter();
  const {
    query: { q },
  } = router; // q es la busqueda que llega desde el formulario (query)

  // Todos los productos
  const { productos } = useProductos("creado");
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    if (!q) return;

    const busqueda = q.toLowerCase();
    const filtro = productos.filter((producto) => {
      return (
        producto.nombre
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(busqueda) ||
        producto.descripcion
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(busqueda)
      );
    });
    setResultado(filtro);
  }, [q, productos]);

  return (
    <div>
      <Layout>
        <div className="listado-productos">
          <div className="contenedor">
            {resultado.length === 0 ? (
              <h1
                css={css`
                  font-size: 2rem;
                  margin-top: 5rem;
                  text-align: center;
                `}
              >
                No se encontraron resultados para esta búsqueda
              </h1>
            ) : (
              <div className="bg-white">
                {resultado.map((producto) => (
                  <DetallesProducto key={producto.id} producto={producto} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Buscar;
