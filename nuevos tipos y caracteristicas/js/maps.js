const mapa = new Map();

mapa.set("nombre","hugo");
mapa.set("apellido","chenal");
mapa.set("edad","35");

console.log(mapa);
console.log(mapa.size);

console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
mapa.set("nombre"," Hugo rolando chenal");
console.log(mapa.get("nombre"));
mapa.delete("apellido");

mapa.set(19,"diecinueve");
mapa.set(false,"falso");
mapa.set({},{});

console.log(mapa);

for (let [key,value] of mapa) {
    console.log(`Key: ${key}, valor: ${value}`)
}


const mapa2 = new Map([
    ["nombre","campeon"],
    ["edad",7],
    ["Animal","perro"],
    [null,"null"]

])
console.log(mapa2)

const llavesMapas2= [...mapa2.keys()];
const variablesMapas2= [...mapa2.values()];

console.log(llavesMapas2)
console.log(variablesMapas2)

