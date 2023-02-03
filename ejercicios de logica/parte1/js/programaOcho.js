const eliminarCaracteres= (texto="",patron="")=>
(!texto)
?console.warn('no ingresaste un texto')
:(!patron)
?console.warn('no ingresaste un patro de caracteres')
:console.info(texto.replace(new RegExp(patron,"ig"),""));

eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
eliminarCaracteres("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis reiciendis, vitae possimus eaque est magnam nisi commodi laboriosam maiores architecto inventore veniam odio sequi quo aut nulla nam natus tempora?", "[a-z]")