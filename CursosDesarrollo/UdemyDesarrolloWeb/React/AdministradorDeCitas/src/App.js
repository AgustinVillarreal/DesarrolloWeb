import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {

  // Citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = [];
  }
  const [citas, agregarCita] = useState(citasIniciales);

  //Use effect para realizar operaciones cuando el state cambia
  //Siempre tiene que ser un array function

  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas, citasIniciales]); //Cuando se produce un cambio en el arrays de dependencia (en este caso en las citas) se ejecuta el codigo

  const crearCita = (cita) => {
    agregarCita([...citas, cita]);
  };

  const eliminarCita = (id) => {
    const citasNuevas = citas.filter((cita) => cita.id !== id);
    agregarCita(citasNuevas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.key} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
