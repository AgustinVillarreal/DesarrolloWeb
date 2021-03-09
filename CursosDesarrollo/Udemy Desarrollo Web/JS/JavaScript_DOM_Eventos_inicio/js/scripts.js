/* querySelector y querySelectorAll utilizan .clase y #id como en css*/

//  querySelector RETORNA 0 o 1 SI NOS CONFUNDIMOS DE SELECTOR DEVUELVE UN NULL CUIDADO!!!
const heading = document.querySelector('.header__texto h2'); //Selecciono el h2 que se encuentre dentro de la clase header__texto //retorna 0 o 1 elementos, dentro del parentesis va el selector de css
// const navegacion = document.querySelector('a'); //RETORNA SOLAMENTE el enclace index.html
// const headingId = document.querySelector('#heading'); //Utilizo el id en JS NO EN CSS
//query selector retorna un elemento que sera utilizado como un objeto, por lo tanto
heading.textContent = 'Nuevo Heading'; //Cambia lo que dice el heading
// heading.classList.add('nueva-clase'); //Agrega una nueva clase al h2 del html



//  querySelectorAll RETORNA 0 o TODOS los elementos que concuerden con el selector CSS
const enlaces = document.querySelectorAll('.navegacion a'); //RETORNA UN NODELIST, es decir un arreglo de objetos
// console.log(enlaces[0]); //Primer elemento

enlaces[0].textContent = 'Nuevo texto para enlace'; //Modifico su texto
// enlaces[0].href = 'http://google.com'  //Modifico el href
enlaces[0].classList.add('nueva-clase');
// enlaces[0].classList.remove('navegacion__enlace');

//  getElementoById

// const heading2 = document.getElementById('heading'); //Selectores anteriores es igual que querySelector con #
// console.log(heading2);


// Generar un nuevo enlace con JS 

const nuevoEnlace = document.createElement('A'); //En mayusc

//Agregar el href, texto y clase

nuevoEnlace.href = 'nuevo-enlace.html';
nuevoEnlace.textContent = 'Tieneda Virtual';
nuevoEnlace.classList = 'navegacion__enlace';
console.log(nuevoEnlace);

//Agregarlo al documento, en que parte del codigo del html tiene que ir
const navegacion = document.querySelector('.navegacion'); //La primer navegacion porque use querySelector y no querySelectorAll
navegacion.appendChild(nuevoEnlace);


//Eventos


// LOAD EVENTO
console.log(1);

window.addEventListener('load', imprimir); //Se lo conoce como callback cuando suceda el evento se ejecuta esa funcion
 //addEventListener es que hay un evento asociado, load es un evento significa que espera a que JS y los archivos que dependen del HTML (Img y CSS) este lista
//window hace referencia a todo, es un nivel mas alto que document 


//Otra forma de escribir lo mismo
window.onload = function(){
    console.log(3); 
}


//ContentLoaded EVENTO   
document.addEventListener('DOMContentLoaded', function(){
    console.log(4);
})

//La diferencia entre Load y DOMContentLoaded es que Load espera que se descargue todo lo mencionado arriba y DOMContentLoaded solo espera el HTML, pero no espera las IMG o el CSS

//Usualmente se usa DOMContentLoaded pq no vamos a necesitar que se descargue el CSS pero si el HTML
console.log(5);


function imprimir(){
    console.log(2);
}
//Por lo tanto se imprime el 1, el 5, el 4(se carga primer el DOMcontentLoaded) y luego el 2 y el 3 (carga luego el load)

//Otros eventos

window.onscroll = function(){
    console.log('scrolling...');
}


//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');

btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();
    console.log('Enviando formulario');
})