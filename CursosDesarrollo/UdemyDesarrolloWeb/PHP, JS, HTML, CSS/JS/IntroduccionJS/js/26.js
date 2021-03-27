// This

const reservacion = {
    nombre: 'Agustin',
    apellido: 'Villarreal',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El Cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);
    }
}

console.log(reservacion.informacion());

