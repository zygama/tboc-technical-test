import { useState, useEffect } from 'react';
/**
 * 1. Counter
 *
 * My counter component is not working.
 * Every second, I want to increment by one the count variable.
 */

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Start setInterval on first mount
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>My Counter 1</h1>
      <pre>{count}</pre>
    </div>
  );
};

export default Counter;
