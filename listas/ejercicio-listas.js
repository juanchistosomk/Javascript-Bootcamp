/*
Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
*/

let lista_compra = ['pan','leche','huevos','arroz','harina','jabon','carne','chocolate','queso'];
lista_compra.push('Aceite de girasol');
lista_compra.pop();

console.log(lista_compra);

const mis_peliculas = [
    { titulo: 'El Pianista' , director: 'Roman Polanski', fecha: '2002-09-06'},
    {titulo: 'Batman: El caballero de la noche', director:'Christopher Nolan', fecha:'2008-07-14'},
    {titulo: 'Logan', director:'James Mangold', fecha: '2017-03-03'}
]

const pel_filter = mis_peliculas.filter((valor) => valor.fecha > '2010-01-01' )
console.log(pel_filter);

const directores = mis_peliculas.map((valor) => valor.director )
console.log(directores);

const titulos_peliculas = mis_peliculas.map((valor) => valor.titulo);
console.log(titulos_peliculas);

const lista_directores_titulos1 = directores.concat(titulos_peliculas);
console.log(lista_directores_titulos1);

const lista_directores_titulos2 = [...directores, ...titulos_peliculas];
console.log(lista_directores_titulos2);