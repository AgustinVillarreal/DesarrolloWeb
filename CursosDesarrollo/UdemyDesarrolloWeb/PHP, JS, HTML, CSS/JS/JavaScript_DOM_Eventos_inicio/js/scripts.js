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

// //Agregarlo al documento, en que parte del codigo del html tiene que ir
// const navegacion = document.querySelector('.navegacion'); //La primer navegacion porque use querySelector y no querySelectorAll
// navegacion.appendChild(nuevoEnlace);


// //Eventos


// // LOAD EVENTO
// console.log(1);

// window.addEventListener('load', imprimir); //Se lo conoce como callback cuando suceda el evento se ejecuta esa funcion
//  //addEventListener es que hay un evento asociado, load es un evento significa que espera a que JS y los archivos que dependen del HTML (Img y CSS) este lista
// //window hace referencia a todo, es un nivel mas alto que document 


// //Otra forma de escribir lo mismo
// window.onload = function(){
//     console.log(3); 
// }


// //ContentLoaded EVENTO   
// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4);
// })

// //La diferencia entre Load y DOMContentLoaded es que Load espera que se descargue todo lo mencionado arriba y DOMContentLoaded solo espera el HTML, pero no espera las IMG o el CSS

// //Usualmente se usa DOMContentLoaded pq no vamos a necesitar que se descargue el CSS pero si el HTML
// console.log(5);


// function imprimir(){
//     console.log(2);
// }
//Por lo tanto se imprime el 1, el 5, el 4(se carga primer el DOMcontentLoaded) y luego el 2 y el 3 (carga luego el load)

//Otros eventos

// window.onscroll = function(){
//     console.log('scrolling...');
// }


//Seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');

//Evento click se hace desde el boton

// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault(); // Previene la funcion por default, en este caso como es un formulario seria enviar el formulario
//     // Validar
//     console.log('Enviando formulario');
// })

// Evento de Submit se hace desde el formulario

// const formulario = document.querySelector('.formulario');
// formulario.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log('enviando formulario');
// })


/*Usualmente en un formulario se usa submit pero click esta asociado al boton y el submit esta asociado en el formulario
por lo que el formulario tiene que tener si o si asociado un input de tipo submit*/




// Eventos de los inputs y los textAreas

const nombre     = document.querySelector('#nombre');
const email      = document.querySelector('#email');
const mensaje    = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


const datos = {
    nombre:  '',
    email:   '',
    mensaje: ''
}
//evento change se activa cuando salis del input en el cual estas escribiendo
// nombre.addEventListener('change', function(){
//     console.log('Escribiendo...');
// })


//evento input se hace la validacion en tiempo real, a medida que estas escribiendo, se ejecuta una vez por cada letra del input
nombre.     addEventListener('input', leerTexto);
email.      addEventListener('input', leerTexto);
mensaje.    addEventListener('input', leerTexto);

//Evento submit
formulario. addEventListener('submit', function(e){
    e.preventDefault();

    //Validar el formulario

    const { nombre, email, mensaje } = datos;

    if( nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    //Enviar alerta de enviado correctamente
    mostrarAlerta('Enviado Correctamente', 'correcto');

})


function leerTexto(e) { // se pasa por parametro a pesar de que en el llamado no se utilice un argumento
    // console.log(e.target.value);//target se refiere al input y value al contenido, esto va a ir mostrando lo que se escribe
    datos[e.target.id] = e.target.value; //accedo al los atributos del objeto dato que coinciden con el nombre del id de cada elemento y le asigno lo que estoy escribiendo en el input
    console.log(datos);
}

// Muestra alerta en pantalla

function mostrarAlerta(mensaje, tipoDeAlerta) {
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;
    alerta.classList.add(tipoDeAlerta);
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// Muestra un error en pantalla

// function mostrarError(mensaje) {
//     const error = document.createElement('P');
//     error.textContent = mensaje;
//     error.classList.add('error');
//     formulario.appendChild(error);

//     // Que desaparezca despues de 3 seg
//     desaparecerErrorPor(3000);
// }

// function verificacionCorrecta(mensaje) {
//     const correcto = document.createElement('P');
//     correcto.textContent = mensaje;
//     correcto.classList.add('correcto');
//     formulario.appendChild(correcto);
//     //
//     desaparecerErrorPor(3000);
// }
