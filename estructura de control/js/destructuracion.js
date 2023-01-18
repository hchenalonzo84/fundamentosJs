let numeros= [1,2,3];
console.log('sin destructruracion')
let uno= numeros[0];
let dos= numeros[1];
let tres= numeros[2];

console.log(uno,dos,tres);

// con destructuracion

// con un arreglo
const [one,two,three]= numeros;
console.log(one,two,three);

// con un objeto
const persona={
    nombre:'hugo',
    apellido:'chenal',
    edad:38
}

const {nombre, apellido, edad}= persona;
console.log(nombre,apellido,edad);


