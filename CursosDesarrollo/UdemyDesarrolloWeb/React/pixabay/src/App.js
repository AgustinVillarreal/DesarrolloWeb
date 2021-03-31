import React, { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoImagenes from "./components/ListadoImagenes";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    const consultarAPI = async () => {
      if (busqueda === "") return;

      const imagenesPorPagina = 30;
      const apiKey = "20930010-a3d846858e7bfbe0d13a3c97a";
      const url = `https://pixabay.com/api/?key=${apiKey}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      setImagenes(respuesta.hits);
      const cantidadPaginas = Math.ceil(
        respuesta.totalHits / imagenesPorPagina
      );
      setTotalPaginas(cantidadPaginas);
      //Mover hacia arriba
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:"smooth"})
    };
    consultarAPI();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    const nuevaPagina = paginaActual - 1;
    if (nuevaPagina < 1) return;

    setPaginaActual(nuevaPagina);
  };

  const paginaSiguiente = () => {
    const nuevaPagina = paginaActual + 1;
    if (nuevaPagina > totalPaginas) return;

    setPaginaActual(nuevaPagina);
  };

  return (
    <div className="container">
      <div className="jumbotron ">
        <p className="lead text-center">Buscador de Imagenes</p>
        <Formulario setBusqueda={setBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />

        {paginaActual === 1 ? null : (
          <button
            type="button"
            className="bbtn btn-info mr-1 mb-5"
            onClick={paginaAnterior}
          >
            &laquo; Anterior
          </button>
        )}

        {paginaActual === totalPaginas ? null : (
          <button
            type="button"
            className="bbtn btn-info mb-5"
            onClick={paginaSiguiente}
          >
            Siguiente &raquo;
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
