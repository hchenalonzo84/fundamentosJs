//** para crear un generador solamente debe agregarse un asterisco al lado derecho de la palabra function */

function* iterable() {
    yield  "hola";
    console.log('hola consola')
    yield "hola 2"
    console.log('seguimos con mas instrucciones de nuestro codigo')
    yield"hola 3";
    yield"hola 4";

}

let iterador = iterable();
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

for (let y of iterador) {
    console.log(y);

}
const arreglo = [...iterable()];
console.log(arreglo);

function cuadrado(valor) {
    setTimeout(() => {
    return  console.log({valor,resultado:valor*valor})
    }, Math.random()*1000);


}

function* generador(){
    console.log('inicia generator');
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);

    console.log('termina generator');
}

let gen = generador();

for (const ye of gen) {
    console.log(ye);
}