import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";


const useTitle = initalTitle =>{
  const [title , setTitle] = useState(initalTitle);
  const updateTitle = () =>{
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle,[title]);
  return setTitle;

};

function App() {
  const titleUpdater = useTitle("Loading ...");
  setTimeout(()=> titleUpdater("Home"),5000);
  return (
    
    <div>
      <h2>Hello</h2>
      
    </div>
  );
}

export default App;
