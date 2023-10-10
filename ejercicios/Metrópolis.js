
let esCapital = false; 
let nombreDeCiutadans = 50000; 
let impostPerCiutada = 879.89; 


esCapital = nombreDeCiutadans > 100000;


if(esCapital  && (
    nombreDeCiutadans > 200000 && (impostPerCiutada * nombreDeCiutadans > 720000000))){
       console.log("-Es una ciudad es una metrópolis");
}else{
    console.log("-No es una ciudad es una metrópolis");
}

