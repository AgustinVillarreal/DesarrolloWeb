import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//Muestra alerta
export function mostrarAlertaAction(alerta) {
  return (dispatch) => {
    dispatch( mostrarAlerta(alerta) )
  }
}

// ocultar alerta
export function ocultarAlertaAction() {
  return dispatch => {
    dispatch( ocultarAlerta() )
  }
}

const ocultarAlerta = () => ({
  type: OCULTAR_ALERTA
})

const mostrarAlerta = alerta => ({
  type: MOSTRAR_ALERTA,
  payload: alerta
})