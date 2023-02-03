const obtener = document.querySelector('.obtener');

obtener.addEventListener('click',function () {
    
    let entrada= document.querySelector('.entrada').value;
 console.log(entrada.length)
    
    
    let salida= document.querySelector('.salida');
        
  salida.innerText=entrada.length;
  //  console.log(salida);
   

 }); 

 

//console.log(salida);

function contar(cade="") {
   if (!cade) {
      console.warn('no ingresaste ninguna cadena');
   }
   else{
      console.info(`la cadena ${cade} tiene ${cade.length} caracteres`)
      }
}

contar('hola mundo');

const contarCaracteres= (cadenas="") => (!cadenas)?console.warn('no  hay cadena')
:console.info(`la cadena ${cadenas} tiene ${cadenas.length} caracteres`);

contarCaracteres('hola que tal');