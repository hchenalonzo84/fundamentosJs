let cadena = window.prompt('ingrese la cadena');
let numeroVeces = window.prompt('numero de veces a repetir');
console.log( typeof numeroVeces);
let numero = parseInt(numeroVeces,10);
console.log(typeof numero)

let miFuncion = (cadena,numero) =>{
    for (let i = 0; i < numero; i++) {
        console.log(cadena)
        
     }
}
if (typeof numero === 'number') {
    miFuncion(cadena,numero);
    
}else{
    console.log('error')
}

const repetirTexto = (textoo ="",veces=undefined)=>{
    if (!textoo) return console.warn('no ingresaste un texto');
    
    if(veces===undefined) return console.warn('no ingresaste el numero de veces a repetir el texto')

    if(veces===0) return console.error('el numero de veces no puede ser 0');

    if(Math.sign(veces===-1))return console.error('el numero de veces no puede ser negativo')


    for (let i = 0; i < veces; i++)
        console.info(`${textoo},  ${i}`)
}
repetirTexto("Hola mundo",10);
repetirTexto("Hola mundo",0);
repetirTexto("Hola mundo",-10);
repetirTexto("",10);
repetirTexto("Hola mundo",-10);