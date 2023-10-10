import {Buttton,Summary} from "./Component/button";
import "./App.css"

// import Timer from"./timer";
// import {Click,Checker,My} from "./Component/input"; //NAMED IMPORT
// import Checkbox from "./Component/checkbox";
// import {JsxExample,JsxExample2,MultiElement} from "./Example.jsx"
 import  UseState  from "./Component/userstate.jsx";
import { useState } from "react";
// import User from "./user"
 //  import Orglist from "./constant/constant,js"
// React App component
function App() { //functional component
  const[theme,setTheme]=useState("light")
  
  
  const toggleTheme=()=>{
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("red");
    } else {
      setTheme("light");
    }
  

  };
  
  return(
        <div>
          <h1> Hello-I am Learning React.</h1> 
        
        {/* <Buttton/>
        <Click/>
        <Checkbox/>
        <Checkbox/><Checkbox/>
        <Checker/>
        <Summary/>
        <My/>
        <JsxExample2/>
        <JsxExample/>
        <MultiElement/>
        
       <Timer/>
       <User/> */}

        <div className={`box-cont bg-${theme}`}>Hey-Toggle succes</div> 
        <button onClick={toggleTheme}>Toggle-Theme</button>
       <UseState/>  </div>
          );
}
export default App;

  

