


//let planet =["Júpiter", "mercurio", "neptuno", "marte", "saturno"];

let planetas = [
    {
        nombre: "Júpiter",
        distancia_solar: 0.39,
        tamaño_relativo: -38,
        fecha:"03/02/1543",  
    },

    {
        nombre: "mercurio",
        distancia_solar: 5.20,
        tamaño_relativo: -1.120,
        fecha:"04/03/1543",
    
    },

    {
        nombre: "neptuno",
        distancia_solar: 30.06,
        tamaño_relativo: -388,
        fecha:"09/23/1846",
    },
    {
        nombre:  "marte",
        distancia_solar: 1.52,
        tamaño_relativo: -53,
        fecha:"05/21/1543",   
    },
    {
        nombre: "saturno",
        distancia_solar: 9.54,
        tamaño_relativo: -945,
        fecha:"01/22/1543",
        
        
    }

]

function imprimir(planetas){
    
    console.log("- La distancia solar entre la tierra y ",planetas.nombre," es: ",planetas.distancia_solar,
                "  el tamaño relativo entre la tierra y ",planetas.nombre," es: ",planetas.tamaño_relativo,
                "  la fecha del descubrimiento de  ",planetas.nombre," es: ",planetas.fecha);
}


for(let planeta of planetas){
    imprimir(planeta);
}
