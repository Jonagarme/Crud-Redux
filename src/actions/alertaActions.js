import {
    MOSTAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

//muestra alerta
export function mostrarAlerta(alerta) {
    return(dispatch) =>{
        dispatch( crearAlerta(alerta) )
    }
}

const crearAlerta = alerta => ({
    type: MOSTAR_ALERTA,
    payload: alerta
})

//ocultar la alerta
export function ocultarAlertaAction(){
    return(dispatch) => {
        dispatch( ocultarAlerta() )
    }
}

const ocultarAlerta = () =>({
    type: OCULTAR_ALERTA
})