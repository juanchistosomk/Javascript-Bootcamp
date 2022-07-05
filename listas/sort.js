//TODO:  .sort() en números

const array = [3,5,11,89,5,34,65,23];

//TODO:  a: elemento anterior    b: siguiente elemento
// retorna numero positivo, retorna numero negativo invierte orden

array.sort((a, b) => {
    //return a - b // ASCENDENTE
    return b - a   // DESCENDETE
})
console.log(array)


//TODO:  .sort() en objetos
const listaObjetos = [
    { nombre: 'Leo', edad: 45   },
    { nombre: 'Mao' , edad : 22 },
    { nombre: 'Lex' , edad : 49 },
    { nombre: 'Tai' , edad : 23 },
    { nombre: 'Pez' , edad : 18 },
    { nombre: 'Alexa' , edad : 51 } 
];

listaObjetos.sort((a, b)=>{
    return a.edad - b.edad  // ASCENDENTE
    //return b.edad - a.edad  // DESCENDENTE
})
console.log(listaObjetos);