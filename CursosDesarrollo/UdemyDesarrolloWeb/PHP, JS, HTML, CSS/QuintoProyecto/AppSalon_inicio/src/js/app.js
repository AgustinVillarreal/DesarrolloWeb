let pagina = 1;

const cita = {
    nombre: '',
    fecha: '',
    hora: '',
    servicios: []
}


document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    mostrarServicios();
    // Resalta el Div Actual segun el tab al que se presiona
    mostrarSeccion();

    // Oulta o muestra una seccion segun el tab al que se presiona
    cambiarSeccion();

    // Pagina siguiente
    paginaSiguiente();

    // Pagina Anterior
    paginaAnterior();

    // Comprueba la pagina actual para ocultar o mostrar la paginacion
    botonesPaginador();

    // Mostrar el resumen de la cita (o error en caso de que este incompleto)
    mostrarResumen();

    nombreCita();
    fechaCita();

    deshabilitarFechaAnterior();

    //Almacena la hora 
    horaCita();
}

function mostrarSeccion() {

    const seccionAnterior = document.querySelector('.mostrar-seccion');
    if(seccionAnterior){
         //Eliminar mostrar-seccion de la seccion anterior
        seccionAnterior.classList.remove('mostrar-seccion')
    }

    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    const tabAnterior = document.querySelector('.tabs button.actual')
     // Eliminar la clase de acutal en el tab anterior 
    if(tabAnterior){
        tabAnterior.classList.remove('actual');
    }
    
    // Resalta el tab Actual
    const tab = document.querySelector(`[data-paso="${pagina}"]`)
    tab.classList.add('actual');
}

function cambiarSeccion(){
    const enlaces = document.querySelectorAll('.tabs button');

    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e =>{ 
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso); //Lo del parentesis indica la pagina a la cual hago click 

            //Llamar la funcion de mostrar seccion 
            mostrarSeccion();

            botonesPaginador();
        })
    })
}

async function mostrarServicios(){ //Para utilizar fetch API uso un promises o uso async await
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();

        const { servicios } = db;

        //Generar el HTML

        servicios.forEach(servicio => {
            const { id, nombre, precio } = servicio; 
               //DOM Scripting
            //Generar nombre de servicio
            const nombreServicio = document.createElement('P');
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add('nombre-servicio');
               
            //Generar precio de servicio
            const precioServicio = document.createElement('P');
            precioServicio.textContent = `$ ${precio}`;     
            precioServicio.classList.add('precio-servicio');

            //Inyectar precio y nombre al servicio
            const servicioDiv = document.createElement('DIV');
            servicioDiv.classList.add('servicio');
            servicioDiv.classList.add('no-seleccionable');
            servicioDiv.dataset.idServicio = id;

            //Seleccionar servicio

            servicioDiv.onclick = seleccionarServicio;

            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);

            //Inyectarlo al HTML
            document.querySelector('#servicios').appendChild(servicioDiv);
            

        });

         
    } catch (error) {
        console.log(error);
    }
}

function seleccionarServicio(e){
    // Forzar que el elemento al que le estamos dando click sea un DIV para utilizar el ID
    const elementoSeleccionado = e.target.tagName;
    let elementoDIV;
    if(elementoSeleccionado === 'P'){
        elementoDIV = e.target.parentElement; //Hago que vaya al elemento padre del P
    } else {
        elementoDIV = e.target;
    }

    const id = parseInt(elementoDIV.dataset.idServicio);

    if(elementoDIV.classList.contains('seleccionado')){
        elementoDIV.classList.remove('seleccionado');

        eliminarServicio(id);
    } else {
        elementoDIV.classList.add('seleccionado');
        
        const servicioObj = {
            id: id,
            nombre: elementoDIV.firstElementChild.textContent ,
            precio: elementoDIV.firstElementChild.nextElementSibling.textContent
        }

        agregarServicio(servicioObj);
    }   
}

function eliminarServicio(id) {
    const { servicios } = cita;
    cita.servicios = servicios.filter(servicio => servicio.id !== id)
}

function agregarServicio(servicioObj) {
    const { servicios } = cita;
    cita.servicios = [ ...servicios, servicioObj];

}


function paginaSiguiente() {
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', () => {
        pagina++;
        botonesPaginador();
        
    })
}

function paginaAnterior() {
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', () => {
        pagina--;
        botonesPaginador();
 
    })
}

function botonesPaginador(){
    const paginaAnterior = document.querySelector('#anterior');
    const paginaSiguiente = document.querySelector('#siguiente');

    if(pagina == 1){
        paginaAnterior.classList.add('ocultar');
    } else if (pagina == 3) {
        paginaSiguiente.classList.add('ocultar');
        paginaAnterior.classList.remove('ocultar');
        mostrarResumen(); //Estamos en la pagina 3
    } else {
        paginaSiguiente.classList.remove('ocultar');
        paginaAnterior.classList.remove('ocultar');
    } 

    mostrarSeccion();
}

