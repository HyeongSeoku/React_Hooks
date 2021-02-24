import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";



function App() {

  const sayHello = ()=> console.log("hello");

  const [number,setNumber] = useState(0);
  const [Anumber,setAnumber] = useState(0);

  useEffect(sayHello,[number]);
  return (
    <div>
      <h2>Hello</h2>
      <button onClick={()=>setNumber(number +1)}>number:{number}</button>
      <button onClick={()=>setAnumber(Anumber +1)}>Anumber:{Anumber}</button>
    </div>
  );
}

export default App;
