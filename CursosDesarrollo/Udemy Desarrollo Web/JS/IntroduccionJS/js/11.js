// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);


// Destructuring 
// Extrae el valor y lo asigna en una variable directamente
const { precio         } = producto;
const { nombreProducto } = producto
const { precio, nombreProducto } = producto;


console.log(precio);