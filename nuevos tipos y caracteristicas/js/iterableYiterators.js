document.querySelectorAll("p")
//**ejemplo  de todo tipo de dato que puede ser iterable */
// const iterable = [1,2,3,4,5];
// const iterable = "Hola mundo";
// const iterable = new Set([1,2,3,3,3,4,5,5,6]);
const iterable = new Map([["nombre", "hugo"], ["edad", 38]])


//** accedemos al iterador del iterable */
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador)

//*  el metodo next() se utiliza para recorrer paso a paso un  iterable por medio de un  iterador */
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

//** se pude hacer por medio de un ciclo  */

let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
    
}
