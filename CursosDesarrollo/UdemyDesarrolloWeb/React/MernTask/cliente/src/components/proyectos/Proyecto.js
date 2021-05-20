import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({proyecto}) => {

  //Obtener el state
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  //Obtener la funcion para las tareas
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  //Muestra las tareas y selecciona el proyecto
  const seleccionarProyecto = proyectoId => {
    proyectoActual(proyectoId) //Fijar un proyecto actual 
    obtenerTareas(proyectoId) // Mostrar tareas cuadno se le da click al proyecto
  }
  
  return (
    <li>
      <button 
        type='button'
        className='btn btn-blank'
        onClick= {() => seleccionarProyecto(proyecto._id)}
      >{proyecto.nombre}</button>
    </li>
  );
};

export default Proyecto;
