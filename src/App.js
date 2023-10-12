// import {Buttton,Summary} from "./Component/button";
import "./App.css"
import { useEffect, useState } from "react";
import Myhook from "./usestate2.jsx"
//  import Timer from"./timer";
//  import {Click,Checker,My} from "./Component/input"; //NAMED IMPORT
//  import Checkbox from "./Component/checkbox";
//  import {JsxExample,JsxExample2,MultiElement} from "./Example.jsx"
//  import  UseState  from "./Component/userstate.jsx";
// import { Buttton,Summary } from "./Component/button";
 import User from "./user"
 import Another from "./Another.jsx"
  import State from "./state.jsx"
function App() { 
   const[theme,setTheme]=useState("light")
  
  
   const toggleTheme=()=>{
    if (theme === "light") {
        setTheme("dark");
     }
     
     else if (theme === "dark") {
      setTheme("gold");
    } 
    else if (theme === "gold") {
      setTheme("green");
    } 
    else if (theme === "green") {
      setTheme("coral");
    } 
    else if (theme === "coral") {
      setTheme("pink");
    } 
    else if (theme === "pink") {
      setTheme("light");
    } 
     else {
      setTheme("light");
     }

     
    }
  
  //   const [heading, Sethead]=useState("hello check");

  //   const changeHead=()=>{

  //     Sethead(`new Data ${Math.ceil(Math.random()*10)}`);
  //   };

  
  // console.log("heading",heading);







  const [backgroundColor, setBackgroundColor] = useState("white");

  const updateHeader = () => {
    switch (backgroundColor) {
      case 'white':
        setBackgroundColor('blue');
        break;
      case 'blue':
        setBackgroundColor('green');
        break;
      case 'green':
        setBackgroundColor('coral');
        break;
      case 'coral':
        setBackgroundColor('pink');
        break;
      case 'pink':
        setBackgroundColor('yellow');
        break;
      case 'yellow':
        setBackgroundColor('gold');
        break;
      default:
        setBackgroundColor('white');
        break;
    }
  }

  useEffect(() => {
   
    console.log("backgroundColor", backgroundColor);
  }, [backgroundColor]);
 return(
        <div>
          <h1> Hello-I am Learning React.</h1> 
        <State/>
        <Another/>
       {/* <Buttton/> */}
       {/* <Summary/> */}
         {/* <Click/> */}
        {/* <Checkbox/> */}
        {/* <Checkbox/><Checkbox/> */}
        {/* <Checker/> */}
        
        {/* <My/> */}
        {/* <JsxExample2/> */}
        {/* <JsxExample/> */}
        {/* <MultiElement/> */}
        
       {/* <Timer/> */}
       <User/> 
<Myhook/>
       <h1>Hey, I am React First</h1>
      {/* <button onClick={updateHeader}>Submit</button> */}

{/* <button onClick={changeHead}>Dilip</button> */}
         <div className={`box-cont bg-${theme}`}>Hey-Toggle succes</div>  
        <button onClick={toggleTheme}>Toggle-Theme</button> 
        <h1>Hey I am React First</h1>
      {/* <button onClick={header}>Submit</button> <div style={{ backgroundColor }}> */}
        <h1>{backgroundColor}</h1>
<h1>Color Changer</h1>
        <div className={`box-cont bg-${backgroundColor}`}>Color is Changed <br/>{backgroundColor}</div>
       <button  onClick={updateHeader}>bustion</button>

       {/* <button onClick={setHeader}>Color-button</button> */}
{/* </div> */}
    </div>
  );
   }
  
  export default App;

  
  

// const[header, setheader]=useState(`Hello I am useState`);

// const setting=()=>{
//   setheader=(`second part in running`);
// }
// console.log("setheader",setheader);
  
    // const [header, setHeader] = useState('Hello, I am useState');
  