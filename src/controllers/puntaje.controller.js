const Puntaje = require('../models/puntaje.model')




exports.inicio = (req, res)=>{ //control para mostrar la vista index en la ruta '/'
    res.render('index') 
}

exports.enviarNombre = (req,res)=>{ // control para enviar el nombre de la vista index '/' a la vista del juego
    // console.log(req.body.nombreJugador)
    req.session.nombreJugador = req.body.nombreJugador; //crea el nombre del jugador en la session
    res.redirect('/juego') // redirecciona al juego
}
exports.juegoController = (req,res)=>{ //control para mostrar la visa del juego
    if(req.session.nombreJugador){ //si se registro el jugador en el inicio puede ver la vista del juego
        let nombreJugador = req.session.nombreJugador;
        delete req.session.nombreJugador;
        res.render('juego', {nombreJugador})
    }
    else{ // si no se registo el jugador al inicio te redirecciona a la vista index '/'
        res.redirect("/")
    }
}

exports.enviarPuntajes = (req,res)=>{ // controlador para enviar los puntajes a la base de datos y redireccionar a la vista de resultados
    let datos = new Puntaje(req.body)
    Puntaje.crearPuntaje(datos)
    res.redirect('/resultados')
}
exports.resultados = async(req, res)=>{ //controlador para mostrar la vista de los resultados
    // let puntajes = Puntaje.obtenerTodosLosPuntajes()
    // console.log(puntajes[0])
    // res.render('resultados',{puntajes} )
    Puntaje.obtenerTodosLosPuntajes((err, puntajes)=>{
        if(err){
            res.send(err);
        }
        else{
            //res.json(puntajes)
            let resultados = puntajes;
            res.render('resultados', {resultados})
        }
    })
}