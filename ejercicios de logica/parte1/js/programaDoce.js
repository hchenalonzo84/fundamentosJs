const numPrimo=(numero=undefined)=>{
    if(numero===undefined)return console.warn('No ingresaste un numero');
    if(typeof numero!=="number") return console.error(`el valor ${numero} ingresado no es un numero`);
    if (numero===0) return console.error('el numero no puede ser cero');
    if (numero===1) return console.error('el numero no puede ser uno');
    if(Math.sign(numero)===-1) return console.error('el numero no puede ser negativo');

    let divisible = false;
    for (let i = 2; i < numero; i++) {
        if ((numero%i)===0){
            divisible=true;
            break;
        }         
    }
    return (divisible)
    ?console.log(`El numero ${numero}, No es primo`)
    :console.log(`El numero ${numero}, Si es primo`);
}
numPrimo();
numPrimo("320");
numPrimo({})
numPrimo(true);
numPrimo(0);
numPrimo(1);
numPrimo(-13);
numPrimo(13);
numPrimo(200);
numPrimo(2);





