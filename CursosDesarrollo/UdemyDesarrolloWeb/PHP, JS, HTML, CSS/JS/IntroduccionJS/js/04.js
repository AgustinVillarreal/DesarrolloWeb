//String o cadenas de Texto

const producto = 'Monitor 20";' //String
const tweet = "Aprendiendo JavaScript con el curso de Desarrollo Web Completo";
//Constructor de String
const producto2 = String("Monitor HD"); //String
// const producto3 = new String("Monitor 50 Pulgadas"); //Objeto

// console.log(typeof producto);
// console.log(typeof producto2);
// console.log(typeof producto3);



console.log(producto2);

console.log
//Metodos que entienden los strings

//.length te indica la cantidad de caracteres
console.log(producto.length); 

/*.indexOf() 
te indica la posicion en la que una palabra se encuentra en una cadena de texto
o te indica con un numero < 0 si es que no existe esa palabra */
console.log(tweet.indexOf("JavaScript"));
console.log(tweet.indexOf("Tablet"));

//.includes()
console.log(tweet.includes("JavaScript"));
console.log(tweet.includes("Tablet"));
/*Indica con true o false*/

