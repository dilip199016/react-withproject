// import React, { useState, useEffect } from "react";
// function Timer() {
//   const [count, setCount] = useState(-20);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (count < 20) {
//         setCount((prevCount) => prevCount + 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000); 
//     return () => {
//       clearInterval(interval); 
//     };
//   }, [count]);
//   return (
//     <div>
//       <h2>Timer:{count}</h2>
//     </div>
//   );
// }
// export default Timer;

// import React, { useState, useEffect } from "react";
// function Timer() {
//   const [count, setCount] = useState(-20);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (count < 20) {
//         setCount((prevCount) => prevCount + 1);
//       } else {
//         clearInterval(interval);
//       }
//     }, 1000);
//     return (count) => {
//       clearInterval(interval);
//     };
//   }, [count]); 
//   return (
//     <div>
//       <h2>Timer:{count}</h2>
//     </div>
//   );
// }
// export default Timer;
import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(-20);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 20) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 1000); // Har ek second mein update kare

    return () => {
      clearInterval(interval); // Unmount hone par interval ko cleanup kare
    };
  }, [count]); // Khali dependency array se yeh batata hai ki useEffect sirf ek baar chalega

  return (
    <div>
      <h2>Timer: {count}</h2>
    </div>
  );
}

export default Timer;
