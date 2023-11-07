/*

//Cookies


Lo utilzaremos para: 
-Monitizar la actividad de los usuarios.
- Mantener opciones de visualización o de aspecto para el usuario.
- Almanacar variables en el lado cliente.
-Identificacion o autentificacion	

*/
//Crear COOKIES
//document.cookie = "usuario = Oreo";
let usuarioKookie = "Oreo";

//document.cookie = "usuario = " + encodeURIComponent(usuarioKookie);

function crear_Cokkies(usuarioKookie) {
    console.log("Creando la cookie...");
    usuarioKookie += ";expires =Tue, 07 Nov 2023 12:15:00 GMT";
    document.cookie = "usuario = " + encodeURIComponent(usuarioKookie);
    console.log(usuarioKookie);
}

function leer_Cookies(){
    console.log("Leyendo la cookie...");
    console.log(decodeURIComponent(document.cookie));
}

