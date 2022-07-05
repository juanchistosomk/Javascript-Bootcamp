// Unir 2 listas
// .concat(lista2)

const lista1 = [1,2,3,4]
const lista2 = [5,6,7,8]

console.log(lista1.concat(lista2));

// Unir con Factor de  Propagación ...
const lista3 = [...lista1, ...lista2]
console.log(lista3)

//////

// .slice(indiceInicio, indiceFin) Obtener lista a partir de otra
// NO INCLUYE EL INDICEFIN
console.log(lista3.slice(2,3))
console.log(lista3.slice(2,-5))