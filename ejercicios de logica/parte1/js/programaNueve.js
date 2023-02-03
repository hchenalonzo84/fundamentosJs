
 const numeroAleatorio = (min=undefined,max=undefined)=>{
    (!max)
    ? console.warn('No ingresaste el valor maximo')
    :(!min)
      ?console.warn('no ingresaste el valor  minimo')
      :console.info(Math.random()*(max-min)+min);
 }


numeroAleatorio(501,600);
