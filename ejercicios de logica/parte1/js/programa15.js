const convertirBInarioDecimal = (numero=undefined, base=undefined)=>{
if(numero===undefined)return console.warn('no ingresaste un numero a convertir')
if(typeof numero!== "number")return console.error('el valor  ingreado no es un numero');
if(base===undefined) return console.warn('No ingresaste la base a convertir');
if(typeof base!== "number")return console.error('el valor de la base ingresado no es un numero');

if (base ===2) {
    return console.info(`${numero}base ${base} = ${parseInt(numero,base)} base 10`);
  }else if (base ===10) {
    return console.info(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
  }else{
    return console.error(`el tipo de base a convertir no es valido`)
  }
}


convertirBInarioDecimal(100,2);
convertirBInarioDecimal(4,10);
convertirBInarioDecimal(114,10);

