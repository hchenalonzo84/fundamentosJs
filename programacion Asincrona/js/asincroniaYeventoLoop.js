/* Antes de explicar como funciona el modelo de javaScript es importante entender algunos conceptos


 Procedimientos Single thread y Multi Thread.
 Operaciones de CPU y Operaciones de I/O.
 Operaciones concurrentes y paralelas.
 Operaciones Bloqueantes y No Bloqueantes.
 Operaciones Sincronas y Asincronas.
  */

 //** codigo sincrono bloqueante */
(()=>{
    console.log('codigo sincrono');
    console.log("Inicio");

    function dos() {
        console.log('dos');
    }
    function uno() {
        console.log('uno');
        dos();
        console.log('tres');
    }
    uno();
    console.log('fin');
    
})();
console.log('-------');
 //** Codigo Asincrono No bloqueante */
 (()=>{
    console.log('codigo sincrono');
    console.log("Inicio");

    function dos() {
        setTimeout( function() {
            console.log('dos');
        }, 1000);
    }
    function uno() {
        setTimeout( 
            function () {
                console.log('uno');
        }, 0);
        dos();
        console.log('tres');
    }
    uno();
    console.log('fin');
 })();

 //* javascript  usa un modelo asincrono y no bloqueante con un loop de eventos implementado en un solo hilo, (single thread) para operaciones de entrada y salda (input/output) */