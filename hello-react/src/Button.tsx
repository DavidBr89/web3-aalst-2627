// import React from "react";
// import arr, { sum } from "../src/utils/helpers";

import type { PropsWithChildren } from "react";

// type ButtonProps = {
//   label: string;
// } & PropsWithChildren

interface IButtonProps extends PropsWithChildren {
  label: string;
  size?: number;
}

const Button = ({ label, children, size = 250 }: IButtonProps) => {
  // console.log(arr);
  // const result = sum(5, 6);

  return (
    <div
      style={{
        backgroundColor: "red",
        height: `${size}px`,
      }}>
      <p>{label}</p>
      <button onClick={() => {}}>{children}</button>
    </div>
  );
};

export default Button;
