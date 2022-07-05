//TODO:  Iterar Valores de Lista

const lista = [1,2,3,4,"texto", false, "js",11]

//TODO:  Forma antigua con FOR, es menos eficiente
for(let i=0; i< lista.length; i++){
    console.log(lista[i])
}

//TODO:  Con forEach más eficiente
lista.forEach(valor => {
    console.log(valor) }
    );


//TODO:  .find(elements => { .... })

const listaObjetos = [
    { nombre: 'Leo', edad: 45   },
    { nombre: 'Mao' , edad : 22 },
    { nombre: 'Lex' , edad : 49 },
    { nombre: 'Tai' , edad : 23 },
    { nombre: 'Pez' , edad : 18 } 
]

//TODO:  forma 1
const objeto = listaObjetos.find(obj => {
    return obj.nombre === 'Tai'
})  
console.log(objeto.edad);

//TODO:  forma 2
const { edad } = listaObjetos.find(obj => obj.nombre === 'Tai' )  
console.log(edad);
