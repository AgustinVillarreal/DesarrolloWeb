import React, { useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({setBusqueda, busqueda, setConsulta}) => {


  const [error, setError] = useState(false);

  const { pais, ciudad } = busqueda;

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pais.trim() === "" || ciudad.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    setConsulta(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? (
        <Error mensaje={'Todos los campos son obligatorios'}/>
      ) : null}
      <div className="input-field col s12">
        <input
          value={ciudad}
          type="text"
          name="ciudad"
          id="ciudad"
          onChange={handleChange}
        />

        <label htmlFor="ciudad"> Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" onChange={handleChange} value={pais}>
          <option>-- Seleccione un país --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>

        <label htmlFor="pais"> País: </label>
      </div>

      <div className="input-field col s12">
        <button
          type="submit"
          className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
        >
          Buscar Clima{" "}
        </button>
      </div>
    </form>
  );
};


Formulario.propTypes = {
  setBusqueda:PropTypes.func.isRequired,
  busqueda:PropTypes.object.isRequired,
  setConsulta:PropTypes.func.isRequired
}

export default Formulario;
