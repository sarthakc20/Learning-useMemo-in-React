# Understanding `useMemo` in React with a Simple Story

Imagine you are a student preparing for an exam. You have a big book with 500 pages, and you need to find the same answer again and again. Instead of reading through the entire book each time, you decide to write down the answer on a sticky note so that you can quickly check it when needed. This simple trick saves you a lot of time and effort.

In the world of React, `useMemo` does something similar—it remembers the result of a function so that React doesn’t have to recalculate it every time a component renders.

## What is `useMemo`?

`useMemo` is a React Hook that helps optimize performance by memoizing a computed value. It prevents expensive calculations from running on every render unless the dependencies change.

## The Problem: Expensive Calculations

Consider this example where we have a function that performs a heavy calculation every time the component renders:

```jsx
import React, { useState } from "react";

const slowFunction = (num) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {} // Simulating a slow calculation
  return num * 2;
};

const App = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const result = slowFunction(number);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default App;
```

In this case, even when we update `count`, the `slowFunction` runs again unnecessarily.

![image](https://github.com/user-attachments/assets/4a16b6cf-0c63-40ee-9e85-c8316c3ab2cf)


## Optimizing with `useMemo`

We can use `useMemo` to ensure that the function only runs when `number` changes:

```jsx
import React, { useState, useMemo } from "react";

const slowFunction = (num) => {
  console.log("Running slow function...");
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

const App = () => {
  const [number, setNumber] = useState(5);
  const [count, setCount] = useState(0);

  const result = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
    </div>
  );
};

export default App;
```

### How This Helps

1. **Improves Performance:** `useMemo` ensures the expensive function only runs when necessary.
2. **Avoids Unnecessary Computations:** It caches the result and prevents re-execution unless dependencies change.
3. **Enhances User Experience:** Faster renders make the app feel more responsive.

Just like saving important answers on sticky notes for quick reference, `useMemo` helps React remember the answers to calculations, making your application smoother and more efficient.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
