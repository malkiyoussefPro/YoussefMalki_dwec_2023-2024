//2010
let junio_2010 = 25.8;
let juliol_2010 = 28.6;
let agost_2010 = 30.1;
//2015 
let junio_2015 = 26.5; 
let juliol_2015 = 29.3; 
let agost_2015 = 30.8; 
//2020 
let junio_2020 = 27.2; 
let juliol_2020 = 29.9; 
let agost_2020 = 31.5; 

// calcular la media de la temperatura:
let mediaAño2010 = (junio_2010 + juliol_2010 + agost_2010) / 3;
let mediaAño2015 = (junio_2015 + juliol_2015 + agost_2015) / 3;
let mediaAño2020 = (junio_2020 + juliol_2020 + agost_2020) / 3;

// Mostrar el resultado de las medias de las temperaturas
console.log("-La media de la temperatura del año 2010 es :",mediaAño2010);
console.log("-La media de la temperatura del año 2015 es :",mediaAño2015);
console.log("-La media de la temperatura del año 2020 es :",mediaAño2020);

// Comprobación de la media de la temperatura si es mayor que 30

let haceCalor =((mediaAño2010 || mediaAño2015 || mediaAño2020) > 30)  ? true : false;
if(haceCalor){
    console.log("Estos veranos han sido calorosos");
}else{
    console.log("Estos veranos no han sido calorosos");
}

// conversion de grado Celicius a Fahreneit
let = mediaAño2010Fahrenheit = (mediaAño2010 * 1.8) + 32;
console.log("- La conversion de grado Celicius",mediaAño2010, " a Fahrenheit", mediaAño2010Fahrenheit);
let = mediaAño2015Fahrenheit = (mediaAño2015 * 1.8) + 32;
console.log("- La conversion de grado Celicius",mediaAño2015, " a Fahrenheit", mediaAño2015Fahrenheit);

// conversion de grado Celicius a Kelvin:

let = mediaAño2010Kelvin = mediaAño2010 + 273.15;
console.log("- La conversion de grado Celicius",mediaAño2010, " a Kelvin", mediaAño2010Kelvin);
let = mediaAño2015Kelvin = mediaAño2015 + 273.15;
console.log("- La conversion de grado Celicius",mediaAño2015, " a Kelvin", mediaAño2015Kelvin);
