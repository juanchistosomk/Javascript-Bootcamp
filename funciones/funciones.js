
saludo("Juan");

function saludo(nombre) {
    console.log(`hola ${nombre}`);
};

const perso = { "nombre": "Juan Carlos", "apellido": "Castillo" };
persona(perso);
function persona(obj){
    obj.apellido = "Perez";   // Cambio el objeto
    console.log(` Hola ${obj.nombre} ${obj.apellido}`);
};


function multiplica(...num){
    return num.reduce((a,b) => a + b);
}
const res = multiplica(1,5,3,99,5,1,4);
console.log(res);


function suma(a=0, b=0) {
    return a + b;	
}
console.log(suma(2));


// AMBITO DE VARIABLES:
// Cuando se definen dentro de una funcion no se pueden acceder fuera
// de la funcion.
// Cuando una variable se define Afuera de la funcion, se puede acceder 
// a esa variable dentro de la funcion

