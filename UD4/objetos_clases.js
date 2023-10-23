//Clases 
class Persona {
    constructor(nombre){
        this.nombre = nombre;

    }

    saludar(){
        console.log(`Hola soy: ${this.nombre}`);
    }
}
``

const  youssef = new Persona("youssef");

console.log(youssef);
youssef.saludar();

// Herencia

class Empleado extends Persona{
    constructor(nombre, salario){
        super(nombre);
        this.salario = salario;

    }

    trabajar(){

        console.log(`El empleado: ${this.nombre} esta trabajando.`);
    }
        
}

const maria = new Empleado(" Maria",300000);

console.log(maria);

maria.trabajar();

// Simbolos
/*
Los simbolos son una nueva clase de datos introducidos por ES6.
son valores unicos e inmutables.
se pueden utilizar como identificadores de propredades de objetos.
*/

const id = Symbol("id");
const persona = {
    nombre: "youssef",
    [id]: 1
};

console.log(persona[id]);


// Iteradores

/*
son objetos que impletan el protocolo de iteracion en Js, permiten recorrer 
y acceder a los elementos de una coleccion uno a uno.
*/

const numeros = [1, 2, 3];

const iterador = numeros[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

// Set 
/*
Permite almanecar valores Unicos de cualquer tipo.
no permite duplicados y ofrece metodos para agregar
eleminary verificar la existencia de elementos
*/

const setNumeros = new Set();

setNumeros.add(1);
setNumeros.add(1);
setNumeros.add(2);
setNumeros.add(3);

console.log(setNumeros.has(2));
setNumeros.delete(2);
console.log(setNumeros.has(2));

console.log(setNumeros.size);

console.log(setNumeros); 

const iterarNumeros = setNumeros[Symbol.iterator]();

console.log(iterarNumeros.next());

//Map

/*
permite almacenar pares clave-valor, donde cada clave es unica.
prmite operaciones de busqueda insercion y eliminación
*/

const mapaNombres = new Map();
mapaNombres.set("nombre", "Omi");

mapaNombres.set("edad", 33);

mapaNombres.set("profesion", "Desarrador");


console.log(mapaNombres.get("nombre"));
console.log(mapaNombres.has("edad"));
mapaNombres.delete("edad");
console.log(mapaNombres.has("edad"));
console.log(mapaNombres.size);
console.log(mapaNombres);



