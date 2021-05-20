import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";
import Tarea from "./Tarea";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoTareas = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoseleccionado, eliminarProyecto } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const { tareasproyecto } = tareasContext;

  //Si no hay proyecto seleccionado
  if (!proyectoseleccionado) {
    return <h2> Selecciona un proyecto</h2>;
  }

  // Array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyectoseleccionado;

  const handleClick = () => {
    eliminarProyecto(proyectoActual._id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea._id} timeout={200} classNames='tarea'>
                <Tarea tarea={tarea}/>
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>

      <button type="button" className="btn btn-eliminar" onClick={handleClick}>
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTareas;
