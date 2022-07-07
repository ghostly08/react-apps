
// ::::::: Desestructuración de Arrays :::::::::::

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , p3] = personajes;
console.log(p3);
// Prints => Trunks

const retornaArray = () => {
  return ['ABC', 123];
};

const [ letras, numeros ] = retornaArray();
console.log(letras, numeros);

// :::::::: Tarea :::::::::::

// 1. El primer valor del array se llamará nombre
// 2. el segundo setNombre()

const useState = (valor) => {
  return [valor, () => { console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre)
setNombre();

//arr[1](); // Los parentesis llaman a la function.
