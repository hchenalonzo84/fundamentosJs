
const capicua= (numero=0)=>{
  if (!numero) {
    return console.warn('No ingresaste ningun numero');
  }
  if(typeof numero !=="number") return console.error(`el valor ${numero}  ingresado no es un numero`);

  let numeroString= numero.toString();

  let numStringRevez= numeroString.split("").reverse().join("");
  
  

  return (numeroString===numStringRevez)
  ?console.info(`Si es capicua, el numero original es: ${numeroString} y el numero al revez es: ${numStringRevez} `)
  : console.info(`No es capicua, el numero original es: ${numeroString} y el numero al revez es: ${numStringRevez}`);  
  
};
capicua();
capicua("19");
capicua({});
capicua();
capicua(2000);
capicua(2002);
capicua(2000);
capicua(212.212);



 
