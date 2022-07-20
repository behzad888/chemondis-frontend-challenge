import clsx from "clsx";
import React, { forwardRef } from "react";
import { __DEV__ } from "utils";

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

if (__DEV__) {
  Input.displayName = "Input";
}

export { Input };
