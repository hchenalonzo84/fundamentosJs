// sin parametros
const saludos=  () => console.log('hola');
saludos();
//con parametros
const saludar=  (nombre) => console.log(`hola ${nombre}`);
saludar('Hugo');
// fomra antigua

/*const sumar= function (a,b) {
    return a+b;
}*/
// forma nueva
const sumar= (a,b) => a+b;
console.log(sumar(1,2));

//con varias lineas de codigo
const funcionVariasLineas = ()=>{
    console.log(1);
    console.log(2);
    console.log(3);
}
funcionVariasLineas();

const numeros=[1,2,3,4,5];

numeros.forEach((el, index) => 
    console.log(`${el} esta en la posicion ${index}`)
);

 const perro={
    nombre:'kenai',
    ladrar:function () {
        console.log(this);
    }
 }

 perro.ladrar();