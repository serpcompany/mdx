import React, { useState } from "react";
import styles from "./Counter.module.css";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(initialCount);

  return (
    <div className={styles.counter}>
      <h2>Counter: {count}</h2>
      <div className={styles.buttonGroup}>
        <button onClick={decrement} className={styles.button}>
          -
        </button>
        <button onClick={reset} className={styles.button}>
          Reset
        </button>
        <button onClick={increment} className={styles.button}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
