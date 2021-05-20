import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/autenticacion/authContext";
import TareasContext from "../../context/tareas/tareaContext";
import ProyectosContext from "../../context/proyectos/proyectoContext";

const Barra = () => {
  // Extraer la informacion de autenticacion
  const { usuario, usuarioAutenticado, cerrarSesion } = useContext(AuthContext);
  const { cerrarTareas } =  useContext(TareasContext);
  const { cerrarProyectos } =  useContext(ProyectosContext);

  useEffect(() => {
    usuarioAutenticado();
    //eslint-disable-next-line
  }, []);

  const cerrarSesionUsuario = () => {
    cerrarProyectos();
    cerrarTareas();
    cerrarSesion();
  }

  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Hola <span>{usuario.nombre}</span>
        </p>
      ) : null}

      <nav className="nav-principal">
        <button className='btn btn-blank cerrar-sesion' onClick={cerrarSesionUsuario}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};

export default Barra;
