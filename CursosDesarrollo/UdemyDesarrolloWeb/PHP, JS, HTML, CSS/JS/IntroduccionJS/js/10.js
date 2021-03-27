// Objetos

const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Sintaxis de punto para acceder a las propiedades

// console.log(producto.nombreProducto);
// console.log(producto.precio);
// console.log(producto.disponible);


// //Otra sintaxis no tan usada
// console.log(producto['precio']);

//Crea o agrega una propiedad 
producto.imagen = 'imagen.jpg'; 

// Eliminar propiedades
delete producto.disponible;

console.log(producto);


