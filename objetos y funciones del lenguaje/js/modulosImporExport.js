import  password, {Hi, PI,usuario} from "./constantes.js";
import {aritmetica as ari} from "./aritmetica.js";
import saludar from "./constantes.js";

console.log('Archivo modulos')

console.log(PI,usuario)
console.log(password);

console.log(ari.suma(3,4))
console.log(ari.resta(10,4))
saludar();
let quetal = new Hi();

let cadena1 = "La mañana se nos echa encima.";
console.log(cadena1);
let cadena2 = cadena1.slice(3, 9);
console.log(cadena2);
