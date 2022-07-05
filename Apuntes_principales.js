// TIPADO INFERIDO: se define en el monento de utilizar 
// la variable 


// TIPOS PRIMITIVOS

// Number, String, Bool, Null, undefined
// Falsy: null, undefined, 0, false

// Declarar Variables
// var, let, const

// VAR: GLOBAL 
// LET: SOLO APLICA EN BLOQUES DE CODIGO
// CONT: NO SE PUEDE CAMBIAR DE VALOR 


// NOTACIÓN
// ;
// . -> Se utiliza en los objetos para acceder a los atributos
// [] -> Listas , arrays
// () -> Funciones
// {} -> Para objetos, funciones, estructuras de control

//Listas
const lista1 = [1,4,6,"Cadena",false];
const lista2 = new Array(4, "word", null, undefined)
const lista3 = new Array(3)
lista3[0]="Hola"
const lista4 = [lista1,lista2,lista3];
console.log(lista4)

//Objetos
const Auto = {
    altura: 12,
    ancho: 5,
    color: "Gris",
    daños: false,
    contactos: ["Luis","Mario","Sandra"],
    tarjeta: {
        marca: "xlsm",
        almacenamiento: 128
    }
};

Auto.valor = 150;
Auto.ancho = 5.8

console.log(Auto.contactos[0]);
console.log(Auto.valor);
console.log(Auto.ancho);

//Auto  = { casa:2445}  // Error porque se esta cambiado la estructura inicial

const ahora = new Date
console.log(ahora);

const milis = new Date(10)
console.log(milis)
const fecha_valores = new Date(2022,0,12)
console.log(fecha_valores)

const dia = ahora.getDate()
const mes = ahora.getMonth()+1;  //Mes comienza en cero 0
const ano = ahora.getFullYear()
console.log(ano,mes,dia)


/* Cadenas

.charAt(0)
.slice(0,4), slice(-1)
.replace(/Hi/g, 'hola')
.match(/en/g)  -> array con coincidencias
.include(nombre) -> true o false
.startsWith('Juan')  ->  true o false
.endsWith('n.') ->  true o false

*/

