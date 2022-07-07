import { getHeroeById } from "./bases/08-import-export";

// const promesa = new Promise(( resolve, reject ) => {

//   setTimeout(() => {
//       const heroe = getHeroeById(2);
//       resolve(heroe);
//   }, 2000);

// });

// promesa.then( (heroe) => {
//   console.log('Then de la promesa', heroe)
// });

const getHeroeByIdAsync = (id) => {

  return new Promise(( resolve, reject ) => {

      setTimeout(() => {
          const heroe = getHeroeById(id);
          if (heroe) {
            resolve(heroe)}
          else {
            reject('Hero not find it!')};
      }, 2000);

    });

}

getHeroeByIdAsync(10)
                    .then(heroe => console.log('Heroe', heroe))
                    .catch( console.warn) // Imprrime lo que el reject envié
