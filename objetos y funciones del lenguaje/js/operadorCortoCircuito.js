/**
 * CortoCircuito OR - cuando un valor de la izquierda  en la expresion siempre puede validar un true, es el valor que se cargara  por defecto
 * 
 * CortoCirucito AND - cuando el calor de la izquierda en la expresion siempre puede vlaidar a false, es el valor que se cargara por defecto
 */
function saludar(nombre) {
    nombre= nombre ||"desconocido";
    console.log(`Hola ${nombre}`)
    
}
saludar("Hugo");
console.groupCollapsed('OR')
console.log("cadena"||"valor de la derecha");
console.log(19 ||"valor de la derecha")
console.log(true ||"valor de la derecha")
console.log([]||"valor de la derecha")
console.log({}||"valor de la derecha")
console.log(false||"valor de la derecha")
console.log(null||"valor de la derecha")
console.log(undefined||"valor de la derecha")
console.log(""||"valor de la derecha")
console.log(-2||"valor de la derecha")
console.log(0||"valor de la derecha")
console.groupEnd();

console.groupCollapsed('AND')
console.log("cadena"&&"valor de la derecha");
console.log(19 &&"valor de la derecha")
console.log(true &&"valor de la derecha")
console.log([]&&"valor de la derecha")
console.log({}&&"valor de la derecha")
console.log(false&&"valor de la derecha")
console.log(null&&"valor de la derecha")
console.log(undefined&&"valor de la derecha")
console.log(""&&"valor de la derecha")
console.log(-2&&"valor de la derecha")
console.log(0&&"valor de la derecha")

console.groupEnd();

