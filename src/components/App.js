
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  let [count,setCount]=useState(0);

  const changeCount=()=>{
    setCount(count+1);
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={changeCount}>Click me</button>
    </div>
  )
}

export default App
