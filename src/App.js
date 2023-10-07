import {Buttton,Summary} from "./Component/button";
import "./App.css"
import {Click,Checker,My} from "./Component/input"; //NAMED IMPORT
import Checkbox from "./Component/checkbox";
import {JsxExample,JsxExample2,MultiElement} from "./Example.jsx"
 import  UseState  from "./Component/userstate.jsx";
// React App component
function App() { //functional component
    return(
        <div>
          <h1> Hello-I am Learning React.</h1> 
        
        <Buttton/>
        <Click/>
        <Checkbox/>
        <Checker/>
        <Summary/>
        <My/>
        <JsxExample2/>
        <JsxExample/>
        <MultiElement/>
        <UseState/>
        </div>
          );
}
export default App;

  

