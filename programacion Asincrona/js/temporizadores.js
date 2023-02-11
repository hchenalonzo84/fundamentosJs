
// console.log("inicio");
// setTimeout(() => {
//     console.log('ejecutando un setTime out, esto se ejecuta una sola vez');
// }, 3000);

// setInterval(() => {
//     console.log('ejecutando un setTime Interval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo');
    
// }, 1000);

let temporizador= setTimeout(() => {
    console.log(new Date().toLocaleTimeString())
}, 1000);

clearTimeout(temporizador);
console.log("despues del clearTimeOut")

let tempo = setInterval(() => {
    console.log('ejecutando un setTime Interval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo');
    
}, 1000);

clearInterval(tempo);
console.log("despues del cleartime Interval");