import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error'

const Pregunta = ({setPresupuesto, setRestante, actualizarPregunta}) => {

    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Funcion que lee el cantidad
    const guardarPresupuesto = e => {
        const presupuestoIngresado = parseInt(e.target.value, 10);
        setCantidad(presupuestoIngresado)
    }

    const enviarFormulario = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return;
        }

        //Luego de la validacion
        setError(false)
        setPresupuesto(cantidad);
        setRestante(cantidad);
        actualizarPregunta(false);
        
    }

    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
            {error ? <Error mensaje = 'El Presupuesto es Incorrecto'/> : null}
            <form
                onSubmit = {enviarFormulario}
            >
                <input
                    type        = 'number'
                    placeholder = 'Coloca tu Presupuesto'
                    className   = 'u-full-width'
                    onChange    = {guardarPresupuesto}
                />

                <input
                    type      = 'submit'
                    value     = 'Definir Presupuesto'
                    className = 'button-primary u-full-width'
                />
            </form>
        </Fragment>
     );
}


Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}

export default Pregunta;