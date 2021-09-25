const express = require('express');
const router = express.Router();
const puntajeController = require('../controllers/puntaje.controller');
// rutas para peticiones get y post (estoy usando patron MVC modelo vista Controlador)
router.get('/', puntajeController.inicio); //ruta de inicio
router.post('/', puntajeController.enviarNombre); //ruta mandar el nombre del jugador
router.get('/juego', puntajeController.juegoController); // ruta del juego
router.post('/enviarpuntajes', puntajeController.enviarPuntajes); // ruta para enviar el puntaje de los jugadores
router.get('/resultados', puntajeController.resultados); //ruta para mostrar los resultados

module.exports = router;