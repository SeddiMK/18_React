import React from 'react';
import { useState } from 'react';

function Comp2() {
  const [count, setCount] = useState(0);

  let handler = () => {
    let currentCount = count;
    currentCount++;
    setCount(currentCount);
  };

  return (
    <>
      <h1>State</h1>
      <div>
        <button onClick={handler}>This button change State</button>
      </div>
      <div>{this.state.count % 2 === 0 ? 'even' : 'odd'}</div>
      <div>{this.state.count}</div>
    </>
  );
}

export default Comp2;
