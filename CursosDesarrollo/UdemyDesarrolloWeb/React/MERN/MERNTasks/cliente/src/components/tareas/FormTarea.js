import React, {useContext} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {

  const proyectosContext = useContext(proyectoContext);
  const { proyectoseleccionado } = proyectosContext;

  if(!proyectoseleccionado) return null;

  const [proyectoActual] = proyectoseleccionado;
  
  return (
    <div className="formulario">
      <form>
          <div className='contenedor-input'>
              <input 
                type='text'
                className='input-text'
                placeholder='Nombre Tarea...'
                name='nombre'
              />
          </div>
          <div className='contenedor-input'>
              <input 
                type='submit'
                className='btn btn-primario btn-submit btn-block'
                value='Agregar Tarea'
              />
          </div>
      </form>
    </div>
  );
};

export default FormTarea;
