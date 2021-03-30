import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";
import PropTypes from 'prop-types';

const Formulario = ({setCategoria}) => {
  //OPCIONES
  const Opciones = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  //Utilizo custom Hook
  const [categoria, MostrarCategorias] = useSelect("general", Opciones);

	//onSubmit
	const buscarNoticias = e => {
		e.preventDefault()
		setCategoria(categoria);
	}

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form
					onSubmit= {buscarNoticias}
				>
          <h2 className={styles.heading}>Encuentra Noticia por Categoria</h2>
          <MostrarCategorias />
          <div className="input-field col s12">
            <input
              type="submit"
              value="Buscar"
              className={`${styles.btn_block} btn-large amber darken-2 `}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Formulario.propTypes = {
  setCategoria: PropTypes.func.isRequired
}

export default Formulario;
