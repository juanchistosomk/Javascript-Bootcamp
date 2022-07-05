//TODO: Obtener una lista a partir de Objeto Iterable. Eje: los strings
//TODO: Array.from(str)

const saludo = "Hola soy Juan"
console.log(Array.from(saludo));


const set = new Set([1,2,3,4,"hola",5]);
const arr_set = Array.from(set)
console.log(arr_set);

const array = [23,46,96,35,60,34,55]
const keys = array.keys()
console.log(keys)
const arr_keys = Array.from(keys)
console.log(arr_keys);



