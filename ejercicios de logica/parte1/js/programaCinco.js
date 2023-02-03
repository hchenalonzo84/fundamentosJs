let cadena= window.prompt('ingrese cadena original');

let invert=  (cad) => {
    let nuevaCadena="";
    for (let i = cad.length -1; i >=0 ; i--) {
            nuevaCadena += cad[i];
            
    }
    console.log(nuevaCadena);
}

invert(cadena);

const invertirCadena= (cadenass="")=>
(!cadenass)
?console.warn('no has ingresado la cadena de texto')
:console.info(cadena.split("").reverse().join(""));

invertirCadena("Hola mundo 2");