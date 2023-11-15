// Recuperar los elementos del DOM que no interesan
/*
const boton = document.querySelector('button');
const envoltorio = document.querySelector('.envoltorio-pop');

const cerrar = document.querySelector('.cerrar-popup');
*/


const btn = document.getElementById('#button');
const envoltorio_id = document.getElementById('#envoltoriopop');
const cerrar_id = document.getElementById('#cerrarpopup');


//Eventos

//Clicks sobre el button para mostrar el popup
btn.addEventListener('click', () => {

envoltorio.style.display = 'block';

});

//click sobre el boton para cerrar el popup

cerrar_id.addEventListener('click', () => {

    envoltorio_id.style.display = 'none';

});

//Click sobre el envoltorio para cerrar el popup

envoltorio.addEventListener('click', () => {

    envoltorio_id.style.display = 'none';
    
    });
