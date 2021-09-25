const conexion = require('../../config/db.config')

//Mi modelo para guardar y obtener puntajes de la base de datos

var Puntaje = function(jugador){
    this.nombre = jugador.finalJugador;
    this.premio = jugador.finalAcumulado;
    this.ronda = jugador.finalRonda;
}

Puntaje.obtenerTodosLosPuntajes = (result)=>{
    conexion.query('SELECT * FROM puntajes ORDER BY `id` DESC',(err,results)=>{
        // if(err) throw err;
        // else{
        //     let array = results;
        //     return array;
        // }
        if(err){
            console.log('error cargando puntajes', err);
            result(null, err);
        }
        else{
            console.log('puntajes llamados correctamente');
            result(null, results)
        }
    })
}
Puntaje.crearPuntaje = (datos)=>{
    conexion.query('INSERT INTO puntajes SET ?' , datos, (err,results)=>{
        if(err){
            console.log('error creando el puntaje')
            
        }
        else{
            console.log('creado correctamente')
        }
    })
}
module.exports = Puntaje;