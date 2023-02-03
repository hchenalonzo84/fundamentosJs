const botonObtener= document.querySelector('.obtener');

botonObtener.addEventListener('click', () => {
    let cadenaEntrada= document.querySelector('.entrada').value;
    console.log(cadenaEntrada)
    
    let numeroCaracteres= document.querySelector('.numCaracter').value;
    console.log(numeroCaracteres);

    let cadenaCortada= document.querySelector('.salida');

    cadenaCortada.innerHTML= cadenaEntrada.slice(0,numeroCaracteres);   
});


let nombre="Hola que tal";

const arreglo = nombre.split(" ");

console.log(arreglo);

const recortarTexto= (cadena3="", longitud=undefined)=>(!cadena3)
?console.warn('no ingresaste una cadena')
:(longitud === undefined)
 ?console.warn('no ingresaste la longitud a cortar')
 :console.info(cadena3.slice(0,longitud));

recortarTexto("hola hugo",4);
recortarTexto();
recortarTexto("hola hugo");




