const funcionDescuento =(montoInicial=undefined,descuento=undefined)=>{
 if (montoInicial===undefined)return console.warn('No ingresaste el monto inicial'); 

 if(typeof montoInicial!=="number")return console.error(`el valor ${montoInicial}  ingresado, NO es un numero`);

 if(montoInicial===0)return console.warn('el monto inicial no puede ser 0');

 if(Math.sign(montoInicial)===-1)return console.error('el monto inicial no puede ser negativo');

 if(descuento===undefined)return console.warn('No ingresaste el descuento');

 if(typeof descuento!=="number")return console.error(`el valor ${descuento} ingresado, No es un numero`);

 if(Math.sign(descuento)===-1) return console.error('el descuento no puede ser un numero negativo')


 let montoFinal= montoInicial- (montoInicial*(descuento/100));
 return console.info(`el monto inicial ${montoInicial}, se aplico un descuento de ${descuento} y su monto final es de: ${montoFinal}`);
   
}

funcionDescuento();
funcionDescuento(1000);
funcionDescuento("1000");
funcionDescuento(1000,"20");
funcionDescuento(-1000,20);
funcionDescuento(1000,-20);
funcionDescuento(1000,20);

