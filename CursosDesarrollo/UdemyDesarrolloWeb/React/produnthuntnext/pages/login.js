import React, { useState } from "react";
import { css } from "@emotion/react";
import Router from 'next/router'
import Layout from "../components/layouts/Layout";
import {
  Campo,
  Error,
  Formulario,
  InputSubmit,
} from "../components/ui/Formulario";

import firebase from "../firebase";

// Validaciones
import useValidacion from "../hooks/useValidacion";
import validarIniciarSesion from "../validacion/validarIniciarSesion";

const STATE_INICIAL = {
  email: "",
  password: "",
};

const Login = () => {
  const [error, setError] = useState(false)

  const { valores, errores, handleChange, handleBlur, handleSubmit } =
    useValidacion(STATE_INICIAL, validarIniciarSesion, iniciarSesion);

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      await firebase.login(email, password);
      Router.push('/')
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <Layout>
        <>
          <h1
            css={css`
              text-align: center;
              margin-top: 5rem;
            `}
          >
            Iniciar Sesión
          </h1>
          <Formulario onSubmit={handleSubmit} noValidate>
            <Campo>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Tu Email"
                value={email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.email && <Error>{errores.email}</Error>}
            <Campo>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Tu Password"
                value={password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Campo>
            {errores.password && <Error>{errores.password}</Error>}
            
            {error && <Error>{error}</Error>}
            <InputSubmit type="submit" value="Iniciar Sesion" />
          </Formulario>
        </>
      </Layout>
    </div>
  );
}

export default Login;