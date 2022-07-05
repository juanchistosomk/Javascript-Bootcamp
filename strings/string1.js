let str1 = "Hola soy un string";
let str2 = 'Hola soy un string';

let str3= "Hola, este es un \"string\" en javascript";
console.log(str3);


let saludo = "Buen día,";

// Comillas invertidas: BACKTICKS;
let cadena= ` ${saludo} como estás? `;
console.log(cadena);

// Platillas HTML
let html= `<h1>Esto es un titulo</h1>`;

//Métodos

let cade1 = "Estos es una cadena string";
console.log(cade1.length);

// Obtener PARTES de una cadena
// slice(), substring(), subsrt(deprecated)
let slice_str = cade1.slice(6,8);
console.log(slice_str);
let substring_str = cade1.substring(0,8)
console.log(substring_str);

// Remplazar texto en una cadena

let texto = "Se desarrolla sus habilidades en la nube a su propio ritmo, con su propio horario y completamente gratis";
// REPLACE solo reemplaza la PRIMERA
console.log(texto.replace("su","tu"));
// Asi reemplaza TODOS, forma Global con expresión regular
console.log(texto.replace(/su/g,"tu"));





