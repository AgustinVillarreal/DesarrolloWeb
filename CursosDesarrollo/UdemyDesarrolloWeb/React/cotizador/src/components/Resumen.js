import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { primerMayusc } from '../helpers'

const ContenedorResumen = styled.div `
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;


const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;
    if(marca === '' || year === '' || plan === ''){ return null };
    return ( 
        <ContenedorResumen>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {primerMayusc(marca)} </li>
                <li>Año del Auto: {year} </li>
                <li>Plan: {primerMayusc(plan)} </li>
            </ul>
        </ContenedorResumen>
    );
}
 
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}

export default Resumen;