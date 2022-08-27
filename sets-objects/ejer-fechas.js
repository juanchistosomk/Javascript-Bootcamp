/*
- La fecha de hoy
- La fecha de tu nacimiento
- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
- Una variable que contenga el día de tu nacimiento
- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
*/

const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNac = new Date(1992,9,31, 7,45,0,0);
console.log(fechaNac);

let valida = "";
if(fechaHoy > fechaNac)
    valida = "Hoy es mas tarde que mi fecha de Nacimiento";
console.log(valida);

const diaNac = fechaNac.getDate();
console.log(diaNac);

const mesNac = fechaNac.getMonth();
console.log(mesNac+1);

const anioNac = fechaNac.getFullYear();
console.log(anioNac);