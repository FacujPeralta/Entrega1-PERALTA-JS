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
    alert("tu puntaje fue: " + resultado )
}
const mostrarRespuestas = ()=>{
    const verRespuesta = confirm("quiere ver las respuesta realizadas")
    if(verRespuesta){
        preguntas.forEach((pregunta)=>{
            alert(`La pregunta fue: ${pregunta.pregunta}
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
alert("gracias por jugar!!!")