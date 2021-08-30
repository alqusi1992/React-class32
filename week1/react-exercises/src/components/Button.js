import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.handleIncrement}>Add 1!</button>
    </div>
  );
}

export default Button;
