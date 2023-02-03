const parOimpar=(numero=0)=>{
    if(!numero)return console.warn('No ingresaste un numero');
    if(typeof numero!=="number") return console.error(`el valor ${numero} ingresado no es un numero`);
  
     return((numero%2)===0) 
    ?console.log(`El numero ${numero}, es par`)
    :console.log(`El numero ${numero}, es impar`);
}
parOimpar();
parOimpar(1);
parOimpar(2);
parOimpar(-3);
parOimpar("12");
parOimpar(235);







