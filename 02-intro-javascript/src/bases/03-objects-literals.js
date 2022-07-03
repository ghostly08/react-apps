
// Objects Literals

const persona = {
  nombre: 'Tony',
  apellidos: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 38011,
    lat: 9.556344,
    long: 32.6354327,
  }
};

console.table(persona);

// Clonning the object

const persona2 = {...persona};
persona2.nombre = 'Whitney'; // Reasigning value on name
persona2.direccion.ciudad = 'Barcelona'; // Reasigning value on ciudad

console.table(persona2)
