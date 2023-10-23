

//Constructor de los variables 
function constructor_Planeta(nombrePlaneta, distancia_solar, tamaño_relativo, fechaDescubrimiento){
    this.nombrePlaneta = nombrePlaneta;
    this.distancia_solar = distancia_solar;
    this.tamaño_relativo = tamaño_relativo;
    this.fechaDescubrimiento = new Date(fechaDescubrimiento);
}

//Declaracion de un array de planetas

const arrayPlanetas = [

  ["jupiter", 0.39, -38, "03/02/1543" ],
  ["mercurio", 5.20, -1.120, "04/03/1543"],
  ["neptuno", 30.6, -388, "09/23/1846"],
  ["marte", 1.52, -53, "05/21/1543"],
  ["saturno", 9.54, -945, "01/22/1543"],

];
const planetas = [];

//Boucle
for (const datosPlanetas of arrayPlanetas ) {
   const  [nombrePlaneta, distancia_solar, tamaño_relativo, fechaDescubrimiento] = datosPlanetas;
   const planeta = new constructor_Planeta(nombrePlaneta, distancia_solar, tamaño_relativo, fechaDescubrimiento);
   planetas.push(planeta)   
}

//Funcion para mostrar las informaciones de los atritbutos entre la tiera y los planetas
function mostrarPorConsola(planeta){

    console.log("- La distancia solar entre la tierra y ", `${planeta.nombrePlaneta}`, " es: ", `${planeta.distancia_solar}`,
                "  el tamaño relativo entre la tierra y ", `${planeta.nombrePlaneta}`," es: ", `${planeta.tamaño_relativo}`,
                "  la fecha del descubrimiento de  ", `${planeta.nombrePlaneta}`," es: ", `${planeta.fechaDescubrimiento.toDateString()}` );
}

// Boucle para mostrar por consola las planetas
for(let planeta of planetas){
    mostrarPorConsola(planeta);
}


//Ordenar el array de la planeta

planetas.sort((a, b) => a.distancia_solar - b.distancia_solar);


//Mostrar por consola las planetas otrdenadas
console.log("- Las planetas ordenadas son: ");
for(const planeta of planetas){

    mostrarPorConsola(planeta);
}