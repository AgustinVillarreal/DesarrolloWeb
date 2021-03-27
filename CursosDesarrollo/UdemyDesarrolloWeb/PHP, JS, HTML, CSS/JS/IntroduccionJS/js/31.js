//NOTIFICATION API


/*document hace referencia a todo nuestro documento html*/

const boton = document.querySelector('#boton'); /*busco el boton y lo asigno a la variable*/
boton.addEventListener('click', () => {
    // console.log('diste click');
    Notification.requestPermission() /*Pregunta si queremos mostrar notificaciones (el usuario nos tiene que dar permiso primero*/
        .then(resultado => console.log(`El resultado es ${resultado} `)) /*Es un promise que notificacion lo maneja el mismo, no nos metamos en lios*/
}) /* addEventListener es una Funcion que nos va a permitir registrar un evento a nuestro boton*/


/*Codigo para enviar las notificaciones si nos dieron permiso*/
if(Notification.permission == 'granted') {
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Codigo con Juan los mejores tutoriales'
    })
}