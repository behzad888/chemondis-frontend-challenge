import clsx from "clsx";
import { createElement, forwardRef } from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  priority?: number;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const { children, priority, className, ...restProps } = props;
  
  return createElement(
    `h${priority}`,
    {
      className: clsx("c-heading", className),
      ref,
      ...restProps,
    },
    children
  );
});

Heading.defaultProps = {
  className: "c-heading",
  priority: 1,
};

Heading.displayName = "Heading";

export { Heading };
