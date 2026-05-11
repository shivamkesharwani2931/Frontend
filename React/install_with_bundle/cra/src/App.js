import React from "react";

const App = () => {
  // let counter = 0;
  // console.log('counter', counter);

  const [counter,setCounter] = React.useState(0)

  const Increment = () => {
    // counter++;
    // document.querySelector('h1').innerText = `Counter ${counter}`;
    // console.log('inc,counter')

    setCounter(counter+1)
  };
  
  const Decrement = () => {
    // counter--;
    // document.querySelector('h1').innerText = `Counter ${counter}`;
    // console.log('dec,counter')
    setCounter(counter-1)
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
