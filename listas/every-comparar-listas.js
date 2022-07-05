//TODO:  Comparar listas
//TODO:  .every(valor, indice) -> TODOS los elementos deben cumplir condicion

const lista = [1,4,5,2,6,8,-3,-7]
const result = lista.every((valor) => {
     return valor > 0
    })
console.log(result)

//TODO:  *Listas no se pueden comparar directamente
const ar1 = [1,4,5,6,8,12]
const ar2 = [1,4,5,6,8,12]

const comparaArrays = (arr1, arr2) => {
//TODO: compara longitudes
    if(arr1.length !== arr2.length) return false
    //compara cada elemento de las listas con every()
        const resp = ar1.every((valor, indice) => valor===arr2[indice])
        return resp;
}
console.log(comparaArrays(ar1, ar2))