const promedio = (arreglo=undefined)=>{
    if (arreglo===undefined)return console.warn('No ingresaste ningun arreglo'); 
    if(!(arreglo instanceof Array)) return console.error(`el valor ${arreglo} ingresado no es un arreglo`);
    if(arreglo.length===0)return console.error(`El arreglo esta vacio`);
    for (let num of arreglo) {
        if(typeof num!=="number")return console.error(`el valor ${num} ingresado, no es un numero`);
    }
    return console.info(arreglo.reduce((total,num,index,arreglo)=>{
        total+=num;
        if(index===arreglo.length-1){
            return `El promedio de ${arreglo.join(" + ")} es ${total/arreglo.length}`
        }else{
            return total;
        }
     })
    )
}
promedio();
promedio({});
promedio([]);
promedio([2,true]);
promedio([1,2,3,4,5,6,7,8,9,0]);


