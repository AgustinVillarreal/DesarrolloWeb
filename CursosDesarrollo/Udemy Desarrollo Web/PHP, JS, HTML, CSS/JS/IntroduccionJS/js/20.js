//Crear Metodos de Propiedad (Son funciones pero tienen sintaxis de metodos)

const reproductor = {
    reproducir : function(id){
        console.log('Reproduciendo Canción con el ID: ${id}')
    },
    pausar : function() {
        console.log('Pausando...');
    },
    crearPlaylist : function(nombre) {
        console.log('Creando la playlist: ${nombre}');
    },
    reproducirPlaylist : function(nombre) {
        console.log('Reproduciendo la Playlisto: ${nombre} ');
    }
};



reproductor.borrarCancion = function(id) {
    console.log('Eliminando la cancion: ${id}');
}

console.log(reproductor);
reproductor.reproducir(3840);
reproductor.borrarCancion(20);
reproductor.crearPlaylist('HeavyMetal');
reproductor.reproducirPlaylist('HeavyMetal');