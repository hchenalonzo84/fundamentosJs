const calcularAnios= (fecha=undefined)=>{
    if(fecha===undefined)return console.warn('no ingresaste una fecha');
    if(!(fecha instanceof Date)) return console.error('El valo que ingresaste no es una fecha valida');

     let HoyMenosFecha =new Date().getTime() - fecha.getTime();
    let aniosEnMs = 1000*60*60*24*365;
    let aniosHumanos = Math.floor(HoyMenosFecha/aniosEnMs);

    return(Math.sign(aniosHumanos)===-1)?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}`)
    :(Math.sign(aniosHumanos)===1)?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}`)
    :console.info(`Estamos en el año actual ${fecha.getFullYear()}`);
}

calcularAnios();
calcularAnios({});
calcularAnios(true);
calcularAnios(new Date());
calcularAnios(new Date(1984,9,26));
calcularAnios(new Date(1884,9,26));
calcularAnios(new Date(2840,9,26));


