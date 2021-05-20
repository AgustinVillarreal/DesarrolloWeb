import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  //obtener el state del formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, errorformulario, mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

  //state para proyecto
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  //Lee contenido de inputs
  const handleChange = (e) => {
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // Envio del proyecto
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar el proyecto
    if(nombre.trim() === '') {
      mostrarError();
      return;
    }

    // agregar al state
    agregarProyecto(proyecto)

    // reiniciar el form
    setProyecto({
      nombre:''
    })
  };

  return (
    <Fragment>
      <button type="button" className="btn btn-primario btn-block" onClick={() => {mostrarFormulario()}}>
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre Proyecto"
            className="input-text"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
      {errorformulario ? <p className='mensaje error'>El Nombre del Proyecto es Obligatorio</p> : null}
    </Fragment>
  );
};

export default NuevoProyecto;
