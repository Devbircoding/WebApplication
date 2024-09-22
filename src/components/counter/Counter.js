import React, { useState } from "react";
import "./counter.scss";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="counter-main">
      <p>The counter is at the value of {count}</p>
      <div className="change-val">
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>Subtract</button>
      </div>
    </div>
  );
}

export default Counter;
