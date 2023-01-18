
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
        this.raza=null;
        this.color=null;
    }
    sonar(){
        console.log('soy un perro y mi sonido es un ladrido')
    }
    ladrar(){
        console.log('Guaa Guaaa!!!');
    }

    //Un metodo estatico se puede ejecutar sin necesidad de instanciar la clase
    static queEres(){
        console.log('Los  perros somos animales mamiferos que pertenecemos a la familia de los caninos. Somos considerados los mejores amigos del hombre');
    };
    //Los Setter y getters son metodos especiales que nos permiten establecer los valores de atributos de nuestra clase
    getRaza(){
        return this.raza;
    }
    setRaza(raza){
        this.raza=raza;
    }
    getColor(){
        return this.color;
    }
    setColor(color){
        this.color=color;
    }
}

Perro.queEres();

const mimi= new Animal('Mimi','Hembra');
const firu=new Perro('firulais','macho','Gigante');

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(firu);
firu.saludar();
firu.sonar();
firu.ladrar();
console.log(firu.getRaza());
firu.setRaza('Gran danez');
console.log(firu.getRaza());
console.log(firu.getColor());
firu.setColor('Blanco con negro');
console.log(firu.getColor());
