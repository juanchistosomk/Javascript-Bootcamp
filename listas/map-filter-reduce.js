//TODO:  .map() 

const array = ['Alemania','España','USA','Colombia','Brazil']

const newArray = array.map((valor, indice) => {
    return `${indice+1}-${valor}`;
});
console.log(newArray);


//TODO:  .filter() 

const listaObjetos = [
    { nombre: 'Leo', edad: 45   },
    { nombre: 'Mao' , edad : 22 },
    { nombre: 'Lex' , edad : 49 },
    { nombre: 'Tai' , edad : 23 },
    { nombre: 'Pez' , edad : 18 },
    { nombre: 'Alexa' , edad : 51 } 
];

const personasMayores = listaObjetos.filter((obj) => {
    return obj.edad >= 40 });
console.log(personasMayores);
//ej2
const nuevalista = listaObjetos.filter( obj => obj.nombre !== 'Tai');
console.log(nuevalista)



//TODO:  .reduce()
const valores = [ 234345, 57546, 2137, 9687,4500, 18900 ]
const suma = valores.reduce((valorAcumulado, valorActual, indice, arrayOriginal ) => {
    console.log(valorAcumulado);
    console.log(valorActual);
    console.log(indice);
    return valorAcumulado + valorActual;
});
console.log(suma);


//TODO:  * se podria usar para concatenar diferentes arrays en uno solo