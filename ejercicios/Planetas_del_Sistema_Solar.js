let fechaNeptuno = new Date("09/23/1846");
let fechaJupiter = new Date("03/02/1543");
let fechaMercurio = new Date("04/03/1543");
let fechaMarte = new Date("05/21/1543");
let fechaSaturno = new Date("01/22/1543");

let jupiter  = [5.20, -1.120, fechaJupiter];
let mercurio = [0.39, -38, fechaMercurio];
let neptuno  = [30.06,-388, fechaNeptuno];
let marte    = [1.52, -53, fechaMarte]; 
let saturno  = [9.54, -945,fechaSaturno]; 


let planetas = {

    jupiter,
    mercurio,
    neptuno,
    marte,
    saturno,
}

console.log(planetas.jupiter[2]);

