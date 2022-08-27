
const obj = {
"id": 123,
"nombre": "Juan Carlos Castillo",
"isDev": true,
"Hobbies": ["futbol","videojuegos","ejercicio"],
"4-juegos": [1,2,3,4]
};

console.log(obj);
console.log(obj["4-juegos"]);
console.log(obj.id);

// Llamar propiedades a partir de variables declaradas

const prop = "isDev";
console.log(obj[prop]);

// Copia el objeto PERO TAMBIEN la REFERENCIA
const obj2 = obj;
console.log(obj2);

obj2.nombre = "Camilo";
console.log(obj.nombre);   // TAMBIEN CAMBIA EL VALOR DEL OBJ INICIAL
console.log(obj2.nombre);

// Para tipos PRIMITIVOS no sucede
let var1 = 4;
let var2 = var1;
var2 = 6;
console.log(var1);
console.log(var2);

// Se debe crear una copia de la siguiente manera
const obj3 = { ...obj};
obj3.nombre = "Maria";

console.log(obj.nombre);   // NO CAMBIA EL VALOR DEL OBJ INICIAL
console.log(obj3.nombre);

/////////////////////////////
// ORDENAR LISTAS POR LA PROPIEDAD

const peliculas = [
{"Titulo":"Saga Xmen", "anio": 2014},
{"Titulo":"Superman", "anio": 2018},
{"Titulo":"Acuaman", "anio": 2020},
{"Titulo":"Batman", "anio": 2008},
{"Titulo":"Red hit", "anio": 2010},
];

console.log(peliculas.sort((a,b) => a.anio - b.anio)); 
console.log(peliculas.sort((a,b) => a.Titulo - b.Titulo)); 

