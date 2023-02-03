const arregloElevado= (arreglo=undefined)=>{
    if (arreglo===undefined)return console.warn('No ingresaste ningun arreglo'); 
    if(!(arreglo instanceof Array)) return console.error(`el valor ${arreglo} ingresado no es un arreglo`);
    if(arreglo.length===0)return console.error(`El arreglo esta vacio`);
    for (let num of arreglo) {
        if(typeof num!=="number")return console.error(`el valor ${num} ingresado, no es un numero`);
    }
    
    const newArreglo= arreglo.map(el=> el*el);

    return console.info(`el arreglo original es: ${arreglo}\nEl arreglo elevado al cuadrado es: ${newArreglo}`);
    
}
arregloElevado();
arregloElevado(true);
arregloElevado({});
arregloElevado([]);
arregloElevado([1,"3",4]);
arregloElevado([1,4,{}]);
arregloElevado([1,4,8]);


