
const getImagen = async() => { // async convierte la function en una promesa
  return "https://www.steven-sanchez.dev"
}
getImagen().then(console.log); //Con este console.log extraemos el valor de la promesa, e este caso el link.



// :::::::::::::::: Calling API (ex. 10) with Await ::::::::::: //

const getImagen2 = async() => {

  const apiKey = 'lsRrj9bUhru0IIak9ylsMJk4n2Zj0NBp';
  const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
  const { data } = await respuesta.json();
  const { url } = data.images.original;

  const img = document.createElement('img');
  img.src = url;

  document.body.append( img );

  console.log(url);

};

getImagen2().then(console.log);

