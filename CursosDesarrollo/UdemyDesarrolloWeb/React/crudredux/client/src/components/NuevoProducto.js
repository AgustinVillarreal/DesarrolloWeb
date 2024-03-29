import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'

//Actions de Redux
import { crearNuevoProductoAction } from '../actions/productosActions'
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions'



const NuevoProducto = ({history}) => {

  //state del componente
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  // utilizar useDispatch y crear una funcion
  const dispatch = useDispatch();

  // Acceder al state del store
  const {loading, error} = useSelector((state) => state.productos)
  const {alerta} = useSelector((state) => state.alerta)

  // llamar el action para crear un nuevo producto
  const agregarProducto = (producto) => dispatch( crearNuevoProductoAction(producto) )

  const handleSubmit = (e) => {
    e.preventDefault();
  
    //Validar formulario
    if(nombre.trim() === '' || precio <= 0 ){

      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: 'alert alert-danger text-center text-uppercase p3'
      }

      dispatch(mostrarAlertaAction(alerta))

      return;
      
    }
    // si no hay errores
    dispatch( ocultarAlertaAction())
  
    // crear el nuevo producto
    agregarProducto({
      nombre, 
      precio
    });

    // redireccionar
    history.push('/')
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            {alerta && <p className={alerta.classes}> {alerta.msg} </p>}
            <form
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Nombre Producto"
                  value = {nombre}
                  onChange = { e => setNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  placeholder="Precio Producto"
                  value = {precio}
                  onChange = { e => setPrecio(Number(e.target.value))}
                />
              </div>

              <button type="submit" className="btn btn-primary d-block w-100 text-uppercase font-weight-bold">
                Agregar
              </button>
            </form>
            { loading && <p> Cargando...</p>}
            { error && <p className= 'alert alert-danger p2 mt-4 text-center'> Hubo un Error</p> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
