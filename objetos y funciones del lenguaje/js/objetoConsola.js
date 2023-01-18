console.log('un registro de lo que ha pasado e nuestra aplicacion')
console.error('esto es un error');
console.warn('esto es una alerta');
console.info('esto es un mensaje informativo');

let nombre= 'hugo',
 apellido='chenal',
 edad=38;

 console.log(nombre);
 console.log(apellido);
 console.log(edad);
 console.log(nombre, apellido, edad);
 console.log(`Hola mi nombre es: ${nombre} ${apellido} y tengo ${edad} años`);

 console.log(`Hola mi nombre es: %s %s y tengo %d años`, nombre,apellido,edad);

 console.clear();
 console.log(window);
 console.log(document);
console.dir(window);
console.dir(document)

console.clear();

console.group('los cursos  en youtube');
console.log('curso de js');
console.log('curso de Node Js');
console.log('curso de PHP');
console.log('curso de PWAS');
console.log('curso de Flexbox');
console.log('curso de Diseño y programacion Web');
console.groupEnd;

console.groupCollapsed('los cursos  en youtube');
console.log('curso de js');
console.log('curso de Node Js');
console.log('curso de PHP');
console.log('curso de PWAS');
console.log('curso de Flexbox');
console.log('curso de Diseño y programacion Web');
console.groupEnd;
console.clear()

 console.log(console)
 console.table(Object.entries(console).sort());
 console.clear()

 
 const numero= [1,2,3,4,5];

 const vocales = ["a","e","i","o","u"];
 
 console.table(numero);
 console.table(vocales);

 const perro={
    nombre:"kunai",
    raza: "Boxer",
    console: "cafe"
 }

 console.table(perro);

 console.clear();

 console.time('medicion')
  const arreglo = Array(1000000);
  for (let index = 0; index < arreglo.length; index++) {
     arreglo[index] = index; 
    
  }
  console.timeEnd('medicion');
  console.clear()

   for (let i = 0; i < 100; i++) {
    console.count('cuenta con count');
    console.log(i)
   }
   console.clear()

   
   let x=3, y=2,
   pruebXY= "Se espera que X siempre sea menor que Y";

   console.assert(x<y,{x,y,pruebXY});