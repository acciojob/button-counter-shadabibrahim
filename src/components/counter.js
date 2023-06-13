import React, { useState } from "react";

function counter() {
  const [data,setData] = useState(0);
  function updateData(){
    setData(data+1);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {data} times</p>
        <button onClick={updateData}>Click me</button>
    </div>
  )
}

export default counter;
