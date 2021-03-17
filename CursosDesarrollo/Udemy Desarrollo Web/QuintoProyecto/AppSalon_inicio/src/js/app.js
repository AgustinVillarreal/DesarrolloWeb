let pagina = 1;


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

    if(elementoDIV.classList.contains('seleccionado')){
        elementoDIV.classList.remove('seleccionado');
    } else {
        elementoDIV.classList.add('seleccionado');
    }   
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
    } else {
        paginaSiguiente.classList.remove('ocultar');
        paginaAnterior.classList.remove('ocultar');
    } 

    mostrarSeccion();
}