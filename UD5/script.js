/*
El DOM es algo qe crea el navegador cuando carga la página web
crea un objeto que modela a ese documento, DOCUMENT, que modela nuestra página y podemos interaccionar con el documento html a través de js
Tiene propiedades y métodos
en consola:
document
document.location
document.URL
El DOM nos permite tener un aspecto visual

nodo raiz: HTML
HEAD y BODY... son como un arbol, son ramas.
El DOM tiene una estructura en forma de arbol
Para poder trabajar con el DOM hay que saber seleccionar sus elementos
*/

// querySelector
/* 
Pide como parámetro un selector CSS (./#...)
Devuelve la primera coincidencia del elemento selector pasado
*/
/*
const para = document.querySelector('p');
console.log(para);
*/

//para elegir otro que no sea el primero :
/*
const para = document.querySelector('.error');
console.log(para);
*/

 // si hay más de una clase con el mismo nombre pero distintos tipos:
 /*
 const para = document.querySelector('div.error');
 console.log(para);
*/

//Si no estamos seguros del selector, vamos al codigo con la consola y lo seleccionamos, copiamos y al pegar 
//en el script, nos da el selector

/*
const para = document.querySelector('body > h1');
console.log(para);
*/

// Para capturar una coleccion de parrafos se usa el querySelectorAll
/*
 parámetro: selector CSS
*/
/*
const paras = document.querySelectorAll('p');
console.log(paras); // esto devuelve una lista de los párrafos
//console.log(paras[0]);// esto muestra un elemento de la coleccion

paras.forEach(para => {
    console.log(para);
});

//no es un array, aunque lo parezca por lo que no tiene los métodos de los arrays. 
// se puede convertir en uno
*/

//Alternativas para acceder a elementos del DOM:


//getElementById
//parámetro: no es un selector, es el nombre del identificador
/*
const titulo = document.getElementById('titulo'); // con querySelector iria con #titulo
console.log(titulo);
*/

// getElementsByClassName
//Es una coleccion que no es nodelist, es un html colection
// parámetro: nombre de la clase asociada al elemento buscado
/*
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);


//aunque tampoco es array, tambien se pItem
*/

//getElementsByTagName
//parámetro: nombre del tag del elemento
/*
const paras = document.getElementsByTagName('p');
console.log(paras);
*/

//Modificar el contenido de la página
//innerHTML
//accedemos al contenido del parrafo
/*
let paras = document.querySelectorAll('p');
let p1 = paras[0];
let contenidoP1 = p1.innerText;
console.log(contenidoP1);
p1.innerText = "Requete";
contenidoP1 = p1.innerText;
console.log(contenidoP1);
*/


//Obtener  establecer atributos
//permite cambiar propiedades como src, href...
/*
let enlace = document.querySelector('a');
let url = enlace.getAttribute("href");
console.log(url);

enlace.setAttribute('href', 'http://www.seat.es');
url = enlace.getAttribute("href");
console.log(url);
*/

//Añadir y eliminar estilos
//style
/*
let error = document.querySelector('body > div.error');
error.style.backgroundColor = "lightblue";
error.style.backgroundColor = "";
*/

//Añadir y eliminar clases de CSS
/*
let error = document.querySelector('body > div.error');
console.log(error.classList);
error.classList.add("paco");
error.classList.remove("error");
let paras = document.getElementsByTagName('p');
let hijo = paras[2];
let padre = hijo.parentNode;
console.log(hijo);
console.log(padre);
let primerHermano = padre.firstElementChild;
console.log(primerHermano);
let siguienteHermano = hijo.nextElementSibling;
console.log(siguienteHermano);
*/


//Eventos
//referenciamos el elemento del DOM

const par = document.querySelector('p');
//creamos un evento para ese elemento

par.addEventListener('click', (e) => {
    //escribeLog(e.target);
    e.target.innerText = "Texto cambiado"; 
    console.log(e.target.innerText);

});

par.addEventListener('mouseover', () => {
    describeLog()
});

function escribeLog(){

    console.log('He hecho un clic sobre el parrafo');
}

function describeLog(){
    console.log('He pasado el mouse');
}

document.addEventListener("keydown", (e) => {
    console.log('Tecla presionada: ' + e.key)
    
});
