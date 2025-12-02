import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handlePlus}>Increment</button>
      &nbsp;
      <button onClick={handleMinus}>Decrement</button>
    </div>
  );
}

export default Counter;
