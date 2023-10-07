//whetever react component  return that is called JSX=>(JavaScript XML)
// use for writting css and js together

import { createElement } from "react";


export function JsxExample(){
    return createElement(
        "div" ,{ id:createElement},
            "This is jsx example of react createElement() predefined function method"
        
    );
}
// export default JsxExample;



// Babel which is javascript compiler it is convert React JSX browser understandable code

// browser not under react code

// create Element()

export function JsxExample2(){
    return(
<div>
    <h1>This jsx Example 2 is react by ny name export method example,</h1>
</div>
    );
}



//this is usig  Array
export const MultiElement=()=>{
    return[
        <h2>I am h2</h2>,
         <h3>I am H3 </h3>,
         <h1>I am h1</h1>
    ];
}