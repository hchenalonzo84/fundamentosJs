const ordenarArreglo = (arreglo=undefined)=>{
    if (arreglo===undefined)return console.warn('No ingresaste ningun arreglo'); 
    if(!(arreglo instanceof Array)) return console.error(`el valor ${arreglo} ingresado no es un arreglo`);
    if(arreglo.length===0)return console.error(`El arreglo esta vacio`);
    for (let num of arreglo) {
        if(typeof num!=="number")return console.error(`el valor ${num} ingresado, no es un numero`);
    }
    return console.info({
        arreglo,
        asc:arreglo.map(el=>el).sort(),
        desc: arreglo.map(el=>el).sort().reverse()
    });
}
ordenarArreglo();
ordenarArreglo([7, 5,7,8,6]);