function mostrarResumen() {
    const { nombre, fecha, hora, servicios } = cita;
    const resumenDiv = document.querySelector('.contenido-resumen');

    // Limpiar el HTML previo
    //OPCION 1
    resumenDiv.innerHTML = '';
    //OPCION 2 Mas optimizado

    // while( resumenDiv.firstChild ){
    //     resumenDiv.removeChild( resumenDiv.firstChild );
    // }

    if(Object.values(cita).includes('')){
        
        const noServicio = document.createElement('P');
        noServicio.textContent = 'Faltan datos de Servicios, hora, fecha o nombre';
        noServicio.classList.add('invalidar-cita');
    
        resumenDiv.appendChild(noServicio);
        
        return;
    }

    // Mostrar el resumen

    
    const headingCita = document.createElement('h3');
    headingCita.textContent = 'Resumen de Cita';

    const nombreCita = document.createElement('P');
    nombreCita.innerHTML = `<span>Nombre:</span> ${nombre}`;

    const fechaCita = document.createElement('P');
    fechaCita.innerHTML = `<span>Fecha:</span> ${fecha}`;

    const horaCita = document.createElement('P');
    horaCita.innerHTML = `<span>Hora:</span> ${hora}`;

    const serviciosCita = document.createElement('DIV');
    serviciosCita.classList.add('resumen-servicios');

    const headingServicios = document.createElement('h3');
    headingServicios.textContent = 'Resumen de Servicios';

    serviciosCita.appendChild(headingServicios);

    //Iterar en el listado de servicios

    let cantidad = 0; 

    servicios.forEach(servicio => {

        const { nombre, precio } = servicio;

        const contenedorServicio = document.createElement('DIV');
        contenedorServicio.classList.add('contenedor-servicio');

        const textoServicio = document.createElement('P');
        textoServicio.textContent = nombre;

        const precioServicio = document.createElement('P');
        precioServicio.textContent = precio;
        precioServicio.classList.add('precio');

        const totalServicio = precio.split('$');
        cantidad += parseInt(totalServicio[1].trim());

        //Colocar texto y precio en el DIV
        contenedorServicio.appendChild(textoServicio);
        contenedorServicio.appendChild(precioServicio);

        serviciosCita.appendChild(contenedorServicio);
    })
    
    resumenDiv.appendChild(headingCita);
    resumenDiv.appendChild(nombreCita);
    resumenDiv.appendChild(fechaCita);
    resumenDiv.appendChild(horaCita);

    resumenDiv.appendChild(serviciosCita);

    const cantidadPagar = document.createElement('P');
    cantidadPagar.classList.add('total')
    cantidadPagar.innerHTML = `<span>Total a Pagar:</span> $ ${cantidad}`;

    resumenDiv.appendChild(cantidadPagar);
}

function nombreCita() {
    
    const nombreInput = document.querySelector('#nombre');
    nombreInput.addEventListener('input', e => {
        const nombreTexto = e.target.value.trim();

        // Validacion de que el nombre contenga algo

        if(nombreTexto === '' || nombreTexto.length < 3){
            mostrarAlerta('Nombre no válido', 'error');
        } else {
            const alerta = document.querySelector('.alerta')
            if(alerta){
                alerta.remove()
            }
            cita.nombre = nombreTexto;
        }
    })
}

function mostrarAlerta(mensaje, tipo) {
    // Si hay una alerta antes no crear otra

    const alertaPrevia = document.querySelector('.alerta')
    if(alertaPrevia){
        return;
    }

    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');
    if(tipo === 'error'){
        alerta.classList.add(tipo);
    }

    const formulario = document.querySelector('.formulario');
    formulario.appendChild(alerta);

    // Eliminar la alerta despues de 3 seg

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

function fechaCita() {
    const fechaInput = document.querySelector('#fecha')
    fechaInput.addEventListener('input', e => {

        const dia = new Date(e.target.value).getUTCDay();

        if([0,6].includes(dia)){
            e.preventDefault();
            fechaInput.value = '';
            mostrarAlerta('Fines de Semana no son validos', 'error')
        } else {
            cita.fecha = fechaInput.value;
            console.log(cita);
        }
    })
}

function deshabilitarFechaAnterior() {
    const inputFecha = document.querySelector('#fecha');

    const fechaAhora = new Date();
    console.log(fechaAhora);
    const dia = fechaAhora.getDate() + 1;
    const year = fechaAhora.getFullYear();
    const mes = fechaAhora.getMonth() + 1;
    
    const fechaDeshabilitar = `${year}-${mes < 10 ? `0${mes}` : mes}-${dia < 10 ? `0${dia}` : dia}`;
    console.log(fechaDeshabilitar);
    inputFecha.min = fechaDeshabilitar;
}

function horaCita() {
    const inputHora = document.querySelector("#hora");
    inputHora.addEventListener('input', e => {
        const horarioCita = e.target.value;
        const hora = horarioCita.split(':');

        if(hora[0] < 10 || hora[0] > 18){
            mostrarAlerta('Hora no valida', 'error');
            setTimeout(() => {
                inputHora.value = ''; 
            }, 1000);
        } else {
            cita.hora = horarioCita;
        }
    })
}