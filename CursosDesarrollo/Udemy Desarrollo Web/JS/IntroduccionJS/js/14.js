// Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

console.log(numeros);
console.table(numeros); //Te lo muestra en una tabla

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
console.table(meses);

const arreglo = ['Hola', 10, true, "Si", null, {nombre: "Agustin", profesion: "Programador"}, [1,2,3]];
console.table(arreglo);

//  // Acceder a los valores de un arreglo

//  console.log(arreglo[4]);
//  console.log(arreglo[2]);

//  // Conocer la extension de un arreglo

//  console.log(meses.length); 

// //ITERAR

//  meses.forEach( function(mes) {
//     console.log(mes);
//  })

//  console.log(meses[0]);
//  console.log(meses[1]);
//  console.log(meses[2]);
//  console.log(meses[3]);


//Eliminar y Agregar elementos del arreglo

//Agregar

numeros[5]=60; //No es comun tenes que conocer el tamaño
// numeros.push(60);
numeros.push(60, 70, 80);  //Agrega al final
numeros.unshift(-10, -20, -30); //Agrega al inicio

console.table(numeros);

//Eliminar

meses.pop(); //Elimina el ultimo elemento
meses.shift(); //Elimina el primer elemento
meses.splice(2, 1); //Llega a la posicion 2 y elimina 1 valor, es decir a el mismo, en este caso Marzo

console.table(meses);

//La desventaja es que eliminan desde el array original, por eso se busca crear un nuevo arreglo
// Rest Operator o Spread Operator no modifica el arreglo meses

const nuevoArreglo = [...meses, 'Junio'];
const nuevoArregloShift = ['Junio', ...meses];
console.table(nuevoArreglo);
