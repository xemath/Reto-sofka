// esta es la aplicacion principal, toda la logica del juego esta contenido aqui
class Pregunta{ //defino el objeto pregunta
    constructor(pregunta,respuestas, correcta, dificultad, premio, acumulado){
        this.pregunta = pregunta;
        this.respuestas = respuestas;
        this.correcta = correcta;
        this.dificultad = dificultad;
        this.premio = premio;
        this.acumulado = acumulado;
        this.cuadroPregunta = document.querySelector('#cuadroPregunta')
        this.cajaRespuestas = document.querySelector('#cajaRespuestas')
        this.botones = []
        this.estaClickeada = false;
    }
    dibujarPregunta(){ //este metodo dibuja la pregunta y los botones de la respuesta en el dom
        this.cuadroPregunta.textContent = this.pregunta;
        for(let i = 0; i < this.respuestas.length; i++){
            let boton = document.createElement('button');
            boton.setAttribute('class', 'btn btn-primary')
            boton.id = `respuesta${i+1}`
            boton.textContent = this.respuestas[i]
            this.cajaRespuestas.appendChild(boton);
            this.botones.push(boton)
        }
        
    }    
    get getAcumulado(){ // para obtener el acumulado dependiendo de la categoria en que estemos
        return this.acumulado;    
    }
    

    borrarBotones(){ // metodo para borrar los botones de las respuestas siempre que se seleccione una respuesta
        // this.botones.forEach((boton)=>{
        //     this.cajaRespuestas.removeChild(boton)
        // })
        let boton1 = document.querySelector('#respuesta1')
        let boton2 = document.querySelector('#respuesta2')
        let boton3 = document.querySelector('#respuesta3')
        let boton4 = document.querySelector('#respuesta4')
        boton1.remove()
        boton2.remove()
        boton3.remove()
        boton4.remove()


    }
    get obtenerBotones(){ //obtener botones respuestas
        return this.botones;

    }
    get getDificultad(){ //obtener dificultad, es lo mismo que la dificultad o la ronda en que estamos
        return this.dificultad;
    }
    obtenerRespuesta() { //obtener el texto de la respuesta
        return this.respuestas[this.correcta];
    }

    get getPremio(){ // obtener el premio de esta pregunta
        return this.premio;
    }
    get getEstaClickeada(){ // obtener esta clickeada, si en la pregunta alguna respuesta esta clickeada la uso como bandera para que los otras respuestas no se puedan clickear
        return this.estaClickeada;
    }
    set setEstaClickeada(clickeada){ //cambiar el estado de esta clickeada
        this.estaClickeada = clickeada;
    }
}


class Juego{ //defino el objeto del juego
    constructor(nombreJugador, pregunta){
        this.nombreJugador = nombreJugador;
        this.pregunta = pregunta;
        this.ronda = pregunta.getDificultad;
        this.premioRonda = pregunta.getPremio;
        this.acumulado = pregunta.getAcumulado;
        this.cuadroJugador = document.querySelector('#cuadroJugador')
        this.cuadroRonda = document.querySelector('#cuadroRonda')
        this.cuadroPremio = document.querySelector('#cuadroPremio')
        this.cuadroAcumulado = document.querySelector('#cuadroAcumulado')
        this.jugando = true;
    }
    get getJugando(){
        return this.jugando;
    }
    set setJugando(jugar){
        this.jugando = jugar;
    }
    get getPremioRonda(){
        return this.premioRonda;
    }
    dibujarDatos(){ // dibujo los datos en el dom
        this.cuadroJugador.textContent = this.nombreJugador;
        this.cuadroRonda.textContent = this.ronda;
        this.cuadroPremio.textContent = this.premioRonda;
        this.cuadroAcumulado.textContent = this.acumulado;
        //this.pregunta.dibujarPregunta();
    }
    obtenerAcumuladoMasPremio(){ // metodo para obtener el premio mas el acumulado y le añado notacion de numero grande
        let premio = parseInt(this.getPremioRonda.split("'")[0]);
        let acumulado = parseInt(this.getAcumulado.split("'")[0]);
        return `${premio+acumulado}'000.000`
    }
    actualizarDatos(){ //actualizo los datos en el dom cuando selecciono la respuesta correcta o incorrecta
        
        this.cuadroAcumulado.textContent = this.obtenerAcumuladoMasPremio();
        //console.log(`premio ${premio} acumulado ${acumulado}`)    
    }
    
