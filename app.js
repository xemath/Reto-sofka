const express = require('express');
const session = require('express-session');
const conexion = require('./config/db.config')
const rutasAplicacion = require('./src/routes/juego.route')
const app = express();
//configuraciones
app.set('view engine', 'ejs') // degino el motor de vistas ejs es como el HTML pero con superpoderes
const PORT  = process.env.PORT || 3000; //puerto para conectarse a la aplicacion si quieres entrar en local es localhost:3000
//middleWares
app.use(express.static('public')) //la carpeta de archivos estaticos
app.use(express.urlencoded({extended:false})) // permite leer los datos mandados del fron al servidor
app.use(express.json()) // permite leer los datos mandados del fron al servidor en formato json
app.use(session({ //configuro el express session para poder mandar datos entre vistas en este caso solo mando el nombre del jugador
    secret:'millavesecreta',
    resave : false,
    saveUninitialized : false
}))
//traigo las rutas
app.use('', rutasAplicacion) //import las rutas desde la carpeta rutas


app.listen(PORT, ()=>{ //inicio el servidor
    console.log('iniciado...')
})
module.exports = session;