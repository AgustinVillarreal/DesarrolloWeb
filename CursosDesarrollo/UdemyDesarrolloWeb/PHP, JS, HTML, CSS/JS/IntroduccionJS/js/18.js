//Pasar Parametros o argumentos

function sumar(numero1 = 0,  numero2 = 0) { //Parametros
    console.log(numero1 + numero2);
};

sumar(10, 10); //Argumentos o valores reales
sumar(3, 5); 
sumar(3, 1); 
sumar(14, 11); 
sumar(2); //Parametro por default el numero 2

const sumar2 = function(n1, n2){
    console.log(n1 + n2);
};

sumar2(5, 10);
