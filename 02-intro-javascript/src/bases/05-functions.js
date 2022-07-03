
// ::::::: Functions :::::::::::

const saludar1 = function(nombre) {
  return `Hola ${nombre}!`;
}

const saludar2 = (nombre) => {
  return `Hola ${nombre}!`;
}

const saludar3 = (nombre) => `Hola ${nombre}!`; //Es una function con una sola linea en el bloque (solo tenia una linea de return)

const saludar4 = () => `Hola Rita!`; // No pasa ningún argumento.


console.log(saludar1('Steven'));
console.log(saludar2('Bea'));
console.log(saludar3('Simone'));
console.log(saludar4());

// ::::::: Function with an Object ::::::

const getUser = () => {
  return {
    uid: 'abc123',
    username: 'el_papi1502',
  }
}

const getUser2 = () => ({ //Utilizando parentesis simplificamos la function
    uid: 'abc123',
    username: 'el_papi1502',
  })


console.log(getUser());
console.log(getUser2());

//:::::::::: Exercice ::::::::::

const getUsuarioActivo = (nombre) => ({
    uid: 'abc567',
    username: nombre //argumento de la function.
  });


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);
