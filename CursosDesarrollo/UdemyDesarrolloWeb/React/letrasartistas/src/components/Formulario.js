import React, { useState } from "react";

const Formulario = ({setInformacion}) => {
  const [busqueda, setBusqueda] = useState({
    artista: "",
    cancion: "",
  });

  const [error, setError] = useState(false);

  const { cancion, artista } = busqueda;

  const actualizarState = (e) => {
    setBusqueda({ ...busqueda, [e.target.name]: e.target.value });
  };

  const buscarInformacion = (e) => {
    e.preventDefault();
    if (cancion.trim() === "" || artista.trim() === "") {
      setError(true);
      return;
    }

    setError(false);
    setInformacion(busqueda);
  };

  return (
    <div className="bg-info">
      <div className="container">
        <div className="row">
          <form
            className="col card text-white bg-transparent mb-5 pt-5 pb-2"
            onSubmit={buscarInformacion}
          >
            <fieldset>
              {error ? (
                <p className="alert alert-danger p-2">
                  Todos los Campos son Obligatorios
                </p>
              ) : null}

              <legend className="text-center">Buscador Letras Canciones</legend>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Artista</label>
                    <input
                      className="form-control"
                      type="text"
                      name="artista"
                      placeholder="Nombre Artista"
                      onChange={actualizarState}
                      value={artista}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Canción</label>
                    <input
                      className="form-control"
                      type="text"
                      name="cancion"
                      onChange={actualizarState}
                      value={cancion}
                      placeholder="Nombre Canción"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-primary float-right">
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
