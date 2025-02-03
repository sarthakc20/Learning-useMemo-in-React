// import React, { useState } from "react";
// import "./App.css";

// const slowFunction = (num) => {
//   console.log("Running slow function...");
//   for (let i = 0; i < 1000000000; i++) {} // Simulating a slow calculation
//   return num * 2;
// };

// const App = () => {
//   const [number, setNumber] = useState(5);
//   const [count, setCount] = useState(0);

//   const result = slowFunction(number);

//   return (
//     <div className="container">
//       <h1>useMemo Example</h1>
//       <p>Result: {result}</p>
//       <button onClick={() => setCount(count + 1)}>Re-render</button>
//     </div>
//   );
// };

// export default App;

import React, { useState, useMemo } from "react";
import "./App.css";

const slowFunction = (num) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const App = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const result = useMemo(() => slowFunction(number), [number]);

  // useMemo is a React Hook that helps optimize performance by memoizing a computed value. It prevents expensive calculations from running on every render unless the dependencies change.

  return (
    <div className="container">
      <h1>useMemo Example</h1>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default App;
