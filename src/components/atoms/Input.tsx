import clsx from "clsx";
import React, { ForwardedRef, forwardRef } from "react";

import "assets/elements/input.scss";

export interface ControlPropsType
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, ControlPropsType>((props, ref) => {
  const { className, ...restProps } = props;

  return (
    <input
      ref={ref}
      className={clsx("c-input", className)}
      {...restProps}
    ></input>
  );
});

Input.displayName = "Input";

export { Input };
