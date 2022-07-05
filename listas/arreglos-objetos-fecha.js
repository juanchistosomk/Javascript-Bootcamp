// listas, arreglos
const lista = [,1,2,3,4,"prueba"]

const lista2 = new Array(1, "hola", true)
const lista3 = new Array(3)
const lista4 = new Array(lista, lista2)
console.log(lista)
console.log(lista2)
console.log(lista4)


// Objetos
const objeto = {
    id: 12342,
    marca: "Toyota",
    placa: "6T0YJ",
    conductores: ['Juan','Paco','Maria'],
    reparaciones: {
        frente: "bomper",
        "costado-izq": "puerta",
        "costado-der": "nada",
        atras: "parachoques"
    }
};
// agrego campo
objeto.anio=2022;
//edito campo
objeto.id=65432;

console.log(objeto);

// Fechas,    Libreria: Moment.js
const ahora = new Date();
const dia =  ahora.getDate();
const mes =  ahora.getMonth()+1;
const ani =  ahora.getFullYear();

console.log(ani, mes, dia);