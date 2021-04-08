const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');


router.post('/', 
    /*Controller*/
    proyectoController.crearProyecto
    )

module.exports = router;