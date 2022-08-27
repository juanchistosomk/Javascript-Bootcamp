const  mifamilia = {
    "Padre":"Armando",
    "Madre": "Maria Helena",
    "Hermano":"Ricardo",
    "Hermana": "Jessica"
}
console.log(mifamilia);

const mifamilia2 = mifamilia;
mifamilia2.minombre = "Juan Carlos";
console.log(mifamilia);
console.log(mifamilia2);

mifamilia2.programacion = "Javascript";
console.log("JS: ", mifamilia);