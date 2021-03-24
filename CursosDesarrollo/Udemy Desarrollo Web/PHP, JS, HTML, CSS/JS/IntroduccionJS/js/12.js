"use strict"; // Ejecutar el codigo de js estrictamente, para que salte errores

// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

producto.imagen = 'imagen.jpg';


Object.freeze(producto); //Congelar el objeto para que no pueda ser modificado, es decir que no se le pueda agregar mas propiedades

console.log(Object.isFrozen(producto)); //Te indica si el objeto esta congelado

Object.seal(producto);

console.log(Object.isSealed(producto));

delete producto.precio;

//Diferencia entre freeze y seal
//freeze no te permite agregar ni eliminar propiedades, ni cambiar valores de las propiedades
//seal no te permite agregar ni eliminar pero SI te permite modificar los existenets

console.log(producto);