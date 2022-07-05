for(let i=1; i<=10; i++){
   
// Número primo
let valida=0;    
 for(let j=1; j<=10; j++){
    if(i%j==0)
      valida++;
 }

    if(valida>2) 
        console.log("Iteración No.: ", i)
    else 
        console.log("Número Primo: ", i)

}