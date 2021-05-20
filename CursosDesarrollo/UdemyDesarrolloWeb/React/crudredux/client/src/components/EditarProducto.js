import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import {editarProductoAction} from '../actions/productosActions'

const EditarProducto = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  // nuevo state de producto
  const [producto, setProducto] = useState({
    nombre: '',
    precio: '',
  })
  const {nombre, precio} = producto;


  // producto a editar
  const {productoEditar} = useSelector(state => state.productos)

  // llenar el state automaticamente
  useEffect(() => {
    setProducto(productoEditar)
  }, [productoEditar])
  
  // Leer los datos del form
  const handleChange = e => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const submitEditarProducto = e => {
    e.preventDefault();

    dispatch(editarProductoAction(producto))
    history.push('/')
    
  }

  return (  
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form
              onSubmit={submitEditarProducto}
            >
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder="Nombre Producto"
                  value = {nombre}
                  onChange= {handleChange}
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
                  onChange= {handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary d-block w-100 text-uppercase font-weight-bold">
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default EditarProducto;