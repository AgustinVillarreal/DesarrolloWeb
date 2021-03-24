//Arrow Functions
//(Otra forma de declarar funciones)



const sumar2 = function(n1, n2){
    console.log(n1 + n2);
};

sumar2(5, 10);

//Las llaves son opcionales si tiene una sola linea
const sumar2 = (n1,n2) => {console.log(n1 + n2)};

const aprendiendo = tecnologia => console.log('Aprendiendo ${tecnologia}')

aprendiendo('JavaScript');






/*------------------------------------*/
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

meses.forEach( mes => {
    if(mes == 'Marzo') {
        console.log('Marzo si existe');
    }
});

let resultado;

resultado = carrito.some(producto => producto.nombre === 'Celular');



// Reduce

resultado = carrito.reduce((total, productoActual) => total + productoActual.precio, 0); //Valor inicial, es decir que iniciamos en 0

//Filter

resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto => producto.nombre !== 'Celular');

console.log(resultado);
