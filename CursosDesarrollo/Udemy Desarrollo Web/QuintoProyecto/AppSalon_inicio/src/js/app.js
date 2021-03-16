document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
})

function iniciarApp(){
    mostrarServicios();
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