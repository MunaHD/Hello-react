import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}>
      {props.text}
    </button>
  );
};

const Application = () => {
  const[name, setName] = useState("")
  const nameLength = name.length
  const reset = () => {
    setName("")
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <input
      value={name}
      onChange={(event) => setName(event.target.value)}
      placeholder="Type your name" 
      />
      <Button text="reset" reset={reset} />
      { nameLength  ? <h1>Hello {name}</h1> : ''}
      
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
