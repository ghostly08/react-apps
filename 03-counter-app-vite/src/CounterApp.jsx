import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ( {value} ) => {

  const [ counter, setCounter ] = useState( value ); // is taking the default "value" that we put it in main.jsx file

  const handleAdd = () => { // Is taking the "value" as an argument.
    setCounter( counter + 1 );
    // setCounter( (c) => c + 1);
  };

  const handleMinus = () => {
    setCounter( counter - 1);
  };

  const handleReset = () => {
    setCounter( value );
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> { counter } </h2>
      <button onClick={ handleAdd }>+1</button>
      <button onClick={ handleMinus }>-1</button>
      <button onClick={ handleReset }>Reset</button>
    </>
  )

}

CounterApp.protsTypes = {
  value: PropTypes.number.isRequired,
}
