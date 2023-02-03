const textoEnCadena = (cadena="",texto="")=>{
    if(!cadena)return console.warn('no ingresaste el texto largo');
    if(!texto)return console.warn('no ingresaste la palabra a evaluar');

    let i = 0;
    contador=0;

    while (i!==-1) {
        i=cadena.indexOf(texto,i);
        if(i!==-1){
            i++;
            contador++;
        }
    }
    return console.info(`la palabra ${texto} se repite ${contador} veces.`);
}

textoEnCadena();
textoEnCadena("hola mundo adios mundo");
textoEnCadena("","mundo");
textoEnCadena("hola mundo adios mundo", "mundo");

