const palindromo= (palabra="")=>{
    if(!palabra)return console.warn('no ingresaste palabra o frase');
    palabra = palabra.toLowerCase();
    let alReves= palabra.split("").reverse().join("");

    return (palabra===alReves)
    ? console.info(`Si es palindromo, palabra original ${palabra}, palabra  al revez ${alReves}`)
    :console.info(`No es palindromo, palabra original ${palabra}, palabra al reves ${alReves}`);
}

palindromo();
palindromo("Hola mundo");
palindromo("salaS");
