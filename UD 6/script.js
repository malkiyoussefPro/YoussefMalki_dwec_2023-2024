const obtenerDatos = (miCallback, source) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4) {
            if (request.status === 200) {
                const respuesta = JSON.parse(request.responseText);
                miCallback(undefined, respuesta);
            } else {
                miCallback("No se ha podido obtener los datos", undefined);
            }
        }
    });

    request.open('GET', source);
    request.send();
};

obtenerDatos((error, datos) => {
    console.log("callback 1 disparado");
    gestionrespuesta(error, datos);

    obtenerDatos((error, datos) => {
        console.log("callback 2 disparado");
        gestionrespuesta(error, datos);

        obtenerDatos((error, datos) => {
            console.log("callback 3 disparado");
            gestionrespuesta(error, datos);

        }, 'todos/tareas3.json');
    }, 'todos/tareas2.json');
}, 'todos/tareas1.json');

function gestionrespuesta(error, datos) {
    if (error) {
        console.log(error);
    } else {
        console.log(datos);
    }
}
