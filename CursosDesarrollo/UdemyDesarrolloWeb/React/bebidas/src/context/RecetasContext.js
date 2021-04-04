import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const RecetasContext = createContext();

const RecetasProvider = (props) => {
  const [recetas, setRecetas] = useState([]);
  const [buscarRecetas, setBuscarRecetas] = useState({
    nombre: "",
    categoria: "",
  });
  const [buscar, setBuscar] = useState(false);
  const { nombre, categoria } = buscarRecetas;
  useEffect(() => {
    if (buscar) {
      const obtenerRecetas = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
        const resultado = await axios(url);
        setRecetas(resultado.data.drinks);
      };
      obtenerRecetas();
    }
  }, [buscarRecetas, buscar, categoria, nombre]);

  return (
    <RecetasContext.Provider value={{ recetas, setBuscarRecetas, setBuscar }}>
      {props.children}
    </RecetasContext.Provider>
  );
};

export default RecetasProvider;
