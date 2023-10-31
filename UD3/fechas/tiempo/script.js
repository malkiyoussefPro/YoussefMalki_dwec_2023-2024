//Las funciones setInterval() y setTimeout()
/*

//setTimeout(funcionAlllamar, milisegundos)

ejecuta la funcion funcionAlllamar transcurrido el tiempo indicado en el segundo parametro.


//setInterval(funcionAlllamar, milisegundos)
ejecuta la funcion funcionAlllamar demanera periodica segun el tiempo 
del segundo parametro.

//clearInterval()
detiene la ejecucion inciada con setInterval()

//clearTimeout()
detiene la ejecucion iniciada con setTimeout()


*/
const numer= prompt("Elige un numero: ")


function crono(){
    let elCrono;
    let mifecha = new Date();
    let horas = mifecha.getHours();
    let minutos = mifecha.getMinutes();
    let segundos = mifecha.getSeconds();

    let ampm = "pm";
    

    if(horas > 12){
        ampm = "pm"
        horas -= 12;
    }else {
        ampm = "am"
    }
    if(horas < 10) { horas = "0" + horas;}
    if(minutos < 10) { minutos = "0" + minutos;}
    if(segundos < 10) { segundos = "0" + segundos;}

    let laHora = document.getElementById("lahora");
    laHora.innerHTML = horas + ": " + minutos + ": " + segundos + ": " + ampm;
}


window.onload = function(){
    elCrono = setInterval(crono, 1000);
}






