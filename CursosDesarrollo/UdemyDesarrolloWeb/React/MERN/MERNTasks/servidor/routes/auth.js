const express = require('express');
const authController = require('../controllers/authController')
const router = express.Router();
const { check } = require('express-validator')

//Crea auth
// api/auth
router.post('/', 
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'La contraseña debe tener un minimo de 6 caracteres').isLength({min:6})
    ],
    authController.autenticarUsuario
)
module.exports = router;