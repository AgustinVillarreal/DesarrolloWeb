import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: white;
  text-transform: uppercase;
  font-size: 2.4rem;
  margin-top: 2rem;
  font-weight: bold;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  -webkit-appearance: none;
  border: none;
  display: block;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1.2rem;
  &:focus {
    outline: none;
  }
`;

const useMoneda = (label, stateInicial, opciones) => {
  const [state, setState] = useState(stateInicial);

  const Seleccionar = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option>- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.codigo} value={opcion.codigo}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, Seleccionar, setState];
};

export default useMoneda;
