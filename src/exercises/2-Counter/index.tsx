/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

import { FC, useState } from "react";

const IncremenButton: FC<{ onClick: () => void }> = ({ onClick }) => (
  <button onClick={() => onClick()}>
    Increment
  </button>
);

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const onClick = () => setCount(count + 1);

  return (
    <div>
      <h1>My Counter 2</h1>
      <div>{count}</div>
      <IncremenButton onClick={onClick} />
    </div>
  );
};

export default Counter;
