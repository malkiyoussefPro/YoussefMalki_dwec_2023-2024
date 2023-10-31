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

    horas = 0;
    minutos = 0;
    segundos = 5;
    
   
    segundos -= 1;
    

    if (segundos == 0) {

        segundos = 0;
        minutos -= 1;

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

const numer= prompt("Elige un numero: ")
console.log(numer);