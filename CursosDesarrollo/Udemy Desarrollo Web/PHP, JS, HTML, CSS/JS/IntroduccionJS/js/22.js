const puntaje = "1000";

/*El == revisa si es igual, el === revisa si es igual y si es el mismo tipo de dato
Por ejemplo 
const puntaje = "1000";
if (puntaje == 1000) da como resultado true
pero if (puntaje === 1000) da como resultado false*/

// if( puntaje == 1000){
//     console.log('Si el puntaje es 1000');
// } else {
//     console.log('No es igual');
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo >= carrito){
//     console.log('El usuario puede pagar');
// } else {
//     console.log('No puede pagar');
// }

const rol = 'EDITOR'

if(rol === 'ADMINISTRADOR'){
    console.log('Acceso a todo el sistema');
} else if (rol === "EDITOR"){
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho');
} else {
    console.log('No tienes acceso');
}