    set setAcumulado(valor){ // cambio el acumulado
        this.acumulado = this.acumulado + valor;
    }
    get getAcumulado(){ // obtengo el acumulado
        return this.acumulado;
    }
    get getNombreJugador(){ // obtengo el nombre del jugador
        return this.nombreJugador;
    }
    get getRonda(){ // obtengo la ronda
        return this.ronda;
    }
}

// aca voy a instanciar las preguntas en categorias
// Categoria 1
const pregunta1Ronda1 = new Pregunta('¿Cuanto dura un partido de futbol?',['90 minutos','80 minutos','120 minutos','2 horas'],0, 1, "1'000.000", "0")
const pregunta2Ronda1 = new Pregunta('¿Cual fue el primer equipo en ganar la copa mundial de futbol en 1934?',['Brasil','Chile','Uruguay','Italia'],2,1,"1'000.000", "0")
const pregunta3Ronda1 = new Pregunta('¿Cuantos titulos de motociclismo ha conseguido valentino Rossi?',['10','50','4','9'],3,1,"1'000.000", "0")
const pregunta4Ronda1 = new Pregunta('¿Qué tipo de competición es el Giro de Italia?',['Futbol','Ciclismo','Automovilismo','Tennis'],1,1,"1'000.000", "0")
const pregunta5Ronda1 = new Pregunta('¿Si juegas en la NFL que deporte practicas?',['Futbol Americano','Hockey','Basketball','Golf'],0,1,"1'000.000", "0")

//categoria 2
const pregunta1Ronda2 = new Pregunta('¿Qué nadador de elite ganó cuatro medallas en de oro y dos de plata en las olimpiadas de Londres de 2012?',['Michael Phelps','Caterine Ibarguen','Usain Bolt','Jesse Owens'],0,2,"2'000.000", "1'000,000")
const pregunta2Ronda2 = new Pregunta('¿De que deporte se tomo la expresion "tirar la toalla"?',['Golf','Esgrima','Boxeo','Tiro con Arco'],2,2,"2'000.000", "1'000,000")
const pregunta3Ronda2 = new Pregunta('¿En qué país se encuentra el circuito de Le Mans??',['Roma','Italia','Francia','Colombia'],2,2,"2'000.000", "1'000,000")
const pregunta4Ronda2 = new Pregunta('¿En qué país se inventó el voleibol?',['Alemania','Estados Unidos','Mexio','Grecia'],1,2,"2'000.000", "1'000,000")
const pregunta5Ronda2 = new Pregunta('¿Quién ganó el mundial de fútbol de 2010?',['España','Uruguay','Alemania','Francia'],0,2,"2'000.000", "1'000,000")

//categoria 3
const pregunta1Ronda3 = new Pregunta('¿Cómo se llama el deporte en el cual se levantan pesas?',['Hipertrofismo','Fuerza Bruta','Levantamiento de pesas','Halterofilia'],3,3,"3'000.000","3'000.000")
const pregunta2Ronda3 = new Pregunta('¿De qué color es la camiseta titular de la selección de Nigeria?',['Amarillo y Blanco','Blanco y Verde','Rojo y Verde','Negro y Rojo'],1,3,"3'000.000","3'000.000")
const pregunta3Ronda3 = new Pregunta('¿Dónde se inventó el tenis de mesa?',['China','Inglaterra','Alemania','Trinidad y Tobago'],1,3,"3'000.000","3'000.000")
const pregunta4Ronda3 = new Pregunta('En la década de los 90, Pelé fue ministro de deportes. ¿En qué país?',['España','Portugal','Colombia','Brasil'],3,3,"3'000.000","3'000.000")
const pregunta5Ronda3 = new Pregunta('¿Cuál es el deporte nacional en Japón?',['Video Juegos','Sumo','Baseball','Basketball'],1,3,"3'000.000","3'000.000")

