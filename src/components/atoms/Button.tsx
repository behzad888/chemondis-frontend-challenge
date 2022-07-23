import clsx from 'clsx';
import React, {forwardRef} from 'react';
import {__DEV__} from 'utils';

import 'assets/elements/button.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean | React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {loading, className, children, ...restProps} = props;

  return (
    <button
      ref={ref}
      className={clsx('c-btn', className)}
      aria-disabled={restProps.disabled}
      {...restProps}>
      {children}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
};

if (__DEV__) {
  Button.displayName = 'Button';
}

export {Button};
