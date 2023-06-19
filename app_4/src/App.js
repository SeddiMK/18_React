import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
  // let a = 55;
  let textInput = React.createRef();
  let textOut = React.createRef();
  const [output, setOutput] = useState('hi hi hi');

  function f1(arg) {
    console.log('f1 - works ' + arg);
  }
  function f2() {
    console.log('f2 - mouse move');
  }
  function showInput(event) {
    console.log('input');
    // console.log(this.value); // this??
    // console.log(event.target.value);
    console.log(textInput.current.value);
    textOut.current.innerHTML = textInput.current.value;
    setOutput(textInput.current.value);
  }
  return (
    <>
      <h2>События</h2>
      <section>
        <h3>Button</h3>
        <button onClick={() => f1('button')}>Push</button>
      </section>
      <section>
        <h3>Duble click + mouse move</h3>
        <div className="test" onDoubleClick={() => f1(44 + ' orange')}></div>
      </section>
      <section>
        <h3>Input</h3>
        <input
          type="text"
          onInput={showInput}
          ref={textInput}
          defaultValue="hello"
        />
        <p ref={textOut}></p>
      </section>
      <h3>Ввожу текст сюда: {output} </h3>
    </>
  );
}

export default App;
