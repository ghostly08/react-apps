
// import {heroes} from './data/heroes';
import heroes, { owners } from '../data/heroes';

// :::::::::: REfactorizando function anterior - Segundo paso :::::::::

export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id); // Cuando sólo es una return podemos quitarle el "if", las llaves y los parentesios


// console.log(getHeroeById(2));

// :::::::: Getting heroes by Owner :::::://

export const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log(getHeroeByOwner('Marvel'));


// :::::::::: REfactorizando function anterior - Primer paso :::::::::

// const getHeroeById = (id) => {
//   return heroes.find( (heroe) => heroe.id === id); // Porque sólo es un return podemos simplificarlo en una linea.
//   }

// console.log(getHeroeById(1));

// ::::::::::: Function inicial ::::::::::::

// const getHeroeById = (id) => {
//   return heroes.find((heroe) => { // Itera sobre cada "heroe"
//     if (heroe.id === id) { // Condición de si és estrictamente igual
//       return true;
//     } else {
//         return false
//       }
//     });
//   }

// console.log(getHeroeById(1));
