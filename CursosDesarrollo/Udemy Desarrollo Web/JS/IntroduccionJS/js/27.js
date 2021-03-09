// POO

// Objetct Literal
const producto = {
    nombre: 'Tablet',
    precio: 500,
}

// Object Constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

function Cliente(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 400);

const cliente = new Cliente('Agustin', 'Villarreal'); 

Cliente.prototype.formatearCliente = function() {
    return `El Cliente ${this.nombre} tiene un apellido ${this.apellido}`
}

//Prototype nos permite crear funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return  `El Producto ${this.nombre} tiene un precio de: ${this.precio} `;
}

// //Tendria que crear una funcion para formatear cada objeto
// function formatearProducto(producto) {
//     return  `El Producto ${producto.nombre} tiene un precio de: ${producto.precio} `;
// }

console.log(producto2.formatearProducto());

console.log(producto3.formatearProducto());

