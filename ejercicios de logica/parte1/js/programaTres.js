console.log('funcionando');

 let cadena = window.prompt();
 console.log(cadena);

 try {
    if (typeof cadena === 'string') {

       const arreglo = cadena.split(" ");
       console.log(arreglo);
      
    }
   
 } catch (error) {
    console.log(`Error el tipo de dato no es un string ${error}`);
 }

 const cadenaAArreglo = (cadena4="", separador=undefined)=>{
   (!cadena4)
   ?console.warn('no ingresaste una cadena de texto')
   :(separador=== undefined)
    ?console.warn('no ingresaste el caracter separador')
    :console.info(cadena4.split(separador));
 }
 cadenaAArreglo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis facilis saepe, alias, eaque dolorum perferendis voluptate accusantium nisi adipisci debitis, minima sunt quis voluptas odio quidem deleniti sed inventore.',' ');

cadenaAArreglo('ENE,FEB,MAR',',');