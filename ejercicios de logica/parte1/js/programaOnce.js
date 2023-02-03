
const miFactorial= (numero=undefined)=>{
    if(numero===undefined)return console.warn('No ingresaste un numero');
    if(typeof numero!=="number") return console.error(`el valor ${numero} ingresado no es un numero`);
    if (numero<=0)return console.warn('el numero no debe   ser menor o igual a cero');
    
    
    let contador=1;
    for (let i = numero; i>0 ; i--) {
     contador *=i;
    }
     console.info(contador);
}
miFactorial(5);