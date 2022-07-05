// Encontrar palabra dentro de texto: MATCH

let texto = "Es momento de entrar al tema de los operadores. Este tema me encanta y es donde ReactiveX brilla, porque la fuerza de los operadores nos permiten jugar con la data y el flujo de información de una manera sorprendente.";

console.log('match() :>> ', texto.match(/de/g));

// Saber si existe una cadena
console.log(texto.includes('JK'));
console.log(texto.includes('ReactiveX'));

// Saber si existe una cadena al inicio o  final
console.log(texto.startsWith('JK'));
console.log(texto.endsWith('sorprendente.'));


