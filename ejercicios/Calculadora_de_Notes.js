let nomEstudiante = "Youssef";
let notaExamen1 = 8.5;
let notaExamen2 = 6.2; 
let notaProjecte = 8.8;


let examenes = ((notaExamen1 + notaExamen2) *20)/100;
let proyecto = (notaProjecte *70)/100;

let notaFinal = examenes + proyecto;

if (notaFinal > 7){
    console.log("- Nombre Estudiante: ", nomEstudiante);
    console.log("- Nota Examen 1: ", notaExamen1);
    console.log("- Nota Examen 2: ", notaExamen2);
    console.log("- Nota del proyecto: ", notaProjecte);
    console.log("- Nota Final: ", notaFinal);
    console.log("¡Felicidades,", nomEstudiante+ "¡Has aprobado el módulo!");
}else{
    console.log("El estudiante necesita mejorar su nota para aprobar el módulo,",nomEstudiante, "animo !!!");
}
