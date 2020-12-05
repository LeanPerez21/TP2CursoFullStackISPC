
const alerta = document.getElementById('alertaIntentos');
const pistas = document.getElementById('pistas');

let respuestaUser = document.getElementById("userRespuesta").value;

const respuestaCorrecta = "nakamoto"

var intentos =  5;
var ganaste = false;


function validarRespuesta() {

    if (respuestaCorrecta == respuestaUser && intentos >= 1) {
        ganaste = true;
        victoria();
        intentos = 0;
    } else if (respuestaCorrecta !== respuestaUser && intentos == 5) {
        intentos = intentos - 1
        alerta.innerHTML = "Respuesta equivocada, cuidado... te quedan 4 intentos";
        alerta.classList.add("alert-dark")
        alerta.classList.remove("alert-info")
        
    } else if (respuestaCorrecta !== respuestaUser && intentos == 4) {
        intentos = intentos - 1
        alerta.innerHTML = "Tampoco es correcta, cuidado... te quedan 3 intentos";
        pistas.innerHTML = "¿Una pista? es de origen japones.."
        alerta.classList.add("alert-secondary")
        alerta.classList.remove("alert-dark")
        
    } else if (respuestaCorrecta !== respuestaUser && intentos == 3) {
        intentos = intentos - 1
        alerta.innerHTML = "Ups.. te quedan 2 intentos";
        pistas.innerHTML = "¿Una pista? es de origen japones.. ¿Otra? termina en 'moto'.."
        alerta.classList.add("alert-warning")
        alerta.classList.remove("alert-dark")

    } else if (respuestaCorrecta !== respuestaUser && intentos == 2) {
        intentos = intentos - 1
        alerta.innerHTML = "Ojo.. te queda 1 intento";
        alerta.classList.add("alert-danger")
        alerta.classList.remove("alert-warning")
    } else if (respuestaCorrecta !== respuestaUser && intentos == 1) {
        intentos = intentos - 1
        derrota();
    } else {
        if (ganaste) {
            victoria();
        } else {
            derrota();
        }
    }

   
}

function victoria() {
    alerta.innerHTML = "¡FELICIDADES HAS RESPONDIDO CORRECTAMENTE!";
    alerta.classList.add("alert-success")
    alerta.classList.remove("alert-info")
}

function derrota() {
    alerta.innerHTML = "¡Has perdido!";
    pistas.innerHTML = '<a href="javascript:location.reload()">Pulsa aqui para intentarlo nuevamente..</a>'
}