

//Declaration de un array de planetas

let planetas = [

    //Declaration de attributos de los objetos de los planetas [Júpiter, Mercurio, Neptuno, Marte, Saturno]
    {
        
        nombre : "Júpiter",
        distancia_solar : 0.39,
        tamaño_relativo : -38,
        fecha : Date ("03/02/1543"),  
    },

    {
        nombre : "Mercurio",
        distancia_solar : 5.20,
        tamaño_relativo : -1.120,
        fecha : Date ("04/03/1543"),
    
    },

    {
        nombre : "Neptuno",
        distancia_solar : 30.06,
        tamaño_relativo: -388,
        fecha : Date ("09/23/1846"),
    },
    {
        nombre : "Marte",
        distancia_solar : 1.52,
        tamaño_relativo : -53,
        fecha : Date ("05/21/1543"),   
    },
    {
        nombre : "Saturno",
        distancia_solar : 9.54,
        tamaño_relativo : -945,
        fecha : Date ("01/22/1543"),     
        
    }
]

//Funcion para mostrar las informationes de los atritbutos entre la tiera y los planetas
function mostrarPorConsola(planetas){
    
    console.log("- La distancia solar entre la tierra y ",planetas.nombre," es: ",planetas.distancia_solar,
                "  el tamaño relativo entre la tierra y ",planetas.nombre," es: ",planetas.tamaño_relativo,
                "  la fecha del descubrimiento de  ",planetas.nombre," es: ",planetas.fecha);
}

// Boucle para mostrar por consola las planetas
for(let planeta of planetas){
    mostrarPorConsola(planeta);
}

//Ordenar los planetas de menor a mayor
console.log("-La ordenacion de los planetas de menor a mayores: ");
console.log(planetas.sort((a,b) => 
a.distancia_solar- b.distancia_solar));
