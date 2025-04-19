import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset function
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={increment} style={{ margin: "5px", padding: "8px 16px" }}>
        Increase
      </button>
      <button onClick={decrement} style={{ margin: "5px", padding: "8px 16px" }}>
        Decrease
      </button>
      <button onClick={reset} style={{ margin: "5px", padding: "8px 16px" }}>
              Reset
      </button>
    </div>
  );
}

export default Counter;
