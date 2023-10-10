console.log("Bienvenido en la unidad 3");
/*
let edad = 1;
let esMayorDeEdad = ( edad >= 18);
// operador ternario


if (esMayorDeEdad) {
    console.log("eres mayor de edad");
}else if (edad>12) {
    console.log("Teenager");
}else if(edad>5)
 {
console.log("estas en primaria");
}else{
    console.log("eres renaucajo");
}


*/
/*
Estructura de control
se utlizan para controles
*/
/*
if :  se utliza para ejecutar un bloque de codigo si se cumple una condiccion


*/



/*
let ax = 10;
let ay= 20;
let res = (ax > ay) ?  (ax - ay) : (ay - ax);
//let res = esMayorDeEdad ? " eres mayor de edad ": "eres menor de edad"


console.log(res);
*/

/*
switch case
cuando se quiere hacer una estructura conditional segur el valor que tenga una variable o expresion
*/
let nombre = " Frodo";
let edadCase;
switch(nombre){
case "Gandalf":
    edadCase = 1230;
    break;
    case "GAragon":
        edadCase= 523;
        break;
        case "Frodo":
            edadCase = 50;
            break;
            default:
                edadCase = -1;
                break;
}
console.log("Nombre: "+ nombre , "Edad: "+edadCase);

/*
iteraciones:
se utilizan para repetir una porcion de codigo varias veces.
*/
/*
--> wile: repetir un bloque hasta que cumpla una condicion
*/ 
let contador = 0;

while(contador < 5){
    console.log(contador);
    contador ++;
}

/*
do - while: 
*/
let contador2 = 1;

do {
    console.log(contador2);
    contador2 + 5;
} while(contador2 < 25);

let contador3 = 25;

do {
    console.log(contador3);
    contador3 --;
} while(contador3 < 15);