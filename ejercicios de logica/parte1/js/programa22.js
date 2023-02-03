const arregloMinMax=(arreglo=undefined)=>{
    if (arreglo===undefined)return console.warn('No ingresaste ningun arreglo'); 
    if(!(arreglo instanceof Array)) return console.error(`el valor ${arreglo} ingresado no es un arreglo`);
    if(arreglo.length===0)return console.error(`El arreglo esta vacio`);
    for (let num of arreglo) {
        if(typeof num!=="number")return console.error(`el valor ${num} ingresado, no es un numero`);
    }
    
    return console.info(`el arreglo original es: ${arreglo}\nel valor mayor es: ${Math.max(...arreglo)}\nEl valor menor es: ${Math.min(...arreglo)}`);
}

arregloMinMax();
arregloMinMax(true);
arregloMinMax([]);
arregloMinMax([2,3,true]);
arregloMinMax([1, 4, 5, 99, -60]);
