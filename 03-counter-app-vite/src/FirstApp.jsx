
// ::::::::: Getting data from a function ::::::: //
const name = (a) => {

    return a;
  };

// ::::::::: Getting data from an Object :::::::: //
const message = {
  title: 'Printing variables on HTML',
  message: 'Inside of curly braces we can render any JavaScript element but not Javascript objects. So for that, we have to acces to each elemet in the object or turning into JSON stringlify',
}

// :::::::: Functional Component :::::::::: //

export const FirstApp = () => {
  return (
  <>
    <h1> Hello, { name('Steven') }!</h1>
    <h1>{ message.title }</h1>
    <p>{ message.message }</p>
    <code>{ JSON.stringify(message) }</code>
    <h3>New component on First App!!</h3>
    <p>Creating a new component in the app and learning fragment to render various elements in the same level or next to each others in the html</p>
    <p>Fragment behaives like a "div" but dont breaks the html structure</p>
  </>
);
}
