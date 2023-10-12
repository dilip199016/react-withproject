import { useState } from "react";
// import "/usetate.css"
import "./user.css"
function Myhook(){



 const [head,setHead]=      useState('I am Here');
 const changed=()=>{
    setHead(`I am changing ${Math.ceil(Math.random()*10)+5}`);
    console.log("Head",head);
 }



//Another useState code

// const [head2,setHead2]=useState('I am another Pratice point');
// const changed2=()=>{
//    setHead2(`I am another Changed i your React JS code ${Math.ceil(Math.random()*10)+50}`);
//    console.log("head2",head2);
// }


 return(
    <div><h1>{head}</h1>
        <button className="Myhook" onClick={changed}>Clicker</button>
{/* <h1>{head2}</h1> */}
        {/* <button onClick={changed2}>Clicker-2.0</button> */}
    </div>
 );
}
 export default Myhook;
 