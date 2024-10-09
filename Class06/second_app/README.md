# Understanding `useState` and `useEffect` in React with TypeScript

In this guide, we'll cover two fundamental React hooks: `useState` and `useEffect`. These hooks enable us to manage state and handle side effects within functional components. We'll explore how they work in a TypeScript environment.

---

## 1. `useState` Hook

The `useState` hook allows you to add state to functional components. It returns a pair: the current state value and a function that lets you update the state.

### Basic Usage:

```tsx
import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
```

### Explanation:

- `useState` is a generic function, and in the above example, we specify `<number>` as the type. This ensures `count` is always treated as a number.
- `useState(0)` initializes `count` to `0`.
- `setCount` is the function we use to update the value of `count`.

### TypeScript Typing:

- You can explicitly define the type by passing it as a generic, e.g., `useState<number>(0)`, but TypeScript usually infers the type automatically based on the initial value.
- For complex state like arrays or objects, you can define the state shape using an interface or type:

```tsx
interface User {
  name: string;
  age: number;
}

const [user, setUser] = useState<User>({ name: "John", age: 30 });
```

---

## 2. `useEffect` Hook

The `useEffect` hook lets you perform side effects in your components. It runs after the component renders.

### Basic Usage:

```tsx
import React, { useEffect, useState } from "react";

const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return <div>Elapsed Time: {time} seconds</div>;
};
```

### Explanation:

- `useEffect(() => {...}, [])`: The first argument is the effect function, and the second is an array of dependencies.
- The effect runs after every render unless you provide a dependency array. In this case, `[]` means the effect will only run once, similar to `componentDidMount`.
- The cleanup function (`return () => {...}`) ensures that side effects like timers or subscriptions are cleaned up when the component is unmounted.

### Dependency Arrays:

- **No dependency array:** `useEffect` runs after every render.
- **Empty array `[]`:** `useEffect` runs only on mount (and cleanup on unmount).
- **With dependencies `[dep1, dep2]`:** `useEffect` runs when one of the dependencies changes.

---

## Key Differences between `useState` and `useEffect`:

- **`useState`**: Manages the component's local state.
- **`useEffect`**: Manages side effects (e.g., data fetching, subscriptions, or manually updating the DOM) and handles cleanup.

Both of these hooks enable you to build functional, reactive components with ease.

---

## Putting It All Together:

Here's a quick example that combines both hooks:

```tsx
import React, { useState, useEffect } from "react";

const FetchData: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []); // Run once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>Data: {data}</div>;
};
```

### Explanation:

- We use `useState` to store the fetched `data` and `loading` status.
- The `useEffect` hook fetches the data once when the component mounts, and it updates the state once the data is fetched.

---

By mastering `useState` and `useEffect`, you can build dynamic, responsive components in React. Using TypeScript provides additional type safety, ensuring your components behave predictably.
