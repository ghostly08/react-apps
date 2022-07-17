

export function getSaludo(nombre) { // Tenemos que exportar para oder probar
    return 'Hola ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );
