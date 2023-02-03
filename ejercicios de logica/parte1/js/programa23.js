const separarParesImpares=(arreglo=undefined)=>{
    if (arreglo===undefined)return console.warn('No ingresaste ningun arreglo'); 
    if(!(arreglo instanceof Array)) return console.error(`el valor ${arreglo} ingresado no es un arreglo`);
    if(arreglo.length===0)return console.error(`El arreglo esta vacio`);
    for (let num of arreglo) {
        if(typeof num!=="number")return console.error(`el valor ${num} ingresado, no es un numero`);
    }

    return console.info({
        pares: arreglo.filter(num=>num%2===0),
        impares:arreglo.filter(num=>num%2===1)
    })
}
separarParesImpares();
separarParesImpares([]);
separarParesImpares({});
separarParesImpares([2,4,"k"]);
separarParesImpares([1,2,3,4,5,6,7,8,9,0]);
