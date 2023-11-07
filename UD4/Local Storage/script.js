/*
Local Storage
setItem (key, value)
getItem ( value)

*/

function guardarValore(){
    console.log("Guardando valores en el local storage en solo usuario:");
    
    localStorage.setItem("usuarios", "Youssef");
}

function leerValore(){

    console.log("Leyendo valores en el local storage en solo usuario:");

    let valor = localStorage.getItem("usuarios");
    console.log(valor == null ? "-La clave no se ha encontrado"  : valor);
}


function guardarValores_Array(){
    console.log("Guardando valores en el local storage en array");
    let usuariosWeb = ["Andreau", "Paco", "Valentin"];
    //localStorage.setItem("usuarios", "Youssef");
    localStorage.setItem("usuarios", usuariosWeb);
}

function leerValores_Array(){
    console.log("Leyendo valores en el local storage en array");
    //let valor = localStorage.getItem("usuarios");
    
    let valor = localStorage.getItem("usuarios");
    console.log(valor == null ? "-La clave no se ha encontrado"  : valor);
}


function guardarValores_objeto(){
    console.log("Guardando valores en el local storage en objeto");
    let usuario = {
        nombre: "youssef",
        apellidos: 42,
        correoElectronico: "malki.youssef@gmail.com"
    };
 
    localStorage.setItem("usuarios",JSON.stringify( usuario));

}

function leerValores_objeto(){
    console.log("Leyendo valores en el local storage");
   let usuarioObjeto = JSON.parse(localStorage.getItem( "usuarios"));
   console.log(usuarioObjeto == null ? "-La clave no se ha encontrado"  : usuarioObjeto);

}