let paco = ['joan', 'amparon', 'esther'];

console.log(paco);
//let elementoEleminado = paco.pop();
//console.log(elementoEleminado);


// shift() elimina el primer elemento y lo devuelve

//let elementoEleminado = paco.shift();
//console.log(elementoEleminado);


// unshift() elimina el primer elemento y lo devuelve
//paco.unshift('youssef', 'rachid')
//console.log(paco);

//let otros = ['samir', 'karima', 'badia'];
//let combinacion =paco.concat(otros);
//console.log(combinacion);

/*
 slice devuelve una copia superficial
 de una porcion del array
*/
let copiaPaco = paco.slice(1, 2 );
console.log(copiaPaco);

/*
splice() cambia el contenido del array del
eliminando , reemplzando o agregando elementos
*/
let otros = ['samir', 'karima', 'badia'];

//paco.splice(1, 0, 'samir', 'karima');
//paco.splice(2, 3);
//paco.splice(2, 0, ...otros);
//paco.splice(2, 0, ...otros.splice(0,1) , ...otros.splice(0,1));
//console.log(paco);

/*
indexOf devuelve el primer indice en el que se encuantra un elemento dado.
devuelve -1 si no lo encuantre
*/

//let indice = paco.indexOf('amparon');
//console.log(indice);

let cadena = "Hola cara de bola";
indice = cadena.indexOf("a");
//indice = paco.lastIndexOf("amparon");
console.log(indice);

/*
join()
 une todods los elementos de de un array en una cadena 
 utilizando un separador
 */

 let  cad = paco.join( ' X ');
 console.log(cad);


 /*
  sort() ordena los elementos de un array alfabeticamente
  si son cadenas numericamente si son numeros
 */
   let array = ['samir','Rachid', 'Anouar','Said'];

console.log(paco.sort());

//console.log(numeros.sort());

console.log(array.sort());

/*
Ordenar correctamente con sort => uso de parametro 
se trata de una funcion :
- debe recibir 2 valores a comparar
- como resultado debe:
  - devolver un positivo (1) si es el primer valor es superior al segundo.
  - devolver un positivo (-1) si es el primer valor es inferior al segundo.
  - devolver un valor de (0) si los valores son iguales o equivalentes 
  para la ordenacion.

*/

// Sort numeros
let numeros = [10, -2, 15, 3, 24, 100, 0]; 
/*
console.log(numeros);
console.log(numeros.sort(function(a,b){
return a-b;
}));
// mismo resultado
console.log(numeros);
console.log(numeros.sort((a,b) =>{
return a-b;
// mas reducido
console.log(numeros);
console.log(numeros.sort((a,b) =>a-b));
}));

console.log(cadenaPalabras.sort((a,b) =>{
return (a.toLowerCase() > b.toLowerCase()) ? 1 : 
(a.toLowerCase() < b.toLowerCase()) ? -1 : 0;
}));
*/
console.log(numeros);
console.log(numeros.sort((a,b) =>a-b));


let cadenaPalabras= ['Youssef','joan', 'amparon', 'esther','Rami', 'Ángél'];

console.log(cadenaPalabras.sort((a,b) =>{

    return a.localeCompare(b);

}));


