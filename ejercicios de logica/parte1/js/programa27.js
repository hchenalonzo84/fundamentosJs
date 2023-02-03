
class Pelicula{

    constructor({id, titulo,director,estreno, pais,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.directo=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
       this.validarDirector(director);
    }
    // metodos genericos
    validarCadena(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor!=="string")return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`);

        return true;
    }
    validarLongitudcadena(propiedad, valor, longitud){
        if(valor.length>longitud) return console.error(`${propiedad} "${valor}" excede el numero de caracteres permitidos (${longitud}).`);

        return true;
    }

    validarNumero(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(typeof valor !=="number") return console.error(`el valor ${valor} ingresado no es un numero`);
    }

    //metodos especificos
    validarIMDB(id){
        if(this.validarCadena("IMDB id",id)){
            if(!(/^([a-z]){2}([0-9]){7}$/.test(id)) && !(/^([a-z]){2}([0-9]){8}$/.test(id))){
                return console.error(`IMDB id "${id}" no es valido debe tener 9 caracteres, los 2 primeros letras minusculas, los 7 restantes numeros`);
            }
        }
    }

    validarTitulo(titulo){
        if(this.validarCadena("titulo",titulo)){
            this.validarLongitudcadena("titulo",titulo,100);
        }
    }

    validarDirector(director){
        if(this.validarCadena("director",director)){
            this.validarLongitudcadena("director", director,50);
        
        }
    }
    validarAnio(anio){
        if(this.validarNumero("anio",anio)){
          
        }
    }


}
// tt10648342
// tt4154796
// tt0019130
// tt0075148
const peli= new Pelicula({
    id:"tt4154796",
    titulo:"Avenger end game",
    director:"Hermanos ruso"
})
 