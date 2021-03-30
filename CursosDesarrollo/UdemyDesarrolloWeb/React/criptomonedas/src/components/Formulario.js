import React, { useEffect, useState } from "react";
import Error from './Error'
import useMoneda from "../hooks/useMoneda";
import useCriptomoneda from "../hooks/useCriptomoneda";
import styled from "@emotion/styled";
import axios from "axios";
import PropTypes from 'prop-types';

const Boton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const Formulario = ({setMoneda, setCriptomoneda}) => {

  const [listaCripto, setListaCripto] = useState([]);
  const [error, setError] = useState(false);

  const MONEDAS = [
    { codigo: "USD", nombre: "Dolar de Estados Unidos" },
    { codigo: "ARS", nombre: "Peso Argentino" },
    { codigo: "EUR", nombre: "Euro" },
    { codigo: "GBP", nombre: "Libra Esterlina" },
  ];

  const [moneda, SelectMoneda] = useMoneda("Elige tu Moneda", "", MONEDAS);

  const [criptomoneda, SelectCripto] = useCriptomoneda(
    "Elige tu Criptomoneda",
    "",
    listaCripto
  );

  //Llamado a la API
  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const resultado = await axios.get(url);
      setListaCripto(resultado.data.Data);
    };
    consultarAPI();
  }, []);

  const cotizarMoneda = e => {
    e.preventDefault();

    //Validar si ambos campos estan llenos
    if(moneda.trim() === '' || criptomoneda.trim() === ''){
      setError(true);
      return;
    }

    setError(false);
    setMoneda(moneda);
    setCriptomoneda(criptomoneda);
  }
  
  return (
    <form
      onSubmit = {cotizarMoneda}
    >
      {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
      <SelectMoneda />
      <SelectCripto />
      <Boton type="submit" value="Calcular" />
    </form>
  );
};

Formulario.propTypes = {
  setMoneda: PropTypes.func.isRequired,
  setCriptomoneda: PropTypes.func.isRequired
}

export default Formulario;
