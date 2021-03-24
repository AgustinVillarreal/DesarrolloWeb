// Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se pudo iniciar sesión');
    }
});

/* Para mostrar los resultados entonces utilizamos este paso*/

usuarioAutenticado
    .then ( resultado => console.log(resultado)) // Muestra el resolve
    .catch( error     => console.log(error)) // Muestra el reject
    
console.log(usuarioAutenticado);

 
//resolve se ejecuta cuando el promise se cumple
//En caso de que no se cumpla, se ejecuta la funcion de reject
//Es decir, Promise recibe como parametro resolve y reject dentro de la funcion

/* En los promises existen 3 valores:

--- Pending: No se ha cumplido pero no se ha rechazado, esta en espera por ejemplo que no aclares en el codigo que sucede
--- Fulfilled: Ya se cumplio
--- Rejected: Se ha rechazado o no se pudo cumplir

*/