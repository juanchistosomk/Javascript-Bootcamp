/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
*/

const altura_cm = 176
const altura_m = 1.76
const peso = 74.391
//console.log(typeof altura_m)
const alt_redondeada = altura_m.toFixed(1)
console.log(alt_redondeada)
const peso_redondeado = peso.toFixed()
console.log(peso_redondeado)

const max_val = Number.MAX_VALUE+1;
// No entendi el ultimo punto. No es claro para mi lo que se debía hacer
console.log(max_val)

