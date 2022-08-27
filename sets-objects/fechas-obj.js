// Fechas

const datehoy = new Date();

console.log(datehoy);

// Meses inician en 0 -> Enero y Dic -> 11
const fecha1 = new Date(1999,4,12,3,30,12,123)
console.log("Fe1: ",fecha1);

// Fechas en Milisegundos
const fecha2 = new Date(200000000000)
console.log("Fe2: ",fecha2);

// Comparar Fechas
const fecha3 = new Date(1000000000000)
console.log("Fe3: ",fecha3);
if( fecha2 < fecha3 )
 console.log("result", true);

 const fecha5 = new Date(2020,11,18,0,0,0,0,0,0,0);
 console.log("Fe5: ",fecha5);
 //if(fecha1 === fecha5 )     // ERROR , a si no s ecompara fechas, se debe convertir en milisegundos
if(fecha1.getTime() !== fecha5.getTime())
    console.log("Asi se compara, convirtiendo con getTime()")

// Dia
console.log(fecha5.getDate())
// Mes  (0 - 11)
console.log(fecha5.getMonth()+1)
// Año
console.log(fecha5.getFullYear());

// toLocaleDate String
console.log(fecha3.toLocaleDateString('es-CO'));


