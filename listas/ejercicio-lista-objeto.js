/*
Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:

- Tu nombre (string)

- Tu edad (number)

- ¿Eres desarrollador? (boolean)

- Tu fecha de nacimiento (Date)

- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)

*/
const nombre = "Juan Carlos";
const edad = 34;
const isDeveloper = true;
const libro = {
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    fecha: "1943-04-06",
    url: "http://bibliotecadigital.ilce.edu.mx/Colecciones/ObrasClasicas/_docs/ElPrincipito.pdf"
}

const fecha_nac = new Date(1987, 9, 31);
const MisDatos = [nombre, edad, isDeveloper, fecha_nac, libro ];

console.info(MisDatos);