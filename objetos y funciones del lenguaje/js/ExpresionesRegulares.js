/**
 * EXPRESIONES REGULARES.
 * son una secuencia de caractees que forman un patron de busqueda, principalmente utilizada par ala busqueda de patrones de caracteres
 * */
let cadena= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora est quo quasi fuga? Necessitatibus eveniet, saepe totam, voluptates sed vel atque inventore 25 quam  Lorem explicabo nulla, quidem quae sequi asperiores  incidunt!";

//let expresion = new RegExp("Lorem","ig");
let expresion2 =/Lorem{1,}/ig;

//console.log(expresion.test(cadena));
//console.log(expresion.exec(cadena))

console.log(expresion2.test(cadena))
console.log(expresion2.exec(cadena))







































