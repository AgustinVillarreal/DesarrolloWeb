import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consulta, setConsulta] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false)

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const consultarAPI = async () => {
      if (consulta) {
        const encodeCiudad = encodeURI(ciudad);
        const appId = "f8faeef4ba36659d6f97820f560fe4f5";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeCiudad},${pais}&appid=${appId}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
        setConsulta(false);

        // Verifica si hay error
        if(resultado.cod === '404'){
          setError(true);
        } else {
          setError(false);
        }

      }
    };

    consultarAPI();
    // eslint-disable-next-line

  }, [consulta, ciudad, pais]);

  let componente;
  if(error){
    componente = <Error mensaje={"No hay resultados"}/>
  } else {
    componente = <Clima resultado={resultado} />
  }

  return (
    <Fragment>
      <Header titulo="Clima React App" />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                setBusqueda={setBusqueda}
                busqueda={busqueda}
                setConsulta={setConsulta}
              />
            </div>
            <div className="col m6 s12">
              {componente}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
