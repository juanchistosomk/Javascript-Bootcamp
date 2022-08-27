/*
- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
- Una variable que obtenga tu edad a partir del objeto anterior
- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
*/

const datospersonales = {
    "nombre": "Juan Carlos",
    "apellido": "Castillo",
    "Edad": 30,
    "alaltura": 1.75,
    "eresDesarrollador":true
};

const edad = datospersonales.edad;
console.log(edad);

const informaciondetallada = [ 
    datospersonales,
    { "Nombre": "Andres", "Edad": 34, "Profesion": "Infraestructura"},
    { "Nombre": "Jairo", "Edad": 37, "Profesion": "Desarrollo"}   
];

console.log(informaciondetallada);


const nuevaLista  = [ ...informaciondetallada ];
nuevaLista.sort((a, b) => b.Edad - a.Edad);
console.log("Nueva lista: ", nuevaLista);