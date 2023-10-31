
let parrafo = document.getElementById("fecha"); 
parrafo.innerHTML = "Hola";

//New date ();
//New Date (milisegundos);
//New date (fecha string);
//new Date(años, meses, dias, horas,minitos, segundos, milisegundos);

//let fecha = new Date(92500000);
//con string
let fecha = new Date("10/10/2023");
let fechas = new Date("jan 10 2023");
parrafo.innerHTML = Date();
parrafo.innerHTML = fecha;
parrafo.innerHTML = fechas;
//con detalle
//new Date(años, meses, dias, horas,minitos, segundos, milisegundos);
let detalleFecha = new Date(71,12,29,15,15,0,0);
parrafo.innerHTML = detalleFecha;
parrafo.innerHTML = detalleFecha.getDay;
parrafo.innerHTML = detalleFecha.getFullYear;