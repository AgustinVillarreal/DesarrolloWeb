// Async / await

function descargarNuevosClientes() {
    return new Promise( resolve => {
       console.log('Descargando clientes... espere');

        setTimeout(() => {
            resolve('Los Clientes fueron Descargados');
        }, 5000 /*5 seg*/);
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
       console.log('Descargando pedidos... espere');

        setTimeout(() => {
            resolve('Los Pedidos fueron Descargados');
        }, 3000 /*3 seg*/);
    });
}

// setTimeout(function() {
//     console.log('setTimeout...');
// }, 1000 /*es en milisegundos*/);

// setInterval(() => {
//     console.log('setTimeout...');
// }, 3000); //Manda cada 3 segundos lo que tenga dentro


async function app(){ //funcion asincronica
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(pedidos);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); //Ejecuta las dos al mismo tiempo dentro del arreglo
        console.log(resultado[0]);
        console.log(resultado[1]);
   
    } catch (error) {
        console.log(error)
    }
}

/* Es codigo que no le interesa los llamados a las APIS pero despues hay codigo que espera a que se hayan descargado los datos para que continue*/


app();

console.log('Este codigo no se bloquea');
