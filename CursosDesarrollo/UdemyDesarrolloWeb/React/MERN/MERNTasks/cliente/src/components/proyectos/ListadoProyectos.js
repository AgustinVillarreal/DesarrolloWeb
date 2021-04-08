import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoProyectos = () => {
  // Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  //Revisar si tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno!</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition timeout={200} key={proyecto.id} classNames='proyecto'>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
