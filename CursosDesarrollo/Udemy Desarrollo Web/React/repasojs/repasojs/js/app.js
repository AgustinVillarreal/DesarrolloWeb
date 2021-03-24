// //IMPORTAR, recordar que hay que agregar en el html un type module pq si no no funciona
// // import {nombreTarea, crearTarea} from './tareas.js';
// import nombreTarea from './tareas.js';
// // si lo exporto con  default no es necesario las llaves
// console.log(nombreTarea);

// // Exportar una funcion
// import {crearTarea, tareaCompletada} from './tareas.js';
// const tarea1 = crearTarea('Pasear al perro', 'Media');
// console.log(tarea1);
// tareaCompletada();

import Tarea from './tareas.js';
const tarea1 = new Tarea('Aprender JS', 'Alta');
console.log(tarea1);
tarea1.mostrar();

const descargaUsuarios = cantidad => new Promise ((resolve, reject) => {

    // pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a ajax

    const xhr = new XMLHttpRequest();

    // abrir la conexion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results)
        }
        else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional
    xhr.onerror = (error) => reject(error);

    // enviar
    xhr.send();
})

descargaUsuarios(20)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error('Hubo un error' + error)
        )
    );

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first}${usuario.name.last}
                País: ${usuario.nat}
                Imagen: 
                    <img src="${usuario.picture.medium}">
            </li>
        `
    });
    const contenedorApp = document.querySelector("#app");
    contenedorApp.innerHTML = html;
}