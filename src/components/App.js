import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState(0);
  function updateData(){
    setData(data+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {data} times</p>
        <button onClick={updateData}>counter</button>
    </div>
  )
}

export default App
