
// ::::::::: Getting data from a function ::::::: //
const name = (a) => {

    return a;
  };

// ::::::::: Getting data from an Object :::::::: //
const message = {
  title: 'Printing variables on HTML',
  message: 'Inside of curly braces we can render any JavaScript element but not Javascript objects. So for that, we have to acces to each elemet in the object or turning into JSON stringlify',
}

// const Object = ({ title }) => {

// }

// :::::::: Functional Component :::::::::: //

import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, yourName} ) => {

  // if ( !title ) {
  //   throw new Error('Title doesnt exist!');
  // }

  return (
  <>
    <h1>{ title }</h1>
    <h1> Hello, { name('Steven') }!</h1>
    <h1>{ title }</h1>
    <h3>{ subTitle }</h3>
    <h4>{ yourName }</h4>
    <p>{ message.message }</p>
    <code>{ JSON.stringify(message) }</code>
    <h3>New component on First App!!</h3>
    <p>Creating a new component in the app and learning fragment to render various elements in the same level or next to each others in the html</p>
    <p>Fragment behaives like a "div" but dont breaks the html structure</p>
  </>
);
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: "Please, type a title!",
  subTitle: "Here the subtitle",
  yourName: 'Type your name, please'
}
