
// Objetos

const producto = {
    nombreProducto: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m',
}

//REST OPERATOR, une los dos objetos pero no modifica los originales
const nuevoProducto = { ...producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);