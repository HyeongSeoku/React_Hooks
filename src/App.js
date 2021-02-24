import React, { useState } from "react";
import ReactDOM from "react-dom";


const content= [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2"
  }
];


function App() {
  const {currentItem,changeItem} = useTabs(0,content);
  return (
    <div>
      <h2>Hello</h2>
      {content.map((section,index)=>(
        <button onClick={()=>changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>

    </div>
  );
}

export default App;
