import "./user.css"

import { useState } from "react";


function User(){




    let [descrption,setDeccription]=useState("this is react version");

    const [heading,SetHeading]=useState("UseState ka test");
    const changeHeading=()=>{
    SetHeading(`New Heading work kar raha h ${Math.ceil(Math.random()*100)}`)

    setDeccription=(`New data${Math.ceil(Math.random()*100)}`);
    // setDeccription()
};
const[head,set2]=useState("New Value");
const changer=()=>{
    SetHeading(`Addintion ${Math.floor(Math.random()+10)}`)
   SetHeading(`Mai aaya hu`)

};
console.log("head",head);
//  head=head+1;
console.log("heading",heading);
    return(
<div>
<h2>{heading}</h2>
<button onClick={changeHeading}>ClickME-2</button>
<p>{descrption}</p>
<button onClick={changer}>Submit</button>

</div>
    );
}
export default User