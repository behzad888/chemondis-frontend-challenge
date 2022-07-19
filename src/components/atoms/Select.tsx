import clsx from "clsx";
import React, { forwardRef } from "react";

import "assets/elements/select.scss";

export type FormSelectType = "checkbox" | "radio";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, children, ...restProps } = props;

  return (
    <select ref={ref} className={clsx("c-select", className)} {...restProps}>
      {children}
    </select>
  );
});

Select.displayName = "Select";
export { Select };