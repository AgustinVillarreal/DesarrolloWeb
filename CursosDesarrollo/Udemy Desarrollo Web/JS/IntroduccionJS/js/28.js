// Classes

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`
    }

    retornarPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor Curvo de 49"', 800);
const producto3 = new Producto('Laptop', 400);

//Herencia

class Libro extends Producto{
    constructor (nombre, precio, isbn) {
        super(nombre, precio);
        this.isbn = isbn;
    }

    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es: ${this.isbn}`;
    }

    retornarPrecio(){
        super.retornarPrecio();
        console.log('Y si hay en existencia');
    }
}

const libro = new Libro('JavaScript la Revolucion', 120, '12913712739127')

console.log(libro.formatearProducto())
console.log(producto2.formatearProducto());

console.log(producto2.retornarPrecio());
console.log(libro.retornarPrecio());
