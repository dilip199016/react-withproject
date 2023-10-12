import { useState } from "react";

function State(){
  
    let [start, end]=useState("I am start");
    const endSecond=()=>{
        end('I am End Point');
        console.log("start",start);
    }
    return(
        <div>
            <h3>{start}</h3>

            <button onClick={endSecond}>Rose</button>
        </div>
    );
}
export default State


