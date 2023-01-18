let nombre= 'kenai';
let edad= 7;

// de la forma antigua
const perro={
    nombre:nombre,
    edad:edad,
    ladrar:function () {
        console.log('gua guaa');
    }
}
console.log(perro);
perro.ladrar();

//de la forma nueva
const dog={
    nombre,
    raza:'callejero',
    aullar() {
        console.log('aullar')
    }
}
console.log(dog)
dog.aullar();