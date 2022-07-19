import { createElement } from "react";
import clsx from "clsx";

type HeadingType = {
  children: React.ReactNode;
  priority?: number;
  className?: string;
};
function Heading({ children, priority, className }: HeadingType) {
  return createElement(
    `h${priority}`,
    {
      className: clsx("c-heading", className),
    },
    children
  );
}

Heading.defaultProps = {
  className: "c-heading",
  priority: 1,
};

export { Heading };
