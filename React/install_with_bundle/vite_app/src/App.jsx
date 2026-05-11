import React from "react";

const App = () => {
  let counter = 0;
  console.log('counter', counter);

  const Increment = () => {
    counter++;
    document.querySelector('h1').innerText = `Counter ${counter}`;
    console.log('inc,counter')
  };

  const Decrement = () => {
    counter--;
    document.querySelector('h1').innerText = `Counter ${counter}`;
    console.log('dec,counter')
  };
  return (
    <>
      {/*COMMENTS IN REACT*/}
      <h1>Counter {counter}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </>
  );
};

export { App };
