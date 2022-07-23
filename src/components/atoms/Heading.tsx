import clsx from 'clsx';
import {createElement, forwardRef} from 'react';
import {__DEV__} from 'utils';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  priority?: number;
}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>((props, ref) => {
  const {children, priority, className, ...restProps} = props;

  return createElement(
    `h${priority}`,
    {
      className: clsx('c-heading', className),
      ref,
      ...restProps,
    },
    children,
  );
});

Heading.defaultProps = {
  priority: 1,
};
if (__DEV__) {
  Heading.displayName = 'Heading';
}

export {Heading};
