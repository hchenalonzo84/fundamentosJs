
class Animal {
    constructor(nombre, genero){
        //Atributos
        this.nombre=nombre;
        this.genero=genero;
    }

    //METODOS
    sonar () {
        console.log('Hago sonidos porque estoy vivo')
    }
    saludar () {
        console.log(`Hola me llamo ${this.nombre}`)
    }
}


class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        //con el metodo super() se manda a llamar el constructor de la clase padre.
        super(nombre, genero);
        this.tamanio=tamanio;
    }
    sonar(){
        console.log('soy un perro y mi sonido es un ladrido')
    }
    ladrar(){
        console.log('Guaa Guaaa!!!');
    }

}

const mimi= new Animal('Mimi','Hembra');
const firu=new Perro('firulais','macho','Gigante');

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(firu);
firu.saludar();
firu.sonar();
firu.ladrar();