//categoria 4
const pregunta1Ronda4 = new Pregunta('¿Qué famoso jugador de fútbol fue expulsado del mundial 1994 por dar positivo en la prueba de doping?',['El gordo Ronaldo','Romario','Maradona','Zinedine Zidane'],2,4,"4'000.000", "6'000.000")
const pregunta2Ronda4 = new Pregunta('¿Quién inventó el fútbol?',['Sudafricanos','Brasileños','Los Chinos','Ingleses'],2,4,"4'000.000", "6'000.000")
const pregunta3Ronda4 = new Pregunta('¿Cuántos tiempos tiene un partido de baloncesto?',['2 de 20 minutos ','4 de 10 minutos','4 de 15 minutos','2 de media hora'],1,4,"4'000.000", "6'000.000")
const pregunta4Ronda4 = new Pregunta('¿Cómo se llama la anotación de un tanto en fútbol americano?',['Punto','Goal','Dunk','Touchdowm'],3,4,"4'000.000", "6'000.000")
const pregunta5Ronda4 = new Pregunta('¿Quién ganó cuatro mundiales consecutivos de Fórmula 1?',['Sebastian Vettel','Michael Schumaher','Juan Pablo Montoya','Ayrton Senna'],0,4,"4'000.000", "6'000.000")

//ronda 5
const pregunta1Ronda5 = new Pregunta('¿Cuanto dura un partido de futbol?',['90 minutos','80 minutos','120 minutos','2 horas'],0,5,"5'000.000","10'000'000")
const pregunta2Ronda5 = new Pregunta('¿Cual fue el primer equipo en ganar la copa mundial de futbol en 1934?',['Brasil','Chile','Uruguay','Italia'],2,5,"5'000.000","10'000'000")
const pregunta3Ronda5 = new Pregunta('¿Cuantos titulos de motociclismo ha conseguido valentino Rossi?',['10','50','4','9'],3,5,"5'000.000","10'000'000")
const pregunta4Ronda5 = new Pregunta('¿Qué tipo de competición es el Giro de Italia?',['Futbol','Ciclismo','Automovilismo','Tennis'],1,5,"5'000.000","10'000'000")
const pregunta5Ronda5 = new Pregunta('¿Si juegas en la NFL que deporte practicas?',['Futbol Americano','Hockey','Basketball','Golf'],0,5,"5'000.000","10'000'000")

//construir array de preguntas para cada ronda
const preguntasRonda1 = [pregunta1Ronda1, pregunta2Ronda1, pregunta3Ronda1, pregunta4Ronda1, pregunta5Ronda1];
const preguntasRonda2 = [pregunta1Ronda2, pregunta2Ronda2, pregunta3Ronda2, pregunta4Ronda2, pregunta5Ronda2];
const preguntasRonda3 = [pregunta1Ronda3, pregunta2Ronda3, pregunta3Ronda3, pregunta4Ronda3, pregunta5Ronda3];
const preguntasRonda4 = [pregunta1Ronda4, pregunta2Ronda4, pregunta3Ronda4, pregunta4Ronda4, pregunta5Ronda4];
const preguntasRonda5 = [pregunta1Ronda5, pregunta2Ronda5, pregunta3Ronda5, pregunta4Ronda5, pregunta5Ronda5];



function preguntaAleatoria(array){ //me devuelve un pregunta aleatoria de un array de preguntas
    let random = Math.floor(Math.random() * (array.length));
    return array[random]
}

function clickBotones (pregunta, juego){ // le da funcionalidad a los botones de las respuestas
    let respuesta1 = document.querySelector('#respuesta1')
    let respuesta2 = document.querySelector('#respuesta2')
    let respuesta3 = document.querySelector('#respuesta3')
    let respuesta4 = document.querySelector('#respuesta4')
    
    clickEvent(respuesta1, pregunta, juego);
    clickEvent(respuesta2, pregunta, juego);
    clickEvent(respuesta3, pregunta, juego);
    clickEvent(respuesta4, pregunta, juego);


}

const actualizarJuego = (pregunta, juego, respuestaCorrecta)=>{ // muesta los botones de continuar o retirarse despues de seleccionar una respuesta
    let cajaRetirarseOSeguir = document.querySelector('#continuarORestirarse')
    setTimeout(() => { //despues de 1.5 segundos muestra el los botones de retirarse o seguir
        juego.actualizarDatos();
        pregunta.borrarBotones();
        if(juego.getRonda == 5){
            finalizarJuego(juego, 'finalizo', pregunta)
        }
        else{  
            cajaRetirarseOSeguir.classList.add('mostrar')

        }

    }, 1500);
    
}

