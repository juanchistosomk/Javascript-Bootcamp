// Sets o conjuntos
// NO permiten almacenar elementos REPETIDOS.

const array = [1,2,3,4,5,6,1,2,3,8, {id:5},{id:5} ];
const miSet = new Set(array)

console.log(array);
console.log(miSet);  // {id:5} si repite porque tienen diferente referencia

// add()
miSet.add(9);
console.log(miSet);

// size
console.log(miSet.size);

// delete()
miSet.delete(8);
console.log("del: ", miSet);

// clear()
//miSet.clear();
//console.log(miSet);

// has() : busca elemento y retorna boolean
console.log(miSet.has(4));
console.log(array.includes(2));

miSet.forEach(valor => console.log(valor));

const iterador_miSet = miSet.values();
console.log(iterador_miSet);

// Convertir de SET a ARRAY
const arr_miSet = [ ...miSet];
console.log(arr_miSet);