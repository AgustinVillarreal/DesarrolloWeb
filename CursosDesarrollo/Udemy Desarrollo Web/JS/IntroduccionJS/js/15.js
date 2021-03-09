// Arrays Methods

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
console.table(meses);

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

// forEach

meses.forEach(function(mes) {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

//Includes es el equivalente al codigo de arriba

let resultado = meses.includes('Marzo');
const resultad2 = carrito.includes('Marzo'); //Si es un arrays de objetos no es la mejor opcion
console.log(resultado);

// Some ideal para arreglo de objetos

resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular';
});

//Arrow funciton
// resultado = carrito.some(producto => producto.nombre == 'Celular');


// Reduce

resultado = carrito.reduce(function(total, productoActual) {
    return total + productoActual.precio
}, 0); //Valor inicial, es decir que iniciamos en 0

//Arrow function
// resultado = carrito.reduce((total, productoActual) => total + productoActual, 0);

console.log(resultado);

//Filter

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular'
});