function clickEvent(boton, pregunta, juego){ //añade los eventos a los botones de las preguntas
    boton.addEventListener('click', ()=>{
        if(boton.innerHTML === pregunta.obtenerRespuesta() && !pregunta.getEstaClickeada){
            boton.classList.add('btn-success')
            pregunta.setEstaClickeada = true;
            actualizarJuego(pregunta, juego, true)
            console.log('como si huebiera dado click')
            
        }
        else if(boton.innerHTML != pregunta.obtenerRespuesta() && !pregunta.getEstaClickeada){
            boton.classList.add('btn-danger')
            pregunta.setEstaClickeada = true;
            finalizarJuego(juego, 'perdio', pregunta)

        }
        else {
            pregunta.setEstaClickeada = true;
            console.log('no puedo hacer click')
        }
    })
}

function finalizarJuego(juego, estado, pregunta){ // sirve para cuando finaliza el juego mostrar el boton de finalizar y enviar un formulario invisible con los datos al backend
    const finalAcumulado = document.querySelector('#finalAcumulado');
    const finalJugador = document.querySelector('#finalJugador');
    const finalRonda = document.querySelector('#finalRonda');
    let cuadroFinalizar = document.querySelector('#finalizarJuego')

    //console.log('entro aqui')
    if(estado === 'retirado' || estado === 'finalizo'){
        //console.log('entro a retirado')
        console.log('entro a retirado o finalizo')
        cuadroFinalizar.classList.add('mostrar')
        finalAcumulado.value = juego.obtenerAcumuladoMasPremio();
        finalJugador.value = juego.getNombreJugador;
        finalRonda.value = juego.getRonda;
    }
    else if (estado == 'perdio'){
        console.log('entro a perdio')
        cuadroFinalizar.classList.add('mostrar')
        pregunta.borrarBotones();
        finalAcumulado.value = 0;
        finalJugador.value = juego.getNombreJugador;
        finalRonda.value = juego.getRonda;

    }
    
    
}

function clickBotonesContinuar(juego){ // añade evento al boton de retirarse
    let cuadroFinalizar = document.querySelector('#finalizarJuego')
    let botonRetirarse = document.querySelector('#botonRetirarse')
    let cuadroContinuarOR = document.querySelector('#continuarORestirarse')

    botonRetirarse.addEventListener('click', ()=>{
        cuadroFinalizar.classList.add('mostrar')
        cuadroContinuarOR.classList.remove('mostrar')
        finalizarJuego(juego, 'retirado')

    })

    
}
function escogerPreguntaRondas(ronda){ //escoge o devuelve una pregunta aletoria dependiendo de la ronda
    switch(ronda){
        case 1:
            return preguntaAleatoria(preguntasRonda1)
        case 2:
            return preguntaAleatoria(preguntasRonda2)
        case 3:
            return preguntaAleatoria(preguntasRonda3)
        case 4:
            return preguntaAleatoria(preguntasRonda4)
        case 5:
            return preguntaAleatoria(preguntasRonda5)
    }
}

function borrarExceso(){ // tuve un pequeño bug despues de la tercera ronda en el que se dibujaban mas botones de los necesarios y esta es la forma mas facil de arreglarlo
    let botones = document.querySelectorAll('.btn-primary')
    for(let i = 0; i < 4; i++){
        
        botones[i].remove()
    }
}
//funcion principal funciona aumentando la ronda con recursion cada vez que doy click al boton continuar aumenta una ronda
function main(indice){ 
    let nombreJugador = document.querySelector('#cuadroJugador').innerHTML;
    let indiceRonda = indice;    
    let botonContinuar = document.querySelector('#botonContinuar')
    let cajaContinuar = document.querySelector('#continuarORestirarse')
    let pregunta = escogerPreguntaRondas(indiceRonda); //escofe la pregunta
    let juego = new Juego(nombreJugador, pregunta) // inicia el juego
    juego.dibujarDatos() // dibuja los datos
    pregunta.dibujarPregunta() // dibuja la pregunta
    if(indice>2){ // aca esta el bug que dije anteriormente, si la ronda es mayor que 2 borro el exceso de botones
        borrarExceso()
    }
    clickBotones(pregunta, juego) //añado la funcionalidad a los botones    
    clickBotonesContinuar(juego) // añado la funcionalidad al boton retirarse (debi cambiar el nombre xD)
    botonContinuar.addEventListener('click', ()=>{ //funcionalidad al boton continuar para subir una ronda con recursion
        let nuevoIndice = indice + 1;
        cajaContinuar.classList.remove('mostrar')
        main(nuevoIndice) // aca llamo el propio metodo
    })
}
main(1) // metodo principal, aca inicio el programa desde la ronda 1

