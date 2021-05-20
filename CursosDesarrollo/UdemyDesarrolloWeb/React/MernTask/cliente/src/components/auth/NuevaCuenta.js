import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AlertaContext from "../../context/alertas/alertaContext";
import AuthContext from '../../context/autenticacion/authContext'


const NuevaCuenta = (props) => {
  // extraer los valores del context
  const alertaContext = useContext(AlertaContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { mensaje, autenticado, registrarUsuario } = authContext;

  // En caso de que el usuario se haya autenticado o registrado o
  // sea un registro duplcado

  useEffect(() => {
    if(autenticado){
      props.history.push('/proyectos')
    }
    if(mensaje){
      mostrarAlerta(mensaje.msg, mensaje.categoria)
    }
    //eslint-disable-next-line
  }, [mensaje, autenticado, props.history])


  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { nombre, email, password, confirmar } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //Crear usuario junto con mail y contraseña
  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirmar.trim() === ""
    ) {
      mostrarAlerta("Todos los campos son obligatorios", "alerta-error");
    }

    //Validar password minimo de 6 caracteres (lo hace tambien el backend)
    if (password.length < 6) {
      mostrarAlerta(
        "El password debe ser de al menos 6 caracteres",
        "alerta-error"
      );
      return;
    }

    //Validar confirmacion de password
    if (password !== confirmar) {
      mostrarAlerta("Los password no son iguales", "alerta-error");
      return;
    }

    // Pasar al action
    registrarUsuario({
      nombre, 
      email, 
      password
    })

  };

  return (
    <div className="form-usuario">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <div className="contenedor-form sombra-dark">
        <h1>Crear una Cuenta</h1>

        <form onSubmit={handleSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre Usuario</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Tu Nombre"
              onChange={handleChange}
              value={nombre}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu E-mail"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="confirmar">Confirmar Password</label>
            <input
              type="password"
              id="confirmar"
              name="confirmar"
              placeholder="Repite tu Password"
              onChange={handleChange}
              value={confirmar}
            />
          </div>

          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrarse"
            />
          </div>
        </form>
        <Link to={"/"} className="enlace-cuenta">
          Volver a Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default NuevaCuenta;
