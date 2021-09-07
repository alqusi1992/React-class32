import React from "react";

function Button({ getFriend }) {
  return (
    <div>
      <button onClick={getFriend}>Get a friend!</button>
    </div>
  );
}

export default Button;
