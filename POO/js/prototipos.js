// POO
/**
 * CLASES-  es un modelo a seguir.
 * OBJETOS - es una instancia de una clase
 * ATRIBUTOS -  es una caracteristica o propiedal del objeto (son variables dentro de un objeto)
 * METODOS - son acciones que un objeto puede realizar.
 * 
 */

//Funcion constructora

function Animal(nombre, genero) {
    this.nombre=nombre;
    this.genero=genero;

}
    //METODOS SE DEBEN ASIGNAR AL PROTOTIPO (para evitar que las funciones se dupliquen)
    Animal.prototype.sonar = function () {
        console.log('hago sonidos porque estoy vivo');
    }
    Animal.prototype.saludar= function () {
        console.log(`Hola me llamo ${this.nombre}`)
    }

const snoopy = new Animal('snoopy','macho');
const lolaBunny = new Animal('lola bunny', 'hembra');
console.log(snoopy)
snoopy.sonar();
snoopy.saludar();
console.log(lolaBunny)
lolaBunny.sonar();
lolaBunny.saludar();