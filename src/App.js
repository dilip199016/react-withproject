// import {Buttton,Summary} from "./Component/button";
import "./App.css"
import { useState } from "react";
import Myhook from "./usestate2.jsx"
//  import Timer from"./timer";
//  import {Click,Checker,My} from "./Component/input"; //NAMED IMPORT
//  import Checkbox from "./Component/checkbox";
//  import {JsxExample,JsxExample2,MultiElement} from "./Example.jsx"
//  import  UseState  from "./Component/userstate.jsx";
// import { Buttton,Summary } from "./Component/button";
 import User from "./user"
  
function App() { 
   const[theme,setTheme]=useState("light")
  
  
   const toggleTheme=()=>{
    if (theme === "light") {
        setTheme("dark");
     } else if (theme === "dark") {
      setTheme("red");
    } else {
      setTheme("light");
     }
    }
  
    const [heading, Sethead]=useState("hello check");

    const changeHead=()=>{

      Sethead=(`new Data ${Math.ceil(Math.random()*10)}`);
    };

  
  console.log("heading",heading);

  return(
        <div>
          <h1> Hello-I am Learning React.</h1> 
        
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
  
//     const [header, setHeader] = useState('Hello, I am useState');
//   const [backgroundColor, setBackgroundColor] = useState('white');
  
//   const updateHeader = () => {
//     setHeader('Second part is running');
    
//     switch (backgroundColor) {
//       case 'white':
//         setBackgroundColor('lightblue');
//         break;
//       case 'lightblue':
//         setBackgroundColor('lightgreen');
//         break;
//       case 'lightgreen':
//         setBackgroundColor('lightcoral');
//         break;
//       case 'lightcoral':
//         setBackgroundColor('lightpink');
//         break;
//       case 'lightpink':
//         setBackgroundColor('lightyellow');
//         break;
//       case 'lightyellow':
//         setBackgroundColor('lightblue'); // Loop back to the first color
//         break;
//       default:
//         setBackgroundColor('white');
//         break;
//     }
  
  
  

 
