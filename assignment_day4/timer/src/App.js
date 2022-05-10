import React, { useState } from "react";
import "./App.css";
import ClassComponents from "./components/classComponent";
import FunctionComponents from "./components/functionalComponent"
function App() {
  const [isActive, setIsActive] = useState(true);
 
  return (
    <div className="container">
      <div class="switch-button">
    <input class="switch-button-checkbox" type="checkbox" onChange={()=>setIsActive(!isActive)}></input>
    <label class="switch-button-label" for=""><span class="switch-button-label-span">ClassBase</span></label>
      </div>
      {
        isActive?<ClassComponents />:<FunctionComponents />
      }
    </div>
  );
}

export default App;
