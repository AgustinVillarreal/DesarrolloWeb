//Iteradores

 //For Loop

// for( let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// for( let i = 1; i <= 100; i++) {
//     if(i % 2 === 0){
//         console.log('El numero ${i} es PAR');
//     } else {
//         console.log('El numero ${i} es IMPAR');
//     }
// }

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

for(let i = 0; i < carrito.length; i++){
    console.log(carrito[i].nombre);
}



 //While Loop

 let i = 0; //Indice

 while( i <= 100) { //Condicion

    if(i % 2 === 0){
        console.log('El numero ${i} es PAR');
    } else {
        console.log('El numero ${i} es IMPAR');
    }

    i++; //Incremento
 }

 // Do While Loop

 do {
    console.log(i);

    i++;
 } while( i < 10)