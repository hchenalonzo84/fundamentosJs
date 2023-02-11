let id=Symbol("id");
let id2= Symbol("id2")
console.log(id===id2)
console.log(id,id2)

// como crear los symbols (buenas practicas)
// los symbols se usan para declarar  propiedades privadas en una objeto
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");
const persona = {
    [NOMBRE]:"Hugo",
    edad: 35,
};

console.log(persona);

persona.NOMBRE ="Hugo chenal";

console.log(persona)
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function (){
    console.log('hola');
}

console.log(persona);
persona[SALUDAR]();

for (let prop in persona) {
    console.log(prop)
    console.log(persona[prop])
}

console.log(Object.getOwnPropertySymbols(persona))


