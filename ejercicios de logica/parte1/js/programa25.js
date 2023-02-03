const quitarDuplicados = (arreglo=undefined)=>{
    if (arreglo===undefined)return console.warn('No ingresaste ningun arreglo'); 
    if(!(arreglo instanceof Array)) return console.error(`el valor ${arreglo} ingresado no es un arreglo`);
    if(arreglo.length===0)return console.error(`El arreglo esta vacio`);
    if(arreglo.length===1) return console.error(`El arreglo debe tener al menos 2 elementos`);

    // return console.info({
    //     original: arreglo,
    //     sinDuplicados: arreglo.filter((value, index,self)=>self.indexOf(value)=== index)
    // });
    return console.info({
        original:arreglo,
        sinDuplicado:[...new Set(arreglo)]

    });
}
quitarDuplicados();
quitarDuplicados(true);
quitarDuplicados([]);
quitarDuplicados([1]);
quitarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);

