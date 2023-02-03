const contarVocalesConsonantes=(cadena="")=>{
 if(cadena==="")return console.warn('No ingresate una cadena de texto');
 if(typeof cadena!=="string") return console.error(`El valor ${cadena} no es una cadena de texto`);

 let vocales=0;
 let consonantes=0;

 cadena= cadena.toLocaleLowerCase();
 for (let letra of cadena) {
    if(/[aeiouáéíóúü]/.test(letra)){
        vocales++;
    }
    if (/[bcdfghjklmnñpqrstvxyz]/.test(letra)) {
        consonantes++;
    }
 }

 return console.info({
    cadena,
    vocales,
    consonantes
 });
}
contarVocalesConsonantes();
contarVocalesConsonantes(3);
contarVocalesConsonantes("Hola mundo");
contarVocalesConsonantes("ñoño");
contarVocalesConsonantes("Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quas dicta rem eos qui beatae nisi eligendi perferendis. Nam excepturi assumenda deleniti vero amet dignissimos veritatis, voluptate unde dolorem illum.");



