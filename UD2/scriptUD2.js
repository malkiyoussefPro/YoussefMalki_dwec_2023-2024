/*
function saluda(){
    console.log('hola cara de bola');
}

var nombre ="youssef";
let edad = 41;
function patata(){
console.log(nombre);
console.log(edad);
}
// var,let, const
let uno = 1; let dos = 2; 
console.log(uno+dos);

//string
let nombre = 'youssef';
let apellido = 'malki';
let nombreCompleto ='malki youssef, Estudiante en la asignatura DWEC el profe es Joan Melsion';
let comillas=' texto\" entrecomillas\"';
console.log(comillas);
//numeros
let edad2=41;
let años = '41';
console.log(typeof años);
console.log(typeof edad2);
let edad3 =-26;
let años2= 41;
let precio = 21.99;
console.log(typeof precio);

console.log(años2-edad3);

let aprobados = Infinity;
let suspendidos = -Infinity;

console.log(typeof aprobados);
console.log(edad3 -aprobados);
console.log(aprobados+aprobados);
console.log(aprobados-suspendidos);
// null
let valor = null;
console.log(typeof valor);
//undefined
let algo;
console.log(algo);

//NaN
let x = "algo"/2;
console.log(x);

let miEdad = '41';
console.log(miEdad/2);

a = 2 ;
delete a;

let persona = {
    nombre : 'youssef',
    edad : 41
}
console.log(persona.nombre);
delete persona.edad;
console.log(persona.edad);
//Booleanos
let mohamed = true;
let rachid = false;
// null
// "" (string vacio)
//undefined
//0
//NaN
if(algo){
    console.log("salam");
}
else{
    console.log("Adios");
}
if(!algo){
    console.log("salam");
}
else{
    console.log("Adios");
}
// opredaores aritmeticos
// --> operaciones matematicas

/*
+ a+b
- a-b
* a*b
/ a/b
% a%b (modulo)
++ increment a++, ++a
--decremento a--, --a
suma y asigna a+=b , a = a+b
resta y asigna a-=b , a = a-b
multiplicar y asigna a*=b , a = a*b
dividir y asigna a/=b , a = a/b
modula y asigna a%=b , a = a%b
cambio de signo a =5, b= -a , b = -5
-- 
*/
let b = 5;
let c = 2;
let d = b/=c;
console.log(++b);
console.log(d);
//conversion tipos
let num1 = "5";
let num2 = "6";
let  A = parseInt(num1);
let B = parseInt(num2);
console.log(typeof num1, typeof num2);
console.log(num1+num2);
console.log(A+B);
console.log(typeof A, typeof B);
// directamente sin pasar por declarar otros variables
console.log(parseInt(num1)+parseInt(num2));
let num3 = 4.21;
console.log(typeof num3);
 A = +num1;B = +num2;
 console.log(A+B);
 //opredores de comparacion.
 // --> comparar 2 valores y devolver un resultado booleano
 // > mayor que
 console.log(5>4);
 // < menor que
 console.log(5<4);
 //  >= mayor o igual que
 console.log(5>=4);
 // <= menor o igual que
 console.log(5<=3);
// == igual que
console.log(5==5);
// != distinto que
console.log(5!=4);
// === igual en valor y tipo que
let m = 5;
let n=6;
let l ="5"
console.log(m===n);
// !== distinto en valor o tipo
console.log(m!==l);
// opredadores bolean
// --> permiten comparar expresiones boolean con las que se construyen condiciones que se pueden aplicar 
// en funciones , bolcles etc...
// && AND solo devuelve true cuando ambos opredores lo son
/*
true  && true  = true, 
false && true  = false
true  && false = false
false && false = false
*/
// || OR de vuelve true si cuaulquiera de los operadores lo es
/*
    true  || true  = true, 
    false || true  = true
    true  || false = true
    false || false = false


let tr = true;
let fs = false;
console.log(tr && fs);
console.log(tr || fs);

let cadena = "Youssef";
if(cadena != null && cadena.length > 0) {
    console.log(cadena);
}
else {
    console.log("la cadena esta vacia");
}

*/
let ab = false;

let ba = false;


//! Not devuelve lo contrario al operando
console.log(!ba);

