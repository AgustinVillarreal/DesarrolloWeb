import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frase from "./components/Frase";
import logo from './logo.svg';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Imagen = styled.img`
  width: 95%;
  max-width: 30rem;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin: 3rem 0;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  &:hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {
  const [frase, setFrase] = useState({});

  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const frase = await api.json();
    setFrase(frase[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, [])

  return (
      <Contenedor>
        <Imagen src={logo} />
        <Frase frase={frase} />
        <Boton onClick={consultarAPI}>Obtener Frase</Boton>
      </Contenedor>
  );
}

export default App;
