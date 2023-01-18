// Funcion anonima auto ejecutable

(function (d) {
  console.log('Mi primer IIFE')  
})();

(function (d,w,c) {
    console.log('Mi segunda IIFE')  
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("este es un console log");
})(document,window,console);

//Formas de escribir las funciones anonimas auto ejecutables
/** LA FORMA CLASICA */
(function () {
    console.log("version clasica");
})();
/**LA CROCKFORD (javascript the god parts) */
((function () {
    console.log("version crockford");    
})());

/** UNARIA */
+function () {
    console.log("version unaria");    
    
}();
/** FACEBOOK */
!function () {
    console.log("version Facebook");        
}();