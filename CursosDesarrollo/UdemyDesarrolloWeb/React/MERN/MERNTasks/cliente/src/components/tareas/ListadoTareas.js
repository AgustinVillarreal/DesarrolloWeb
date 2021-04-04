import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyectoseleccionado, eliminarProyecto } = proyectosContext;

  //Si no hay proyecto seleccionado 
  if(!proyectoseleccionado) {return <h2> Selecciona un proyecto</h2>};

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyectoseleccionado;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataformas de pago", estado: true },
    { nombre: "Elegir Hosting", estado: false },
  ];

  const handleClick = () => {
    eliminarProyecto(proyectoActual.id)
  }

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar" onClick= {handleClick}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
