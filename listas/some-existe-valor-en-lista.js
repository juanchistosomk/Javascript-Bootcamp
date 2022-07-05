//TODO:  .some(valor)   si existe un valor en un array

const array = [23,46,96,35,60,34,55]
const resp = array.some((valor) => valor === 60 )
console.log(resp);


const listaObjetos = [
    { nombre: 'Leo', edad: 45   },
    { nombre: 'Mao' , edad : 22 },
    { nombre: 'Lex' , edad : 49 },
    { nombre: 'Tai' , edad : 23 },
    { nombre: 'Pez' , edad : 18 },
    { nombre: 'Alexa' , edad : 51 } 
];

const existe = listaObjetos.some((valor)=>valor.nombre==='Juan');
console.log(existe)
