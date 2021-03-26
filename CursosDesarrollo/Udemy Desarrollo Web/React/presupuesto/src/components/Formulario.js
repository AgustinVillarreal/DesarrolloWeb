import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error'
import shortid from 'shortid'

const Formulario = ({setGasto, setAgregarGasto}) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  const agregarGasto = e => {
    e.preventDefault();

    if(cantidad < 1 || isNaN(cantidad) || nombre === ''){
      setError(true);
      return;
    }
    setError(false);

    //construir el gasto

    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate()
    }

    // pasar el gasto al componente principal
    setGasto(gasto)
    setAgregarGasto(true)

    // resetear el form
    setNombre('')
    setCantidad(0)
  }

  return (
    <form
      onSubmit = {agregarGasto}
    >
      <h2>Agrega tus Gastos Aqui</h2>

      {error ? <Error mensaje='Error en el Ingreso de los Gastos' /> : null}

      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          placeholder="Ej. Transporte"
          className="u-full-width"
          value = {nombre}
          onChange = {e => setNombre(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Cantidad Gasto</label>
        <input type="number" placeholder="Ej. 300" className="u-full-width" value={cantidad} onChange= {e => setCantidad(parseInt(e.target.value, 10))} />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.propTypes = {
  setGasto: PropTypes.func.isRequired,
  setAgregarGasto: PropTypes.func.isRequired
}

export default Formulario;
