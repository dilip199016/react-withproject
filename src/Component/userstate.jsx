import { useState } from "react";

function UseState(){

    const [heading, setHeading]=useState("this is the React");

    const changeHeading=()=>{
    setHeading(`this is the Heading + ${Math.random()*100}`);
};
console.log("heading",heading);
    return(
        <div> 
            <h2>{heading}</h2>

            {

            }
            <button onClick={changeHeading}>Click</button>
        </div>
    );
}

export default UseState