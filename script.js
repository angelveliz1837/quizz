//cargo en un arreglo las imagenes de las preguntas. Este será el orden que se mostrarán
let preguntas = ["rm2.jpg", "rm3.jpg", "rm4.jpg", "rm5.jpg", "rm6.jpg"];

//arreglo que guardará la opción correcta
let correcta = [2,2,1,1,0];

//arreglo que guardara los paises a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["12","18", "16"]);
opciones.push(["8","10", "9"]);
opciones.push(["1800","900", "450"]);
opciones.push(["12","15", "30"]);
opciones.push(["240 cm","270 cm", "285 cm"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0;

function comenzarExamen(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-examen").style.display = "block";
    cargarPregunta();
}

//funcion que carga la siguiente pregunta y sus opciones
function cargarPregunta(){
    //controlo si se acabaron las preguntas
    if(preguntas.length <= posActual){
        terminarExamen();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgPregunta").src="img/" + preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
    //agregamos las clases para colocar el color verde a la opcion elegida
    document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
    document.getElementById("l" + opElegida).className = "letra letraAcertada";
    cantidadAcertadas++;
    }else{//no acerto
        //agregamos  las clases para colocar en rojo la opción elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos un 1 segundo y pasamos mostrar la siguiente pregunta y sus opciones
    setTimeout(cargarPregunta,1000);
}

function terminarExamen(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-examen").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agregamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas  y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-examen").style.display = "none";
}