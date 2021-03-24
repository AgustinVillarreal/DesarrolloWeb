//FORMAS DE IMPORTAR SOLO PUEDO IMPORTAR POR DEFAULT UNA SOLA VEZ POR ARCHIVO

// // export const nombreTarea = 'Pasear al perro';
// const nombreTarea = 'Pasear al perro';
// const tarea = 'tarea';

// export const crearTarea = (tarea, urgencia) => {
//     return `La ${tarea} tiene una urgencia de ${urgencia}`
// }
// export const tareaCompletada = () => {
//     return 'La tarea fue completada'
// }
// export default {
//     nombre: nombreTarea,
//     tarea: tarea
// }


export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre,
        this.prioridad = prioridad
    }
    mostrar(){
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}



// let tarea1 = new Tarea('Aprender JS', 'Alta');
// let tarea1 = new Tarea('Preparar Cafe', 'Alta');
// let tarea1 = new Tarea('Pasear el Perro', 'Media');
// let tarea1 = new Tarea('Conocer a mis Suegros', 'Baja');

// let compra1 = new comprasPendientes('Jabon', 'Urgente' , 3);
