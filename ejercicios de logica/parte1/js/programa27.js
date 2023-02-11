
class Pelicula{

    constructor({id, titulo,director,estreno, pais,generos,calificacion}){
        this.id=id;
        this.titulo=titulo;
        this.director=director;
        this.estreno=estreno;
        this.pais=pais;
        this.generos=generos;
        this.calificacion=calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    
        // atributo estatico
        static get LIstaGeneros(){
            return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
        }
            // metodo estatico
        static generosAceptados(){
            return console.info(`los generos aceptados son: ${Pelicula.LIstaGeneros.join(", ")}`);
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

        return true;
    }
    validarArreglo(propiedad,valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" esta vacio`);
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado no es un arreglo`);
        if(valor.length===0) return console.error(`${propiedad} "${valor} no tiene datos"`);

        for (let cadena of valor) {
            if(typeof cadena!=="string")return console.error(`el valor ${cadena} ingreado , No es una cadena de texto`);
        }
        return true;
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
    validarEstreno(estreno){
        if(this.validarNumero("Año de estreno",estreno)){
          if(!(/^([0-9]){4}$/.test(estreno)))return console.error(`Año de ${estreno} no es valido, debe  ser un numero de 4 digitos`);
        }
    }
    validarPais(pais){
        this.validarArreglo("pais", pais)
    }
    validarGeneros(generos){
        if(this.validarArreglo("generos", generos)){
            for (let genero of generos) {
                // console.log(genero,Pelicula.LIstaGeneros.includes(genero));
                if (!Pelicula.LIstaGeneros.includes(genero)) {
                    console.error(`Género(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }        
    }

    validarCalificacion(calificacion){
        if(this.validarNumero("calificacion",calificacion))
        return (calificacion <0 || calificacion>10)?console.error("la califiacion tiene que estar en un rango entre 0 y 10"):this.calificacion=calificacion.toFixed(1);
    }

    fichaTecnica(){
        console.info(`Ficha Tecnica:\nTitulo: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPais: "${this.pais.join("-")}"\nGeneros: "${this.generos.join(", ")}"\ncalificacion: "${this.calificacion}"\nIMDB id: "${this.id}"`);
    }

};
// tt10648342
// tt4154796
// tt0019130
// tt0075148
// Pelicula.generosAceptados();
// const peli= new Pelicula({
//     id:"tt4154796",
//     titulo:"Avenger end game",
//     director:"Hermanos ruso",
//     estreno: 2020,
//     pais: ["GT","MX"],
//     generos:["Comedy","Sport"],
//     calificacion:7.789
// });

// peli.fichaTecnica();

const misPelis =[
    {
        id:"tt4154796",
        titulo:"Avenger end game", 
        director:"Sean penn",
        estreno: 2007,
        pais: ["USA"],
        generos:["Comedy","Sport"],
        calificacion:7.789
    },
    {
        id:"tt4154796",
        titulo:"Avenger end game",      director:"Hermanos ruso",
        estreno: 2020,
        pais: ["GT","MX"],
        generos:["Comedy","Sport"],
        calificacion:7.789
    },
    {
        id:"tt4154796",
        titulo:"Avenger end game",      director:"Hermanos rus2o",
        estreno: 2020,
        pais: ["GT","MX"],
        generos:["Comedy","Sport"],
        calificacion:7.789
    },
];
misPelis.forEach(elemento => new Pelicula(elemento).fichaTecnica());