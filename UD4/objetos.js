const ciudades = [
    {
        municipio : "zaragoza",
        provincia : "zaragoza",
    },
    {
        municipio : "Avila",
        provincia : "Avila",
    },
    {
        municipio : "madrid",
        provincia : "madrid",
    },
    {
        municipio : "Barcelona",
        provincia : "Barcelona",
    },
];

console.log(ciudades);
function Ordenar(){
    ciudades.sort((a, b) => { 

        return a.municipio.localeCompare( b.municipio);
     });
}
console.log(Ordenar());


const miArrray = ["A", "B", "C", "D", "E"];

miArrray.push("F");

console.log(miArrray);

const A ="a";

miArrray 