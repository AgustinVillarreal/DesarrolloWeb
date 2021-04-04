import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const { setBuscarRecetas, setBuscar } = useContext(RecetasContext);
  const { categorias } = useContext(CategoriasContext);

  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="col-12" onSubmit={e => {
      e.preventDefault()
      setBuscarRecetas(busqueda)
      setBuscar(true);
    }}>
      <fieldset className="text-center">
        <legend>Busca bebidas por Categoría o Ingrediente</legend>
        <div className="row mt-4">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar por Ingrediente"
              name="nombre"
              onChange={obtenerDatosReceta}
            />
          </div>
          <div className="col-md-4">
            <select
              className="form-control"
              name="categoria"
              onChange={obtenerDatosReceta}
            >
              <option value="">-- Selecionar Categoría --</option>
              {categorias.map((categoria) => (
                <option
                  key={categoria.strCategory}
                  value={categoria.strCategory}
                >
                  {categoria.strCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <input
              type="submit"
              className="btn btn-block btn-primary"
              value="Buscar Bebidas"
            />
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default Formulario;
