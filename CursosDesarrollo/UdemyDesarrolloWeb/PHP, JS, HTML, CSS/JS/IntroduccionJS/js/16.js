//Funciones
//Serie de procedimientos o instrucciones para realizar una accion
//Son reutilizables

//Existen 3 formas

//Declaracion de la funcion

function sumar() {
    console.log(10 + 10);
};

sumar();

//Expresion de la funcion

const sumar2 = function(){
    console.log(3 + 3);
};

sumar2();

//Diferencia entre Declaracion y Expresion
/* HOISTING

* Declaracion de funcion 

sumar();
function sumar() {
    console.log(10 + 10);
};

* Es como declarar una variable, tal como se muestra al lado, luego se le asigna el valor de funcion
sumar2();
const sumar2 = function(){       |       Es como tener const sumar2;
    console.log(3 + 3);          |       sumar2();                                 Cuando se llama a sumar2 no esta definida
};                               |       sumar2 = function(){ console.log(3+3);}; 


Lo que va a suceder es que la primera retorna 20 y la segunda tira error
Es porque JS se manda a ejecutar en dos vueltas
La primera se registran las funciones y variables (Registro o Creacion) y la segunda es la de ejecucion

/* CASO PARTICULAR USADO EN JQUERY*/
// IIFE

(function() {
    console.log('Esto es una funcion');
})(); //Se mandan a llamar ellas mismas, por eso se agrega el ultimo parentesis, permite que no se puedan llamar desde otro archivo, protege que no se mezclen las variables y funciones de disntintos archivos


