

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Television', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 500},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 500},
    { nombre: 'Laptop', precio: 500},
]; //Arreglo con objetos

//Ambos son para arreglos

// forEach 
const arreglo1 = carrito.forEach(producto => producto.nombre)

// map
const arreglo2 = carrito.map(producto => producto.nombre)

console.log(arreglo1);
console.log(arreglo2);
