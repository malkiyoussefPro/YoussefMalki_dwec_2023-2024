let elCrono;

let miFecha = new Date();

let laHora = document.getElementById("lahora");

// Inicializo el tiempo para el crnometro

miFecha.setHours(0, 0, 0, 0);

//Inicializo el crnomotero

laHora.innerHTML = "00:00:00";

function crono (crono) {
    let horas = miFecha.getHours();
    let minutos = miFecha.getMinutes();
    let segundos = miFecha.getSeconds();


    segundos += 1;

    if (segundos == 60) {

        segundos = 0;
        minutos += 1;

        miFecha.setMinutes(minutos);
    }

    miFecha.setSeconds(segundos);
    if(horas < 10) { horas = "0" + horas;}
    if (minutos < 10) { minutos = "0" + minutos;}
    if (segundos < 10) { segundos = "0" + segundos;}

    laHora.innerHTML = horas +": "+ minutos+": "+ segundos;
}

function reiniciarCrono(){

    // Inicializo el tiempo para el crnometro

    miFecha.setHours(0, 0, 0, 0);

    //Inicializo el crnomotero

    laHora.innerHTML = "00:00:00";

}

function start() {

    elCrono = setInterval(crono, 1000);
}

function stop() {

    clearInterval(elCrono);
}

function reset() {

    setTimeout(reiniciarCrono, 0);

}
/*
// Lo que hecho para hacer este ejercicio 
function cronos(){
    let elCrono;
    let mifecha = new Date();
    let horas = 0;
    let minutos = 0;
    let segundos = 0;

    let ampm = "pm";
    

    if(horas > 12){
        ampm = "pm"
        horas -= 12;
    }else {
        ampm = "am"
    }


    let laHora = document.getElementById("lahora");
    laHora.innerHTML = horas + ": " + minutos + ": " + segundos + ": " + ampm;


}

function stop(){
    stop.innerHTML= horas + 0 + minutos + 0 + segundos + 0 + ampm;
}
window.onload = function(){
    elCrono = setInterval(stop, 1000);
}

function marcha(){
    marcha.innerHTML= horas +": "+ mifecha.getHours +": "+ minutos + mifecha.minutos + segundos + ": "+mifecha.getSeconds + ampm;
}
window.onload = function(){
    elCrono = setInterval(marcha, 1000);
}

*/