import React, { useContext, useEffect, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  const proyectosContext = useContext(proyectoContext);
  const { proyectoseleccionado } = proyectosContext;

  const tareasContext = useContext(tareaContext);
  const {
    errortarea,
    tareaseleccionada,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea
  } = tareasContext;

  // Effect para saber la tarea seleccionada
  useEffect(() => {
    if (tareaseleccionada !== null) {
      setTarea(tareaseleccionada);
    } else {
      setTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const { nombre } = tarea;

  if (!proyectoseleccionado) return null;

  const [proyectoActual] = proyectoseleccionado;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // si es edicion o si es nueva tarea
    if (!tareaseleccionada) {
      // agregar nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      // actualizar tarea existente
      actualizarTarea(tarea);
      limpiarTarea();
    }

    obtenerTareas(tarea.proyecto);

    // reiniciar el form
    setTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            value={tarea.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Modificar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
