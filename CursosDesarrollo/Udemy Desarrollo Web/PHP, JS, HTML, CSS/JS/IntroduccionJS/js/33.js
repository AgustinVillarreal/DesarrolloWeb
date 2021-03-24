async function obtenerEmpleados() {
    const archivo = 'empleados.json';

    // fetch(archivo)
    //     .then( resultado => resultado.json()) //retorna los resultados de json al proximo .then
    //     .then(datos => {
    //         console.log(datos);
    //         const {empleados} = datos;
    //         console.log(empleados);
    //         /*RECORRER LOS EMPLEADOS
    //         empleados.forEach(empleado => {
    //             console.log(empleado);
    //             console.log(empleado.id);
    //             console.log(empleado.nombre);
    //             console.log(empleado.puesto);

    //             document.querySelector('.contenido').textContent = empleado.nombre; DE ESTA FORMA PUEDO MOSTRAR EN HTML*/
    //         });

    //     }) //si quiero acceder a los empleados pongo datos.empleados o uso destructuring
    // ;

    const resultado = await fetch(archivo);
    console.log(resultado);
    const datos = await resultado.json();
    console.log(datos);
}

obtenerEmpleados();