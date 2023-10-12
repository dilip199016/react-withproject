import { useEffect, useState } from "react";
import "./App.css"



function Another(){

const [startcolor,endColor]=useState('white');

const updateColor=()=>{
    switch (startcolor){
        case 'white':
            endColor('blue');
            break;

            case 'blue':
                endColor('yellow');
                break;
           case 'yellow':
                    endColor('purple');
                 break;
           case 'purple':
            endColor('orange');
            break;
default: 
endColor("white");

    }
}

useEffect(()=>{
    console.log("startcolor",startcolor);
},[startcolor]);

  return(
    <div>
<h1>Color maker Ball</h1>

<div className ={`box-cont bg-${startcolor}`}>Color-Ball<br/> {startcolor}</div>
<button onClick={updateColor}>Color Button</button>
        </div>
    );
}

export default Another;