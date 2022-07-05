// Listas
let array = [3,45,12,"texto", {id:1}, false]

// Agregar Valores al final
array.push("Thor", 33);
console.log(array);
// Agregar al principio
array.unshift("JK")
console.log(array);

// Eliminar
// Eliminar el ultimo elemento
array.pop()
console.log(array);
// Eliminar el primer elemento
array.shift()
console.log(array);

// Agrgar, Modificar o Eliminar elemento de array segun posicion
// splice(x,y,z)

let array2 = [1,2,3,4,5,6,7,8]
// Elimina
array2.splice(3,1)
console.log(array2);
//Añade
array2.splice(1, 0, "Juan", "...mas valores") // 0
console.log(array2);
//Modifica
array2.splice(2, 1, "Carlos")
console.log(array2);
