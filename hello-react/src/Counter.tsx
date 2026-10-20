// import { type SetStateAction, type Dispatch } from "react";

import type { Dispatch, SetStateAction } from "react";

interface CounterProps {
  //   counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  //   handleClick: () => void;
}

const Counter = ({ setCounter }: CounterProps) => {
  return (
    <div>
      <button
        onClick={() => {
          setCounter((prevValue) => prevValue + 3);
        }}>
        Verhoog
      </button>
    </div>
  );
};

export default Counter;
