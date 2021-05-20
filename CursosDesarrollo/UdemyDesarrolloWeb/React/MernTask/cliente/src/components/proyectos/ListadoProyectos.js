import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AlertaContext from '../../context/alertas/alertaContext'

const ListadoProyectos = () => {
  // Extraer proyectos del state inicial
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  const alertaContext = useContext(AlertaContext)
  const { alerta, mostrarAlerta } = alertaContext

  useEffect(() => {

    //si hay un error
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }

    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);

  //Revisar si tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando uno!</p>;

  return (
    <ul className="listado-proyectos">
      {alerta ? <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div> : null} 
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition timeout={200} key={proyecto._id} classNames='proyecto'>
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
