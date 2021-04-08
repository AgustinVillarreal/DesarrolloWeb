
//Importar express
const express = require('express');
const conectarDB = require('./config/db');


//Crear el servidor
const app = express()

//COnectar a la DB
conectarDB();

//Habilitar express.json    
app.use(express.json({ extended: true}))

//Puerto de la app
const PORT = process.env.PORT || 4000;

//Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/proyectos', require('./routes/proyectos'))

//Definir la pagina principal
app.get('/', (req, res) => {
    res.send('Hola Mundo')
})

//Arrancar la app
app.listen(PORT, ()=>{
    console.log(`El servidor esta corriendo en el puerto ${PORT}`)
})  