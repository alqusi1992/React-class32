import React from "react";
import { useState } from "react";
import Button from "./Button";
import Count from "./Count";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>
        <Count count={count} />
        <Button handleIncrement={handleIncrement} />
      </div>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
