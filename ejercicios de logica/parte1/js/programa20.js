const validarEmail=(correo="")=>{
    if(!correo)return console.warn('no ingresaste una correo');
    if(typeof correo!=="string")return console.error(`el valor ${correo} ingresado, no es una cadena de texto`);

    let expresionRegular= /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);

    return (RegExp)
    ?console.info(`${correo}, es un correo valido`)
    :console.info(`${correo}, no es un correo valido`);
}


validarEmail();
validarEmail(34);
validarEmail("hchea,@gmail.com");
validarEmail("rolando8410@hotmail.com");