import "./user.css"
import { useState } from "react";

function UseState(){

    const [heading, setHeading]=useState("this is the React");

    const changeHeading=()=>{
    setHeading(`Hello I am useState`);
};


const [heading2, setHeading2]=useState("this is the React part two");
const Click=()=>{
    setHeading(`I am second Part`);
};





console.log("heading",heading);
    return(
        <div> 
            <h2>{heading}</h2>

            {

            }
            <button onClick={changeHeading}>Click</button><br/><br/>
            
            <button onClick={Click}>Check</button>
</div>
    );
}

export default UseState

