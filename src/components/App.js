import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [btnClicked, countBtnClicked] = useState(0);
  return (
    <div>
      <p>Button clicked {btnClicked} times</p>
      <button
        onClick={() => {
          countBtnClicked(btnClicked + 1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App
