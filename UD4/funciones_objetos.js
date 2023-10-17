


//FUNCIONES:
// encapsular código y poder reutilizarlo, a veces se les llama métodos
// no tienen por qué devolver nada y se puede hacer que acepten parámetros o no.
/*function diHola(){
    console.log("Hola");
}
diHola(); // llama a la funcion y aunque se ponga antes de la función se ve igual
*/
/*
//console.log(multiplica(3, 10) + 1);//se puede concatenar números
let resultado = multiplica(3, 10);
console.log(resultado);



function multiplica(c, d) {
    let a = 10;
    let b = 20;



    return (a * b * c * d); // si queremos que devuelva el resultado se pune esto, si no, con cgl lo muestra
   // console.log(a * b * c * d);
}
*/



// OBJETOS
/*el JavaScript 6 incorpora clases
son estructuras entre llaves, se utilizan para almacenar múltiples valores, normalmente relacionados entre sí,
podemos tener propiedades y funciones, dentro.
las propiedades serán pares clave-valor y los métodos son funciones
las claves de las propiedades de un objeto (persona, nombre) pueden ser cadenas de texto o 
algún tipo de identificador válido
para las claves, podemos omitir las comillas, el nombre no tiene por qué llevar comillas excepto las excepciones de luego
no pasa lo mismo en los valores que si han de llevar comillas
caracteres ascii
especiales
espacios en blanco...
*/
/*
let unCliente = { // aqui dentro van los métodos y propiedades
    nombre: "Peter",
    apellido: "Jackson",
    "dirección fiscal": "c/ desconocida", // al ser un String hay que poner comillas
    "+-+-+-+": "boquesa",
    pago: {
        tipo: "Visa",
        tarjeta: "123456789",
        "fecha de caducidad": "nunca"
    },
    vencimiento: 30
}



// si queremos modificar el valor del objeto se puede hacer con corchete []
unCliente["vencimiento"] = 60;



console.log(unCliente);
console.log(unCliente["nombre"]);
console.log(unCliente["+-+-+"]);
// un objeto puede tener como propiedad otro objeto
//para llamar al objeto dentro del otro:
console.log(unCliente["pago"]["tipo"]);
unCliente.apellido = "García";
console.log(unCliente.apellido);//en los especiales se necesitan los corchetes, no se puede llamar solo con el punto
console.log(unCliente.pago["fecha de caducidad"]);
//los objetos Json se definen con llave-valor ya que son objetos de JavaScript
// los elementos de un objeto pueden serde varios tipor, cadenas, booleanos, 
//arrays, otro ojeto y funciones y puede ser muy complejo ya que se pueden anidar
*/



//utilizar métodos como elementos (datos)
/*
let estudiante = {
    id: 2,
    nombre: "Ester",
    diHola : function() {
        return "Hola";
    },
    notas: [10, 0, 4],
    media: function(){
        let suma = 0;
        let nota = 0;
        for(let i=0; i<estudiante.notas.length; i++){
            suma += estudiante.notas[i];
        }
    }
}
let suma = estudiante.notas[];





console.log(estudiante.nombre);
console.log(media);



solo falta sacar la media
*/



let estudiante = {
    id: 2,
    nombre: "Ester",
    diHola : function() {
        return "Hola";
    },
    notas: [10, 0, 4]
}
/*
estudiante.apellido = "Arecha"; // esto añade la propiedad apellido, solo utilizándola



estudiante.diAdios = function() {
    return "Adios";
}



console.log(estudiante.diAdios());
*/



// la palabra this hace referencia al propio objeto
let factura = {
    descripcion: "factura de prueba",
    precio: 100.0,
    iva: 21.0,
    subTotal: function() {
        return this.precio;
    },
    total: function() {
        return this.precio + (this.precio * this.iva) / 100;
    }
}
//console.log(factura);
//console.log(factura.total());



//CONSTRUCTORES:
/*
no existe class pero si los constructores
con new creamos instancia del propio objeto
el nombre de la funcion va con mayuscula cuando es una funcion de tipo constructor

function Web() { // se usa siempre la palabra this
    this.url = "http://localhost";
    this.nombre = "Localhost";



    this.muestraInformacion = function () {
        return "url: " + this.url + "\n" + "Web: " + this.nombre;
    }
}
let unaWeb = new Web()// automáticamente hereda los métodos de Web
unaWeb.url = "https://www.fcbarcelona.cat"; // si no se cambia o asigna nada, coge los valores por defecto
unaWeb.nombre = "Mes que un club";



//console.log(unaWeb);
//console.log(unaWeb.muestraInformacion());



let otraWeb = new Web();
otraWeb.url = "https.hello.com";
otraWeb.nombre = "hello ello";




Web.visitas = 2; 
console.log(otraWeb.visitas);// esto no se ve, no sale
//prototype es una propiedad que tienen los objetos en JS, para poder ver las instancias realiadas después
Web.prototype.visitas = 2;
Web.prototype.miFuncion = function() {
    return "Hola";
}



//console.log(otraWeb);
//console.log(otraWeb.muestraInformacion());

*/



