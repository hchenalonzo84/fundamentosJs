const validarNombre= (nombre="")=>{
    if(!nombre)return console.warn('no ingresaste una nombre');
    if(typeof nombre!=="string")return console.error(`el valor ${nombre} ingresado, no es una cadena de texto`);

    let expresionRegular= /^[A-Za-zÑñÄáÉéÍíöóÚúÜü\s]+$/g.test(nombre);

    return (RegExp)
    ?console.info(`${nombre}, es un nombre valido`)
    :console.info(`${nombre}, no es un nombre valido`);

}

validarNombre();
validarNombre(123123);
validarNombre({});
validarNombre("Hugo rolando chenal alonzo");


