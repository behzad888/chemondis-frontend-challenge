import clsx from 'clsx';
import React, {forwardRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import {__DEV__} from 'utils';

import 'assets/elements/modal.scss';
import {Button} from './Button';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  show: boolean;
  width?: number | string;
  backdrop?: boolean;
  backdropClassName?: string;
  closeDelay?: number;
  onHide?: React.MouseEventHandler<any> | undefined;
}

const Modal = forwardRef<CSSTransition<HTMLElement | undefined>, ModalProps>(
  (props, ref) => {
    const {
      className,
      show,
      backdrop,
      backdropClassName,
      closeDelay,
      onHide,
      onClick,
      children,
      title,
      width,
      ...restProps
    } = props;

    return (
      <>
        {backdrop && show && (
          <div
            className={clsx('c-modal__backdrop', backdropClassName)}
            onClick={onHide}></div>
        )}
        <CSSTransition
          ref={ref}
          unmountOnExit
          in={show}
          clsx='c-modal'
          timeout={closeDelay!}>
          <div
            style={{width: width}}
            className={clsx('c-modal', className)}
            {...restProps}>
            {title && (
              <div className='c-modal__header'>
                <div className='c-modal__header-title'>{title}</div>
                <Button onClick={onHide}>&times;</Button>
              </div>
            )}
            {children}
          </div>
        </CSSTransition>
      </>
    );
  },
);

Modal.defaultProps = {
  closeDelay: 1,
  backdrop: true,
  show: false,
};

if (__DEV__) {
  Modal.displayName = 'Modal';
}

export {Modal};
