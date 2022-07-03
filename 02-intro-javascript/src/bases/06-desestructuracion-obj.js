
// ::::::: Desestructuración de objetos :::::::::::

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'ironman'
};

const { nombre, edad, clave } = persona;

// console.log(nombre, edad, clave);

const useContext = ({ clave, nombre, edad, rango = 'capitan'}) => {

  // console.log(clave, edad, nombre, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 9.536344,
      lng: -32.63652,
    }
  }


};

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);
