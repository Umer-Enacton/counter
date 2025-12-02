import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col justify-center h-screen w-screen border-2 items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl ">Counter: {count}</h1>
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-sky-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleIncrement}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-2"
            onClick={handleDecrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
