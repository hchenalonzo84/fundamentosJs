
const convertirGrados= (grados=undefined,unidad=undefined)=>{
    if(grados=== undefined) return console.warn('No ingresaste grados a convetir');

    if(typeof grados!=="number") return console.error(`El valor ${grados} ingresado, No es un numero`);

    if(unidad === undefined) return console.warn('No ingresaste el tipop de grado a convertir');

    if(typeof unidad!=="string") return console.error(`El valor ${unidad} ingresado, No es una cadena de texto`);

    if(unidad.length !==1 || !/(C|F)/.test(unidad)) return console.warn('Valor de unidad no reconocido');

    if(unidad==="C"){
        return console.info(`${grados}°C=${Math.round((grados*(9/5))+32)}°F`);
    }else if(unidad==="F"){
        return console.info(`${grados}°F=${Math.round((grados-32)*(5/9))}°C`);
    }else{
        return console.error('El tipo de grados a convertir no es valido');
    }
}
convertirGrados();
convertirGrados("2");
convertirGrados(3)
convertirGrados(3,true);
convertirGrados(15,"sd")
convertirGrados(15,"d")
convertirGrados(15,"E")
convertirGrados(0,"C")
convertirGrados(100,"C")
convertirGrados(32,"F")
convertirGrados(100,"F")


