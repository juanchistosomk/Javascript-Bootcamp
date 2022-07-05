// Minusculas

let banda = "Rompeprop"
let grupo = "rompeprop"

console.log(banda===grupo)
console.log(banda.toLowerCase()===grupo)

//Mayúsculas
console.log(banda.toUpperCase()===grupo.toUpperCase())

//Concatenar cadenas
let cadena1 = " Primera cadena ";
let cadena2 = "Segunda cadena   ";

console.log(cadena1.concat(", ",cadena2));
console.log(cadena1 + ' : ' + cadena2);
console.log(`${cadena1} :>> ${cadena2}`);

//Eliminar espacios
console.log(cadena1.trim().length)
console.log(cadena1.trimStart().length)
console.log(cadena2.trimEnd().length)

// Obtener caracter de ubicación específa
let str_c = "Nueva cadena de texto JS";
console.log(str_c.charAt(6));
console.log(str_c[6]);

// Obtener posición de palabra en cadena
let str_c2 = "Antigua cadena de texto JS y nueva cadena de texto JS.";
console.log(str_c2.indexOf('JS'));
console.log(str_c2.lastIndexOf('JS'));




