const preguntas = [
    {
        id: 1,
        pregunta: "¿Quien fue el ultimo campeón del mundo Qatar 2022?",
        opciones: ["Francia", "Bolivia", "Argentina"],
        correcta: 2,
        respuesta: null,
        puntos: 0
    },
    {
        id: 2,
        pregunta: "¿Que número llevaba Juan Román Riquelme en la camiseta de Boca?",
        opciones: ["8", "10", "55"],
        correcta: 1,
        respuesta: null,
        puntos: 0
    },
    {
        id: 3,
        pregunta: "¿Qué es peor Descender o perder una final contra tu clásico rival?",
        opciones: ["Perder la final ", "Descender", "Las dos son horribles"],
        correcta: 1,
        respuesta: null,
        puntos: 0
    },
    {
        id: 4,
        pregunta: "¿Cuantos balones de oro tiene Liones Andres Messi?",
        opciones: ["8", "15", "0"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 5,
        pregunta: "¿Cuantos goles tiene Martin Palermo en Boca?",
        opciones: ["235", "236", "263"],
        correcta: 1,
        respuesta: null,
        puntos: 0
    },
    {
        id: 6,
        pregunta: "¿Que número llevaba Maradona en el mundial 1986?",
        opciones: ["10", "7", "62"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 7,
        pregunta: "¿Cuantos goles hizo Messi en la final del mundo Qatar 2022?",
        opciones: ["3", "1", "2"],
        correcta: 2,
        respuesta: null,
        puntos: 0
    },
    {
        id: 8,
        pregunta: "¿Como se llama el técnico de la selección Argentina?",
        opciones: [" Lionel Sebastian Scaloni", " Lionel Jorge Scaloni", " Lionel Jonathan Scaloni"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 9,
        pregunta: "¿Cuanto dura cada tiempo de un partido de fútbol",
        opciones: ["45'", "50'", "90'"],
        correcta: 0,
        respuesta: null,
        puntos: 0
    },
    {
        id: 10,
        pregunta: "¿Quiel le hizo más goles a Santa Marina?",
        opciones: ["Lionel Andres Messi", "Cristiano Ronaldo", "José Luis 'El pulga' Rodriguez"],
        correcta: 2,
        respuesta: null,
        puntos: 0
    }
]
const comenzarPreguntas = () =>{
    const comenzar = confirm("¿Quieres jugar al juego de preguntas sobre Fútbol?")
    if(comenzar){
        preguntas.forEach((pregunta)=>{
            alert(pregunta.pregunta)
            alert(`Las opciones son: 
                        1)${pregunta.opciones[0]} 
                        2)${pregunta.opciones[1]} 
                        3)${pregunta.opciones[2]}`)
            const respuesta = parseInt(prompt("Ingrese el numero de la respuesta correcta (1,2,3)")) 
            pregunta.respuesta = respuesta - 1
            if(pregunta.correcta === pregunta.respuesta){
                pregunta.puntos = 20
            }else{
                pregunta.puntos= 0
            }
    
        })
    }
    
}
const mostrarResultadoTotal = () =>{
    const resultado = preguntas.reduce((acc,pregunta)=> acc + pregunta.puntos,0)
    console.log("tu puntaje fue: " + resultado )
}
const mostrarRespuestas = ()=>{
    const verRespuesta = confirm("quiere ver las respuesta realizadas")
    if(verRespuesta){
        preguntas.forEach((pregunta)=>{
            console.log(`La pregunta fue: ${pregunta.pregunta}
                   Las opciones eran: 1) ${pregunta.opciones[0]} 
                                      2)${pregunta.opciones[1]} 
                                      3)${pregunta.opciones[2]}
                   La respuesta correcta es: ${pregunta.correcta + 1}
                   Tu respuesta fue: ${pregunta.respuesta + 1}
                   Tu puntaje fue: ${pregunta.puntos}`)
                   
        })
    }
}

comenzarPreguntas()
mostrarResultadoTotal()
mostrarRespuestas()
alert("gracias por jugar!!! Los resultados están en la consola!")

const DIV_NUEVO = document.getElementById("tarjeta");

DIV_NUEVO.innerHTML = `
                    <div class="finalizacion">
                        <img src="data:image/jpeg;base64,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" alt="xd">
                        <p>¡Gracias por jugar!</p>
                        <p>Fijate en la consola y vas a ver los puntos optenidos</p>
                    </div>`;
