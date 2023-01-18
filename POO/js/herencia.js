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

    // HERENCIA PROTOTIPICA
    function Perro(nombre, genero,tamanio) {
        this.Super= Animal;
        this.Super(nombre, genero);
        this.tamanio=tamanio;
    }
    //Perro esta heredando de animal
    Perro.prototype= new Animal();
    Perro.prototype.constructor= Perro;

    //sobreecritura de metodos del prototipo  del padre en el hijo
    Perro.prototype.sonar = function () {
        console.log('soy un perro y mi sonido es un ladrido')
    }
    Perro.prototype.ladrar= function () {
        console.log('guaa guaa guaa');
    }


const snoopy = new Perro('snoopy','macho','mediano');
const lolaBunny = new Animal('lola bunny', 'hembra');

console.log(snoopy)
snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

console.log(lolaBunny)
lolaBunny.sonar();
lolaBunny.saludar();